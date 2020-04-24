import React, { Component } from 'react';
import BuildMoreLeanMuscle from "../../assets/img/buildMoreLeanMuscle.jpg";
import DecreaseBodyFat from "../../assets/img/decreaseBodyFat.jpg";
import DrinkMoreWater from "../../assets/img/drinkMoreWater.jpg";
import EatMoreGreens from "../../assets/img/eatMoreGreens.jpg";

class Information extends Component {
    renderList = (data, listProperty) => {
        if (data[listProperty]) return (
            <ul>
                {data[listProperty].map(b => <li key={b}>{b}</li>)}
            </ul>);

        return null;
    };

    render() {
        const { data, titleProperty, descriptionProperty, listProperty, valueProperty, images } = this.props;
        if (!data) return (
            <React.Fragment>
                <h3>Live a Healthier Life</h3>,
                <p>Get matched with the right foods and make your fitness goals a reality.</p>
            </React.Fragment>);

        return (
            <React.Fragment>
                {images.map(img => (
                    <div>
                        <span><img style={{ width: "auto", height: 200 }} src={img.src} /></span>
                        <h3>{data[titleProperty]}</h3>
                        <p>{data[descriptionProperty]}</p>
                        {this.renderList(data, listProperty)}
                    </div>
                ))}

            </React.Fragment>
        );
    };
};

Information.defaultProps = {
    valueProperty: "_id",
    titleProperty: "title",
    descriptionProperty: "description",
    listProperty: "list"
};

export default Information;