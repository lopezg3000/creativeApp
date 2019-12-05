import React from "react"

const person = {
    name: "Gabriel Lopez",
    city: "Houston",
    state: "Texas"
};

const { name: fullname, city, state, age: years = 25 } = person;

const About = () => {
    return (
        <div>
            <p id="home">Hello, my name is {fullname} and I am a {years} year old from {city}, {state}. I created this application in order to help people decide what store to shop at for the cheapest vegetables. Vegetables can be very pricey and hopefully this application can help customers save money. </p>
            <p>If you want to find out more about my work then check out my <a target="_blank" href="https://www.lopezgabriel.com" rel="noopener noreferrer">portfolio page</a>.</p>
        </div>
    );
};

/*Used object desturcturing to create a little blurb about my app.*/

export default About;