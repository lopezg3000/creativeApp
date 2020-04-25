import React, { Component } from 'react';
import Information from '../common/Information';
import CarouselButton from '../carouselButton';
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
                <div className="box slideShow">
                    <Information data={fitnessGoals} images={this.images} />
                </div>
                <div className="box carousel">
                    <CarouselButton
                        data={fitnessGoals}
                        onGoalSelect={onGoalSelect}
                        images={this.images}
                    />
                </div>
            </React.Fragment>
        );
    };
};

export default HomeContent;


{/* <div className="box carousel">
{fitnessGoals.map(g => (
    <div
        className="carouselButton"
        style={{ cursor: "pointer" }}
        onClick={() => onGoalSelect(g)}
    >
        {this.images.map(img => {
            if (img.id === g.imgId) return (
                <React.Fragment>
                    <div className="carouselButtonText">
                        <span>{g.title}</span>
                    </div>
                    <div className="carouselButtonImg">
                        <img
                            className={`buttonImg${img.id}`}
                            style={{ height: "200px" }}
                            key={img}
                            src={img.src}
                        />
                    </div>
                </React.Fragment>
            )
        })}
    </div>
))}
</div> */}