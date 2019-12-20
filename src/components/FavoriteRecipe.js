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
                <input type="text" placeholder="My Favorite Recipe is..." value={this.state.value} onChange={this.handleChange} />
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

*/