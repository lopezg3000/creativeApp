import React from 'react';
import Information from '../common/Information';

const HomeContent = ({ fitnessGoals, goal, onGoalSelect }) => {
    return (
        <React.Fragment>
            <div className="box information">
                <Information data={goal} />
            </div>
            <div className="box carousel">
                <ul>
                    {fitnessGoals.map(g => <li onClick={() => onGoalSelect(g)}>{g.title}</li>)}
                </ul>
            </div>
        </React.Fragment>
    );
}

export default HomeContent;