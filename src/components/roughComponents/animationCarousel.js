import React, { Component } from 'react';
import { JsxEmit } from 'typescript';

class Carousel extends Component {
  state = {
    activeIndex = 0
  }

  render() {
    return (
      <React.fragment>
        <div className="scene">
          <div className="carousel">
            <div key={0} className="carousel__cell">1</div>
            <div key={1} className="carousel__cell">2</div>
            <div key={2} className="carousel__cell">3</div>
            <div key={3} className="carousel__cell">4</div>


          </div>
        </div>
        <p style="text-align: center;">
          <button class="previous-button">Previous</button>
          <button class="next-button">Next</button>
        </p>
      </React.fragment>
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

