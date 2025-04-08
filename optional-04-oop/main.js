import Item from "./Item.js";
import Inventory from "./Inventory.js";

const inventory = new Inventory();

const item1 = new Item(1, "Laptop", 10, 1000);
const item2 = new Item(2, "Mouse", 50, 20);

inventory.addItem(item1);
inventory.addItem(item2);

inventory.removeItem(2);

inventory.updateDetails(1, 999, 12345);

console.log(inventory.listItems());