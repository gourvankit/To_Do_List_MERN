import Login from "./Login/Login";
import { Route, Redirect, Switch } from "react-router-dom";
import "./index.css";
import Home from "./Home/Home";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Edit from "./Edit/Edit";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Switch>
        <Route exact path="/">
          {!user ? <Login /> : <Redirect to="/home"></Redirect>}
        </Route>

        <Route exact path="/home">
          {user ? <Home /> : <Redirect to="/"></Redirect>}
        </Route>
        <Route exact path="/update">
          {user ? <Edit /> : <Redirect to="/"></Redirect>}
        </Route>
      </Switch>
    </>
  );
}

export default App;
