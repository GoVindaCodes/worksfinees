// import { Avatar, Badge, WindmillContext } from "@windmill/react-ui";
// import Cookies from "js-cookie";
// import React, { useContext, useEffect, useRef, useState } from "react";
// import { Scrollbars } from "react-custom-scrollbars-2";
// import {
//   IoClose,
//   IoGridOutline,
//   IoLogOutOutline,
//   IoMenu,
//   IoMoonSharp,
//   IoNotificationsSharp,
//   IoSettingsOutline,
//   IoSunny,
// } from "react-icons/io5";
// import { Link } from "react-router-dom";
// //internal import
// import cookies from "js-cookie";
// import { useTranslation } from "react-i18next";
// import { useDispatch } from "react-redux";
// import de from "assets/img/de.svg";
// import en from "assets/img/us.svg";
// import { AdminContext } from "context/AdminContext";
// import { SidebarContext } from "context/SidebarContext";
// import { emptySetting } from "redux/Actions/SettingActions";
// import { emptySideBarMenu } from "redux/Actions/SideBarActions";

// const Header = () => {
//   const reduxDisPatch = useDispatch();
//   const { toggleSidebar, handleLanguageChange, setNavBar, navBar } = useContext(SidebarContext);
//   const { state, dispatch } = useContext(AdminContext);
//   const { adminInfo } = state;
//   const { mode, toggleMode } = useContext(WindmillContext);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [notificationOpen, setNotificationOpen] = useState(false);
//   const pRef = useRef();
//   const nRef = useRef();

//   const currentLanguageCode = cookies.get("i18next") || "en";
//   const { t } = useTranslation();

//   const handleLogOut = () => {
//     dispatch({ type: "USER_LOGOUT" });
//     Cookies.remove("adminInfo");
//     reduxDisPatch(emptySideBarMenu());
//     reduxDisPatch(emptySetting());
//     // Commented just for the frontend
//     // window.location.replace(`https://${process.env.REACT_APP_ADMIN_DOMAIN}/login`);
//     window.location.replace(`/login`);
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!pRef?.current?.contains(e.target)) {
//         setProfileOpen(false);
//       }
//       if (!nRef?.current?.contains(e.target)) {
//         setNotificationOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//   }, [pRef, nRef]);

//   const handleNotificationOpen = () => {
//     setNotificationOpen(!notificationOpen);
//     setProfileOpen(false);
//   };
//   const handleProfileOpen = () => {
//     setProfileOpen(!profileOpen);
//     setNotificationOpen(false);
//   };

//   // const onChange = (event) => {
//   //     i18next.changeLanguage(event.target.value);

//   // }

//   return (
//     <>
//       <header className="z-30 py-4 bg-white shadow-sm dark:bg-gray-800">
//         <div className="container flex items-center justify-between h-full px-6 mx-auto text-green-500 dark:text-green-500">
//           <button
//             type="button"
//             onClick={() => setNavBar(!navBar)}
//             className="hidden lg:block outline-0 focus:outline-none"
//           >
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 18 18"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>

//           {/* <!-- Mobile hamburger --> */}
//           <button
//             className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none"
//             onClick={toggleSidebar}
//             aria-label="Menu"
//           >
//             <IoMenu className="w-6 h-6" aria-hidden="true" />
//           </button>
//           <span></span>

//           <ul className="flex justify-end items-center flex-shrink-0 space-x-6">
//             <li className="changeLanguage">
//               <div className="dropdown">
//                 <button className="dropbtn focus:outline-none">
//                   {currentLanguageCode === "de" ? (
//                     <img src={de} width={16} alt="lang" className="mx-2" />
//                   ) : (
//                     <img src={en} className="mx-2" alt="lang" width={16} />
//                   )}
//                   {currentLanguageCode === "de" ? "GERMAN" : "ENGLISH"}
//                 </button>

//                 <div className="dropdown-content">
//                   <div
//                     onClick={() => handleLanguageChange("en")}
//                     className="focus:outline-none cursor-pointer"
//                   >
//                     <img src={en} width={16} alt="lang" /> English{" "}
//                   </div>
//                   <div
//                     onClick={() => handleLanguageChange("de")}
//                     className="focus:outline-none cursor-pointer"
//                   >
//                     <img src={de} width={16} alt="lang" /> German
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* <!-- Theme toggler --> */}

//             <li className="flex">
//               <button
//                 className="rounded-md focus:outline-none"
//                 onClick={toggleMode}
//                 aria-label="Toggle color mode"
//               >
//                 {mode === "dark" ? (
//                   <IoSunny className="w-5 h-5" aria-hidden="true" />
//                 ) : (
//                   <IoMoonSharp className="w-5 h-5" aria-hidden="true" />
//                 )}
//               </button>
//             </li>

