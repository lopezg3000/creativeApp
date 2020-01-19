import React from 'react';
import "./heroStyled.css"
import HighResRecipe from "../Img/highResRecipe.jpg";
import LowResRecipe from "../Img/lowResRecipe.jpg";
import HeroChild from "./HeroChild";

const HeroParent = () => {
    return (
        <div className="App">
            <HeroChild
                className={"heroStyled"}
                alt={"pasta"}
                overlaySrc={LowResRecipe}
                src={HighResRecipe}

            />
        </div >
    );

};

export default HeroParent;







/*Added a ref to the img element so that we can update the src without causing
    a re-render.

*/

/*obj.keys function. You are making a copy of the source that way we do not mutate the original
    properties. Then we return the result. We are also omitting the overlaySrc property.
*/