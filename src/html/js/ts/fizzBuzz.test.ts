import { fizzBuzz } from "./fizzBuzz";

test('test', () => {
    expect(new fizzBuzz().convert(1)).toBe('1');
});