import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from './../components/Header';
import Footer from '../components/Footer';

export const PrivateRoute = (
        {isAuthenticated, 
        component: Component,
        ...rest
}) => (
    <Route {...rest} component = {(props) => (
            <div>{props.headerVis !==false?<Header/>:''}<Component  {...props} /><Footer/></div>
    )}/>
);

const mapStateToProps = (state) =>({
    isAuthenticated : !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);