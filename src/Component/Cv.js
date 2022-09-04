import { createRef } from "react";
import '../style/cv.css';
import anime from 'animejs/lib/anime.es.js';


function Cv () {

    let animeCv = createRef()

        animeCv = 
        anime.timeline({loop: false})
  .add({
    targets: '.cv .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.cv .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.cv .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.cv .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  })

anime({
  targets: '.cv .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});


    return(
        <div>
        <h1 ref={animeCv} className="cv">
            <span className="letters-container">
            <span className="letters letters-left">C.V.</span></span>
            <span className="circle circle-white"></span>
            <span className="circle circle-dark"></span>
            <span className="circle circle-container"><span className="circle circle-dark-dashed"></span></span>
        </h1>
        </div>
    )
}

export default Cv;