import axios from "axios";
import { SERVER_IP } from "../../private";
import { FETCH_ORDER_SUCCESS, FETCH_ORDER_FAILURE } from "./types";

export const fetchOrderSuccess = (orders) => {
  return {
    type: FETCH_ORDER_SUCCESS,
    payload: orders,
  };
};
export const fetchOrderFailure = (error) => {
  return {
    type: FETCH_ORDER_FAILURE,
    payload: error,
  };
};
export const fetchCurrentOrder = () => {
  return (dispatch) => {
    axios
      .get(`${SERVER_IP}/api/current-orders`)
      .then((res) => dispatch(fetchOrderSuccess(res.data.orders)))
      .catch((error) => dispatch(fetchOrderFailure(error.message)));
  };
};
export const addOrder = (orderItem, quantity, auth) => {
  return (dispatch) => {
    let data = JSON.stringify({
      order_item: orderItem,
      quantity,
      ordered_by: auth.email || "Unknown!",
    });
    axios
      .post(`${SERVER_IP}/api/add-order`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log("Success", response))
      .catch((error) => dispatch(fetchOrderFailure(error.message)));
  };
};

export const editOrder = (id, orderItem, quantity, auth) => {
  return (dispatch) => {
    let data = JSON.stringify({
      id: id,
      order_item: orderItem,
      quantity: quantity,
      ordered_by: auth.email,
    });
    axios
      .post(`${SERVER_IP}/api/edit-order`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log("Success", response))
      .catch((error) => dispatch(fetchOrderFailure(error.message)));
  };
};

export const deleteOrder = (id) => {
  return (dispatch) => {
    let data = JSON.stringify({
      id,
    });
    axios
      .post(`${SERVER_IP}/api/delete-order`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log("Success", response))
      .catch((error) => dispatch(fetchOrderFailure(error.message)));
  };
};
