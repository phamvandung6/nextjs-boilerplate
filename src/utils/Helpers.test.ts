import { describe, expect, it } from 'vitest';
import { getBaseUrl, isServer } from './Helpers';

describe('Helpers', () => {
  describe('getBaseUrl function', () => {
    it('should return localhost URL by default', () => {
      expect(getBaseUrl()).toBe('http://localhost:3000');
    });
  });

  describe('isServer function', () => {
    it('should return true in Node environment', () => {
      expect(isServer()).toBe(true);
    });
  });
});
