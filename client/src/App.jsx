import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import StockPage from "./components/StockPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PortfolioPage from "./components/PortfolioPage";
import LandingPage from "./components/LandingPage";
import { setUser } from "./store/authReducer";
import UserPage from "./components/UserPage";
import "./App.css";

const protectedRoute = ({ component: Component, loggedIn, ...rest }) => {
  if (loggedIn) return <Route {...rest} component={Component} />;
  else return <Redirect to="/landing" />;
};
const mapStateToProps = (state) => {
  return { loggedIn: !!state.auth.id };
};

const ConnectedProtectedRoute = connect(mapStateToProps, null)(protectedRoute);

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const loadUser = async () => {
      // enter your back end route to get the current user
      const res = await fetch("/api/users/current");
      if (res.ok) {
        res.data = await res.json(); // current user info - obj with key of user
        dispatch(
          setUser(
            res.data.userId,
            res.data.userEmail,
            res.data.userBalance,
            res.data.userLastName,
            res.data.userFirstName,
            res.data.userWatchlistId
          )
        );
      }
      setLoading(false);
    };
    loadUser();
  }, [dispatch]);
  if (loading) return null;
  return (
    <BrowserRouter>
      <Switch>
        <ConnectedProtectedRoute
          exact
          path="/"
          component={PortfolioPage}
        ></ConnectedProtectedRoute>
        <ConnectedProtectedRoute
          exact
          path="/stocks/:stockId"
          render={(props) => <StockPage {...props}></StockPage>}
        ></ConnectedProtectedRoute>

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/landing" component={LandingPage} />
        <ConnectedProtectedRoute
          exact
          path="/user/:userId"
          component={UserPage}
        ></ConnectedProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
