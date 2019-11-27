import React from "react"
import Recipe from "../Img/recipe.jpg"

const Heading = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <h2>Healthy Food Recipes App</h2> {/*Looking for new title*/}
            <main>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros arcu, aliquet vel efficitur non, feugiat mollis eros. Donec mi magna, eleifend vel auctor ac, rhoncus vel purus. Vivamus maximus libero at sem pharetra facilisis. Sed aliquam, risus et pulvinar rhoncus, dui mi vestibulum nulla, at tempor ante ante non augue. Quisque id tempus risus. Aenean mattis purus at imperdiet dictum. Nullam lacinia dictum risus, suscipit scelerisque lorem dictum ut. Ut vitae tortor odio. Curabitur pretium lacinia risus, eget dictum risus porta ac. Nam pretium lobortis felis. Mauris euismod magna nec purus ullamcorper dignissim.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros arcu, aliquet vel efficitur non, feugiat mollis eros. Donec mi magna, eleifend vel auctor ac, rhoncus vel purus. Vivamus maximus libero at sem pharetra facilisis. Sed aliquam, risus et pulvinar rhoncus, dui mi vestibulum nulla, at tempor ante ante non augue. Quisque id tempus risus. Aenean mattis purus at imperdiet dictum. Nullam lacinia dictum risus, suscipit scelerisque lorem dictum ut. Ut vitae tortor odio. Curabitur pretium lacinia risus, eget dictum risus porta ac. Nam pretium lobortis felis. Mauris euismod magna nec purus ullamcorper dignissim.</p>
            </main> {/*descriptive html tag. Helps with SEO and accessibility*/}
            <a href="https://www.delish.com/cooking/recipe-ideas/g3733/healthy-dinner-recipes/">Healthy Recipes</a>
            <img src={Recipe} alt="Pasta with Vegetables" /> {/*importing images is different in react*/} {/*Alt tag used for screen readers to improve accessibility and is displayed if the image fails to load. If the image is purely decorative then using an empty alt attribute is best practice */}

        </div>
    );
};

export default Heading;

{/* Link to external pages with anchor elements

a(anchor) elements are used to link to content outside of your webpages.
a elements need a destination web address called a href attribute
They also need anchor text*/}

