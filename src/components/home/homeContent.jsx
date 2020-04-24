import React, { Component } from 'react';
import Information from '../common/Information';
import BuildMoreLeanMuscle from "../../assets/img/buildMoreLeanMuscle.jpg";
import DecreaseBodyFat from "../../assets/img/decreaseBodyFat.jpg";
import DrinkMoreWater from "../../assets/img/drinkMoreWater.jpg";
import EatMoreGreens from "../../assets/img/eatMoreGreens.jpg";


class HomeContent extends Component {

    images = [
        { id: "1", src: BuildMoreLeanMuscle },
        { id: "2", src: DecreaseBodyFat },
        { id: "3", src: DrinkMoreWater },
        { id: "4", src: EatMoreGreens }
    ];

    render() {
        const { fitnessGoals, onGoalSelect, selectedGoal } = this.props;

        return (
            <React.Fragment>
                <div className="box banner"></div>
                <div className="box information">
                    <Information data={selectedGoal} images={this.images} />
                </div>
            </React.Fragment>
        );
    };
};

export default HomeContent;