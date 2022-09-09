import anime from "animejs";
import { useEffect, useRef } from "react";

const letters = Array.from(Array(20));

function NameAnimation() {

    const animation = useRef(null)

    useEffect(() => {
        animation.current = anime.timeline({loop : true});

        for(const letter in letters) {
            animation.current.add({
                targets: `.titreHomepage li:nth-child(${Number(letter) + 1})`,
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 70*i
              }).add({
                targets: '.titreHomepage',
                opacity: 1,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 10000
              });
        }

    })

    return(
        <div>
            <h1 className='titreHomepage'>Vanessa MACEDO-PINTO</h1>
        </div>
    )
}

export default NameAnimation;