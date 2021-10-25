import React from "react";
import { SERVER_IP } from "../../private";

const DELETE_ORDER = `${SERVER_IP}/api/delete-order`;

const OrdersList = (props) => {
  const { orders, setBoolean } = props;
  if (!props || !props.orders || !props.orders.length)
    return (
      <div className="empty-orders">
        <h2>There are no orders to display</h2>
      </div>
    );

  const formatTime = (dateObject) => {
    const time = {
      hour: dateObject.getHours().toString().padStart(2, "0"),
      minute: dateObject.getMinutes().toString().padStart(2, "0"),
      seconds: dateObject.getSeconds().toString().padStart(2, "0"),
    };
    return `${time.hour}:${time.minute}:${time.seconds}`;
  };

  const deleteOrder = (id) => {
    fetch(DELETE_ORDER, {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => console.log("Success", JSON.stringify(response)))
      .catch((error) => console.error(error));
    setBoolean(true);
  };

  return orders.map((order) => {
    const createdDate = new Date(order.createdAt);
    return (
      <div className="row view-order-container" key={order._id}>
        <div className="col-md-4 view-order-left-col p-3">
          <h2>{order.order_item}</h2>
          <p>Ordered by: {order.ordered_by || ""}</p>
        </div>
        <div className="col-md-4 d-flex view-order-middle-col">
          <p>Order placed at {formatTime(createdDate)}</p>
          <p>Quantity: {order.quantity}</p>
        </div>
        <div className="col-md-4 view-order-right-col">
          <button className="btn btn-success">Edit</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteOrder(order._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
};

export default OrdersList;
