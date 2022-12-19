import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <Navbar />
//         <News />
//       </>
//     );
//   }
// }
// import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            key="home"
            element={<News pageSize="9" country="in" category="general" />}
          />
          <Route
            path="/sports"
            element={
              <News key="sports" pageSize="9" country="in" category="sports" />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                pageSize="9"
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                pageSize="9"
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                key="general"
                pageSize="9"
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="entertainment"
            element={
              <News
                pageSize="9"
                key="entertainment"
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News pageSize="9" key="health" country="in" category="health" />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                pageSize="9"
                key="technology"
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
