import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return (
        
            <footer className="uk-section footer">
                <div className="uk-container">
                    <div className="uk-child-width-1-1@s uk-child-width-1-3@m" data-uk-grid>
                        <div>
                            <h4>Rouelibre.io</h4>
                            <p>Blog sur le vélo</p>
                        </div>
                        <div>
                            <h4>Rouelibre sur les internets :</h4>
                            <ul className="uk-list social">
                                <li>
                                    <Link href="https://www.instagram.com/rouelibre.io/" >
                                        <a className="uk-link-text" target="_blank" rel="noopener noreferrer nofollow">
                                            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" /> Instagram
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/c/Rouelibres" >
                                        <a className="uk-link-text" target="_blank" rel="noopener noreferrer nofollow">
                                            <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" /> Youtube
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/rouelibreio" >
                                        <a className="uk-link-text" target="_blank" rel="noopener noreferrer nofollow">
                                            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" /> Twitter
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Retrouve moi sur les réseaux :</h4>
                            <p>Blabla</p>
                        </div>
                    </div>
                    <p className="">2022 <FontAwesomeIcon icon={faCopyright} size="sm" /> Rouelibre.io All rights reserved</p>
                </div>
            </footer>
    )
} 

export default Footer