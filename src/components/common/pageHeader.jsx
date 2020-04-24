import React from 'react'


const PageHeader = ({ header, subHeader }) => {
    return (
        <React.Fragment>
            <h1 className="headerText">{header}</h1>
            <h2 className="subHeaderText">{subHeader}</h2>
        </React.Fragment>
    );
}

PageHeader.defaultProps = {
    header: "Daily",
    subHeader: "Smoothy"
};

export default PageHeader;