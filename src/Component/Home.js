import '../style/home.css';
import Menu from './Menu';
import Cv from './Cv';
import Background from './Background';
import NameAnimation from './NameAnimation';

/** Render all the elemnentto the homepage
 * @function Home
 * @returns {JSX}
 */

function Home() {
    
    return(
        <div>
        <Background />
        <Menu styleActive='containerMenuHome' />
        <div className='display'>
        <div className='containerHome'>
        <div className='textHomepage'>
            <div className='identity'>
                <div className='containerTitre'>
                    {/* <h1 className='titreHomepage'>Vanessa MACEDO-PINTO</h1> */}
                    <NameAnimation />
                    <div className='border'></div>                
                    <div className='containerDescrption'>
                        <p className='descriptionHomepage'>Récemment diplomée d’ une formation de developpeur d'application front-end spécialisée en React.</p>
                        <p className='descriptionHomepage noMargin'>Je suis aujourd’hui à la recherche de cette première entreprise qui me permettra de commencer cette nouvelle aventure professionnelle.</p>
                    </div>
                </div>
            <div className='containerPhotoId'><img src="" alt="photoidentité" /></div>
            </div>
        </div>
        </div>
        <Cv />
        </div>
    </div>
    )
}

export default Home;