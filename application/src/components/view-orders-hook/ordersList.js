import React from "react";
import Order from "./Order";
import { useSelector, useDispatch } from "react-redux";
import { deleteOrder, editOrder } from "../../redux/actions/orderAction";

const OrdersList = (props) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orderList.orders);
  const auth = useSelector((state) => state.auth);

  const { setBoolean } = props;
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

  const handleDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
    setBoolean(true);
  };

  const handleEditOrder = (id, orderItem, quantity) => {
    dispatch(editOrder(id, orderItem, quantity, auth));
    setBoolean(true);
  };

  return orders.map((order) => {
    return (
      <div key={order._id}>
        <Order
          order={order}
          setBoolean={setBoolean}
          formatTime={formatTime}
          handleEditOrder={handleEditOrder}
          handleDeleteOrder={handleDeleteOrder}
        />
      </div>
    );
  });
};

export default OrdersList;
