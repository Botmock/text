import { wrapEntitiesWithChar } from "../src";

const TEXT = "%alaska% in alamo and %almadovar%";

test("wrap entities with char gives text of same length", () => {
  expect(wrapEntitiesWithChar(TEXT, "{")).toHaveLength(TEXT.length);
});

test("wrap entities with char gives correct output", () => {
  expect(wrapEntitiesWithChar(TEXT, "{")).toBe("{alaska} in alamo and {almadovar}");
  expect(wrapEntitiesWithChar(TEXT, "[")).toBe("[alaska] in alamo and [almadovar]");
  expect(wrapEntitiesWithChar(TEXT, ":")).toBe(":alaska: in alamo and :almadovar:");
})
