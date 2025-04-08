function factorial(n) {
    let hasil = 1;
  
    for (let i = n; i > 1; i--) {
  
      hasil *= i; 
    }
  
    return hasil;
  }
// Jangan hapus kode di bawah ini!
export default factorial;