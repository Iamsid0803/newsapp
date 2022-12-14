import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

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
    <div>
      <>
        <Navbar />
        <News />
      </>
    </div>
  );
}
