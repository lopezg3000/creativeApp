import React, { Component } from 'react'
import PageHeader from "../common/pageHeader"


class Home extends Component {
    state = {
        fitnessGoals: []
    }

    componentDidMount() {
        this.setState({ fitnessGoals: getFitnessGoals() })
    };


    render() {
        const { fitnessGoals } = this.state;

        return (
            <React.Fragment>
                <div className="box header">
                    <PageHeader header={this.props.headerProperty} />
                </div>
                <div className="box instructions">
                    <h3>Title</h3>
                    <p>Paragraph</p>
                    <ul>
                        <li>UnorderedList</li>
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