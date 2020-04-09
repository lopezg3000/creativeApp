import React, { Component } from 'react';
import Information from '../common/Information';
import BuildMoreLeanMuscle from "../../assets/img/buildMoreLeanMuscle.jpg";
import DecreaseBodyFat from "../../assets/img/decreaseBodyFat.jpg";
import DrinkMoreWater from "../../assets/img/drinkMoreWater.jpg";
import EatMoreGreens from "../../assets/img/eatMoreGreens.jpg";

class HomeContent extends Component {
    state = {}
    render() {
        const { fitnessGoals, goal, onGoalSelect } = this.props;
        const imgArray = [
            { id: "1", componentName: BuildMoreLeanMuscle, label: "Build More Lean Muscle" },
            { id: "2", componentName: DecreaseBodyFat, label: "Decrease Body Fat" },
            { id: "3", componentName: DrinkMoreWater, label: "Drink More Water" },
            { id: "4", componentName: EatMoreGreens, label: "Eat More Greens" }
        ];

        return (
            <React.Fragment>
                <div className="box banner"></div>
                <div className="box information">
                    <Information data={goal} />
                </div>
                <div className="box carousel">
                    {fitnessGoals.map(g => (
                        <div className="carouselButton" style={{ cursor: "pointer" }} onClick={() => onGoalSelect(g)}>
                            <div className="carouselButtonText">
                                <span>{g.title}</span>
                            </div>
                            {
                                imgArray.map(img => {
                                    if (img.label === g.title) return (
                                        <div className="carouselButtonImg">
                                            <img className={`buttonImg${img.id}`} style={{ height: "500px" }} key={img} src={img.componentName} />
                                        </div>
                                    )

                                    return null;
                                })
                            }
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    };
};

export default HomeContent;