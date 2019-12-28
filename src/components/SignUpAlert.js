import React, { Component } from 'react';


class SignUp extends Component {
    constructor(props) {
        super();
        this.state = { signUp: 'YES' };

        this.handleSignUpChange = this.handleSignUpChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSignUpChange(e) {
        this.setState({ signUp: e.target.value });
        console.log()
    }

    handleSubmit(e) {
        alert('Sign Up: ' + this.state.signUp);
        console.log(this.state.signUp);
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
                <input type="submit" value="Submit" />
            </form>
        );
    };

};

export default SignUp;

/* Need to apply filter to the background or layout so that it is blurred

Need to apply position: fixed to the form so that it is centered

Z-index needs to be applied to form so that it is above background*/