import React from "react";
import Order from "./Order";
import { SERVER_IP } from "../../private";
import { useSelector } from "react-redux";

const EDIT_ORDER = `${SERVER_IP}/api/edit-order`;
const DELETE_ORDER = `${SERVER_IP}/api/delete-order`;

const OrdersList = (props) => {
  const auth = useSelector((state) => state.auth);
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

  const editOrder = (id, orderItem, quantity) => {
    fetch(EDIT_ORDER, {
      method: "POST",
      body: JSON.stringify({
        id: id,
        order_item: orderItem,
        quantity,
        ordered_by: auth.email || "Unknown!",
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
    return (
      <div key={order._id}>
        <Order
          order={order}
          orders={orders}
          setBoolean={setBoolean}
          formatTime={formatTime}
          editOrder={editOrder}
          deleteOrder={deleteOrder}
        />
      </div>
    );
  });
};

export default OrdersList;
