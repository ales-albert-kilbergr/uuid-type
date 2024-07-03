# UUID (Primitive)

The package provides a string-tagged subtype `uuid` and a casting function to
convert a string to a `uuid` value.

### What this package does not do

This package does not implement any UUID generation algorithm. There are multiple
ways to generate valid UUID in the javascript world. Try to use a native `crypto`
module for v4 uuids or use a library like `uuid` for more control.

## Installation

```bash
npm install @kilbergr/uuid-type
#or
yarn add @iskilber/uuid-type
```

## Import

```typescript
import { UUID, uuid } from '@kilbergr/uuid-type';
```

## Usage

The basic usage:

```typescript
const id: uuid = UUID(myInput);
// My function which only accepts uuid values, not any kind of string
function myFunction(id: uuid) {
  // ...custom logic
}
```

The assertion function

```typescript
try {
  const myInput: string = UUID.assert(myInput); //...;

  // typescript knows that myInput is a uuid value
  const myUuid = myInput;
} catch (error: unknown) {
  if (error instanceof UUIDTypeError) {
    // handle the error
  }
}
```

The type guard

```typescript

const myInput: string = //...;

if (UUID.is(myInput)) {
  // typescript knows that myInput is a uuid value
  const myUuid: uuid = myInput;
}

```

## Development

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```

### Lint

```bash
npm run lint
```
