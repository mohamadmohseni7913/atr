import React from 'react';

const Page404 = () => {
    return (
        <>
              <div class="page-404">
            <div class="page-404-Img">
                <img src="/assets/img/404.png" alt="" />
            </div>
            <div class="page-404-Detail">
                <h1>error 404 not found</h1>
                <p>We´re sorry but the page you are looking for does nor exist.
                </p>
                <p>
                    You could return to <a href="#">Home page </a> or using search!
                </p>
                <div class="page-404-Detail-Btn">
                    <input type="text" placeholder="your search here" />
                    <button>search</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Page404;