//             {/* <!-- Notifications menu --> */}
//             <li className="relative inline-block text-left" ref={nRef}>
//               <button
//                 className="relative align-middle rounded-md focus:outline-none"
//                 onClick={handleNotificationOpen}
//               >
//                 <IoNotificationsSharp className="w-5 h-5" aria-hidden="true" />
//                 <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
//                   6
//                 </span>
//               </button>

//               {notificationOpen && (
//                 <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   <div className="notification-box">
//                     <Scrollbars>
//                       <ul className="block text-sm border-t border-gray-100 dark:border-gray-700 rounded-md">
//                         <li className="flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer">
//                           <div className="flex items-center">
//                             <Avatar
//                               className="p-1 mr-2 md:block bg-gray-50 border border-gray-200"
//                               src="https://i.postimg.cc/tCsSNSxS/Yellow-Sweet-Corn-Bag-each.jpg"
//                               alt="image"
//                             />

//                             <div className="notification-content">
//                               <h6 className="font-medium text-gray-500">
//                                 Yellow Sweet Corn Stock out, please check!
//                               </h6>

//                               <p className="flex items-center text-xs text-gray-400">
//                                 <Badge type="danger">Stock Out</Badge>

//                                 <span className="ml-2">Dec 12 2021 - 12:40PM</span>
//                               </p>
//                             </div>
//                           </div>

//                           <span className="px-2">
//                             <IoClose />
//                           </span>
//                         </li>

//                         <li className="flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer">
//                           <div className="flex items-center">
//                             <Avatar
//                               className="mr-2 md:block bg-gray-50 border border-gray-200"
//                               src="https://i.ibb.co/ZTWbx5z/team-1.jpg"
//                               alt="image"
//                             />

//                             <div className="notification-content">
//                               <h6 className="font-medium text-gray-500">
//                                 Sam L. Placed <span className="font-bold">$300</span> USD order!
//                               </h6>

//                               <p className="flex items-center text-xs text-gray-400">
//                                 <Badge type="success">New Order</Badge>

//                                 <span className="ml-2">Nov 30 2021 - 2:40PM</span>
//                               </p>
//                             </div>
//                           </div>

//                           <span className="px-2">
//                             <IoClose />
//                           </span>
//                         </li>

//                         <li className="flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer">
//                           <div className="flex items-center">
//                             <Avatar
//                               className="p-1 mr-2 md:block bg-gray-50 border border-gray-200"
//                               src="https://i.postimg.cc/5y7rNDFv/Radicchio-12ct.jpg"
//                               alt="image"
//                             />

//                             <div className="notification-content">
//                               <h6 className="font-medium text-gray-500">
//                                 Radicchio Stock out, please check!
//                               </h6>

//                               <p className="flex items-center text-xs text-gray-400">
//                                 <Badge type="danger">Stock Out</Badge>

//                                 <span className="ml-2">Dec 15 2021 - 12:40PM</span>
//                               </p>
//                             </div>
//                           </div>

//                           <span className="px-2">
//                             <IoClose />
//                           </span>
//                         </li>

//                         <li className="flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer">
//                           <div className="flex items-center">
//                             <Avatar
//                               className="mr-2 md:block bg-gray-50 border border-gray-200"
//                               src="https://i.postimg.cc/SNmQX9Yx/Organic-Baby-Carrot-1oz.jpg"
//                               alt="image"
//                             />

//                             <div className="notification-content">
//                               <h6 className="font-medium text-gray-500">
//                                 Organic Baby Carrot Stock out, please check!
//                               </h6>

//                               <p className="flex items-center text-xs text-gray-400">
//                                 <Badge type="danger">Stock Out</Badge>

//                                 <span className="ml-2">Dec 20 2021 - 12:40PM</span>
//                               </p>
//                             </div>
//                           </div>

//                           <span className="px-2">
//                             <IoClose />
//                           </span>
//                         </li>

//                         <li className="flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer">
//                           <div className="flex items-center">
//                             <Avatar
//                               className="mr-2 md:block bg-gray-50 border border-gray-200"
//                               src="https://i.postimg.cc/nM8QfhcP/Orange-20ct.jpg"
//                               alt="image"
//                             />

//                             <div className="notification-content">
//                               <h6 className="font-medium text-gray-500">
//                                 Orange Stock out, please check!
//                               </h6>

//                               <p className="flex items-center text-xs text-gray-400">
//                                 <Badge type="danger">Stock Out</Badge>

//                                 <span className="ml-2">Dec 25 2021 - 12:40PM</span>
//                               </p>
//                             </div>
//                           </div>

