import { NextResponse } from "next/server";

import {
YANDEX_API_KEY,
YANDEX_API_URL,
YANDEX_FOLDER_ID,
} from "@/lib/yandex";

import { tarotCards } from "@/lib/tarot";

export async function POST() {
try {
const randomCard =
tarotCards[
Math.floor(
Math.random() * tarotCards.length
)
];

```
const response = await fetch(
  YANDEX_API_URL,
  {
    method: "POST",
    headers: {
      Authorization: `Api-Key ${YANDEX_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      modelUri: `gpt://${YANDEX_FOLDER_ID}/yandexgpt-lite/latest`,
      completionOptions: {
        stream: false,
        temperature: 0.8,
        maxTokens: 1000,
      },
      messages: [
        {
          role: "system",
          text: `
```

You are SoulMirror Tarot AI.

Interpret tarot cards using:

* symbolism
* archetypes
* psychology
* personal growth

Return ONLY valid JSON.

{
"card": "",
"meaning": "",
"guidance": ""
}

Rules:

meaning:
2-3 paragraphs explaining the symbolic meaning.

guidance:
1 practical reflection for the user.

No markdown.
No code blocks.

Return JSON only.
`,
},
{
role: "user",
text: randomCard,
},
],
}),
}
);

````
const data = await response.json();

const content =
  data?.result?.alternatives?.[0]?.message?.text;

if (!content) {
  throw new Error(
    "No response from YandexGPT"
  );
}

try {
  const cleaned = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const parsed = JSON.parse(cleaned);

  return NextResponse.json({
    card:
      parsed.card || randomCard,

    meaning:
      parsed.meaning ||
      "No interpretation generated.",

    guidance:
      parsed.guidance ||
      "Trust your intuition.",
  });
} catch {
  return NextResponse.json({
    card: randomCard,

    meaning: content,

    guidance:
      "Reflect on the symbolism of this card.",
  });
}
````

} catch (error) {
console.error(error);

```
return NextResponse.json(
  {
    error:
      "Tarot reading failed",
  },
  {
    status: 500,
  }
);
```

}
}
