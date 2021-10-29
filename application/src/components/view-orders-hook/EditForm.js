import React, { useState } from "react";

const EditForm = ({ order, editOrder, showEditForm }) => {
  const [orderItem, setOrderItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const menuItemChosen = (event) => setOrderItem(event.target.value);
  const menuQuantityChosen = (event) => setQuantity(event.target.value);


  return (
    <div key={order._id} className="form-wrapper">
      <form>
        <label className="form-label">I'd like to order...</label>
        <br />
        <select
          value={orderItem}
          onChange={(event) => menuItemChosen(event)}
          className="menu-select"
        >
          <option value="" defaultValue disabled hidden>
            Lunch menu
          </option>
          <option value="Soup of the Day">Soup of the Day</option>
          <option value="Linguini With White Wine Sauce">
            Linguini With White Wine Sauce
          </option>
          <option value="Eggplant and Mushroom Panini">
            Eggplant and Mushroom Panini
          </option>
          <option value="Chili Con Carne">Chili Con Carne</option>
        </select>
        <br />
        <label className="qty-label">Qty:</label>
        <select
          value={quantity}
          onChange={(event) => menuQuantityChosen(event)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <button
          type="button"
          className="order-btn"
          onClick={() => {
            editOrder(order._id, orderItem, quantity);
            showEditForm(false);
          }}
        >
          Update Order
        </button>
      </form>
    </div>
  );
};

export default EditForm;
