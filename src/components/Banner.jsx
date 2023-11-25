import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Banner() {
    return (

        <div class="container-fluid no-pad">

            <div class="banner-space">

                <div class="banner-container">
                    <div class="banner-top">
                        <div class="banner-txt">
                            DS<span class="red cursive">_</span>Development
                            <FontAwesomeIcon icon="fa-regular fa-chevron-down" />
                        </div>
                    </div>
                    <div class="banner-bottom">
                        <div class="banner-small "> Software Development | Web Design | Digital Solutions </div>
                        <br />
                        <div class='red'> <FontAwesomeIcon icon="fa-regular fa-chevron-down" /> </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
