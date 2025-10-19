import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRoutes from "./AppRoutes";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClos={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <AppRoutes />
    </>
  );
}

export default App;
