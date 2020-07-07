import React, { Component } from 'react';
import SmoothieCategory from './smoothieCategory';
import FitnessBlendsImage from '../assets/homepageImages/smoothieCategories/fitnessBlendsImage.jpg';
import FitnessBlendsStripe from '../assets/homepageImages/smoothieCategories/fitnessBlendsStripe.jpg';
import FitnessBlendsShake from '../assets/homepageImages/smoothieCategories/fitnessBlendsShake.png';
import slimBlendsImage from '../assets/homepageImages/smoothieCategories/slimBlendsImage.jpg';
import slimBlendsStripe from '../assets/homepageImages/smoothieCategories/slimBlendsStripe.jpg';
import slimBlendsShake from '../assets/homepageImages/smoothieCategories/slimBlendsShake.png';

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
                        image={slimBlendsImage}
                        description='Purposefully blended to help you stay on track, with under 350 calories for every 20 oz.'
                        stripe={slimBlendsStripe}
                        shake={slimBlendsShake}
                        blendNumber='19'
                        title={this.insertBreak('Slim', 'Blends')}
                        buttonText='Explore All Slim Blends'
                        reverse='reverse'
                        blendColor='blue'
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
                        blendColor='green'
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