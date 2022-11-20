import React from 'react';

const BlogCard = () => {
    return (
        <>
         <div class="blog-Card">
                    <img src="assets/img/slider-blog-thumb-1.jpg" alt="" />
                    <div class="blog-Card-Meta">
                        <p>
                            Agust 17, 09:14 am
                        </p>
                    </div>
                    <h2 class="blog-Card-Title">
                        <a href="#">we bring to the best </a>

                    </h2>
                    <div class="blog-Card-Info">
                        <p class="summary">

                            Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue. Mauris nec ante magna.

                        </p>
                        <a class="blog-Card-Info-Link" href="#"> read more</a>
                    </div>


                </div>
        </>
    );
};

export default BlogCard;