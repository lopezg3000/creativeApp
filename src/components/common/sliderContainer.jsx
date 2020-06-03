import React, { Component } from 'react';

//Text in slideshow are not visible when window shrinks


class Information extends Component {

    renderList = (data, listProperty) => {
        if (data[listProperty]) return (
            <ul classaName='listItems'>
                {data[listProperty].map(b => <li key={b}>{b}</li>)}
            </ul>);

        return null;
    };

    render() {
        const {
            data,
            width,
            titleProperty,
            descriptionProperty,
            listProperty,
            activeIndex,
            valueProperty,
            images
        } = this.props;

        let sliderStyle = {
            transform: `translateX(${activeIndex * -100}%)`,
            transition: '0.5s'
        }

        if (!data) return (
            <React.Fragment>
                <h3>Live a Healthier Life</h3>,
                <p>Get matched with the right foods and make your fitness goals a reality.</p>
            </React.Fragment>);

        return (
            <div className="slider-container" style={sliderStyle}>
                {images.map(img => (
                    data.map(item => {
                        if (item.imgId === img.id) return (
                            <div key={img.id} className="slide" >
                                <img style={{ width: width, height: "auto", zIndex: 5 }} src={img.src} />
                                <h3 className="heading">{item[titleProperty]}</h3>
                                <p className="paragraph">{item[descriptionProperty]}</p>
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