//                           <span className="px-2">
//                             <IoClose />
//                           </span>
//                         </li>

//                         <li className="flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer">
//                           <div className="flex items-center">
//                             <Avatar
//                               className="mr-2 md:block bg-gray-50 border border-gray-200"
//                               src="https://i.ibb.co/GWVWYNn/team-7.jpg"
//                               alt="Josh"
//                             />

//                             <div className="notification-content">
//                               <h6 className="font-medium text-gray-500">
//                                 John Doe Placed <span className="font-bold">$513</span> USD order!
//                               </h6>

//                               <p className="flex items-center text-xs text-gray-400">
//                                 <Badge type="success">New Order</Badge>

//                                 <span className="ml-2">Dec 18 2021 - 12:40PM</span>
//                               </p>
//                             </div>
//                           </div>

//                           <span className="px-2">
//                             <IoClose />
//                           </span>
//                         </li>
//                       </ul>
//                     </Scrollbars>
//                   </div>
//                 </div>
//               )}
//             </li>

//             {/* <!-- Profile menu --> */}
//             <li className="relative inline-block text-left" ref={pRef}>
//               <button
//                 className="rounded-full dark:bg-gray-500 bg-green-500 text-white h-8 w-8 font-medium mx-auto focus:outline-none"
//                 onClick={handleProfileOpen}
//               >
//                 {/* Added or Modified by : 3/4/2023 */}

//                 {/* intially it was expecting it to have an objects and was not checking the admininfo to have the objects */}

//                 {/* previous logic */}

//                 {adminInfo.image ? (
//                   <Avatar className="align-middle" src={`${adminInfo.image}`} aria-hidden="true" />
//                 ) : (
//                   <span>{adminInfo.email[0].toUpperCase()}</span>
//                 )}

//                 {/* new logic */}

//                 {/* {adminInfo && adminInfo.image ? (
//                   <Avatar className="align-middle" src={`${adminInfo.image}`} aria-hidden="true" />
//                 ) : (
//                   <span>{adminInfo && adminInfo.email ? adminInfo.email[0].toUpperCase() : ''}</span>
//                 )} */}
//               </button>

//               {profileOpen && (
//                 <ul className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
//                     <Link to="/dashboard">
//                       <span className="flex items-center text-sm">
//                         <IoGridOutline className="w-4 h-4 mr-3" aria-hidden="true" />
//                         <span>{t("Dashboard")}</span>
//                       </span>
//                     </Link>
//                   </li>

//                   <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
//                     <Link to="/edit-profile">
//                       <span className="flex items-center text-sm">
//                         <IoSettingsOutline className="w-4 h-4 mr-3" aria-hidden="true" />
//                         <span>{t("EditProfile")}</span>
//                       </span>
//                     </Link>
//                   </li>

//                   <li
//                     onClick={handleLogOut}
//                     className="cursor-pointer justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
//                   >
//                     <span className="flex items-center text-sm">
//                       <IoLogOutOutline className="w-4 h-4 mr-3" aria-hidden="true" />
//                       <span>{t("LogOut")}</span>
//                     </span>
//                   </li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;





// import { Avatar, Badge, WindmillContext } from "@windmill/react-ui";
// import Cookies from "js-cookie";
// import React, { useContext, useEffect, useRef, useState } from "react";
// import { Scrollbars } from "react-custom-scrollbars-2";
// import {
//   IoClose,
//   IoGridOutline,
//   IoLogOutOutline,
//   IoMenu,
//   IoMoonSharp,
//   IoNotificationsSharp,
//   IoSettingsOutline,
//   IoSunny,
// } from "react-icons/io5";
// import { Link } from "react-router-dom";
// //internal import
// import cookies from "js-cookie";
// import { useTranslation } from "react-i18next";
// import { useDispatch } from "react-redux";
// import de from "assets/img/de.svg";
// import en from "assets/img/us.svg";
// import { AdminContext } from "context/AdminContext";
// import { SidebarContext } from "context/SidebarContext";
// import { emptySetting } from "redux/Actions/SettingActions";
// import { emptySideBarMenu } from "redux/Actions/SideBarActions";
// import useNotificationSubmit from "../../hooks/useNotificationSubmit";
// import NotificationServices from "../../services/NotificationServices";
// import useAsync from "hooks/useAsync";


// const Header = () => {
//   const reduxDisPatch = useDispatch();
//   const { toggleSidebar, handleLanguageChange, setNavBar, navBar } = useContext(SidebarContext);
//   const { state, dispatch } = useContext(AdminContext);
//   const { adminInfo } = state;
//   const { mode, toggleMode } = useContext(WindmillContext);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [notificationOpen, setNotificationOpen] = useState(false);
//   const pRef = useRef();
//   const nRef = useRef();

