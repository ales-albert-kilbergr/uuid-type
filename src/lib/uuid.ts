import { Tagged } from 'type-fest';
import { UUIDTypeError } from './uuid-type-error';

export type uuid = Tagged<string, 'uuid'>;

function is(input: unknown): input is uuid {
  return (
    typeof input === 'string' &&
    /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(
      input
    )
  );
}

function assert(input: unknown): asserts input is uuid {
  if (!is(input)) {
    throw new UUIDTypeError(input);
  }
}

function cast(input: unknown): uuid {
  assert(input);
  return input;
}

/**
 * Casts the input into a valid UUID or throws a `UUIDTypeError`.
 *
 * @param input - any value to be casted
 * @throws {UUIDTypeError} - if the input is not a valid UUID
 * @returns a valid UUID
 */
export type UUID = ((input: unknown) => uuid) & {
  /**
   * Checks if the input is a valid UUID.
   *
   * @param input - any value to be tested
   * @returns a boolean representing the result
   */
  is: typeof is;
  /**
   * Asserts that the input is a valid UUID.
   *
   * @param input - any value to be tested
   * @throws {UUIDTypeError} - if the input is not a valid UUID
   */
  assert: typeof assert;
};

export const UUID: UUID = function UUID(input: unknown): uuid {
  return cast(input);
};

UUID.is = is;
UUID.assert = assert;
