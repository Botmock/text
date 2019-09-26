export { Utterance } from "./types";

/**
 * Wraps all occurances of entities in text within char
 * @param text string
 * @param char string
 * @returns string
 */
export function wrapEntitiesWithChar(text: string, char: string): string {
  const BOTMOCK_ENTITY_CHAR = "%";
  const left: string = char;
  let right: string;
  switch (left) {
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
  for (const i of Object.keys([...result.split("")])) {
    const index = parseInt(i, 10);
    if (result[index] === BOTMOCK_ENTITY_CHAR) {
      const replacement = numReplacements % 2 === 0 ? left : right;
      result = result.substr(0, index) + replacement + result.substr(index + 1);
      numReplacements += 1;
    }
  }
  return result;
}
