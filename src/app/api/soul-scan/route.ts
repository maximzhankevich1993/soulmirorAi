import { NextResponse } from "next/server";

import {
YANDEX_API_KEY,
YANDEX_API_URL,
YANDEX_FOLDER_ID,
} from "@/lib/yandex";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
try {
const body = await req.json();

```
const text = body.text?.trim();

if (!text) {
  return NextResponse.json(
    {
      error: "Text is required",
    },
    {
      status: 400,
    }
  );
}

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
        maxTokens: 1200,
      },
      messages: [
        {
          role: "system",
          text: `
```

You are SoulMirror AI.

You combine archetypal psychology, symbolism, shadow work, emotional intelligence and deep self-reflection.

Your task is to analyze the user's inner state.

Return ONLY valid JSON.

{
"archetype": "",
"emotion": "",
"shadow": "",
"reflection": "",
"insight": ""
}

Available archetypes:

* The Seeker
* The Sage
* The Creator
* The Explorer
* The Visionary
* The Guardian

Rules:

* emotion = dominant emotional state
* shadow = hidden pattern, fear or internal obstacle
* reflection = one powerful reflection question
* insight = deep personalized interpretation

Insight requirements:

* 3 to 6 paragraphs
* psychologically meaningful
* emotionally engaging
* feel personal
* no generic self-help advice
* no lists
* no markdown
* no code blocks

Write like a wise mentor who understands the person deeply.

Make the user feel seen.

Return JSON only.
`,
},
{
role: "user",
text,
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
  throw new Error("No response from YandexGPT");
}

try {
  const cleaned = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const parsed = JSON.parse(cleaned);

  const result = {
    archetype:
      parsed.archetype || "The Seeker",

    emotion:
      parsed.emotion || "Reflection",

    shadow:
      parsed.shadow ||
      "No shadow pattern detected.",

    reflection:
      parsed.reflection ||
      "What part of yourself needs attention right now?",

    insight:
      parsed.insight ||
      "No insight generated.",
  };

  await prisma.soulScan.create({
    data: {
      input: text,
      archetype: result.archetype,
      emotion: result.emotion,
      insight: result.insight,
    },
  });

  return NextResponse.json(result);
} catch {
  const result = {
    archetype: "The Seeker",
    emotion: "Reflection",
    shadow:
      "Unable to determine a shadow pattern.",
    reflection:
      "What truth are you avoiding?",
    insight: content,
  };

  await prisma.soulScan.create({
    data: {
      input: text,
      archetype: result.archetype,
      emotion: result.emotion,
      insight: result.insight,
    },
  });

  return NextResponse.json(result);
}
````

} catch (error) {
console.error(error);

```
return NextResponse.json(
  {
    error: "Soul Scan failed",
  },
  {
    status: 500,
  }
);
```

}
}
