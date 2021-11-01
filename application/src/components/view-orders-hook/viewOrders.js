import React, { useState, useEffect } from "react";
import { Template } from "../../components";
import "./viewOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentOrder } from "../../redux/actions/orderAction";
import OrdersList from "./ordersList";

export default function ViewOrders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orderList.orders);
  // const [orders, setOrders] = useState([]);
  const [bool, setBoolean] = useState(false);

  useEffect(() => {
    dispatch(fetchCurrentOrder());
    setBoolean(false);
  }, [bool]);

  return (
    <Template>
      <div className="container-fluid">
        <OrdersList orders={orders} setBoolean={setBoolean} />
      </div>
    </Template>
  );
}
