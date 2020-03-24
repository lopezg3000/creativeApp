import React, { Component } from 'react';


class FavoriteRecipe extends Component {
    constructor() {
        super();
        this.state = { value: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    };


    handleSubmit(e) {
        alert('Favorite Recipe Submitted: ' + this.state.value);
        e.preventDefault();
        this.setState({ value: '' });
        console.log(this.state.value);
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Let Us Know Your Favorite Recipe:
                <input type="text" placeholder="My Favorite Recipe is..." value={this.state.value} onChange={this.handleChange} required />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    };
};



export default FavoriteRecipe;




/* Create A Text Field

Input elements are a great way to get input from users.
Problems in react:
1. Create a <form> element with opening and closing tags as well as a label
   element with opening and closing tags
2. Within the label element, add a descriptive phrase before creating an input
   element.
3. Give input element props such as type and name.
4. After the label element, create another input element
5. Give this input element props such as type and value.

input elements are self closing
*/

/*Add Placeholder Text To A Field

Placeholder text is what is displayed before your user has inputted anything.
It is pretty much an attribute given to the input element.

*/

/* Create A Form Element

pure html can be used to build web forms that submit data to a server.
I still do not know how to use the action attribute or if it is necessary in react js.
I believe that the action attribute is replaced by something else in react js.
The action attribute specifies the url where one wishes to post the form data.
I think you might need a database but not sure.

*/

/* Add a Submit Button to a Form

First, Bind this to event handler function in the constructor, so that we have access to the class component's
state property.
Second, create the event handler functions outside the constructor and before the render method.
Third, reference the function in the return statement in curly brackets.
Fourth, use setState function to update the state.
e.preventDefault is used so that page is not refreshed.
this.state.value is set to an empty string in the handleSubmit method to reset the input field.


*/

/* Use html to Require a Field

The require attribute is used so that the user is not able to submit data unless he/she
has filled out the form field.
The required attribute is used within an input element.


*/