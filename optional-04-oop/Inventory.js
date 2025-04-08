/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Item dengan id ${id} berhasil dihapus.`);
    }
  }
  updateDetails(id, newQty, newPrice) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index].quantity = newQty;
      this.items[index].price = newPrice;
      console.log(`Item dengan id ${id} berhasil diupdate.`);
    }
  }
  listItems() {
    return this.items.map((item) => item.displayDetails());
  }
}

export default Inventory;