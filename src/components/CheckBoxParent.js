import React, { Component } from 'react';

const OPTIONS = ["Build More Lean Muscle", "Decrease Body Fat", "Drink More Water", "Eat More Greens"]

class CheckBoxParent extends Component {
    constructor() {
        super();
        this.state = {
            fitnessGoals: OPTIONS.reduce( // 1st output {Build More Lean Muscle: false}
                (options, option) => ({   // 2nd output {Build More Lean Muscle: false, Decrease Body Fat: false}
                    ...options,            // etc..
                    [option]: false        // start with empty object and that is the acumulator and disapears after first merge
                }), {}                     // spread operator merges previous ouput with current
            )                              // options parameter is accumulator and option is current value
        };
    };


    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            fitnessGoals: {
                ...prevState.fitnessGoals,
                [name] = !prevState.fitnessGoals[name]
            }
        }));

    };

    createCheckbox = option => (
        <CheckBox
            label={option}
            isSelected={this.state.fitnessGoals[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );


    createCheckboxes = () => OPTIONS.map(this.createCheckbox)

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.createCheckBox()}
                    <input type="button" onClick={this.selectAll}>Select All</input>
                    <input type="button" onClick={this.deselectAll}>Deselect All</input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default CheckBoxParent;