function takeOrder(order, orderlist) {
  if (orderlist.length < 3) {
    orderlist.push(order);
  }
  return orderlist;
}

function refundOrder(number, deliveryOrder) {
  for (let i = 0; i < deliveryOrder.length; i++) {
    if (deliveryOrder[i].orderNumber === number) {
      deliveryOrder.splice(i, 1);
    }
  }
}

function listItems(order) {
  if (order.length === 1) return order[0].item;

  return order
    .map((item) => {
      return item.item;
    })
    .join(", ");
}

function searchOrder(list, food) {
  if (list.find((item) => item.item === food) === undefined) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
};
