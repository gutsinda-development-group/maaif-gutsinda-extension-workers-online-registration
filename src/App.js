import React from "react";
import { CssBaseline, withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";

//import SignIn from "./components/authentication/SignUp";

//import Header from "./components/Layout/Header";
import OrganizationWizard from "./components/organization/OrganizationWizard";
import IndividualWizard from "./components/individual/IndividualWizard";

//import LandingPage from "./pages/home";

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      padding: 2 * theme.spacing.unit
    }
  }
});

const App = ({ classes }) => (
  <React.Fragment>
    <CssBaseline />
    {/*<Header />*/}
    <main className={classes.main}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/individual" component={IndividualWizard} />
        <Route path="/organization" component={OrganizationWizard} />
      </Switch>
    </main>
  </React.Fragment>
);

export default withStyles(styles)(App);
