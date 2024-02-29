import { Validator } from './index.js';

it('Проверка допустимых имен', () => {
    const validator = new Validator();
    expect(validator.validateUsername('valid-username')).toBe(true);
    expect(validator.validateUsername('valid_username')).toBe(true);
    expect(validator.validateUsername('valid1username')).toBe(true);
    expect(validator.validateUsername('validusername')).toBe(true);
  });
  it('Проверка НЕдопустимых имен', () => {
    const validator = new Validator();
    expect(validator.validateUsername('invalid1234username')).toBe(false);
    expect(validator.validateUsername('_invalid_username')).toBe(false);
    expect(validator.validateUsername('-invalidusername')).toBe(false);
    expect(validator.validateUsername('1invalidusername')).toBe(false);
    expect(validator.validateUsername('invalid_username_')).toBe(false);
    expect(validator.validateUsername('invalidusername-')).toBe(false);
  });
  