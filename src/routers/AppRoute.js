import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import AdminRoute from './AdminRoute';
import NonAdminRoute from './NonAdminRoute'
import AdminPage from '../components/admin/AdminPage'
import Home from '../components/main/home/Home'
import Header from '../components/main/Header/Header';
import LoginPage from '../components/main/LoginPage';
import PageNotFound from '../components/main/PageNotFound';
import LoginContextProvider from '../contexts/loginContext';
import SubHeader from '../components/main/Header/SubHeader';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <LoginContextProvider>
                <Header />
                <SubHeader />
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home" component={Home} />
                    <NonAdminRoute path='/login' component={LoginPage} />
                    <AdminRoute path='/admin/home' component={AdminPage} />
                    <Route path='*' component={PageNotFound} />
                </Switch>
            </LoginContextProvider>
        </BrowserRouter>
    )
}

export default AppRoute

