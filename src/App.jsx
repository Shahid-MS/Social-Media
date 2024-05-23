import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/Posts-list";
function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  //can also pass directly set selected tab
  const handleSelectedTab = (tabSelect) => {
    // console.log("selected : " + tabSelect);
    setSelectedTab(tabSelect);
  };

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar
            selectedTab={selectedTab}
            handleSelectedTab={handleSelectedTab}
          />
          <div className="content">
            <Navbar />
            {selectedTab === "home" ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
