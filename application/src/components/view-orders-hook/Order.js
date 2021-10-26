import React, { useState } from "react";
import EditForm from "./EditForm";

const Order = ({ order, formatTime, deleteOrder, editOrder }) => {
  const [editForm, showEditForm] = useState(false);
  const createdDate = new Date(order.createdAt);
  return (
    <div className="row view-order-container">
      <div className="col-md-4 view-order-left-col p-3">
        <h2>{order.order_item}</h2>
        <p>Ordered by: {order.ordered_by || ""}</p>
      </div>
      <div className="col-md-4 d-flex view-order-middle-col">
        <p>Order placed at {formatTime(createdDate)}</p>
        <p>Quantity: {order.quantity}</p>
      </div>
      <div className="col-md-4 view-order-right-col">
        <button
          className="btn btn-success"
          onClick={() => {
            showEditForm(true);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteOrder(order._id);
          }}
        >
          Delete
        </button>
      </div>
      {editForm === true && (
        <EditForm
          order={order}
          editOrder={editOrder}
          showEditForm={showEditForm}
        />
      )}
    </div>
  );
};

export default Order;
