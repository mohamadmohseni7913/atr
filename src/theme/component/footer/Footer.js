import React from 'react';

const Footer = () => {
    return (
        <>
            <footer class="footer">
            <div class="footer-Links">
                {/* <!-- quick menu start --> */}
                <div class="quick-Menu">
                    <span>دسترسی سریع</span>
                    <ul class="quick-Menu-List">
                        <li>new Arrivlas</li>
                        <li>life style</li>
                        <li>accents</li>
                        <li>tables</li>
                        <li>dining </li>
                    </ul>
                </div>
                {/* <!-- quick menu end --> */}
                {/* <!-- NEWSLETTER started --> */}
                <div class="newSletter">
                    <span>
                        NEWSLETTER
                    </span>
                    <p>
                        <span>Sign up for our free video course and
                        </span>
                        <span>urban garden inspiration
                       </span>
                    </p>
                    <input type="text" placeholder="type here" />
                    <button>
                    subscribe
                     </button>


                </div>
                {/* <!-- NEWSLETTER end --> */}
                {/* <!-- information started --> */}
                <div class="information">
                    <span>اطلاعات</span>
                    <ul class="information-List">
                        <li>FAQs</li>
                        <li>track order</li>
                        <li>delivery</li>
                        <li>contact us</li>
                        <li>return</li>

                    </ul>

                </div>
                {/* <!-- information end --> */}
            </div>
            <div class="footer-Social">


            </div>



        </footer>
        </>
    );
};

export default Footer;