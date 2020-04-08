import React, { Component } from 'react';
import Information from '../common/Information';

class HomeContent extends Component {
    state = {}
    render() {
        const { fitnessGoals, goal, onGoalSelect } = this.props;
        const imgArray = [
            { fileName: "buildLeanMuscle", label: "Build More Lean Muscle" },
            { fileName: "decreaseBodyFat", label: "Decrease Body Fat" },
            { fileName: "drinkMoreWater", label: "Drink More Water" },
            { fileName: "eatMoreGreens", label: "Eat More Greens" }
        ];

        return (
            <React.Fragment>
                <div className="box banner"></div>
                <div className="box information">
                    <Information data={goal} />
                </div>
                <div className="box carousel">
                    {fitnessGoals.map(g => (
                        <div className="carousel-button">
                            <span className="carousel-text" onClick={() => onGoalSelect(g)}>{g.title}</span>
                            {
                                imgArray.map(img => {
                                    if (img.label === g.title) return (
                                        <img style={{ height: "500px" }} key={img} src={require(`../../img/${img.fileName}.jpg`)} />
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