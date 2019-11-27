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
            <img src={Recipe} />
        </div>
    );
};

export default Heading; 