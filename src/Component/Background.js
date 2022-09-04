
import { createRef, useEffect } from 'react';
import '../style/background.css';
import Menu from './Menu';
import Cv from './Cv';


function Background() {
    
    // Wrap every letter in a span
    let textWrapper = createRef()
    console.log(textWrapper)
   
    useEffect(() => {

    })

    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


    return(
        <div>
        <div className="background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                </div>  
        <Menu/>
        <div className='textHomepage'>
            <div className='border'></div>
                <div className='containerTitre'>
                    <h1 ref={textWrapper} className='titreHomepage'>Vanessa MACEDO-PINTO</h1>
                </div>
            <div className='containerPhotoId'><img src="" alt="photoidentité" /></div>
            <div className='containerDescrption'>
                <p className='descriptionHomepage'>Récemment diplomée d’ une formation de developpeur d'application front-end spécialisée en React.</p>
                <p className='descriptionHomepage noMargin'>Je suis aujourd’hui à la recherche de cette première entreprise qui me permettra de commencer cette nouvelle aventure professionnelle.</p>
            </div>
        </div>
        <Cv />
    </div>
    )
}

export default Background;