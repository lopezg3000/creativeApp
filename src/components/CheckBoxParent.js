import React, { Component } from 'react';
import Checkbox from "./Checkbox"

const OPTIONS = ["Build More Lean Muscle", "Decrease Body Fat", "Drink More Water", "Eat More Greens"]

class CheckboxParent extends Component {
    state = {
        fitnessGoals: OPTIONS.reduce( // 1st output {Build More Lean Muscle: false}
            (options, option) => ({   // 2nd output {Build More Lean Muscle: false, Decrease Body Fat: false}
                ...options,            // etc..
                [option]: false        // start with empty object and that is the acumulator and disapears after first merge
            }), {}                     // spread operator merges previous ouput with current
        )                              // options parameter is accumulator and option is current value
    };

    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.fitnessGoals).forEach(checkbox => {
            this.setState(prevState => ({
                fitnessGoals: {
                    ...prevState.fitnessGoals,
                    [checkbox]: isSelected
                }

            }));
        });
    };

    selectAll = () => this.selectAllCheckboxes(true);

    deselectAll = () => this.selectAllCheckboxes(false);

    handleCheckboxChange = changeEvent => {

        const { name } = changeEvent.target;
        console.log(name);
        this.setState(prevState => ({
            fitnessGoals: {
                ...prevState.fitnessGoals,
                [name]: !prevState.fitnessGoals[name]
            }
        }));
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        Object.keys(this.state.fitnessGoals)
            .filter(checkbox => this.state.fitnessGoals[checkbox])
            .forEach(checkbox => {
                console.log(checkbox, "is selected.");
            });
    };

    createCheckbox = option => (
        <Checkbox
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
                <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes()}
                    <button type="button" onClick={this.selectAll}>Select All</button>
                    <button type="button" onClick={this.deselectAll}>Deselect All</button>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default CheckboxParent;