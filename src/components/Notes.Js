/* Use Value Attribute with Radio Buttons and Checkboxes

When a form is submitted, the data is sent to the server and includes entries for
    options selected.
Inputs of the radio and checkbox report their values from the value attribute.
When a form is submited, the form data will include the name and the value attribute of
    the option selected.
Default value attribute is set to on, which isn't very helpfule, so the value attribute
    needs to be set to something to identify the option.

*/

/*Check Radio Button and Checkboxes by Default

Checkboxes and radio buttons can be checked by default by using the checked attribute.
Just add the "checked" to the inside of an input element.

Need to learn how to set them in react.
Can only Check one radio button or checkmark with the checked attribute?

*/

/*Nest Many Elements within a Single Div Element

The div element, which is also known as the division element, is a general purpose
    container for other elements.

*/

/*Declare the DOCTYPE of an html Document

Give structure to an html document
<DOCTYPE html>
<html></html>
 */


/*Define the Head and Body of an HTML Document

Used to add more organization to an html document
Any markup with information about the page would go in the head tag.
Any markup with the content of the page goes in the body tag.
Metadata elements, such as link, meta, title, and style, goes in the head tag.
*/

CSS

/* Change the Color of Text

We can change the color of text by changing the style of our element.
The property that is responsible for the color of an element text is the
    color style property.
example: <h2 style=" color: red;">Born to Be Wild</h2>
It is good practice to end a style declaration with a semicolon.

*/

/*Use CSS Selectors to Style Elements

1. Create a style block.
2. Create a CSS selector for a type of element e.g. h2
    All elements of that type would have the style.
You should have opening and closing curly braces ({ and }) around each element's style rules.
Also make sure your element's style definition is between the opening and closing style tags.
Be sure to add a semi colon to the end of each of your element's style rules.
example: <style>
            h2 {
                color: red;
            }
        </style
*/

/* Use a CSS Class to Style an Element

Classes are reusable styles that can be added to html elements.
In CSS Style element, class names start with a period.
In html elements' class attribute, the class name does not include the period.
Example: CSS class declaration
            <style>
            .blue-text {
                color: blue;
            }
            </style>

Example to apply CSS class to an html element
            <h2 class="blue-text">Cat Photo APP</h2>

*/

/*Style Multiple Elements with a CSS Class

Classes allow you to use the same CSS styles on multiple html elements.

*/

/*Change the font size of an Element

Font Size is controlled by the font-size CSS property.

*/

/*Set The Font Family of an Element

Set which font an element should use by using the font-family property.

*/

/*Import a Google Font

Software developers can specify non-standard, custom web fonts for use on a website.
Google Fonts is a free library of web fonts that you can use in your CSS by
    referencing the font's URL.
To import a Google font, you can copy the font's URL from the Google Font's library and
    then paste it in your HTML.
Example Code: <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
Paste this code at the top of the html document.
Use the font in CSS by implementing the following code:
    font-family: FAMILY_NAME, GENERIC_NAME;
Family name should be set to the family value, which can be found in the google font's URL.
The GENERIC_NAME is optional, and is a fallback font in case the other specified font
    is not available.
Family names are case-sensitive and need to be wrapped in quotes if there is a space
    in the name.
For example, you need quotes to use the "Open Sans" font, but not to use the Lobster font.


*/

/*Specify How Fonts Should Degrade

There are several default fonts that are available in all browsers.
These generic font families include monospace, serif, and sans-serif.
When one font is not available, you can tell the browser to "degrade" to another font.
Example code: p { font-family: Helvetica, sans-serif;}.
Generic font family names are not case-sensitive.
Also, they do not need quotes because they are css keywords.

*/

/*Size Your Image

CSS has a property called width that controls an element's width.
Like fonts, px (pixels) can be used to specify the image's width.
Example Code: .smaller-image { width: 100px;}

*/

/*Add Borders Around Your Elements

CSS borders have properties like style, color, and width.
Example Code: .thin-red-properties { border-color: red;
border-width: 5px; border-style: solid;}
Multiple classes can be applied to an element using its class attribute.
Simply, separate each class name with a space.
Example Code: <img class="class1 class2">

*/

/*Add Rounded Corners With Border-Radius

border-radius is a CSS property that can be used to round out corners.
px can be used to specify how the rounded corners will appear.
Example Code: .thick-green-border { border-radius: 10px;}

*/