//   const currentLanguageCode = cookies.get("i18next") || "en";
//   const { t } = useTranslation();
//   const [notifications, setNotifications] = useState([]);
//   const {
//     loading,
//     error,
//     getAllNotifications,
//     submitNotification,
//     updateNotificationStatus,
//     deleteNotification,
//   } = useNotificationSubmit();

//   // const { data } = NotificationServices.getAllNotification
//   const { data } = useAsync(NotificationServices.getAllNotification);
//   // Function to add a notification to the state
//   // const addNotification = (message) => {
//   //   setNotifications([...notifications, message]);
//   //   notificationService.submitNotification(message);
//   // };


//   // data.notifications.forEach(element => {
//   //   console.log(element)
//   // });
//   const dummyNotificationData = {
//     orderId: "614c6d7f6a6be682f03b06f2",
//     productId: "614c6d7f6a6be682f03b06f3",
//     adminId: "614c6d7f6a6be682f03b06f4",
//     message: "This is a dummy notification message.",
//     image: "https://res.cloudinary.com/dq3dppxqs/image/upload/v1715763344/product/0223bc67-1a49-4d00-af4f-a2758fd3e7ae.jpg",
//     status: "unread",
//   };


//   const handleAddNotification = async () => {
//     try {
//       await submitNotification(dummyNotificationData);
//     } catch (error) {
//     }
//   };

