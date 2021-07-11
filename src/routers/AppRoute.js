import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
// import NonAdminRoute from './NonAdminRoute'
import Home from '../components/main/home/Home'
import Header from '../components/main/Header/Header';
import PageNotFound from '../components/main/PageNotFound';
import LoginContextProvider from '../contexts/loginContext';
import SearchFormPhone from '../components/main/search/SearchFormPhone';
import UserPage from '../components/user/UserPage'
import UserRoute from './UserRoute'
import LoginPhone from '../components/main/LoginPhone';
import NonUserRoute from './NonUserRoute'
import NewPost from '../components/user/newPost/NewPost';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <LoginContextProvider>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home" component={Home} />
                    <Route path="/search-form" component={SearchFormPhone} />
                    <NonUserRoute path='/login-page' component={LoginPhone} />
                    <UserRoute path='/user/profile' component={UserPage} />
                    <UserRoute path='/user/create-post' component={NewPost} />
                    <Route path='*' component={PageNotFound} />
                </Switch>
            </LoginContextProvider>
        </BrowserRouter>
    )
}

export default AppRoute

