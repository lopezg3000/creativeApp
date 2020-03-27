import React, { Component } from 'react';
import { getFitnessGoals, getGoal } from '../goals/fakeGoalFitness';
import PageHeader from "../common/pageHeader";
import Information from '../common/Information';


class Home extends Component {
    state = {
        fitnessGoals: [],
    }

    componentDidMount() {
        this.setState({ fitnessGoals: getFitnessGoals() });
    };

    handleGoalSelect = (goal) => {
        // console.log(goal);
        this.setState({ selectedGoal: goal })
    };




    render() {
        const { selectedGoal, fitnessGoals } = this.state;

        const { titleProperty, paragraphProperty } = this.props;
        const goal =
            !selectedGoal
                ? <React.Fragment>{titleProperty}{paragraphProperty}</React.Fragment>
                : getGoal(selectedGoal._id);

        return (
            <React.Fragment>
                <div className="box header">
                    <PageHeader header={this.props.headerProperty} />
                </div>
                <div className="box information">
                    <Information goal={goal} />
                </div>
                <div className="box carousel">
                    <ul>
                        {fitnessGoals.map(g => <li onClick={() => this.handleGoalSelect(g)}>{g.title}</li>)}
                    </ul>
                </div>
                <div className="box advertisement">Advertisement</div>
                <div className="box footer">Footer</div>
            </React.Fragment>

        );
    }
}

Home.defaultProps = {
    headerProperty: "The Daily Smoothie",
    titleProperty: <h3>Live a Healthier Life</h3>,
    paragraphProperty: <p>Get matched with the right foods and make your fitness goals a reality.</p>
};

export default Home;