export interface SoulProfile {

  archetype: string;

  emotion: string;

  insight: string;

  source:
    | "scan"
    | "dream"
    | "tarot";

}


export function mergeSoulProfile(

  current: SoulProfile,

  incoming: Partial<SoulProfile>

): SoulProfile {

  return {

    archetype:
      incoming.archetype ??
      current.archetype,

    emotion:
      incoming.emotion ??
      current.emotion,

    insight:
      incoming.insight ??
      current.insight,

    source:
      incoming.source ??
      current.source,

  };

}