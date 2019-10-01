# @botmock-api/text 

> process text from the botmock api

### Installation

```bash
npm i @botmock-api/text
```

##### `wrapEntitiesWithChar(text: string, leftReplacement: string): string`

> Wraps all occurances of entities in text within leftReplacement

```ts
import { wrapEntitiesWithChar } from "@botmock-api/text";

wrapEntitiesWithChar("%alaska% in alamo and %almadovar%", "{");
// {alaska} in alamo and {almadovar}
wrapEntitiesWithChar("%alaska% in alamo and %almadovar%", "[[");
// [[alaska]] in alamo and [[almadovar]]
```