//   useEffect(() => {
//     getAllNotifications();
//   }, []);

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   const fetchNotifications = async () => {
//     try {
//       const response = await NotificationServices.getAllNotification();
//       setNotifications(response.data.notifications);
//       console.log(response)
//       console.log(response.data)
//       console.log(response.data.notifications)
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const handleNotificationOpen = async () => {
//     setNotificationOpen(!notificationOpen);
//     setProfileOpen(false);
//     if (!notificationOpen) {
//       await fetchNotifications();
//     }
//   };

//   const handleUpdateStatus = async (id, newStatus) => {
//     try {
//       await NotificationServices.updateStatus(id, { status: newStatus });
//       // Update the status of the notification in the UI
//       setNotifications((prevNotifications) =>
//         prevNotifications.map((notification) =>
//           notification._id === id ? { ...notification, status: newStatus } : notification
//         )
//       );
//     } catch (error) {
//       console.error("Error updating notification status:", error);
//     }
//   };

//   const handleDeleteNotification = async (id) => {
//     try {
//       await NotificationServices.deleteNotification(id);
//       // Remove the deleted notification from the UI
//       setNotifications((prevNotifications) =>
//         prevNotifications.filter((notification) => notification._id !== id)
//       );
//     } catch (error) {
//       console.error("Error deleting notification:", error);
//     }
//   };

//   const handleLogOut = () => {
//     dispatch({ type: "USER_LOGOUT" });
//     Cookies.remove("adminInfo");
//     reduxDisPatch(emptySideBarMenu());
//     reduxDisPatch(emptySetting());
//     // Commented just for the frontend
//     // window.location.replace(`https://${process.env.REACT_APP_ADMIN_DOMAIN}/login`);
//     window.location.replace(`/login`);
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!pRef?.current?.contains(e.target)) {
//         setProfileOpen(false);
//       }
//       if (!nRef?.current?.contains(e.target)) {
//         setNotificationOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//   }, [pRef, nRef]);

//   // const handleNotificationOpen = () => {
//   //   setNotificationOpen(!notificationOpen);
//   //   setProfileOpen(false);
//   // };
//   const handleProfileOpen = () => {
//     setProfileOpen(!profileOpen);
//     setNotificationOpen(false);
//   };

//   // const onChange = (event) => {
//   //     i18next.changeLanguage(event.target.value);

//   // }

//   return (
//     <>
//       <header className="z-30 py-4 bg-white shadow-sm dark:bg-gray-800">
//         <div className="container flex items-center justify-between h-full px-6 mx-auto text-green-500 dark:text-green-500">
//           <button
//             type="button"
//             onClick={() => setNavBar(!navBar)}
//             className="hidden lg:block outline-0 focus:outline-none"
//           >
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 18 18"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>
//           {/* <button onClick={handleAddNotification}>Add Notification</button> */}

//           {/* <!-- Mobile hamburger --> */}
//           <button
//             className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none"
//             onClick={toggleSidebar}
//             aria-label="Menu"
//           >
//             <IoMenu className="w-6 h-6" aria-hidden="true" />
//           </button>
//           <span></span>

//           <ul className="flex justify-end items-center flex-shrink-0 space-x-6">
//             <li className="changeLanguage">
//               <div className="dropdown">
//                 <button className="dropbtn focus:outline-none">
//                   {currentLanguageCode === "de" ? (
//                     <img src={de} width={16} alt="lang" className="mx-2" />
//                   ) : (
//                     <img src={en} className="mx-2" alt="lang" width={16} />
//                   )}
//                   {currentLanguageCode === "de" ? "GERMAN" : "ENGLISH"}
//                 </button>

//                 <div className="dropdown-content">
//                   <div
//                     onClick={() => handleLanguageChange("en")}
//                     className="focus:outline-none cursor-pointer"
//                   >
//                     <img src={en} width={16} alt="lang" /> English{" "}
//                   </div>
//                   <div
//                     onClick={() => handleLanguageChange("de")}
//                     className="focus:outline-none cursor-pointer"
//                   >
//                     <img src={de} width={16} alt="lang" /> German
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* <!-- Theme toggler --> */}

//             <li className="flex">
//               <button
//                 className="rounded-md focus:outline-none"
//                 onClick={toggleMode}
//                 aria-label="Toggle color mode"
//               >
//                 {mode === "dark" ? (
//                   <IoSunny className="w-5 h-5" aria-hidden="true" />
//                 ) : (
//                   <IoMoonSharp className="w-5 h-5" aria-hidden="true" />
//                 )}
//               </button>
//             </li>

//             {/* <!-- Notifications menu --> */}
//             {/* Notifications menu */}

//             {/* <li className="relative inline-block text-left" ref={nRef}>
//               <button
//                 className="relative align-middle rounded-md focus:outline-none"
//                 onClick={handleNotificationOpen}
//               >
//                 <IoNotificationsSharp className="w-5 h-5" aria-hidden="true" />
//                 <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
//                   {notifications.length}
//                 </span>
//               </button>
//               {notificationOpen && (
//                 <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   <div className="notification-box">
//                     <Scrollbars>
//                       <ul className="block text-sm border-t border-gray-100 dark:border-gray-700 rounded-md">
//                         {notifications.map((notification) => (
//                           <li
//                             key={notification._id}
//                             className={`flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer ${notification.status === "unread" ? "font-medium" : ""
//                               }`}
//                           >
//                             <div className="flex items-center">
//                               <Avatar
//                                 className="p-1 mr-2 md:block bg-gray-50 border border-gray-200"
//                                 src={notification.image}
//                                 alt="image"
//                               />
//                               <div className="notification-content">
//                                 <h6 className="font-medium text-gray-500">{notification.message}</h6>
//                                 <p className="flex items-center text-xs text-gray-400">
//                                   <Badge type={notification.status === "unread" ? "danger" : "success"}>
//                                     {notification.status === "unread" ? "Unread" : "Read"}
//                                   </Badge>
//                                   <span className="ml-2">{notification.createdAt}</span>
//                                 </p>
//                               </div>
//                             </div>
//                             <span className="px-2" onClick={() => handleDeleteNotification(notification._id)}>
//                               <IoClose />
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </Scrollbars>
//                   </div>
//                 </div>
//               )}
//             </li> */}

//             <li className="relative inline-block text-left" ref={nRef}>
//               <button
//                 className="relative align-middle rounded-md focus:outline-none"
//                 onClick={handleNotificationOpen}
//               >
//                 <IoNotificationsSharp className="w-5 h-5" aria-hidden="true" />
//                 {data && (
//                   <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
//                     {data?.notifications?.length}
//                   </span>
//                 )}
//               </button>
//               {notificationOpen && (
//                 <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   <div className="notification-box" style={{ maxHeight: `${data?.notifications?.length * 5}rem` }}>
//                     <Scrollbars>
//                       <ul className="block text-sm border-t border-gray-100 dark:border-gray-700 rounded-md">
//                         {data &&
//                           data?.notifications?.map((notification) => (
//                             <li
//                               key={notification._id}
//                               className={`flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer ${notification?.status === "unread" ? "font-medium" : ""}`}
//                             >
//                               <div className="flex items-center">
//                                 <Avatar
//                                   className="p-1 mr-2 md:block bg-gray-50 border border-gray-200"
//                                   src={notification?.image}
//                                   alt="image"
//                                 />
//                                 <div className="notification-content">
//                                   <h6 className="font-medium text-gray-500">{notification?.message}</h6>
//                                   <p className="flex items-center text-xs text-gray-400">
//                                     <Badge type={notification?.status === "unread" ? "danger" : "success"}>
//                                       {notification?.status === "unread" ? "Unread" : "Read"}
//                                     </Badge>
//                                     <span className="ml-2">{notification?.createdAt}</span>
//                                   </p>
//                                 </div>
//                               </div>
//                               <span className="px-2" onClick={() => handleDeleteNotification(notification._id)}>
//                                 <IoClose />
//                               </span>
//                             </li>
//                           ))}
//                       </ul>
//                     </Scrollbars>
//                   </div>
//                 </div>
//               )}
//             </li>


//             {/* <!-- Profile menu --> */}
//             <li className="relative inline-block text-left" ref={pRef}>
//               <button
//                 className="rounded-full dark:bg-gray-500 bg-green-500 text-white h-8 w-8 font-medium mx-auto focus:outline-none"
//                 onClick={handleProfileOpen}
//               >
//                 {/* Added or Modified by : 3/4/2023 */}

//                 {/* intially it was expecting it to have an objects and was not checking the admininfo to have the objects */}

//                 {/* previous logic */}

//                 {adminInfo.image ? (
//                   <Avatar className="align-middle" src={`${adminInfo.image}`} aria-hidden="true" />
//                 ) : (
//                   <span>{adminInfo.email[0].toUpperCase()}</span>
//                 )}

//                 {/* new logic */}

//                 {/* {adminInfo && adminInfo.image ? (
//                   <Avatar className="align-middle" src={`${adminInfo.image}`} aria-hidden="true" />
//                 ) : (
//                   <span>{adminInfo && adminInfo.email ? adminInfo.email[0].toUpperCase() : ''}</span>
//                 )} */}
//               </button>

//               {profileOpen && (
//                 <ul className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
//                     <Link to="/dashboard">
//                       <span className="flex items-center text-sm">
//                         <IoGridOutline className="w-4 h-4 mr-3" aria-hidden="true" />
//                         <span>{t("Dashboard")}</span>
//                       </span>
//                     </Link>
//                   </li>

//                   <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
//                     <Link to="/edit-profile">
//                       <span className="flex items-center text-sm">
//                         <IoSettingsOutline className="w-4 h-4 mr-3" aria-hidden="true" />
//                         <span>{t("EditProfile")}</span>
//                       </span>
//                     </Link>
//                   </li>

//                   <li
//                     onClick={handleLogOut}
//                     className="cursor-pointer justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
//                   >
//                     <span className="flex items-center text-sm">
//                       <IoLogOutOutline className="w-4 h-4 mr-3" aria-hidden="true" />
//                       <span>{t("LogOut")}</span>
//                     </span>
//                   </li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;



we can change it or revert it because above one workss way too finee ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


import { Avatar, Badge, WindmillContext } from "@windmill/react-ui";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import {
  IoClose,
  IoGridOutline,
  IoLogOutOutline,
  IoMenu,
  IoMoonSharp,
  IoNotificationsSharp,
  IoSettingsOutline,
  IoSunny,
} from "react-icons/io5";
import { Link } from "react-router-dom";
//internal import
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import de from "assets/img/de.svg";
import en from "assets/img/us.svg";
import { AdminContext } from "context/AdminContext";
import { SidebarContext } from "context/SidebarContext";
import { emptySetting } from "redux/Actions/SettingActions";
import { emptySideBarMenu } from "redux/Actions/SideBarActions";
import useNotificationSubmit from "../../hooks/useNotificationSubmit";
import NotificationServices from "../../services/NotificationServices";
import useAsync from "hooks/useAsync";


const Header = () => {
  const reduxDisPatch = useDispatch();
  const { toggleSidebar, handleLanguageChange, setNavBar, navBar } = useContext(SidebarContext);
  const { state, dispatch } = useContext(AdminContext);
  const { adminInfo } = state;
  const { mode, toggleMode } = useContext(WindmillContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const pRef = useRef();
  const nRef = useRef();

  const currentLanguageCode = cookies.get("i18next") || "en";
  const { t } = useTranslation();
  const {
    loading,
    error,
    getAllNotifications,
    submitNotification,
    updateNotificationStatus,
    deleteNotification,
  } = useNotificationSubmit();

  // const { data } = NotificationServices.getAllNotification
  const { data } = useAsync(NotificationServices.getAllNotification);
  const [notifications, setNotifications] = useState([]);
  // Function to add a notification to the state
  // const addNotification = (message) => {
  //   setNotifications([...notifications, message]);
  //   notificationService.submitNotification(message);
  // };


  // data.notifications.forEach(element => {
  //   console.log(element)
  // });
  const dummyNotificationData = {
    orderId: "614c6d7f6a6be682f03b06f2",
    productId: "614c6d7f6a6be682f03b06f3",
    adminId: "614c6d7f6a6be682f03b06f4",
    message: "This is a dummy notification message.",
    image: "https://res.cloudinary.com/dq3dppxqs/image/upload/v1715763344/product/0223bc67-1a49-4d00-af4f-a2758fd3e7ae.jpg",
    status: "unread",
  };


  const handleAddNotification = async () => {
    try {
      await submitNotification(dummyNotificationData);
    } catch (error) {
    }
  };

  // useEffect(() => {
  //   getAllNotifications();
  // }, []);

  useEffect(() => {
    fetchNotifications();
  }, []);

  useEffect(() => {
    if (data && data.notifications) {
      setNotifications(data.notifications);
    }
  }, [data]);

  const fetchNotifications = async () => {
    try {
      setNotifications(data?.notifications);
      // console.log(response)
      // console.log(response.data)
      // console.log(response.data.notifications)
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const handleNotificationOpen = async () => {
    setNotificationOpen(!notificationOpen);
    setProfileOpen(false);
    if (!notificationOpen) {
      await fetchNotifications();
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await NotificationServices.updateStatus(id, { status: newStatus });
      // Update the status of the notification in the UI
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification._id === id ? { ...notification, status: newStatus } : notification
        )
      );
    } catch (error) {
      console.error("Error updating notification status:", error);
    }
  };

  const handleDeleteNotification = async (id) => {
    try {
      await NotificationServices.deleteNotification(id);
      // Remove the deleted notification from the UI
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification._id !== id)
      );
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  const handleLogOut = () => {
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("adminInfo");
    reduxDisPatch(emptySideBarMenu());
    reduxDisPatch(emptySetting());
    // Commented just for the frontend
    // window.location.replace(`https://${process.env.REACT_APP_ADMIN_DOMAIN}/login`);
    window.location.replace(`/login`);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!pRef?.current?.contains(e.target)) {
        setProfileOpen(false);
      }
      if (!nRef?.current?.contains(e.target)) {
        setNotificationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [pRef, nRef]);

  // const handleNotificationOpen = () => {
  //   setNotificationOpen(!notificationOpen);
  //   setProfileOpen(false);
  // };
  const handleProfileOpen = () => {
    setProfileOpen(!profileOpen);
    setNotificationOpen(false);
  };

  // const onChange = (event) => {
  //     i18next.changeLanguage(event.target.value);

  // }

  return (
    <>
      <header className="z-30 py-4 bg-white shadow-sm dark:bg-gray-800">
        <div className="container flex items-center justify-between h-full px-6 mx-auto text-green-500 dark:text-green-500">
          <button
            type="button"
            onClick={() => setNavBar(!navBar)}
            className="hidden lg:block outline-0 focus:outline-none"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          {/* <button onClick={handleAddNotification}>Add Notification</button> */}

          {/* <!-- Mobile hamburger --> */}
          <button
            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <IoMenu className="w-6 h-6" aria-hidden="true" />
          </button>
          <span></span>

          <ul className="flex justify-end items-center flex-shrink-0 space-x-6">
            <li className="changeLanguage">
              <div className="dropdown">
                <button className="dropbtn focus:outline-none">
                  {currentLanguageCode === "de" ? (
                    <img src={de} width={16} alt="lang" className="mx-2" />
                  ) : (
                    <img src={en} className="mx-2" alt="lang" width={16} />
                  )}
                  {currentLanguageCode === "de" ? "GERMAN" : "ENGLISH"}
                </button>

                <div className="dropdown-content">
                  <div
                    onClick={() => handleLanguageChange("en")}
                    className="focus:outline-none cursor-pointer"
                  >
                    <img src={en} width={16} alt="lang" /> English{" "}
                  </div>
                  <div
                    onClick={() => handleLanguageChange("de")}
                    className="focus:outline-none cursor-pointer"
                  >
                    <img src={de} width={16} alt="lang" /> German
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Theme toggler --> */}

            <li className="flex">
              <button
                className="rounded-md focus:outline-none"
                onClick={toggleMode}
                aria-label="Toggle color mode"
              >
                {mode === "dark" ? (
                  <IoSunny className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <IoMoonSharp className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </li>

            {/* <!-- Notifications menu --> */}
            {/* Notifications menu */}

            {/* <li className="relative inline-block text-left" ref={nRef}>
              <button
                className="relative align-middle rounded-md focus:outline-none"
                onClick={handleNotificationOpen}
              >
                <IoNotificationsSharp className="w-5 h-5" aria-hidden="true" />
                <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {notifications.length}
                </span>
              </button>
              {notificationOpen && (
                <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="notification-box">
                    <Scrollbars>
                      <ul className="block text-sm border-t border-gray-100 dark:border-gray-700 rounded-md">
                        {notifications.map((notification) => (
                          <li
                            key={notification._id}
                            className={`flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer ${notification.status === "unread" ? "font-medium" : ""
                              }`}
                          >
                            <div className="flex items-center">
                              <Avatar
                                className="p-1 mr-2 md:block bg-gray-50 border border-gray-200"
                                src={notification.image}
                                alt="image"
                              />
                              <div className="notification-content">
                                <h6 className="font-medium text-gray-500">{notification.message}</h6>
                                <p className="flex items-center text-xs text-gray-400">
                                  <Badge type={notification.status === "unread" ? "danger" : "success"}>
                                    {notification.status === "unread" ? "Unread" : "Read"}
                                  </Badge>
                                  <span className="ml-2">{notification.createdAt}</span>
                                </p>
                              </div>
                            </div>
                            <span className="px-2" onClick={() => handleDeleteNotification(notification._id)}>
                              <IoClose />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Scrollbars>
                  </div>
                </div>
              )}
            </li> */}

            <li className="relative inline-block text-left" ref={nRef}>
              <button
                className="relative align-middle rounded-md focus:outline-none"
                onClick={handleNotificationOpen}
              >
                <IoNotificationsSharp className="w-5 h-5" aria-hidden="true" />
                {notifications && (
                  <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {notifications.length}
                  </span>
                )}
              </button>
              {notificationOpen && (
                <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="notification-box"
                    style={{ maxHeight: `${notifications && notifications.length ? notifications.length * 5 : 0}rem` }}>
                    <Scrollbars>
                      <ul className="block text-sm border-t border-gray-100 dark:border-gray-700 rounded-md">
                        {notifications &&
                          notifications.map((notification) => (
                            <li
                              key={notification._id}
                              className={`flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer ${notification?.status === "unread" ? "font-medium" : ""}`}
                            >
                              <div className="flex items-center">
                                <Avatar
                                  className="p-1 mr-2 md:block bg-gray-50 border border-gray-200"
                                  src={notification?.image}
                                  alt="image"
                                />
                                <div className="notification-content">
                                  <h6 className="font-medium text-gray-500">{notification?.message}</h6>
                                  <p className="flex items-center text-xs text-gray-400">
                                    <Badge type={notification?.status === "unread" ? "danger" : "success"}>
                                      {notification?.status === "unread" ? "Unread" : "Read"}
                                    </Badge>
                                    <span className="ml-2">{notification?.createdAt}</span>
                                  </p>
                                </div>
                              </div>
                              <span className="px-2" onClick={() => handleDeleteNotification(notification._id)}>
                                <IoClose />
                              </span>
                            </li>
                          ))}
                      </ul>
                    </Scrollbars>
                  </div>
                </div>
              )}
            </li>


            {/* <!-- Profile menu --> */}
            <li className="relative inline-block text-left" ref={pRef}>
              <button
                className="rounded-full dark:bg-gray-500 bg-green-500 text-white h-8 w-8 font-medium mx-auto focus:outline-none"
                onClick={handleProfileOpen}
              >
                {/* Added or Modified by : 3/4/2023 */}

                {/* intially it was expecting it to have an objects and was not checking the admininfo to have the objects */}

                {/* previous logic */}

                {adminInfo.image ? (
                  <Avatar className="align-middle" src={`${adminInfo.image}`} aria-hidden="true" />
                ) : (
                  <span>{adminInfo.email[0].toUpperCase()}</span>
                )}

                {/* new logic */}

                {/* {adminInfo && adminInfo.image ? (
                  <Avatar className="align-middle" src={`${adminInfo.image}`} aria-hidden="true" />
                ) : (
                  <span>{adminInfo && adminInfo.email ? adminInfo.email[0].toUpperCase() : ''}</span>
                )} */}
              </button>

              {profileOpen && (
                <ul className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    <Link to="/dashboard">
                      <span className="flex items-center text-sm">
                        <IoGridOutline className="w-4 h-4 mr-3" aria-hidden="true" />
                        <span>{t("Dashboard")}</span>
                      </span>
                    </Link>
                  </li>

                  <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    <Link to="/edit-profile">
                      <span className="flex items-center text-sm">
                        <IoSettingsOutline className="w-4 h-4 mr-3" aria-hidden="true" />
                        <span>{t("EditProfile")}</span>
                      </span>
                    </Link>
                  </li>

                  <li
                    onClick={handleLogOut}
                    className="cursor-pointer justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  >
                    <span className="flex items-center text-sm">
                      <IoLogOutOutline className="w-4 h-4 mr-3" aria-hidden="true" />
                      <span>{t("LogOut")}</span>
                    </span>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
