import React from 'react';
import logo from './logo.svg';
import Table from "./Action/Containers/Table";
import CreateToDo from "./Action/Containers/CreateToDo";

function App() {
  return (
    <div>
      <CreateToDo />
      <Table />
    </div>
  );
}

export default App;
// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useHistory,
//   useLocation,
// } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {
//   Nav, Navbar, NavbarBrand, NavLink, Form, FormControl, Button
// } from 'react-bootstrap';

// export default function Soal() {
//   return (
//     <Router>
//       <div>
//         <Navbar bg="dark" variant="dark">
//           <NavbarBrand className="fa fa-cutlery"></NavbarBrand>
//           <Nav className="w-20">
//             <NavLink className="">
//               <Link className="text-white" to="/home" style={{ textDecoration: "none" }}><Button variant="light">Beli</Button></Link>
//             </NavLink>
//             <NavLink className="">
//               <Link className="text-white" to="/about" style={{ textDecoration: "none" }}>
//                 <Form inline="true">
//                   <Button variant="dark">About</Button>
//                 </Form>
//               </Link>
//             </NavLink>
//           </Nav>
//         </Navbar>

//         <Switch>
//           <Route path="/about">
//             <PublicPage />
//           </Route>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <PrivateRoute path="/home">
//             <ProtectedPage />
//             <Switch>
//               <AuthButton />
//             </Switch>
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//   );
// }


// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(callBack) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(callBack, 100);
//   },
//   signout(callBack) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(callBack, 100);
//   }
// };

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//       <button className="btn btn-danger d-flex m-auto"
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/about"));
//       }}
//       >


//         Sign out
//       </button>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// function PrivateRoute({ children, ...rest}) {
//   return (
//     <Route
//     {...rest}
//     render={({ location }) => 
//       fakeAuth.isAuthenticated ? (
//         children
//       ) : (
//       <Redirect
//       to={{
//         pathname: "/login",
//         state: { from: location }
//       }}
//     />
//   )
// }
// />
//   );
// }

// function ProtectedPage() {
//   return (
//     <div className="w-100 container">
//       <div className="row">
//         <Image nama="Orundum Arknights 100 " harga="Rp.10.000" detail="100 Orundum" />
//         <Image nama="Orundum Arknights 1000 " harga="Rp.100.000" detail="1000 Orundum" />
//         <Image nama="Orundum Arknights 100 " harga="Rp.10.000" detail="100 Orundum" />
//         <Image nama="Orundum Arknights 1000 " harga="Rp.100.000" detail="1000 Orundum" />
//         <Image nama="Orundum Arknights 1000 " harga="Rp.100.000" detail="1000 Orundum" />
//         <Image nama="Orundum Arknights 1000 " harga="Rp.100.000" detail="1000 Orundum" />
//       </div>
//     </div>
//   )
// }

// function PublicPage() {
//   return (
//     <div className="w-50 text-center cover-container d-flex h-100 p-3 mx-auto flex-column">
//       <main role="main" class="inner cover">
//         <h1 class="cover-heading">Web Topup Orundum Game Arknights</h1>
//         <p class="lead">Web Topup Orundum Game Arknights</p>
//       </main>
//     </div>
//   )
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/"} };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>Anda harus melakukan terlebih dahulu</p>
//       <button className="btn btn-success" onClick={login}>Log in</button>
//     </div>
//   );
// }

// function Image(props){
//   return(
//     <div className="col col-sm-2 portofolio-item mt-4">
//       <div className="card h-100">
//           <img src="https://thumbs.dreamstime.com/b/voucher-isolated-icon-simple-element-illustration-payment-concept-icons-editable-logo-sign-symbol-design-white-background-142291110.jpg" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
//           <div className="card-body">
//               <h4 className="card-title w-100 float-left">{props.nama}</h4>
//               <h5 className="card-title w-100 text-warning">{props.harga}</h5>
//               <hr/>
//               <p className="card-text">{props.detail}</p>
//           </div>
//       </div>
//     </div>
//   )
// }
