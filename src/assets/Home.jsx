import React, { Component } from 'react'
import Header from './header'
import "./home.css"
import { Link } from 'react-router-dom'
import img1 from "./img/img-1.png"
import img2 from "./img/img-2.png"
import img3 from "./img/img-3.png"
import img4 from "./img/features.png"
import img5 from "./img/img-4.jpg"
import img6 from "./img/img-5.jpg"
import img7 from "./img/img-6.jpg"
import img8 from "./img/img-7.jpg"
import img9 from "./img/blog-1.jpg"
import img10 from "./img/blog-2.jpg"
import img11 from "./img/blog-3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';

class Home extends Component {
    state ={
        img: <img src={img2} alt='img' />,
        headline: "Vision",
        para1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        para2: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    }
    vision (v) {
        this.setState({
            img: <img src={img2} alt='img' />,
            headline: "Vision",
            para1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            para2: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        });
    };
    changevision = this.vision.bind(this, this.v);

    history (h) {
        this.setState({
            img: <img src={img1} alt='img' />,
            headline: "History",
            para1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            para2: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        });
    };
    changehistory = this.history.bind(this, this.h);
    mission (m) {
        this.setState({
            img: <img src={img3} alt='img' />,
            headline: "Mission",
            para1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            para2: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        });
    };
    changemission = this.mission.bind(this, this.m);
    render(){
       
        return (
            <div>
                
                <Header></Header>
                <div className="section-1">
                    <div className="container">
                        <div className="section-1-para" id='home'>
                            <div id="page_wrap">
                
                                <h1>We're Anxiety Perfect Solution For<span> Tydek</span></h1>
                            </div>
                            <p>Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                            <div className="btn">
                                <button>Request free demo</button>
                            </div>
                            
                        </div>
                        <div id="arrow-icon">
                            <i  class="fa-solid fa-circle-arrow-down"></i>
                        </div>
                    </div>
                </div>
                <div id="Services-area" >
                    <div className="container">
                        <div className="Services-para">
                            <h1>Our <span>Services</span></h1>
                            <p>Nam egestas mi sit amet orci dignissim tempor Integer tincidunt nunc mauris in egestas nibh.</p>
                        </div>
                        <div className="Services-card">
                            <div className="st1-col-3">
                                <div className="col-3">
                                    <div className="design">
                                        <i class="fa-solid fa-pen-nib"></i>
                                        <h3>Web Design</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="design">
                                    <i class="fa-solid fa-desktop"></i>
                                        <h3>Web Development</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="st2-col-3">
                                <div className="col-3">
                                    <div className="design">
                                    <i class="fa-sharp fa-solid fa-lock"></i>
                                        <h3>Web Security</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="design">
                                    <i class="fa-solid fa-envelope"></i>
                                        <h3>Mail</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-area" id='about'>
                    <div className="container">
                        <div className="about-para">
                            <h1><span>About</span> Us</h1>
                            <p>Nam egestas mi sit amet orci dignissim tempor Integer tincidunt nunc mauris in egestas nibh.</p>
                        </div>
                        <div className="wrapper">
                            <div className="form-container">
                                <div className="btn-area" >
                                    <button onClick={this.changehistory}>History</button>
                                    <button onClick={this.changevision}>Vision</button>
                                    <button onClick={this.changemission}>Mission</button>
                                </div>
                                <div className="form-inner">
                                    <div className="Vision-area">
                                        <div className="img">
                                            <span>{this.state.img}</span>
                                        </div>
                                        <div className="History-para">
                                            <div className="color">
                                                <p className='pp'></p> 
                                                <h2>{this.state.headline}</h2>
                                            </div>
                                            <p>{this.state.para1}</p>
                                            <p>{this.state.para2}</p>
                                            <a href="#">Learn More.</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Amazing-Features" id='Amazing-Features'>
                    <div className="container">
                        <div className="Amazing-Features-para">
                            <h1>Amazing <span>Features</span> </h1>
                            <p>Nam egestas mi sit amet orci dignissim tempor Integer tincidunt nunc mauris in egestas nibh.</p>
                            <div className="box-para">
                                <div className="box-para-1">
                                    <div className="box-para-1-para">
                                        <i class="fa-solid fa-earth-europe"></i>
                                        <div className="box-para-1-para-1">
                                            <h5>Feature Name</h5>
                                            <span>Sub Headline</span>
                                        </div>
                                    </div>
                                    <div className="box-para-1-para">
                                    <i class="fa-solid fa-message"></i>
                                        <div className="box-para-1-para-1">
                                            <h5>Message</h5>
                                            <span>Sub Headline</span>
                                        </div>
                                    </div>
                                    <div className="box-para-1-para">
                                    <i class="fa-sharp fa-solid fa-building-columns"></i>
                                        <div className="box-para-1-para-1">
                                            <h5>Sell Everywhere</h5>
                                            <span>Sub Headline</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="box-para-2">
                                    <img src={img4} alt="" />
                                </div>

                                <div className="box-para-3">
                                <div className="box-para-1-para">
                                        <i class="fa-solid fa-credit-card"></i>
                                        <div className="box-para-1-para-1">
                                            <h5>Secured Payments</h5>
                                            <span>Sub Headline</span>
                                        </div>
                                    </div>
                                    <div className="box-para-1-para">
                                    <i class="fa-solid fa-book"></i>
                                        <div className="box-para-1-para-1">
                                            <h5>Customer Records</h5>
                                            <span>Sub Headline</span>
                                        </div>
                                    </div>
                                    <div className="box-para-1-para">
                                    <i class="fa-solid fa-truck"></i>
                                        <div className="box-para-1-para-1">
                                            <h5>Feature Name</h5>
                                            <span>Sub Headline</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Pricing-Plans" id='Plans'>
                    <div className="container">
                        <div className="Pricing-Plans-para">
                            <h1>Our <span>Pricing</span> Plans</h1>
                            <p className='ppp'>Nam egestas mi sit amet orci dignissim tempor Integer tincidunt nunc mauris in egestas nibh.</p>
                            <div className="box">
                                <div className="box-1">
                                    <h5>STARTER PLAN</h5>
                                    <h3>FREE</h3>
                                    <p><span>2</span> Domain licenses</p>
                                    <p><span>6</span> Downloads per month</p>
                                    <p><span>2</span> Regular extention</p>
                                    <p><span>10</span> Active sessions at once</p>
                                    <p><del>paragraph</del></p>
                                    <p><del>Premium support</del></p>
                                    <div className="btn">
                                        <button>Sign up</button>
                                    </div>
                                </div>
                                <div className="box-2">
                                    <div className="Selling">
                                        <span>Selling</span>
                                    </div>
                                    <h5>ADVANCED PLAN</h5>
                                    <h3><span>$</span>29<span>/mo</span></h3>
                                    <p><span>5</span> Domain licenses</p>
                                    <p><span>8</span> Downloads per month</p>
                                    <p><span>4</span> Degular extention</p>
                                    <p><span>24</span> Active sessions at once</p>
                                    <p><del>paragraph</del></p>
                                    <p><del>Premium support</del></p>
                                    <div className="btn">
                                        <button>Sign up</button>
                                    </div>
                                </div>
                                <div className="box-3">
                                    <h5>PROFESSIONAL PLAN</h5>
                                    <h3><span>$</span>59<span>/mo</span></h3>
                                    <p><span>Unlimited</span> Domain licenses</p>
                                    <p><span>25</span> Downloads per month</p>
                                    <p><span>Unlimited</span> Regular extention</p>
                                    <p><span>212</span> Active sessions at once</p>
                                    <p><del>paragraph</del></p>
                                    <p className='del'><del>Premium support</del></p>
                                    <div className="btn">
                                        <button>Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Testimonials" id='Testimonials'>
                    <div className="container">
                        <div className="Testimonials-para">
                            <h1><span>Testimonials</span></h1>
                            <p>Nam egestas mi sit amet orci dignissim tempor Integer tincidunt nunc mauris in egestas nibh.</p>
                        </div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        >
                            <SwiperSlide>
                                <div className="card">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum excepturi veniam pariatur voluptates! Commodi perspiciatis placeat rerum eum corporis provident, expedita, necessitatibus est aperiam excepturi maxime accusantium maiores, minima consectetur. Voluptatibus, eius vitae nam voluptas accusamus voluptatum nemo, architecto itaque commodi molestias eum sapiente consequatur perspiciatis harum, provident explicabo quasi mollitia et numquam! Odio error repellat voluptas voluptatum itaque.</p>
                                    <div className="card-img">
                                        <img src={img5} alt="slider-image" />
                                        <div className="card-img-para">
                                            <h4>Elizabeth Hobbs</h4>
                                            <span>Web Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum excepturi veniam pariatur voluptates! Commodi perspiciatis placeat rerum eum corporis provident, expedita, necessitatibus est aperiam excepturi maxime accusantium maiores, minima consectetur. Voluptatibus, eius vitae nam voluptas accusamus voluptatum nemo, architecto itaque commodi molestias eum sapiente consequatur perspiciatis harum, provident explicabo quasi mollitia et numquam! Odio error repellat voluptas voluptatum itaque.</p>
                                    <div className="card-img">
                                        <img src={img6} alt="slider-image" />
                                        <div className="card-img-para">
                                            <h4>Robert O'Neill</h4>
                                            <span>CEO & Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="card">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum excepturi veniam pariatur voluptates! Commodi perspiciatis placeat rerum eum corporis provident, expedita, necessitatibus est aperiam excepturi maxime accusantium maiores, minima consectetur. Voluptatibus, eius vitae nam voluptas accusamus voluptatum nemo, architecto itaque commodi molestias eum sapiente consequatur perspiciatis harum, provident explicabo quasi mollitia et numquam! Odio error repellat voluptas voluptatum itaque.</p>
                                    <div className="card-img">
                                        <img src={img7} alt="slider-image" />
                                        <div className="card-img-para">
                                            <h4>Robert O'Neill</h4>
                                            <span>CEO & Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="card">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum excepturi veniam pariatur voluptates! Commodi perspiciatis placeat rerum eum corporis provident, expedita, necessitatibus est aperiam excepturi maxime accusantium maiores, minima consectetur. Voluptatibus, eius vitae nam voluptas accusamus voluptatum nemo, architecto itaque commodi molestias eum sapiente consequatur perspiciatis harum, provident explicabo quasi mollitia et numquam! Odio error repellat voluptas voluptatum itaque.</p>
                                    <div className="card-img">
                                        <img src={''} alt="slider-image" />
                                        <div className="card-img-para">
                                            <h4>Robert O'Neill</h4>
                                            <span>CEO & Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="Team-area" id='Team'>
                    <div className="container">
                        <div className="Team-area-para">
                            <h1>Our <span>Team</span></h1>
                            <p>Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p>
                        </div>
                        <div class="img-section">
                            <div class="img-1">
                                <div className="blur">
                                    <a href="#">
                                        <img src={img9} alt="image" />
                                        <h4>Hi There !</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </a>
                                </div>
                                <h3>MARTIN SMITH</h3>
                                <abbr>FOUNDER & CEO</abbr>
                            </div>
                            <div class="img-1">
                                <div className="blur">
                                    <a href="#">
                                        <img src={img10} alt="image" />
                                        <h4>Hello World</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </a>
                                </div>
                                <h3>FRANKLIN HARBET</h3>
                                <abbr>HR MANAGER</abbr>
                            </div>
                            <div class="img-1">
                                <div className="blur">
                                    <a href="#">
                                        <img src={img11} alt="image" />
                                        <h4>I love to design</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </a>
                                </div>
                                <h3>LINDA ANDERSON</h3>
                                <abbr>MARKETING MANAGER</abbr>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Contact-area" id='Contect'>
                    <div className="container">
                        <div className="contact-area-para">
                            <h1><span>Contact</span> Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="form-area">
                            <div className="form">
                                <form action="#">
                                    <div className="input">
                                            <input type="text" id='name' name='name' placeholder='Your Name' />
                                            <input type="email" id='email' name='email' placeholder='Your Email' />
                                    </div>
                                        <input type="text" id='sub' placeholder='Subject' />
                                        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Your Message'></textarea>
                                        <button>Sand Message</button>
                                </form>
                            </div>
                            <div className="location">
                            <p><i class="fa-solid fa-envelope"></i> polashraj403@gmail.com</p>
                            <p><i class="fa-solid fa-globe"></i> www.website.com</p>
                            <p><i class="fa-solid fa-phone"></i> +880 1763890722</p>
                            <p><i class="fa-solid fa-location-dot" tel></i> 12, MK Street, NC, 452768.</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-area">
                    <div className="container">
                        <div className="footer-para">
                            <div className="col-3">
                                <h5>ABOUT</h5>
                                <p><a href="#">About</a></p>
                                <p><a href="#">Submit on issue</a></p>
                                <p><a href="#">GitHub Repo</a></p>
                                <p><a href="#">Slack</a></p>
                            </div>
                            <div className="col-3">
                                <h5>GATTING STARTED</h5>
                                <p><a href="#">introduction</a></p>
                                <p><a href="#">Usage</a></p>
                                <p><a href="#">Globls</a></p>
                                <p><a href="#">Elements</a></p>
                                <p><a href="#">Collection</a></p>
                            </div>
                            <div className="col-3">
                                <h5>RESOURCES</h5>
                                <p><a href="#">Monitoring Grader</a></p>
                                <p><a href="#">SVideo Tutorial</a></p>
                                <p><a href="#">Term & Service</a></p>
                                <p><a href="#">Tulsy API</a></p>
                                <p><a href="#">Marketplace</a></p>
                            </div>
                            <div className="col-3">
                                <h5>SOCIAL MEDIAL <span>TYDEK</span></h5>
                                <p>Semper nibh a dignissim Integer cursus tempsed.</p>
                                <p><input type="text" id='text' placeholder='Enter Your Address ..' /><button>sand</button></p>
                                <p className='font-icon'>
                                    <a href="#"><i class="fa-brands fa-facebook"></i></a> 
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i class="fa-brands fa-skype"></i></a>
                                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                                    <a href="#"> <i class="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i class="fa-brands fa-github"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="email">
                        <p>polashraj403@gmail.com</p>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Home