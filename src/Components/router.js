import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import MainPage from "Routes/MainPage";
import Introduce from "Routes/Introduce";
import Online from "Routes/Online";
import EduDetail from "Routes/EduDetail";
import EduForm from "Routes/EduForm";
import Company from "Routes/Company";
import Address from "Routes/Address";
import Field from "Routes/Field";
import History from "Routes/History";


const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/introduce" exact component={Introduce} />
      <Route path="/online" exact component={Online} />
      <Route path="/online/:id" exact component={EduDetail} />
      <Route path="/eduForm" exact component={EduForm} />
      <Route path="/company" exact component={Company} />
      <Route path="/address" exact component={Address} />
      <Route path="/field" exact component={Field} />
      <Route path="/history" exact component={History} />

      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
export default Router;
