import "./index.css";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// import the home route  from the components
import Home from "./components/home/Home";
// import the signup component from the homes folder
import Singin from "./components/home/Singin";

import Trailer from "./components/home/Trailers";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Finish from "./components/home/Finish";
import Regform from "./components/home/Regform";
import { useState } from "react";
function App() {
  const [Notloaded, setLoaded] = useState(true);

  window.addEventListener("load", () => {
    setLoaded(false);
  });

  return (
    <div>
      {Notloaded === true && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      <Routes>
        {/* when someone visits http:localhost:3000 the home component will be shown */}
        <Route path="/" element={<Home></Home>}></Route>
        {/* when someone visits http:localhost:3000/signup we show the signup component */}
        {/* this 
is the component that you will be working on  it is found here components/home/Signin.jsx*/}
        <Route path="/login" element={<Singin></Singin>}></Route>

        <Route path="/trailers" element={<Trailer></Trailer>}></Route>
        <Route path="/create" element={<Finish></Finish>}></Route>
        <Route path="/create/regform" element={<Regform></Regform>}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
