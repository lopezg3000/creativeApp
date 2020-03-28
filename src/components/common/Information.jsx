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
        const { data, titleProperty, descriptionProperty, listProperty, valueProperty } = this.props;
        if (!data[valueProperty]) return data;

        return (
            <React.Fragment>
                <h3>{data[titleProperty]}</h3>
                <p>{data[descriptionProperty]}</p>
                {this.renderList(data, listProperty)}
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