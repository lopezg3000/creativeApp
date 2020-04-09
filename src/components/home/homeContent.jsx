import React, { Component } from 'react';
import Information from '../common/Information';

class HomeContent extends Component {
    state = {}
    render() {
        const { fitnessGoals, goal, onGoalSelect } = this.props;
        const imgArray = [
            { id: "1", fileName: "buildLeanMuscle", label: "Build More Lean Muscle" },
            { id: "2", fileName: "decreaseBodyFat", label: "Decrease Body Fat" },
            { id: "3", fileName: "drinkMoreWater", label: "Drink More Water" },
            { id: "4", fileName: "eatMoreGreens", label: "Eat More Greens" }
        ];

        return (
            <React.Fragment>
                <div className="box banner"></div>
                <div className="box information">
                    <Information data={goal} />
                </div>
                <div className="box carousel">
                    {fitnessGoals.map(g => (
                        <div className="carouselButton">
                            <div className="carouselButtonText">
                                <span onClick={() => onGoalSelect(g)}>{g.title}</span>
                            </div>
                            {
                                imgArray.map(img => {
                                    if (img.label === g.title) return (
                                        <div className="carouselButtonImg">
                                            <img className={`buttonImg${img.id}`} style={{ height: "500px" }} key={img} src={require(`../../img/${img.fileName}.jpg`)} />
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