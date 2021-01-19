import { store } from "react-notifications-component";

export const addNotification = (message, title = "Success", type = "success") =>
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });

export const addSuccessNotification = (message) => addNotification(message);

export const addWarningNotification = (message) =>
  addNotification(message, "Warning", "warning");

export const addErrorNotification = (message) =>
  addNotification(message, "Error", "danger");
