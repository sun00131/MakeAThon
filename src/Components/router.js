import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import MainPage from "Routes/MainPage";
import Introduce from "Routes/Introduce";
import Online from "Routes/Online";
import EduDetail from "Routes/EduDetail";
import EduForm from "Routes/EduForm";


const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/introduce" exact component={Introduce} />
      <Route path="/online" exact component={Online} />
      <Route path="/online/:id" exact component={EduDetail} />
      <Route path="/eduForm" exact component={EduForm} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
export default Router;
