import React from 'react';
import Information from '../common/Information';

const HomeContent = ({ fitnessGoals, goal, onGoalSelect }) => {
    return (
        <React.Fragment>
            <div className="box banner"></div>
            <div className="box information">
                <Information data={goal} />
            </div>
            <div className="box carousel">
                {fitnessGoals.map(g => <h6 className="carousel-button" onClick={() => onGoalSelect(g)}>{g.title}</h6>)}
            </div>
        </React.Fragment>
    );
}

export default HomeContent;