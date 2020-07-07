import React, { Component } from 'react';
import SmoothieCategory from './smoothieCategory';
import FitnessBlendsImage from '../assets/homepageImages/smoothieCategories/fitnessBlendsImage.jpg';
import FitnessBlendsStripe from '../assets/homepageImages/smoothieCategories/fitnessBlendsStripe.jpg';
import FitnessBlendsShake from '../assets/homepageImages/smoothieCategories/fitnessBlendsShake.png';
import SlimBlendsImage from '../assets/homepageImages/smoothieCategories/slimBlendsImage.jpg';
import SlimBlendsStripe from '../assets/homepageImages/smoothieCategories/slimBlendsStripe.jpg';
import SlimBlendsShake from '../assets/homepageImages/smoothieCategories/slimBlendsShake.png';
import WellnessBlendsImage from '../assets/homepageImages/smoothieCategories/wellnessBlendsImage.jpg';
import WellnessBlendsStripe from '../assets/homepageImages/smoothieCategories/wellnessBlendsStripe.jpg';
import WellnessBlendsShake from '../assets/homepageImages/smoothieCategories/wellnessBlendsShake.png';
import BreakTimeBlendsImage from '../assets/homepageImages/smoothieCategories/breakTimeBlendsImage.jpg';
import BreakTimeBlendsStripe from '../assets/homepageImages/smoothieCategories/breakTimeBlendsStripe.jpg';
import BreakTimeBlendsShake from '../assets/homepageImages/smoothieCategories/breakTimeBlendsShake.png';

/*
    renamed image files different from original name then switched 
    it back to original name resolved images in assets folder. 
    Moving images in assets folder bug
*/

class SmoothieCategories extends Component {

    insertBreak(firstWord, secondWord) {
        return (
            <React.Fragment>
                {firstWord}
                <br />
                {secondWord}
            </React.Fragment>
        );
    }

    render() {
        return (
            <div className='categories-container'>
                <div className='categories'>
                    <SmoothieCategory
                        image={FitnessBlendsImage}
                        description='Purposefully blended with protein-rich ingredients to help you fuel up or recover faster.'
                        stripe={FitnessBlendsStripe}
                        shake={FitnessBlendsShake}
                        blendNumber='27'
                        blendText={this.insertBreak('Blends', 'Available')}
                        title={this.insertBreak('Fitness', 'Blends')}
                        buttonText='Explore All Fitness Blends'
                        blendColor='red'
                    />
                    <SmoothieCategory
                        image={SlimBlendsImage}
                        description='Purposefully blended to help you stay on track, with under 350 calories for every 20 oz.'
                        stripe={SlimBlendsStripe}
                        shake={SlimBlendsShake}
                        blendNumber='19'
                        title={this.insertBreak('Slim', 'Blends')}
                        buttonText='Explore All Slim Blends'
                        reverse='reverse'
                        blendColor='blue'
                    />
                    <SmoothieCategory
                        image={WellnessBlendsImage}
                        description='Purposefully blended with vitamins essential to maintaining a healthy body.'
                        stripe={WellnessBlendsStripe}
                        shake={WellnessBlendsShake}
                        blendNumber='17'
                        title={this.insertBreak('Wellness', 'Blends')}
                        buttonText='Explore All Wellness Blends'
                        blendColor='green'
                    />
                    <SmoothieCategory
                        image={BreakTimeBlendsImage}
                        description='Purposefully blended to help you reward yourself or simply enjoy the day.'
                        stripe={BreakTimeBlendsStripe}
                        shake={BreakTimeBlendsShake}
                        blendNumber='16'
                        title={this.insertBreak('Break Time', 'Blends')}
                        buttonText='Explore All Break Time Blends'
                        reverse='reverse'
                        blendColor='orange'
                    />
                    <SmoothieCategory
                        image={FitnessBlendsImage}
                        description='Purposefully blended with protein-rich ingredients to help you fuel up or recover faster.'
                        stripe={FitnessBlendsStripe}
                        shake={FitnessBlendsShake}
                        blendNumber='27'
                        blendText={this.insertBreak('Blends', 'Available')}
                        title={this.insertBreak('Fitness', 'Blends')}
                        buttonText='Explore All Fitness Blends'
                        blendColor='pink'
                    />
                </div>
            </div>
        );
    }
}


export default SmoothieCategories;