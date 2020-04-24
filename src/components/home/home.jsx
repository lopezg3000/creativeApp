import React, { Component } from 'react';
import { getFitnessGoals, getGoal } from '../goals/fakeGoalFitness';
import PageHeader from '../common/pageHeader';
import Content from './homeContent';



class Home extends Component {
    state = {
        fitnessGoals: [],
    }

    componentDidMount() {
        const fitnessGoals = getFitnessGoals();
        this.setState({ fitnessGoals });
    };

    handleGoalSelect = (goal) => {
        this.setState({ selectedGoal: goal })
    };

    render() {
        const { fitnessGoals, selectedGoal } = this.state;

        return (
            <React.Fragment>
                <div className="box header">
                    <PageHeader />
                </div>
                <div className="leftColumn"></div>
                <div className="rightColumn"></div>
                <div className="box content">
                    <Content
                        selectedGoal={selectedGoal}
                        fitnessGoals={fitnessGoals}
                        onGoalSelect={this.handleGoalSelect}
                    />
                </div>
                <div className="box advertisement">Advertisement</div>
                <div className="box footer">Footer</div>
            </React.Fragment>

        );
    }
}

Home.defaultProps = {
    titleProperty: <h3>Live a Healthier Life</h3>,
    paragraphProperty: <p>Get matched with the right foods and make your fitness goals a reality.</p>
};

export default Home;