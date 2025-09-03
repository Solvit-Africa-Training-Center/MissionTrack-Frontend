import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginFom";




function App(){
  

  return(
<div>
  <Routes>
    <Route path="/login" element={<LoginForm/>}>
  </Routes>
</div>
  );
}

export default App;
