export class UUIDTypeError extends TypeError {
  constructor(input: unknown) {
    super(`The input ${input} is not a valid UUID.`);
  }
}
