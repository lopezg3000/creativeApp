import React, { Component } from 'react';
import SmoothieCategory from './smoothieCategory';
import FitnessBlendsImage from '../assets/homepageImages/fitnessBlendsImage.jpg';
import FitnessBlendsStripe from '../assets/homepageImages/fitnessBlendsStripe.jpg';
import FitnessBlendsShake from '../assets/homepageImages/fitnessBlendsShake.png';

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
                    />
                </div>
            </div>
        );
    }
}


export default SmoothieCategories;