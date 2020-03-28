import React, { Component } from 'react';
import { getFitnessGoals, findGoal } from '../goals/fakeGoalFitness';
import PageHeader from '../common/pageHeader';
import Content from './homeContent';



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

    getGoal = (selectedGoal, titleProperty, paragraphProperty) => {
        if (!selectedGoal) return (
            <React.Fragment> {titleProperty}{paragraphProperty}</React.Fragment>
        );

        return findGoal(selectedGoal._id);
    }



    render() {
        const { selectedGoal, fitnessGoals } = this.state;

        const { headerProperty, titleProperty, paragraphProperty } = this.props;

        const goal = this.getGoal(selectedGoal, titleProperty, paragraphProperty);

        return (
            <React.Fragment>
                <div className="box header">
                    <PageHeader header={headerProperty} />
                </div>
                <div className="box content">
                    <Content
                        fitnessGoals={fitnessGoals}
                        goal={goal}
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
    headerProperty: "The Daily Smoothie",
    titleProperty: <h3>Live a Healthier Life</h3>,
    paragraphProperty: <p>Get matched with the right foods and make your fitness goals a reality.</p>
};

export default Home;