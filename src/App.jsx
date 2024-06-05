import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import PostListProvider from "./Store/Posts-list";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar />
          <div className="content">
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
