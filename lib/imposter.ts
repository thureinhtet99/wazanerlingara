type PlayerWithId = { id: string };

export function getAllowedImposterCount(
  playerCount: number,
  requestedCount: number,
): number {
  if (playerCount === 10) {
    return requestedCount >= 2 ? 2 : 1;
  }

  return 1;
}

export function pickRandomImposterIds(
  players: PlayerWithId[],
  requestedCount: number,
): string[] {
  const allowedCount = Math.min(
    getAllowedImposterCount(players.length, requestedCount),
    players.length,
  );

  if (allowedCount <= 0) {
    return [];
  }

  const shuffled = [...players];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, allowedCount).map((player) => player.id);
}

export function isImposter(playerId: string, imposterIds: string[]): boolean {
  return imposterIds.includes(playerId);
}

function toUniqueIds(ids: string[]): string[] {
  return Array.from(new Set(ids.filter(Boolean)));
}

export function isExactIdSetMatch(left: string[], right: string[]): boolean {
  const leftUnique = toUniqueIds(left);
  const rightUnique = toUniqueIds(right);

  if (leftUnique.length !== rightUnique.length) {
    return false;
  }

  const rightSet = new Set(rightUnique);
  return leftUnique.every((id) => rightSet.has(id));
}

export function serializeIds(ids: string[]): string {
  return toUniqueIds(ids).join(",");
}

export function parseIdsParam(param?: string | string[]): string[] {
  if (!param) {
    return [];
  }

  const raw = Array.isArray(param) ? param.join(",") : param;

  return toUniqueIds(
    raw
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean),
  );
}
