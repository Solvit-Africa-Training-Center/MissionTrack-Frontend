

// import AppRoute from "./Router/AppRoute";


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
  // import Settings from "./pages/Settings"


function App() {

  return (
    <>
     
      <LandingPage/> 
     {/* <Settings/>   */}
    </>
  )
}

export default App
// =======
// function App() {

//   return (
//     <AppRoute/>
//   );
// }

// export default App;

