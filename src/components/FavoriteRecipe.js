import React from 'react';

const FavoriteRecipe = () => {
    return (
        <form>
            <lablel>
                Let Us Know Your Favorite Recipe:
                <input type="text" favoriteRecipe="favoriteRecipe" />
            </lablel>
            <input type="submit" value="Submit" />
        </form>
    );
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

*/