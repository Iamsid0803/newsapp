import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
//cb3a48cd30e746c59858b5e708dfcb5e
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
            element={
              <News
                pageSize="15"
                country="in"
                category="general"
                apiKey="091eefac3e214d6f9ba98c24f25ae2ac"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                key="sports"
                pageSize="9"
                country="in"
                category="sports"
                apiKey="091eefac3e214d6f9ba98c24f25ae2ac"
              />
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
                apiKey="091eefac3e214d6f9ba98c24f25ae2ac"
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
                apiKey="091eefac3e214d6f9ba98c24f25ae2ac"
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
                apiKey="091eefac3e214d6f9ba98c24f25ae2ac"
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
                apiKey="091eefac3e214d6f9ba98c24f25ae2ac"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                pageSize="9"
                key="health"
                country="in"
                category="health"
                apiKey="091eefac3e214d6f9ba98c24f25ae2ac"
              />
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
                apiKey="091eefac3e214d6f9ba98c24f25ae2ac"
              />
            }
          />
        </Routes>
        {console.log(process.env.REACT_APP_API_KEY)}
      </div>
    </BrowserRouter>
  );
}
