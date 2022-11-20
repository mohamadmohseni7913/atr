import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div class="about-Us">
                <div class="about-Us-Header">
                    <p>درباره ما</p>
                </div>
                <div class="about-Us-Ads">
                    <div class="about-Us-Ads-Section">
                        <img src="/assets/img/banner-home-15.jpg" alt="" />
                        <div class="about-Us-Ads-Section-Info">
                            <h2>مجموعه جدیدی برای شما</h2>
                            <p>                                بهترین و باکیفیت ترین عطر های موحود در دنیا در دستان شما
                            </p>
                            <div class="link">
                                <a href="">همین حالا خرید کنید
                                    <span class="bottom-Bar"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-Us-Security">
                    <div class="about-Us-Security-Section">
                        <div class="about-Us-Security-Section-Part">
                            <i class="fal fa-rocket"></i>
                            <h4>تحویل رایگان</h4>
                            <p>ارسال رایگان برای تمامی سفارش های بالای یک میلیون و پانصد هزار تومان</p>
                        </div>
                        <div class="about-Us-Security-Section-Part">
                            <i class="fal fa-retweet"></i>
                            <h4>ضمانت بازگشت وجه</h4>
                            <p>بازگشت وجه در صورت عدم کیفیت مناسب</p>
                        </div>
                        <div class="about-Us-Security-Section-Part">
                            <i class="fal fa-shield"></i>
                            <h4>پشتیبانی آنلاین 24/7</h4>
                            <p>
                                ما اینجاییم تا در 24 ساعت تمام هفته از شما حمایت کنیم بیاید به هم کمک کنیم.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default AboutUs;