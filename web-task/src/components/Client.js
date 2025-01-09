import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import client1Img from "../assets/images/client-1.jpg";
import client2Img from "../assets/images/client-2.jpg";

const Client = () => {
    return (

        <section className="client_section ">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        What Our Clients Say
                    </h2>
                </div>


                <div className="carousel-wrap layout_padding2-top">
                        <Swiper
                            loop={true} // Enables infinite looping
                            spaceBetween={10} // Equivalent to margin: 10 in Owl Carousel
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }} // Custom navigation buttons
                            autoplay={{
                                delay: 3000, // Equivalent to autoplay:true
                                disableOnInteraction: false, // Similar to autoplayHoverPause
                            }}
                            breakpoints={{
                                // Equivalent to the responsive settings
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1000: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            <div className="item">
                                <SwiperSlide>
                                    <div className="box">
                                        <div className="client_id">
                                            <div className="img-box">
                                                <img src={client1Img} alt="Client 1"/>
                                            </div>
                                            <div className="client_detail">
                                                <div className="client_info">
                                                    <h6>Jorch Morik</h6>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="client_text">
                                            <p> chunks as necessary, making this the first true generator on the
                                                Internet. It uses a dictionary of over 200 Latin words, combined
                                                with a handful of model sentence structures, to generate Lorem Ipsum
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>

                            <div className="item">
                                <SwiperSlide>
                                    <div className="box">
                                        <div className="client_id">
                                            <div className="img-box">
                                                <img src={client2Img} alt="Client 2"/>
                                            </div>
                                            <div className="client_detail">
                                                <div className="client_info">
                                                    <h6>Jorch morik</h6>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="client_text">
                                            <p>
                                                chunks as necessary, making this the first true generator on the
                                                Internet. It uses a dictionary of over 200 Latin words, combined with a
                                                handful of model sentence structures, to generate Lorem Ipsum
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>

                            <div className="item">
                                <SwiperSlide>
                                    <div className="box">
                                        <div className="client_id">
                                            <div className="img-box">
                                                <img src={client1Img} alt=""/>
                                            </div>
                                            <div className="client_detail">
                                                <div className="client_info">
                                                    <h6>
                                                        Jorch morik
                                                    </h6>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="client_text">
                                            <p>
                                                chunks as necessary, making this the first true generator on the
                                                Internet. It uses a dictionary of over 200 Latin words, combined with a
                                                handful of model sentence structures, to generate Lorem Ipsum
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>

                            <div className="item">
                                <SwiperSlide>
                                    <div class="box">
                                        <div class="client_id">
                                            <div class="img-box">
                                                <img src={client2Img} alt=""></img>
                                            </div>
                                            <div class="client_detail">
                                                <div class="client_info">
                                                    <h6>
                                                        Jorch morik
                                                    </h6>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <i class="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div class="client_text">
                                            <p>
                                                chunks as necessary, making this the first true generator on the
                                                Internet. It uses a dictionary of over 200 Latin words, combined with a
                                                handful of model sentence structures, to generate Lorem Ipsum
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>

                        </Swiper>
             </div>
            </div>
        </section>
);
};

export default Client;
