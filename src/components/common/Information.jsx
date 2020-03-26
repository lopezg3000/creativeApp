import React from 'react';

const Information = ({ goal: data }) => {
    console.log(data);
    if (!data._id) return data;

    return (
        <React.Fragment>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            {data.benefits ? <ul>{data.benefits.map(b => <li key={b}>{b}</li>)}</ul> : null}
        </React.Fragment>

    );
}

export default Information;