// sum.test.js
import sum from './sum';

describe('Function sum', () => {
  test('Menjumlahkan dua bilangan positif', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(0, 10)).toBe(10);
    expect(sum(100, 200)).toBe(300);
  });

  test('Mengembalikan 0 jika salah satu bilangan negatif', () => {
    expect(sum(-1, 5)).toBe(0);
    expect(sum(4, -2)).toBe(0);
    expect(sum(-3, -7)).toBe(0);
  });

  test('Mengembalikan 0 jika salah satu input bukan angka', () => {
    expect(sum('a', 5)).toBe(0);
    expect(sum(4, 'b')).toBe(0);
    expect(sum(null, 3)).toBe(0);
    expect(sum(undefined, 1)).toBe(0);
    expect(sum({}, [])).toBe(0);
  });

  test('Mengembalikan 0 jika kedua input bukan angka', () => {
    expect(sum('a', 'b')).toBe(0);
    expect(sum(undefined, null)).toBe(0);
  });

  test('Mengembalikan 0 jika salah satu nilai NaN', () => {
    expect(sum(NaN, 2)).toBe(0);
    expect(sum(2, NaN)).toBe(0);
  });

  test('Menangani angka nol', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, 5)).toBe(5);
  });
});
