import React from 'react';

const CarouselButton = ({ data, images, onGoalSelect }) => {
    return (
        <React.Fragment>
            {data.map(g => (
                images.map((img, index) => {
                    if (img.id === g.imgId) return (
                        <div
                            key={img.id}
                            className="carouselButton"
                            style={{ cursor: "pointer" }}
                            onClick={() => onGoalSelect(g, index)}
                        >
                            <div className="carouselButtonText">
                                <span>{g.title}</span>
                            </div>
                            <div className="carouselButtonImg">
                                <img
                                    className={`buttonImg${img.id}`}
                                    style={{ height: "200px" }}
                                    key={img}
                                    src={img.src}
                                />
                            </div>
                        </div>
                    )
                })
            ))
            }
        </React.Fragment>
    );
}

export default CarouselButton;