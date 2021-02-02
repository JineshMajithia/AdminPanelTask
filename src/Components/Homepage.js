import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

class HomePage extends Component {

    state = {
        isPersonalFlag: false,
        isEducationFlag: false
    }
    personal() {
        this.setState({ isPersonalFlag: true });
        this.setState({ isEducationFlag: false })
    }
    educational() {
        this.setState({ isEducationFlag: true });
        this.setState({ isPersonalFlag: false });
    }
    render() {
        let data = localStorage.getItem('userdata');
        data = JSON.parse(data);
        return (
            <div>
                <p>Welcome {data.first_name} {data.last_name}.</p><br /><br />
                <button onClick={() => this.personal()}>Personal Details</button><br /><br />
                <button onClick={() => this.educational()}>Educational Details</button><br /><br />
                {
                    this.state.isPersonalFlag ?
                        <div>
                            <p>FirstName: {data.first_name}</p><br /><br />
                        </div>
                        :
                        <div></div>
                }
                {
                    this.state.isEducationFlag ?
                        <div>
                            <p>Institution Name: {data.institution_name}</p><br /><br />
                        </div>
                        :
                        <div></div>
                }
            </div>
        );
    }
}

export default HomePage;