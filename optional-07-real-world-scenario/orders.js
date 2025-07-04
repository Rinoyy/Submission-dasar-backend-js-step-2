// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  let order = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: "Sedang di proses",
  };

  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
  return order;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((total, order) => {
      const orderTotal = order.items.reduce((sum, item) => sum + item.price, 0);
      return total + orderTotal;
    }, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(orderId) {
  const index = orders.findIndex((order) => order.id === orderId);
  if (index !== -1) {
    const deleted = orders.splice(index, 1);
    console.log(index);
    
    return deleted[0];
  }
  return null;
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };