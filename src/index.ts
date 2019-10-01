export { Utterance } from "./types";

/**
 * Wraps all occurances of entities in text within leftReplacement
 * @param text string
 * @param leftReplacement string
 * @returns string
 */
export function wrapEntitiesWithChar(text: string, leftReplacement: string): string {
  const BOTMOCK_ENTITY_CHAR = "%";
  const left: string = leftReplacement;
  let right: string;
  switch (left.charAt(0)) {
    case "{":
      right = "}";
      break;
    case "[":
      right = "]";
      break;
    case "(":
      right = ")";
      break;
    default:
      right = left;
  }
  let result: string = text;
  let numReplacements: number = 0;
  const indicesInResult = Object.keys([...result.split(""), ...new Array(leftReplacement.length * 2)]);
  for (const i of indicesInResult) {
    const index = parseInt(i, 10);
    if (result[index] === BOTMOCK_ENTITY_CHAR) {
      const replacement = numReplacements % 2 === 0 ? left : right.repeat(leftReplacement.length);
      result = result.replace(BOTMOCK_ENTITY_CHAR, replacement);
      numReplacements += 1;
    }
  }
  return result;
}
