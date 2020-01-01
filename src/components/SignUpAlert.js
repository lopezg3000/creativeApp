import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


class SignUp extends Component {
    constructor(props) {
        super();
        this.state = {
            signUp: 'YES',
            linkTo: '/'
        };


        this.handleSignUpChange = this.handleSignUpChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.state.linkTo);
    }

    handleSignUpChange(e) {
        this.setState({ signUp: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.signUp === 'YES') {
            return this.props.history.push('/SignUpSuccess')
        } else {
            return this.props.history.push('/HomePage');
        };
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Determined to stay healthy?</h1>
                <label>
                    Yes, sign me up to your newsletter
                    <input
                        value="YES"
                        name="signUp"
                        onChange={this.handleSignUpChange}
                        type='radio' defaultChecked />
                </label>
                <label>
                    No, I can't commit to a healthy lifestyle
                    <input
                        value="NO"
                        name="signUp"
                        checked={this.state.signUp === 'NO'}
                        onChange={this.handleSignUpChange}
                        type='radio' >
                    </input>
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    };

};

export default withRouter(SignUp);

/* Need to apply filter to the background or layout so that it is blurred

Need to apply position: fixed to the form so that it is centered

Z-index needs to be applied to form so that it is above background*/