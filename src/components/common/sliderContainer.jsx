import React, { Component } from 'react';

//Need to implement ref in slider component to get height of slider div.
//width of slider container should be set to this
//Also, not sure if I should set the image to background image but that
//would cause more problems since i would have to set it to background image 

class Information extends Component {
    renderList = (data, listProperty) => {
        if (data[listProperty]) return (
            <ul>
                {data[listProperty].map(b => <li key={b}>{b}</li>)}
            </ul>);

        return null;
    };

    render() {
        const { data, width, titleProperty, descriptionProperty, listProperty, valueProperty, images } = this.props;
        if (!data) return (
            <React.Fragment>
                <h3>Live a Healthier Life</h3>,
                <p>Get matched with the right foods and make your fitness goals a reality.</p>
            </React.Fragment>);

        return (
            <div className="slider-container">
                {images.map(img => (
                    data.map(item => {
                        if (item.imgId === img.id) return (
                            <div className="slide" >
                                <img style={{ width: width, height: "auto" }} src={img.src} />
                                <h3>{item[titleProperty]}</h3>
                                <p>{item[descriptionProperty]}</p>
                                {this.renderList(item, listProperty)}
                            </div>
                        )
                    })
                ))}
            </div>
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