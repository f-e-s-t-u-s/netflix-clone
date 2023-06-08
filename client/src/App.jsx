
import './index.css';
import {Route, Routes} from'react-router-dom'
// import the home route  from the components

import Home from './components/home/Home';
// import the signup component from the homes folder
import Singin from './components/home/Singin';

import Trailer from './components/home/Trailers';
function App() {
  return (
    <div>

    
<Routes>
  {/* when someone visits http:localhost:3000 the home component will be shown */}
  <Route path='/' element={<Home></Home>}></Route>
{/* when someone visits http:localhost:3000/signup we show the signup component */}
{/* this 
is the component that you will be working on  it is found here components/home/Signin.jsx*/}
    <Route path='/signup' element={<Singin></Singin>}></Route>
    

<Route path='/trailers' element={<Trailer></Trailer>} ></Route>

    </Routes>
    </div>
  );
}

export default App;
