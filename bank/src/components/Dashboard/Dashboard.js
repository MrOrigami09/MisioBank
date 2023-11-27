import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../../actions/authActions2';
import Header from '../Header/Header';
import Aside from '../Datos/datos';
import Section from '../Transaccion/transaction';
import './Dashboard.css';


const Dashboard = ({ isAuthenticated, loginSuccess, loginFailure }) => {
 
    return (
      <div className="dashboard-container">
        <Header />
        <h1>DASHBOARD</h1>
        <Aside />
        <Section />
      </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated,
});
  
export default connect(mapStateToProps, { loginSuccess, loginFailure })(Dashboard);