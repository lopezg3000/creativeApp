import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    activeIndex: 0
  }

  handlePrevClick = () => {
    console.log("Previous Button Clicked");
  }

  handleNextClick = () => {
    console.log("Next Button Clicked");
  }

  render() {
    return (
      <div className="buttonContainer">
        <div className="buttons">
          <button onClick={this.handlePrevClick}>Previous</button>
          <button onClick={this.handleNextClick}>Next</button>
        </div>
        <div className="scene">
          <div className="carousel">
            <div key={0} className="carousel__cell">1</div>
            <div key={1} className="carousel__cell">2</div>
            <div key={2} className="carousel__cell">3</div>
            <div key={3} className="carousel__cell">4</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;



// Js


// var carousel = document.querySelector('.carousel__cell:nth-child(1)');
// var cellCount = 4;
// var selectedIndex = 0;

// function rotateCarousel() {
//   var angle = selectedIndex / cellCount * -360;
//   carousel.style.transform = 'translateZ(105px) rotateY(' + angle + 'deg)';
// }

// var prevButton = document.querySelector('.previous-button');
// prevButton.addEventListener('click', function () {
//   selectedIndex--;
//   rotateCarousel();
// });

// var nextButton = document.querySelector('.next-button');
// nextButton.addEventListener('click', function () {
//   selectedIndex++;
//   rotateCarousel();
// });

