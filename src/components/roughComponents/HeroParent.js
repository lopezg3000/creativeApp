import React from 'react';
import "./heroStyled.css"
import HighResRecipe from "../../Img/highResHero.jpg";
import LowResRecipe from "../../Img/lowResHero.jpg";
import ProgressiveImage from "./HeroChild";

const HeroParent = () => {
    return (
        <ProgressiveImage
            preview={LowResRecipe}
            image={HighResRecipe}
        />
    );

};

export default HeroParent;







/*Added a ref to the img element so that we can update the src without causing
    a re-render.

*/

/*obj.keys function. You are making a copy of the source that way we do not mutate the original
    properties. Then we return the result. We are also omitting the overlaySrc property.
*/