function fibonacci(n) {
  let deret = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      deret.push(0);
    } else if (i === 1) {
      deret.push(1);
    } else {
        // Ini adalah rumus untuk mendapatkan bilangan Fibonacci

        // looping ke 3 - 1 = 2      3 - 2 = 1  hasilnya  3
        //  looping ke 4 - 1 = 3      4 - 2 = 2  hasilnya  5
        //  looping ke 5 - 1 = 4      5 - 2 = 3  hasilnya  8
        //  looping ke 6 - 1 = 5      6 - 2 = 4  hasilnya  13

      deret.push(deret[i - 1] + deret[i - 2]);
    }
  }

  return deret;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;