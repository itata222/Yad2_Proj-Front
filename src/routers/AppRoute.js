import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import AdminRoute from './AdminRoute';
// import NonAdminRoute from './NonAdminRoute'
import AdminPage from '../components/admin/AdminPage'
import Home from '../components/main/home/Home'
import Header from '../components/main/Header/Header';
import PageNotFound from '../components/main/PageNotFound';
import LoginContextProvider from '../contexts/loginContext';
import SearchFormPhone from '../components/main/search/SearchFormPhone';

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
                    <AdminRoute path='/admin/home' component={AdminPage} />
                    <Route path='*' component={PageNotFound} />
                </Switch>
            </LoginContextProvider>
        </BrowserRouter>
    )
}

export default AppRoute

