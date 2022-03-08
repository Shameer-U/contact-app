import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

// class AddContact extends React.Component {
//     state = {
//         name: "",
//         email: "",
//     };

//     add = (e) => {
//         e.preventDefault();
        
//         if (this.state.name === "" || this.state.email === "") {
//             alert("All the fields are mandatory");
//             return;
//         }
        
//         this.props.addContactHandler(this.state);
//         this.setState({ name:"", email: ""});

//         /*
//         "this.props.history.push('/url');"
//         for this redirection code to work  this should be a "component" instead of an "element" in App.js 
//         */
//     }

//     render() {
//         return (
//             <div className="ui main">
//                  <h2>Add Contact</h2>
//                  <form className="ui main" onSubmit={this.add}>
//                     <div className="field">
//                         <label>Name</label>
//                         <input type="text" name="name" placeholder="name"
//                          value={this.state.name}
//                          onChange={ (e) =>  this.setState({name: e.target.value})} />
//                     </div>
//                     <div className="field">
//                         <label>Email</label>
//                         <input type="text" name="email" placeholder="Email"
//                         value={this.state.email}
//                         onChange={ (e) =>  this.setState({email: e.target.value})} />
//                     </div>
//                     <button className="ui button blue" >Add</button>
//                  </form>
//             </div>
//         );
//     }
// }


const AddContact = (props) => {
    
    const [addContact, addContactSetState ] = useState({ name:"", email: ""});

    let navigate = useNavigate();
    
    const add = (e) => {
        e.preventDefault();
        if (addContact.name === "" || addContact.email === "") {
            alert("All the fields are mandatory");
            return;
        }
        
        props.addContactHandler(addContact);
        addContactSetState({ name:"", email: ""});
        //console.log(this.props);
        navigate("../", { replace: true });
    }

    return (
        <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui main" onSubmit={ add }>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="name"
                        value={ addContact.name }
                        onChange={ (e) =>  addContactSetState({name: e.target.value, email: addContact.email })} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"
                    value={ addContact.email }
                    onChange={ (e) =>  addContactSetState({ name:addContact.name, email: e.target.value})} />
                </div>
                <button className="ui button blue" >Add</button>
                </form>
        </div>
    );
}


export default AddContact;