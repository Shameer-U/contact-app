import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory");
            return;
        }
        
        this.props.addContactHandler(this.state);
        this.setState({ name:"", email: ""});
        //console.log(this.props);
    }

    render() {
        return (
            <div className="ui main">
                 <h2>Add Contact</h2>
                 <form className="ui main" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name"
                         value={this.state.name}
                         onChange={ (e) =>  this.setState({name: e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"
                        value={this.state.email}
                        onChange={ (e) =>  this.setState({email: e.target.value})} />
                    </div>
                    <button className="ui button blue" >Add</button>
                 </form>
            </div>
        );
    }
}

/*
const AddContact = (props) => {
    // let state = {
    //     name: "",
    //     email: "",
    // };

    const [state, setState] = useState([]);
    
    const add = (e) => {
        e.preventDefault();
        if (state.name === "" || state.email === "") {
            alert("All the fields are mandatory");
            return;
        }
        
        this.props.addContactHandler(this.state);
        this.setState({ name:"", email: ""});
        //console.log(this.props);
    }

    return (
        <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui main" onSubmit={ add }>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="name"
                        value={ state.name }
                        onChange={ (e) =>  setState({name: e.target.value})} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"
                    value={ state.email }
                    onChange={ (e) =>  setState({email: e.target.value})} />
                </div>
                <button className="ui button blue" >Add</button>
                </form>
        </div>
    );
}
*/

export default AddContact;