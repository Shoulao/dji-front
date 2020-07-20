import React from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from "react-router-dom";
// import { history } from "../_helpers/history";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
// import { alertActions } from "../_actions/alert.actions";

function App() {
  // const alert = useSelector(state => state.alert);
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   history.listen((location, action) => {
  //     // clear alert on location change
  //     dispatch(alertActions.clear());
  //   });
  // }, []);
  return (
    <React.Fragment>
      <Header />
      {/* {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>} */}
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
