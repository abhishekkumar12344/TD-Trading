// // import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <AuthProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </AuthProvider>
// );



import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </AuthProvider>
);
