import React from 'react';

const CarouselButton = () => {
    return (
        <div className="box carousel">
            {fitnessGoals.map(g => (
                <div
                    className="carouselButton"
                    style={{ cursor: "pointer" }}
                    onClick={() => onGoalSelect(g)}
                >
                    {this.images.map(img => {
                        if (img.id === g.imgId) return (
                            <React.Fragment>
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
                            </React.Fragment>
                        )
                    })}
                </div>
            ))}
        </div>
    );
}

export default CarouselButton;