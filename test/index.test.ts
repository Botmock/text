import { wrapEntitiesWithChar } from "../src";

const TEXT = "%alaska% in alamo and %almadovar%";

test.skip("wrap entities with char gives text of correct length", () => {
  expect(wrapEntitiesWithChar(TEXT, "{")).toHaveLength(TEXT.length);
});

test("wrap entities with char supports multi-char replacement", () => {
  const LEFT_REPLACEMENT = "{{";
  expect(wrapEntitiesWithChar(TEXT, LEFT_REPLACEMENT)).toHaveLength(TEXT.length + LEFT_REPLACEMENT.length);
  expect(wrapEntitiesWithChar(TEXT, LEFT_REPLACEMENT)).not.toBe("{alaska} in alamo and {almadovar}");
})

test("wrap entities with char gives correct output", () => {
  expect(wrapEntitiesWithChar(TEXT, "{")).toBe("{alaska} in alamo and {almadovar}");
  expect(wrapEntitiesWithChar(TEXT, "[")).toBe("[alaska] in alamo and [almadovar]");
  expect(wrapEntitiesWithChar(TEXT, ":")).toBe(":alaska: in alamo and :almadovar:");
})
