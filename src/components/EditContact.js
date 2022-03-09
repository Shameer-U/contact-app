import React,{ useState } from "react";
import { useNavigate, useParams, useLocation, Link }  from "react-router-dom";

const EditContact = (props) => {
    const { state } = useLocation();
    console.log(props, state);
    const [editContact, editContactSetState ] = useState(state.contact);

    let navigate = useNavigate();
    
    const update = (e) => {
        e.preventDefault();
        if (editContact.name === "" || editContact.email === "") {
            alert("All the fields are mandatory");
            return;
        }
        
        props.updateContactHandler(editContact);
        editContactSetState({ id:"", name: "", email: ""});
        //console.log(this.props);
        navigate("../", { replace: true });
    }

    return (
        <div className="ui main">
                <h2>Edit Contact</h2>
                <form className="ui main" onSubmit={ update }>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="name"
                        value={ editContact.name }
                        onChange={ (e) =>  editContactSetState({ id:editContact.id, name: e.target.value, email: editContact.email })} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"
                    value={ editContact.email }
                    onChange={ (e) =>  editContactSetState({ id:editContact.id, name:editContact.name, email: e.target.value})} />
                </div>
                <button className="ui button blue" >Update</button>
                </form>
        </div>
    );
}


export default EditContact;