// import { useAuth } from "./context/AuthContext";
// import EmployeeDashboard from "./pages/EmployeeDashboard"
// import LoginForm from "./pages/LoginFom"


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


function App() {

  return (
    <>
     
     <LandingPage/>  
    </>
  )
}

export default App