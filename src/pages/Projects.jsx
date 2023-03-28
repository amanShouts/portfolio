import "../css/Projects.css"
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Projects() {
    return (
        <div className="projects_main">
            {/* <div className="mybox">
                yoo
            </div> */}
            <div className="projects_row1">

                <div className="projects_individual_project1">
                    <div>
                        <img src={require('../extra/sugar_cosmetics.png')} alt="Sugar Cosmetics Clone" />
                    </div>
                    <div>
                        <h3>Sugar Cosmetics Clone</h3>
                        <div>
                            <button>
                                <a href="https://sugar-cosmetics-clone-masai-1.netlify.app/" target="_blank" className="remove_link_color" >Live</a>
                            </button>
                            <a href="https://github.com/rushikesh226/Sugar-Cosmetics-Clone" target="_blank" ><FaGithub size={35} /></a>
                        </div>

                    </div>
                    <p>
                        Sugar Cosmetics, founded by Shark Vineeta, is an online aggregator and marketplace for beauty and cosmetics items where users
                        can search products, and place orders for the same.
                    </p>
                </div>

                <div className="projects_individual_project2">
                    <div>
                        <img src={require('../extra/stanzaliving.png')} alt="Stanzaliving Clone"></img>
                    </div>
                    <div>
                        <h3>StanzaLiving Clone</h3>
                        <div>
                            <button>
                                <a href="https://code735.github.io/stanzaLiving/" target="_blank" className="remove_link_color" >Live</a>
                            </button>
                            <a href="https://github.com/code735/stanzaLiving" target="_blank" ><FaGithub size={35} /></a>
                        </div>
                    </div>
                    <p>
                        Stanzaliving provides apartments, co-living and PG properties on rent across major cities in the country. These properties exhibit professional standards in hygine, maintainence and come furnished with myriad amneties.
                    </p>
                </div>

                <div className="projects_individual_project3">
                    <div>
                        <img src={require('../extra/skinstore.png')} alt="SkinStore Clone"></img>
                    </div>
                    <div>
                        <h3>SkinStore Clone</h3>
                        <div>
                            <button>
                                <a href="https://idyllic-biscuit-d36106.netlify.app/an-skinstore/homepage/" target="_blank" className="remove_link_color" >Live</a>
                            </button>
                            <a href="https://github.com/AmanNinave/Skin_Store_Clone" target="_blank"><FaGithub size={35} /></a>
                        </div>
                    </div>
                    <p>
                        SkinStore is an online marketplace that offers a vast catalog of beauty products comprising skincare, haircare, self-care, makeup, and body categories. Customers can shop for premium beauty brands like SkinMedica, By Terry, Fragrance, SkinCeuticals, etc.
                    </p>
                </div>

            </div>
        </div >
    )
}