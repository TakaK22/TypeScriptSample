import { fizzBuzz } from "./fizzBuzz";

test('3の倍数を入力するとFizzを返す', () => {
    expect(new fizzBuzz().convert(3)).toBe('Fizz');
});
test('5の倍数を入力するとBuzzを返す', () => {
    expect(new fizzBuzz().convert(5)).toBe('Buzz');
});
test('15の倍数を入力するとFizzBuzzを返す', () => {
    expect(new fizzBuzz().convert(15)).toBe('FizzBuzz');
});
test('その他の数値を入力すると文字列にして返す', () => {
    expect(new fizzBuzz().convert(1)).toBe('1');
});