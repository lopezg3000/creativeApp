import React, { Component } from 'react';


class SignUp extends Component {
    Constructor(props) {
        super();
        this.state = {};

        this.handleOnload = this.handleOnLoad.bind(this);
    }

    handleOnLoad() {
        setTimeout
    }

    render() {
        return (
            <form onLoad={this.handleOnLoad}>
                <h1>Determined to stay healthy?</h1>
                <label for='yes-no'>
                    <input id='yes' type='radio' name='yes-no'>Yes, sign me up to your newsletter</input>
                </label>
                <label for='yes-no'>
                    <input id='no' type='radio' name='yes-no'>No, I can't commit to a healthy lifestyle </input>
                </label>
            </form>
        );
    };

};

export default SignUp;
