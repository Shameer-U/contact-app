import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import user from '../images/user.png';

const ContactDetails = (props) => {
    const { id } = useParams();
    const { ...data } = useLocation();
    const { state } = useLocation();
    console.log(id, data, state);

    const { name, email } = state.contact;

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="ui card centered" >
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{ name }</div>
                    <div className="description">{ email }</div>
                </div>
                <div className="center-div">
                    <Link to="/">
                        <button className="ui button blue center">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;