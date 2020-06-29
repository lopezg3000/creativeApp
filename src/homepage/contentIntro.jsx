import React from 'react';

const ContentIntro = ({ eyebrow, headline, description }) => {
    let classes = 'content-row without-gradient';
    if (!eyebrow) classes += ' not-displayed';

    return (
        <div className='content-intro'>
            <div className={classes}>
                <h2 className='eyebrow'>{eyebrow}</h2>
            </div>
            <div className='content-row with-gradient'>
                <div className='content-column'></div>
                <div className='content-column'>
                    <h3 className='headline'>{headline}</h3>
                </div>
                <div className='content-column'></div>
            </div>
            <div className='content-row without-gradient'>
                <p className='description'>{description}</p>
            </div>
        </div>
    );
}

export default ContentIntro;