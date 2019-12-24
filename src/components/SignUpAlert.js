import React, { Component } from 'react';


class SignUp extends Component {
    Constructor(props) {
        super();
        this.state = {
            display: 'none'
        };

        this.handleOnload = this.handleOnLoad.bind(this);
    }

    handleOnLoad() {
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

/* Need to apply filter to the background or layout so that it is blurred

Need to apply position: fixed to the form so that it is centered

Z-index needs to be applied to form so that it is above background*/