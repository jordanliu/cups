import React, { Component } from 'react';
import { Input, Button } from 'antd';
//import { GlobalContext } from '../../context/GlobalState';//added
import { login } from '../../components/UserFunctions';
import './Login.css';


class Login extends Component {

    // const { dispatch } = React.useContext(GlobalContext);
    // const initialState = {
    //     email: "",
    //     password: "",
    //     isSubmitting: false,
    //     errorMessage: null
    // }
    // const [data, setData] = React.useState(initialState);
    // const handleInputChange = event =>{
    //     setData({
    //         ...data,
    //         [event.target.name]: event.target.value
    //     });
    // };
    // const handleFormSubmit = event => {
    //     event.preventDefault();
    //     setData({
    //         ...data,
    //         isSubmitting: true,
    //         errorMessage: null
    //     });        
    // }

    // login(user).then(res => {
    //     if(res){
    //         this.props.history.push('order-confirmed')
    //     }
    // })
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        };
    }

    onChange = e =>{
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e =>{
        e.preventDefault();
    const userData = {
        email: this.state.email,
        password: this.state.password
    };

    login(userData).then(res => {
        if(res){
            this.props.history.push(`/menu`)
        }
    })
    
    console.log(userData)
    };

    render (){
        const { errors } = this.state;
        return (
            <div>
                <h1 className="login-title">CUPS</h1>
                <div className="login-wrapper">
                    <h2>Log in</h2>
                    <form noValidate onSubmit={this.onSubmit}>
                        <Input 
                            placeholder="Email"
                            value = {this.state.email}
                            onChange = {this.onChange}
                            error = { errors.email }
                            name = "email"
                            id = "email"
                            type = "text"
                            required
                        /> <br/> 
                        <Input 
                            placeholder="Password"
                            value = {this.password}
                            onChange = {this.onChange}
                            error = { errors.password }
                            name = "password"
                            id = "password"
                            type = "password"
                            required
                        />
                        <Button 
                                type="submit"
                                value = "Submit"
                                // disabled = {data.isSubmitting}
                            >
                                {/* {data.isSubmitting ? (
                                    "Loading..."
                                ) : ( "Login" )
                            } */}
                        </Button>
                            
                        
                    </form>
                </div>
            </div>
        );
    };
    }
    

export default Login;
