import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Setting from './pages/Settings/Setting';
import HomeTemplate from './Template/HomeTemplate/HomeTemplate';
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_REGISTER, ROUTE_PROFILE, ROUTE_SETTINGS, ROUTE_CREATE_ARTICLES, ROUTE_ARTICLE } from './route/path';
import CreateArticles from './pages/Article/CreateArticles/CreateArticles';
import EditArticle from './pages/Article/EditArticles/EditArticle';
import DetailsArticle from './pages/Article/DetailsActicle/DetailsArticle';

export const history = createBrowserHistory({ forceRefresh: true });
export default function App() {
  return (
    <Router history={history}  >
      <Switch >
        <HomeTemplate path={ROUTE_HOME} exact Component={Home} />
        <HomeTemplate path={ROUTE_LOGIN} exact Component={Login} />
        <HomeTemplate path={ROUTE_REGISTER} exact Component={Register} />
        <HomeTemplate path={`${ROUTE_PROFILE}/:username`} exact Component={Profile} />
        <HomeTemplate path={ROUTE_SETTINGS} exact Component={Setting} />
        <HomeTemplate path={ROUTE_CREATE_ARTICLES} exact Component={CreateArticles} />
        <HomeTemplate path={`${ROUTE_CREATE_ARTICLES}/:articleId`} exact Component={EditArticle} />
        <HomeTemplate path={ROUTE_ARTICLE} exact Component={DetailsArticle} />



        <HomeTemplate path='/home' exact Component={Home} />
      </Switch>
    </Router >
  )
}
