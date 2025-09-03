

// import { useAuth } from "./context/AuthContext";
// import EmployeeDashboard from "./pages/EmployeeDashboard"
// import LoginForm from "./pages/LoginFom"
// >>>>>>> c2b23ad5f3d83a116519837d5e3488b74def4770

// import AppRoute from "./Router/AppRoute";

// <<<<<<< HEAD
// function App() {

//   return (
//     <AppRoute/>
//   );
// }

// export default App;

// const App: React.FC = () => {
//   const { user } = useAuth();

//   return user ? (
//     <EmployeeDashboard />  // ← Shows when logged in
//   ) : (
//     <LoginForm />          // ← Shows when not logged in
//   );
// };

// export default App


 import LandingPage from "./pages/LandingPage" 
//   // import Settings from "./pages/Settings"


function App() {

  return (
    <>
     
      <LandingPage/> 
     {/* <Settings/>   */}
    </>
  )
}

export default App

