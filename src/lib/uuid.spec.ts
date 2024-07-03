import { UUID, uuid } from './uuid';
import { UUIDTypeError } from './uuid-type-error';

describe('uuid', () => {
  describe('when casting', () => {
    it('should cast a valid UUID', () => {
      // Arrange
      const input = '00000000-0000-0000-0000-000000000000';
      // Act & Assert
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result: uuid = UUID(input);
    });

    it('should throw a UUIDTypeError for an invalid UUID', () => {
      // Arrange
      const input = 'invalid-uuid';
      const act = () => UUID(input);
      // Act & Assert
      expect(act).toThrow(UUIDTypeError);
    });
  });

  describe('when asserting', () => {
    it('should assert a valid UUID', () => {
      // Arrange
      const input = '00000000-0000-0000-0000-000000000000';
      // Act & Assert
      UUID.assert(input);
    });

    it('should throw a UUIDTypeError for an invalid UUID', () => {
      // Arrange
      const input = 'invalid-uuid';
      const act = () => UUID.assert(input);
      // Act & Assert
      expect(act).toThrow(UUIDTypeError);
    });

    it('should enforce type safety', () => {
      // Arrange
      const input = '00000000-0000-0000-0000-000000000000';
      UUID.assert(input);
      // expect not to throw a compile error
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result: uuid = input;
    });
  });

  describe('when checking', () => {
    it('should return true for a valid UUID', () => {
      // Arrange
      const input = '00000000-0000-0000-0000-000000000000';
      // Act
      const result = UUID.is(input);
      // Assert
      expect(result).toBe(true);
    });

    it('should return false for an invalid UUID', () => {
      // Arrange
      const input = 'invalid-uuid';
      // Act
      const result = UUID.is(input);
      // Assert
      expect(result).toBe(false);
    });
  });
});
