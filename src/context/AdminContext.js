import Cookies from 'js-cookie';
import React, { createContext, useReducer } from 'react';
export const AdminContext = createContext();

const initialState = {

  adminInfo: Cookies.get('adminInfo')
    ? JSON.parse(Cookies.get('adminInfo'))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      console.log('User logged in:', action.payload);

      return { ...state, adminInfo: action.payload };

    case 'USER_LOGOUT':
      console.log('User logged out');

      localStorage.clear();

      return {
        ...state,
        adminInfo: null,
      };

    default:
      return state;
  }
}

export const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };


  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};



// import Cookies from 'js-cookie';
// import React, { createContext, useReducer } from 'react';

// export const AdminContext = createContext();

// const initialState = {
//   adminInfo: Cookies.get('adminInfo') ? JSON.parse(Cookies.get('adminInfo')) : null,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'USER_LOGIN':
//       console.log('Reducer: User logged in'); // Log when USER_LOGIN action is dispatched
//       console.log('Reducer: Payload:', action.payload); // Log the payload
//       return { ...state, adminInfo: action.payload };
//     case 'USER_LOGOUT':
//       console.log('Reducer: User logged out'); // Log when USER_LOGOUT action is dispatched
//       localStorage.clear();
//       return { ...state, adminInfo: null };
//     default:
//       return state;
//   }
// }

// export const AdminProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   console.log('AdminProvider state:', state); // Log state changes

//   return (
//     <AdminContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AdminContext.Provider>
//   );
// };
