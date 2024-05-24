// import requests from './httpService';

// const NotificationServices = {
//   addNotification: async (body) => {
//     console.log("datas :", body)
//     return requests.post('api/notification/add', body);
//   },

//   getAllNotification: async () => {
//     return requests.get('api/notification');
//   },

//   updateStatus: async (id, body) => {
//     return requests.put(`api/notification/${id}`, body);
//   },

//   deleteNotification: async (id) => {
//     return requests.delete(`api/notification/${id}`);
//   },
// };

// export default NotificationServices;



import requests from './httpService';
import io from "socket.io-client";

// Create a socket connection to the server
const socket = io("http://localhost:5055");

const NotificationServices = {
  // Add a new notification
  addNotification: async (body) => {
    console.log("datas :", body);
    return requests.post('api/notification/add', body);
  },

  // Get all notifications
  getAllNotification: async () => {
    return requests.get('api/notification');
  },

  // Update the status of a notification and emit an event to notify other clients
  updateStatus: async (id, body) => {
    await requests.put(`api/notification/${id}`, body);
    // Emit event to notify other clients about the update
    socket.emit("notification:updateStatus", { id, ...body });
  },

  // Delete a notification and emit an event to notify other clients
  deleteNotification: async (id) => {
    await requests.delete(`api/notification/${id}`);
    // Emit event to notify other clients about the deletion
    socket.emit("notification:delete", { id });
  },
};

export default NotificationServices;
