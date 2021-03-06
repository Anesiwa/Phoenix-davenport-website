import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
  Hero,
  SpecialEvents,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <div className="container">
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />}>
          <Route path="" element={<Posts />} />
          <Route path=":postSlug" element={<Post />} />
        </Route>
        <Route path="/SpecialEvents" element={<SpecialEvents />} />
      </Routes>
    </div>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
