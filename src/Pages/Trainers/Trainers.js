import React from 'react';
import './Trainers.css';
import trainer1 from "../../assets/img/01.jpg";
import trainer2 from "../../assets/img/02.jpg";
import trainer3 from "../../assets/img/03.jpg";
import trainer4 from "../../assets/img/04.jpg";
import trainer5 from "../../assets/img/05.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const Trainers = () => {
    return (
        <div className="trainer-div">
            <div className="trainer-header">
                <h4>Train With Expert</h4>
                <h1>Meet The Magnificent Trainers</h1>
                <hr />
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="trainer-card">
                        <div className="trainer-pic">
                            <img src={trainer5} alt="" />
                        </div>
                        <div className="trainer-info">
                            <h3>Abir Rahman</h3>
                            <p>Cardio Expert</p>
                        </div>
                        <div className="trainer-social">
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faPinterest} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="trainer-card">
                        <div className="trainer-pic">
                            <img src={trainer2} alt="" />
                        </div>
                        <div className="trainer-info">
                            <h3>Jonathan Wick</h3>
                            <p>Jujutsu Expert</p>
                        </div>
                        <div className="trainer-social">
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faPinterest} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="trainer-card">
                        <div className="trainer-pic">
                            <img src={trainer3} alt="" />
                        </div>
                        <div className="trainer-info">
                            <h3>Amamda Levi</h3>
                            <p>Dancing Teacher</p>
                        </div>
                        <div className="trainer-social">
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faPinterest} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="trainer-card">
                        <div className="trainer-pic">
                            <img src={trainer4} alt="" />
                        </div>
                        <div className="trainer-info">
                            <h3>Stephen Josh</h3>
                            <p>Cycling Expert</p>
                        </div>
                        <div className="trainer-social">
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faPinterest} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="trainer-card">
                        <div className="trainer-pic">
                            <img src={trainer1} alt="" />
                        </div>
                        <div className="trainer-info">
                            <h3>Miranda Gottarado</h3>
                            <p>Yoga Expert</p>
                        </div>
                        <div className="trainer-social">
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <div className="trainer-social-icons">
                                <FontAwesomeIcon icon={faPinterest} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <div className="trainer-details">
                <div className="trainer-card">
                    <div className="trainer-pic">
                        <img src={trainer1} alt="" />
                    </div>
                    <div className="trainer-info">
                        <h3>Abir Rahman</h3>
                        <p>Cardio Expert</p>
                    </div>
                    <div className="trainer-social">
                        <div className="trainer-social-icons">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="trainer-social-icons">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="trainer-social-icons">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className="trainer-social-icons">
                            <FontAwesomeIcon icon={faPinterest} />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Trainers;