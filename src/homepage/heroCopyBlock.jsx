import React from 'react';
import Button from './button';

const HeroCopyBlock = () => {
    return (
        <div className='hero-copyblock'>
            <div className='hero-container'>
                <div className='max-wrapper'>
                    <h2 className='eyebrow'>Let's be part of the change together.</h2>
                    <h3 className='headline large'>Our commitment to help fight racism</h3>
                    <p className='description'>
                        We stand together as an inclusive brand that’s committed to being a safe
                        place for all and helping each person live out their purpose. Injustice
                        and inequality are not right. What is right is using our voice to educate
                        and our resources to fund causes that fight discrimination.
                    <br />
                        <br />
                    We believe actions speak louder than words. We’re donating $100,000 to
                    the NAACP Legal Defense Fund to promote fair and equitable treatment
                    of all people, and are updating our training to further ensure inclusion
                    and respect in our stores and throughout our organization.
                    </p>
                    <Button text='Read More' />
                </div>
            </div>
        </div>
    );
}

export default HeroCopyBlock;