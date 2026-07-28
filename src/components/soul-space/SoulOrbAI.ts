import type {
  SoulState,
} from "./SoulOrbStates";





export function getSoulState(
  emotion?: string,
  archetype?: string
): SoulState {



  const value =
    `${emotion ?? ""} ${archetype ?? ""}`
      .toLowerCase();






  /*
    SHADOW
    Internal conflict
  */

  if (

    [
      "fear",
      "fearful",
      "anxiety",
      "anxious",
      "anger",
      "rage",
      "shadow",
      "conflict",
      "confused",
      "lost",
      "страх",
      "тревог",
      "злость",
      "гнев",
      "тень",
      "потерян"

    ]
    .some(
      word =>
        value.includes(word)
    )

  ){

    return "shadow";

  }








  /*
    HEALING
    Emotional recovery
  */

  if (

    [

      "sad",
      "hurt",
      "pain",
      "loss",
      "healing",
      "broken",
      "recover",
      "forgive",
      "trauma",
      "melancholy",
      "грусть",
      "боль",
      "исцел",
      "прощ",
      "восстанов"

    ]
    .some(
      word =>
        value.includes(word)
    )

  ){

    return "healing";

  }








  /*
    AWAKENING
    Transformation
  */

  if (

    [

      "awakening",
      "rebirth",
      "change",
      "growth",
      "evolution",
      "transformation",
      "new beginning",
      "awakening soul",
      "пробужден",
      "перерожд",
      "рост",
      "измен",
      "эволюц"

    ]
    .some(
      word =>
        value.includes(word)
    )

  ){

    return "awakening";

  }









  /*
    FOCUS
    Intelligence / clarity
  */

  if (

    [

      "focus",
      "clarity",
      "wisdom",
      "sage",
      "vision",
      "creative",
      "creator",
      "strategy",
      "knowledge",
      "ясность",
      "мудр",
      "фокус",
      "творч"

    ]
    .some(
      word =>
        value.includes(word)
    )

  ){

    return "focus";

  }









  /*
    Default
  */

  return "calm";

}