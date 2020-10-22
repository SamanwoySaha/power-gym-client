import React from 'react';
import './Membership.css';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import PaymentDetails from '../PaymentDetails/PaymentDetails';

const Membership = () => {
    return (
        <div>
            <h1>this is membership</h1>
            <PersonalDetails></PersonalDetails>
            <PaymentDetails></PaymentDetails>
        </div>
    );
};

export default Membership;