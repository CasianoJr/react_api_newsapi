import React from "react";
import Routes from "./shared/Routes";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./navs/NavigationBar";
import NewsProvider from "./news/NewsProvider";
import Prefetch from "./shared/Prefetch";
import BackToTop from "./shared/BackToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <NewsProvider>
        <Prefetch />
        <NavigationBar />
        <Routes />
        <BackToTop />
      </NewsProvider>
    </BrowserRouter>
  );
}

export default App;
