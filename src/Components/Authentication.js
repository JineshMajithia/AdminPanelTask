import React, { Component } from 'react';
import Homepage from './Homepage'
import Calendar from 'react-calendar'

class Authentication extends Component {

    state = {
        first_name: "",
        last_name: "",
        gender: "male",
        phone: "",
        password: "",
        confirm_password: "",
        institution_name: "",
        course: "",
        percentage: "",
        start_date: "",
        end_date: "",
        isRegister: false,
        isNext: false,
        isLoggedIn: false,
        isForgotPassword: false
    }
    Login() {
        console.log('state', this.state);
        let data = localStorage.getItem('userdata');
        data = JSON.parse(data);
        console.log(this.state.password);
        let email = this.state.email.toString();
        let pass = this.state.password.toString();
        if (pass === data.password && email === data.email) {
            this.setState({ isLoggedIn: true });
        }
        else {
            alert("Login invalid.");
        }
        console.log(data);
    }
    Register() {
        console.log('state', this.state);
        if (this.state.institution_name !== "" && this.state.percentage !== "" && this.state.start_date !== "" && this.state.end_date !== "") {
            localStorage.setItem('userdata', JSON.stringify(this.state));
            this.setState({ isNext: false, isRegister: false });
            alert("User is registered.");
        }
        else {
            alert("Please fill all the details.");
        }
    }
    Next() {
        console.log('state in next', this.state);
        if (this.state.password !== "" && this.state.password === this.state.confirm_password && this.state.first_name !== "" && this.state.last_name !== ""
            && this.state.gender !== "" && this.state.email !== "" && this.state.phone.length === 10) {
            this.setState({ isNext: true })
        }
        else if (this.state.password !== this.state.confirm_password) {
            alert("Passwords are different.");
        }
        else if (this.state.phone.length !== 10) {
            alert("Please correct you phone number.")
        }
        else {
            alert("Enter all the details.");
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.isForgotPassword ?
                        <div>

                        </div>
                        :
                        this.state.isLoggedIn ?
                            <div>
                                <Homepage />
                                <button onClick={() => { this.setState({ isLoggedIn: false }) }}>Log Out</button>
                            </div>
                            :
                            !this.state.isRegister ?
                                <div>
                                    <input type="text" placeholder="email" onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />
                                    <input type="text" placeholder="password" onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />
                                    <button onClick={() => this.Login()}>Login</button>
                                    <button onClick={() => this.setState({ isRegister: true })}>Go To Register</button><br /><br />
                                    <button onClick={() => this.setState({ isForgotPassword: true })}>Forgot Password</button>
                                </div>
                                : !this.state.isNext ?
                                    <div>
                                        <input type="text" placeholder="first_name" onChange={(e) => { this.setState({ first_name: e.target.value }) }} value={this.state.first_name} /><br /><br />
                                        <input type="text" placeholder="last_name" onChange={(e) => { this.setState({ last_name: e.target.value }) }} value={this.state.last_name} /><br /><br />
                                        <input type="text" placeholder="gender" onChange={(e) => { this.setState({ gender: e.target.value }) }} value={this.state.gender} />
                                        <select placeholder="gender" defaultValue="male" onChange={(e) => { this.setState({ gender: e.target.value }) }}>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select><br /><br />
                                        <input type="text" placeholder="email" onChange={(e) => { this.setState({ email: e.target.value }) }} value={this.state.email} /><br /><br />
                                        <input type="text" placeholder="phone" onChange={(e) => { this.setState({ phone: e.target.value }) }} value={this.state.phone} /><br /><br />
                                        <input type="text" placeholder="password" onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} /><br /><br />
                                        <input type="text" placeholder="confirm_password" onChange={(e) => { this.setState({ confirm_password: e.target.value }) }} value={this.state.confirm_password} /><br /><br />
                                        <button onClick={() => this.setState({ isRegister: false })}>Go To Login</button>
                                        <button onClick={() => this.Next()}>Next</button>
                                    </div>
                                    :
                                    <div>
                                        <input type="text" placeholder="institution_name" onChange={(e) => { this.setState({ institution_name: e.target.value }) }} value={this.state.institution_name} /><br /><br />
                                        <input type="text" placeholder="percentage" onChange={(e) => { this.setState({ percentage: e.target.value }) }} value={this.state.percentage} /><br /><br />
                                        <input type="text" placeholder="course" onChange={(e) => { this.setState({ course: e.target.value }) }} value={this.state.course} /><br /><br />
                                        <input type="date" placeholder="start_date" onChange={(e) => { this.setState({ start_date: e.target.value }) }} value={this.state.start_date} /><br /><br />
                                        <input type="date" placeholder="end_date" onChange={(e) => { this.setState({ end_date: e.target.value }) }} value={this.state.end_date} /><br /><br />
                                        <button onClick={() => this.setState({ isNext: false })}>Back</button>
                                        <button onClick={() => this.Register()}>Register</button>
                                    </div>
                }
            </div>
        );
    }
}
export default Authentication;