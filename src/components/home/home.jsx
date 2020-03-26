import React, { Component } from 'react';
import { getFitnessGoals } from '../goals/fakeGoalFitness';
import PageHeader from "../common/pageHeader";


class Home extends Component {
    state = {
        fitnessGoals: getFitnessGoals(),
        selectedGoal: 'Live a Healthier Life This Year'
    }

    componentDidMount() {
        const fitnessGoals = [
            {
                _id: '',
                title: '"Live a Healthier Life This Year"',
                description: "Get matched with the right foods and make your fitness goals a reality."
            }, ...getFitnessGoals()
        ];

        this.setState({ fitnessGoals });
    };




    render() {
        const { fitnessGoals } = this.state;
        const filtered = fitnessGoals.find(item => item._id === "5b21ca3eeb7f6fbccd471815");
        console.log(filtered.title);
        return (
            <React.Fragment>
                <div className="box header">
                    <PageHeader header={this.props.headerProperty} />
                </div>
                <div className="box instructions">
                    <h3>{filtered.title}</h3>
                    <p>{filtered.description}</p>
                    <ul>
                        {filtered.benefits.map(b => (
                            <li>{b}</li>
                        ))}
                    </ul>

                </div>
                <div className="box carousel">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Vero repellendus corporis magnam voluptates dicta,
                        harum maxime commodi sit nisi omnis, praesentium itaque minus
                        deserunt in totam quia rerum sint eius.
                    </p>
                </div>
                <div className="box advertisement">Advertisement</div>
                <div className="box footer">Footer</div>
            </React.Fragment>

        );
    }
}

Home.defaultProps = {
    headerProperty: "The Daily Smoothie"
};

export default Home;