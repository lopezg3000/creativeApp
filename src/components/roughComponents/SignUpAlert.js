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


/*Create a set of Radio Button
 Radio Buttons are used for questions where you want the user to only give you one answer
    out of multiple options
Radio Buttons are a type of input
Each Radio button is nested within its own label element. Don't know why but after this the label
    element will be associated with the input element
All releted radio buttons should have the same name attribute.
This creates a Radio button group.
Radio button groups make it so that if the user chooses one of the radio buttons the other
    radio buttons in that group are automatically deselected.
This ensures only one answer is provided by the user.
It is considered best practice to give the label element a for attribute that matches the
    id of the radio button input element. This allows assistive technology to create
    a linked relationship between the label and the child input element.
I have a feeling the label element would be like a container so that you can customize the input
    element. In react you don't use the name property because the conditional statement deselects
    the other options.
 */

/*Create a set of checkboxes

Forms commonly use checkboxes for questions that may have more than one answer.
Checkboxes are a type of input.
See Radio button because they work the same way.
*/