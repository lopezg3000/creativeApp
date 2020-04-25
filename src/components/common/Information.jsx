import React, { Component } from 'react';

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
                    data.map(item => {
                        if (item.imgId === img.id) return (
                            <div>
                                <span><img style={{ width: "auto", height: 200 }} src={img.src} /></span>
                                <h3>{item[titleProperty]}</h3>
                                <p>{item[descriptionProperty]}</p>
                                {this.renderList(item, listProperty)}
                            </div>
                        )
                    })
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