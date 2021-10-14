import React from "react";
import { TimelineLite } from "greensock";
import { Waypoint } from "react-waypoint";
import animateScrollTo from "animated-scroll-to";
import Slider from "react-slick";

//Assets
import HeaderLogo from "../assets/header-logo.svg";
import OpenBlank from "../assets/open-in-new-icon.svg";
import LogoBNY from "../assets/logo-bny.svg";
import LogoEagle from "../assets/logo-eagle.svg";
import LogoProto from "../assets/logo-proto.svg";
import LogoHSBC from "../assets/logo-hsbc.svg";
import ContactRibbon from "../assets/contact-ribbon.svg";
import LogoLinkedin from "../assets/logo-linkedin.svg";

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            scrollTop: 0,
            URLs: [
                `./logo-color.svg`,
                `./project.jpg`,
                `./why.jpg`,
                `./person-0.jpg`,
                `./person-1.jpg`,
                `./person-2.jpg`,
                `./person-3.jpg`,
            ],
            bottomOffset: "100px",
            topOffset: "100px",
            //Main
            mainBottom: false,
            //Project
            projectSectionTitle: false,
            projectSectionLeft: false,
            projectSectionRight: false,
            projectHorizontalLine: false,
            //Why
            whoSectionTitle: false,
            whySectionLeft: false,
            whySectionRight: false,
            whyHorizontalLine: false,
            //About
            aboutSectionTitle: false,
            aboutSectionContent: false,
            person0visible: false,
            person1visible: false,
            person2visible: false,
            person3visible: false,
            aboutLast: false,
            aboutVerticalLine: false,
            //What We Need
            whatWeNeedSectionTitle: false,
            whatWeNeedSectionContentTop: false,
            whatWeNeedSectionContentBottom: false,
            whatWeNeedHorizontalLine: false,
        };
        this.enter = new TimelineLite();
    }
    loadImage = (src) => {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(img.height);
            img.onerror = resolve();
            img.src = src;
        });
    };
    onEnter = () => {
        return;
        document.body.style.overflow = "hidden";
        this.state.URLs.forEach(async (url, i) => {
            await this.loadImage(url);
            if (i === this.state.URLs.length - 1) {
                this.enter
                    .to(this.loader, 0.6, { opacity: 0 }, 0.6)
                    .set(document.body, { overflow: "scroll" })
                    .set(this.loader, { "pointer-events": "none" })
                    .fromTo(
                        this.mainBottom,
                        1,
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0 },
                        "=-1.5"
                    )
                    .fromTo(
                        this.mainText1,
                        1,
                        { opacity: 0, x: -50 },
                        { opacity: 1, x: 0 },
                        "=-1"
                    )
                    .fromTo(
                        this.mainText2,
                        1,
                        { opacity: 0, x: 50 },
                        { opacity: 1, x: 0 },
                        "=-0.8"
                    )
                    .fromTo(
                        this.mainText3,
                        1,
                        { opacity: 0, x: -30 },
                        { opacity: 1, x: 0 },
                        "=-0.8"
                    )
                    .fromTo(
                        this.mainDonateButton,
                        1,
                        { opacity: 0, x: 30 },
                        { opacity: 1, x: 0 },
                        "=-0.8"
                    )
                    .fromTo(
                        this.mainBottomLogo,
                        0.6,
                        { opacity: 0 },
                        { opacity: 1 },
                        "=-1"
                    )
                    .fromTo(
                        this.mainScrollWrapper,
                        0.6,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0 },
                        "=-0.6"
                    )
                    .fromTo(
                        this.header,
                        0.6,
                        { opacity: 0, y: -20 },
                        { opacity: 1, y: 0 },
                        "=-0.6"
                    );
            }
        });
    };
    componentDidMount = () => {
        window.addEventListener("scroll", (e) => {
            this.setState({
                scrollTop: window.scrollY,
            });
        });

        this.onEnter();
    };
    toggleMenu = () => {
        document.body.style.overflow = this.state.isMenuOpen
            ? "scroll"
            : "hidden";
        this.setState((state) => ({
            isMenuOpen: !state.isMenuOpen,
        }));
    };
    handleMenuClick = (to) => {
        document.body.style.overflow = "scroll";
        this.setState({
            isMenuOpen: false,
        });
        animateScrollTo(to, {
            speed: 300,
            maxDuration: 500,
            easing: (t) => {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            },
        });
    };
    render = () => {
        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
        };
        const recommendations = [
            {
                content: `Patryk is great product manager with life-saving technical background. He has excellent ideas, great communication and heart-warming 'can do' attitude. He's a coworker each team should have.`,
                author: "Jacek",
                link: "https://www.linkedin.com/in/jacekfilo/",
            },
            {
                content: `Cooperation with Patryk is an amazing experience. You can always count on a multitude of his creative ideas as well as his helping hand. Applying teaching skill (and patience) he explains all the nuances of potential solutions. Patryk's workshop is characterized by punctuality, diligence, quick implementation of changes, openness to customer's suggestions, creativity and accessibility. His analytical mind combined with the artistic sense, highly developed emotional intelligence and a sense of humor make work not only successful, but also pleasant!`,
                author: "Karol",
                link: "https://www.linkedin.com/in/karol-mierzwa-519505150/",
            },
            {
                content: `I was working with Patryk for 1,5 year. It was a great pleasure to cooperate with him. During that time he was considered as the most innovative person in our team. Patryk's input allowed to speed up our daily work due to automatization of the process and reducing manual job. Patryk combined great financial knowledge with strong sense of technical issues. He was also known as a good team player being ready to provide others with advices and adding positive atmosphere in the group. I can fully recommend working with Patryk!`,
                author: "Bartłomiej",
                link: "https://www.linkedin.com/in/bart%C5%82omiej-o%C5%BCga-600674154/",
            },
        ];
        return (
            <div id="landing">
                <div id={`loader`} ref={(e) => (this.loader = e)}>
                    <img src={HeaderLogo} alt={`Logo`} />
                </div>
                <header id={`header`} ref={(e) => (this.header = e)}>
                    <div className={`header-inner`}>
                        <div className={`header-inner-left`}>
                            <img src={HeaderLogo} alt={`Logo`} />
                        </div>
                        {/* <div className={`header-inner-right mobile`}>
                            <button
                                className={`header-button`}
                                onClick={this.toggleMenu}
                            >
                                <div className="nav-icon">
                                    <div />
                                </div>
                            </button>
                        </div> */}
                        <div className={`header-inner-right desktop`}>
                            <button
                                className={`header-button`}
                                onClick={() => this.handleMenuClick(this.about)}
                            >
                                About me
                            </button>
                            <button
                                className={`header-button`}
                                onClick={() =>
                                    this.handleMenuClick(this.howIWork)
                                }
                            >
                                How I work
                            </button>
                            <button
                                className={`header-button`}
                                onClick={() =>
                                    this.handleMenuClick(this.productFAQ)
                                }
                            >
                                Product FAQ
                            </button>
                            <button
                                className={`header-button`}
                                onClick={() =>
                                    this.handleMenuClick(this.contact)
                                }
                            >
                                Get in touch
                            </button>
                        </div>
                    </div>
                </header>
                <div id="mobile-menu"></div>
                <div id="landing-content">
                    <section id="main">
                        <div className="main-left"></div>
                        <div className="main-right">
                            <div className="main-content">
                                Do you dream about horrible product, tiring UX
                                or frustrated team members? Great! Don’t stay in
                                touch! 🤗
                            </div>
                            <div className="main-or">In other case</div>
                            <button className={`contact-me`}>Contact me</button>
                        </div>
                    </section>
                    <section id="about">
                        <div className="about-left">
                            <div className="about-title">
                                <h1>About me</h1>
                            </div>
                            <div className="about-content">
                                <p>
                                    Let’s do some awesome things together! Feel
                                    free to talk to me if you need someone
                                    conducting software development or bonding
                                    business and technology. Here’s why:
                                </p>
                                <p>
                                    As a visionary thinker I can clearly imagine
                                    not only how things will look in the future,
                                    but also how to gradually change the current
                                    state to achieve the goal. My imagination
                                    combined with business, technical and design
                                    skills allow me build things so quickly and
                                    so easily. Please check the projects I have
                                    conducted so far. I will be more than happy
                                    to tell you more about the ways I work.
                                </p>
                                <p>
                                    Being comfortable taking charge and speaking
                                    up helps me remove bottlenecks and reassure
                                    others in times of crisis. I am fully
                                    determined to make a difference. This skill
                                    is extremely important while working with a
                                    team - I break the ice between the people
                                    naturally and make them feel good with
                                    unfamiliar ones. While living in three
                                    countries I mastered building social
                                    connections from scratch.
                                </p>
                                <p>
                                    I have a heavy load of experience in the
                                    direct contact with all the variety of
                                    clients, including the most difficult ones.
                                    I know how to deal with people, make them
                                    happy and not let them dominate me. In some
                                    projects I worked in international
                                    cross-institutional teams with, among
                                    others, Polish Ministry of Finance or the
                                    International Swaps and Derivatives
                                    Association.
                                </p>
                                <p>
                                    Please get in touch with me if you have any
                                    questions!
                                </p>
                                <p>It will be great hearing from you,</p>
                                <p>Patryk</p>
                            </div>
                        </div>
                        <div className="about-right"></div>
                    </section>
                    <section id="how-i-work">
                        <div className="how-i-work-left">
                            <div className="how-i-work-title">How</div>
                            <div className="how-i-work-title">I work</div>

                            <div className="how-i-work-or">Fair enough?</div>
                            <button className={`contact-me`}>Contact me</button>
                        </div>
                        <div className="how-i-work-right">
                            <div className="how-i-work-content-title">
                                <div className="how-i-work-content-title-number">
                                    1
                                </div>
                                <div className="how-i-work-content-title-label">
                                    No jurisdictional disputes
                                </div>
                            </div>
                            <div className="how-i-work-content">
                                <p>
                                    Everyone has their work to do, I’m here to
                                    say what needs to be done next. I don’t
                                    lower technical estimates just to fit
                                    deadlines, you won’t see me micromanaging
                                    anyone.
                                </p>
                            </div>
                            <div className="how-i-work-content-title">
                                <div className="how-i-work-content-title-number">
                                    2
                                </div>
                                <div className="how-i-work-content-title-label">
                                    Empathy is a key
                                </div>
                            </div>
                            <div className="how-i-work-content">
                                <p>
                                    Both customers and development teams members
                                    are people. There is much more than product
                                    focus in their lives and other’s wellbeing
                                    is always the priority for me.
                                </p>
                            </div>
                            <div className="how-i-work-content-title">
                                <div className="how-i-work-content-title-number">
                                    3
                                </div>
                                <div className="how-i-work-content-title-label">
                                    Customers value first
                                </div>
                            </div>
                            <div className="how-i-work-content">
                                <p>
                                    My role is to understand customers.
                                    Knowledge of their struggles is a source of
                                    potential solutions we can provide. I ask
                                    questions and analyse impacts of our
                                    actions.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section id="product-faq">
                        <div className="product-faq-title product-faq-title-1">
                            Product
                        </div>
                        <div className="product-faq-title product-faq-title-2">
                            FAQ
                        </div>
                        <div className="product-faq-content">
                            Product is just a way to solve a problem and it has
                            to follow company vision. Imagine how the world
                            might look like in 5 or 10 years. I will help you
                            make the best of your vision, adjust your products
                            to market needs and earn more.
                        </div>
                        <div className="product-faq-buttons">
                            <div className="product-faq-button">
                                <div className="product-faq-button-title">
                                    How to roadmap?
                                </div>
                                <div className="product-faq-button-icon">
                                    <img
                                        src={OpenBlank}
                                        alt={`Open in a newą tab`}
                                    />
                                </div>
                            </div>
                            <div className="product-faq-button">
                                <div className="product-faq-button-title">
                                    How to roadmap?
                                </div>
                                <div className="product-faq-button-icon">
                                    <img
                                        src={OpenBlank}
                                        alt={`Open in a newą tab`}
                                    />
                                </div>
                            </div>
                            <div className="product-faq-button">
                                <div className="product-faq-button-title">
                                    How to roadmap?
                                </div>
                                <div className="product-faq-button-icon">
                                    <img
                                        src={OpenBlank}
                                        alt={`Open in a newą tab`}
                                    />
                                </div>
                            </div>
                            <div className="product-faq-button">
                                <div className="product-faq-button-title">
                                    How to roadmap?
                                </div>
                                <div className="product-faq-button-icon">
                                    <img
                                        src={OpenBlank}
                                        alt={`Open in a newą tab`}
                                    />
                                </div>
                            </div>
                            <div className="product-faq-button">
                                <div className="product-faq-button-title">
                                    How to roadmap?
                                </div>
                                <div className="product-faq-button-icon">
                                    <img
                                        src={OpenBlank}
                                        alt={`Open in a newą tab`}
                                    />
                                </div>
                            </div>
                            <div className="product-faq-button">
                                <div className="product-faq-button-title">
                                    How to roadmap?
                                </div>
                                <div className="product-faq-button-icon">
                                    <img
                                        src={OpenBlank}
                                        alt={`Open in a newą tab`}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="experience">
                        <div className="experience-title">No miracles.</div>
                        <div className="experience-content">
                            I worked with companies of all sizes. I will handle
                            all sort of problems you have. There are no
                            miracles. All the rest can be addressed.
                        </div>
                        <button className={`contact-me`}>Contact me</button>
                        <div className="experience-brands">
                            <img src={LogoBNY} alt={`BNY Mellon`} className="experience-brand"/>
                            <img
                                src={LogoEagle}
                                alt={`Eagle Investment Systems`} className="experience-brand"
                            />
                            <img src={LogoProto} alt={`Proto.io`} className="experience-brand" />
                            <img src={LogoHSBC} alt={`HSBC`} className="experience-brand" />
                        </div>
                        <Slider
                            {...sliderSettings}
                            className="experience-slider"
                        >
                            {recommendations.map((box, i) => (
                                <div key={`box-${i}`} className={`slider-box`}>
                                    <div
                                        key={`box-${i}`}
                                        className={`slider-box-content`}
                                    >
                                        <div className={`slider-description`}>
                                            <p>{box.content}</p>
                                        </div>
                                        <div className={`slider-author`}>
                                            <a href={box.link}>@{box.author}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </section>
                    <img src={ContactRibbon} alt={`Contact`} />
                    <section id="contact">
                        <div className="contact-title contact-title-1">
                            Don
                            <span>&#39;</span>t
                        </div>
                        <div className="contact-title contact-title-2">
                            make me
                        </div>
                        <div className="contact-title contact-title-3">
                            wait
                        </div>
                        <div className="contact-or">Message me on</div>
                        <div className="contact-linkedin">
                            <img src={LogoLinkedin} alt={`Linkedin`} />
                            <div className="contact-arrow contact-arrow-left" />
                            <div className="contact-arrow contact-arrow-right" />
                        </div>
                        <div className="contact-or">Or</div>
                        <div className="contact-mail">
                            patryk@productisfun.com
                        </div>
                    </section>
                    <footer>
                        <div className="footer-author">
                            Made with ❤️ by Patryk Mastrzykowski
                        </div>
                        <div className="footer-author">
                            Photos by Mariusz Spłuszka
                        </div>
                    </footer>
                </div>
            </div>
        );
        // return (
        //   <div id="landing">
        //     <div id={`loader`} ref={e => this.loader = e}>
        //       <img src={`./logo-color.svg`} alt={`Logo`} />
        //     </div>
        //     <header id={`header`} className={this.state.scrollTop !== 0
        //       || this.state.isMenuOpen ? 'white' : ''} ref={e => this.header = e}>
        //       <div className={`header-inner ${this.state.mainBottom ? 'white' : ''} ${this.state.isMenuOpen ? 'open' : ''}`}>
        //         <div className={`header-inner-left`}>

        //         </div>
        //         <div className={`header-inner-right mobile`}>
        //           <button className={`header-button`} onClick={this.toggleMenu}>
        //             <div className="nav-icon">
        //               <div />
        //             </div>
        //           </button>
        //         </div>
        //         <div className={`header-inner-open-mobile`}>
        //           <button
        //             className={`header-button`}
        //             onClick={() => this.handleMenuClick(this.about)}
        //           >About me</button>
        //           <button
        //             className={`header-button`}
        //             onClick={() => this.handleMenuClick(this.howIWork)}
        //           >How I work</button>
        //           <button
        //             className={`header-button`}
        //             onClick={() => this.handleMenuClick(this.productFAQ)}
        //           >Product FAQ</button>
        //           <button
        //             className={`header-button`}
        //             onClick={() => this.handleMenuClick(this.contact)}
        //           >Get in touch</button>
        //         </div>
        //         <div className={`header-inner-right desktop`}>
        //           <button
        //             className={`header-button`}
        //             onClick={() => this.handleMenuClick(this.about)}
        //           >About me</button>
        //           <button
        //             className={`header-button`}
        //             onClick={() => this.handleMenuClick(this.howIWork)}
        //           >How I work</button>
        //           <button
        //             className={`header-button`}
        //             onClick={() => this.handleMenuClick(this.productFAQ)}
        //           >Product FAQ</button>
        //           <button
        //             className={`header-button`}
        //             onClick={() => this.handleMenuClick(this.contact)}
        //           >Get in touch</button>
        //         </div>
        //       </div>
        //     </header>
        //     <section id='main'>
        //       <div className={`main-top`}>
        //         <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1919.997 725.672">
        //           <g id="Grupo_47" dataname="Grupo 47" transform="translate(-0.055 -0.432)">
        //             <line id="Línea_16" ref={e => this.lineMain2 = e} dataname="Línea 16" y2="722" transform="translate(960.5 0.5)" fill="none" strokeWidth="1" />
        //             <path id="Trazado_104" ref={e => this.lineMain1 = e} dataname="Trazado 104" d="M5553,1440.5s0,721.5-895.892,721.5" transform="translate(-4657 -1440)" fill="none" strokeWidth="1" />
        //             <path id="Trazado_105" ref={e => this.lineMain3 = e} dataname="Trazado 105" d="M4657.107,1440.5s0,721.5,895.892,721.5" transform="translate(-3633 -1440)" fill="none" strokeWidth="1" />
        //           </g>
        //         </svg>
        //         <div className={`main-top-content`}>
        //           <div className={`main-top-empty`}>
        //           </div>
        //           <div className={`main-top-text`}>
        //             <div className={`header-small`} ref={e => this.mainText1 = e}>A co jeśli to</div>
        //             <div className={`header-large`} ref={e => this.mainText2 = e}>opera przyjedzie</div>
        //             <div className={`header-medium`} ref={e => this.mainText3 = e}>do Ciebie?</div>
        //             <div className={`main-button`}
        //               ref={e => this.mainDonateButton = e}
        //             >
        //               <a href="https://zrzutka.pl/4jztdh" rel="noopener noreferrer" target="_blank">
        //                 <button>Wesprzyj projekt</button>
        //               </a>
        //             </div>
        //           </div>
        //           <div className={`main-scroll-wrapper`} ref={e => this.mainScrollWrapper = e}>
        //             <button
        //               onClick={() => animateScrollTo(this.project)}
        //               className={`header-button`}>Przewiń w dół</button>
        //           </div>
        //         </div>
        //       </div>
        //       <Waypoint
        //         onEnter={() => this.setState({
        //           mainBottom: true
        //         })}
        //         onLeave={() => this.setState({
        //           mainBottom: false
        //         })}
        //       >
        //         <div className={`main-bottom`} ref={e => this.mainBottom = e}>
        //           <img src={`./logo-white.svg`} alt={`Logo`} ref={e => this.mainBottomLogo = e} />
        //         </div>
        //       </Waypoint>
        //     </section>
        //     <section id='project' ref={e => this.project = e}>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           projectSectionTitle: true
        //         })}
        //         onLeave={() => this.setState({
        //           projectSectionTitle: false
        //         })}
        //       >
        //         <div className={`section-title invisible ${this.state.projectSectionTitle ? 'visible' : ''}`} ref={e => this.projectSectionTitle = e}>
        //           O projekcie
        //     </div>
        //       </Waypoint>
        //       <div className={`section-content`}>
        //         <Waypoint
        //           bottomOffset={this.state.bottomOffset}
        //           onEnter={() => this.setState({
        //             projectSectionLeft: true
        //           })}
        //           onLeave={() => this.setState({
        //             projectSectionLeft: false
        //           })}
        //         >
        //           <div className={`section-content-left invisible ${this.state.projectSectionLeft ? 'visible' : ''}`} ref={e => this.projectSectionLeft = e}>
        //             <img src={`./project.jpg`} alt={`O projekcie`} />
        //           </div>
        //         </Waypoint>
        //         <Waypoint
        //           bottomOffset={this.state.bottomOffset}
        //           onEnter={() => this.setState({
        //             projectSectionRight: true
        //           })}
        //           onLeave={() => this.setState({
        //             projectSectionRight: false
        //           })}
        //         >
        //           <div className={`section-content-right text invisible ${this.state.projectSectionRight ? 'visible' : ''}`} ref={e => this.projectSectionRight = e}>
        //           Projekt OperoBus jest nowatorską i{'\u00A0'}nowoczesną próbą dotarcia z{'\u00A0'}kulturą wysoką do{'\u00A0'}odległych miejsc naszego kraju i{'\u00A0'}lokalnych społeczności, które nie{'\u00A0'}mają sposobności obcowania z{'\u00A0'}pięknem żywej muzyki klasycznej, jej{'\u00A0'}ponadczasowymi wartościami oraz emocjami, które za{'\u00A0'}sobą niesie. Pomysł mobilnej sceny operowej czerpie ze{'\u00A0'}źródeł commedii dell'arte. Podobnie jak wędrowne trupy operowe w XVII{'\u00A0'}w. obieramy za{'\u00A0'}cel dotarcie z{'\u00A0'}królową wszystkich sztuk do{'\u00A0'}miast i{'\u00A0'}miasteczek najodleglejszych zakątków Polski. Wykonywane na{'\u00A0'}żywo, dla{'\u00A0'}zgromadzonej na{'\u00A0'}wolnym powietrzu publiczności, profesjonalne koncerty i{'\u00A0'}spektakle, nie{'\u00A0'}będą wymagały do{'\u00A0'}realizacji żadnego dodatkowego zaplecza. Taki sposób prezentacji sztuki pozwoli szerzyć i{'\u00A0'}popularyzować kulturę, muzykę klasyczną, co{'\u00A0'}jest naszą misją i{'\u00A0'}powołaniem.
        //       </div>
        //         </Waypoint>
        //       </div>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           projectHorizontalLine: true
        //         })}
        //         onLeave={() => this.setState({
        //           projectHorizontalLine: false
        //         })}
        //       >
        //         <div className={`horizontal-line ${this.state.projectHorizontalLine ? 'visible' : ''}`} ref={e => this.projectHorizontalLine = e} />
        //       </Waypoint>
        //     </section>
        //     <section id='why' ref={e => this.why = e}>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           whoSectionTitle: true
        //         })}
        //         onLeave={() => this.setState({
        //           whoSectionTitle: false
        //         })}
        //       >
        //         <div className={`section-title invisible ${this.state.whoSectionTitle ? 'visible' : ''}`} ref={e => this.whoSectionTitle = e}>
        //           Dlaczego?
        //     </div>
        //       </Waypoint>
        //       <div className={`section-content`}>
        //         <Waypoint
        //           bottomOffset={this.state.bottomOffset}
        //           onEnter={() => this.setState({
        //             whySectionLeft: true
        //           })}
        //           onLeave={() => this.setState({
        //             whySectionLeft: false
        //           })}
        //         >
        //           <div className={`section-content-left text invisible ${this.state.whySectionLeft ? 'visible' : ''}`} ref={e => this.whySectionLeft = e}>
        //           W trakcie wielu dotychczasowych tras koncertowych, mieliśmy okazję poznać i{'\u00A0'}zobaczyć urokliwe miejsca, pięknie zrewitalizowane centra, rynki miast i{'\u00A0'}miasteczek. Właśnie one doskonale sprawdzą się jako miejsca do parkowania Operobusa i{'\u00A0'}aranżacji naszej mobilnej sceny. Czyż nie byłoby czymś niesamowitym doświadczenie i{'\u00A0'}przeżycie koncertu lub spektaklu o{'\u00A0'}wysokich walorach artystycznych podczas wieczornego spaceru w{'\u00A0'}urokliwym miejscu?
        //       </div>
        //         </Waypoint>
        //         <Waypoint
        //           bottomOffset={this.state.bottomOffset}
        //           onEnter={() => this.setState({
        //             whySectionRight: true
        //           })}
        //           onLeave={() => this.setState({
        //             whySectionRight: false
        //           })}
        //         >
        //           <div className={`section-content-right invisible ${this.state.whySectionRight ? 'visible' : ''}`} ref={e => this.whySectionRight = e}>
        //             <img src={`./why.jpg`} alt={`Dlaczego?`} />
        //           </div>
        //         </Waypoint>
        //       </div>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           whyHorizontalLine: true
        //         })}
        //         onLeave={() => this.setState({
        //           whyHorizontalLine: false
        //         })}
        //       >
        //         <div className={`horizontal-line ${this.state.whyHorizontalLine ? 'visible' : ''}`} ref={e => this.whyHorizontalLine = e} />
        //       </Waypoint>
        //     </section>
        //     <section id='about' ref={e => this.about = e}>
        //       <div className={`section-person`}>
        //         <div className={`section-person-image`}>
        //         </div>
        //         <div className={`section-person-details special`}>
        //           <Waypoint
        //             bottomOffset={this.state.bottomOffset}
        //             onEnter={() => this.setState({
        //               aboutSectionTitle: true
        //             })}
        //             onLeave={() => this.setState({
        //               aboutSectionTitle: false
        //             })}
        //           >
        //             <div className={`section-title invisible ${this.state.aboutSectionTitle ? 'visible' : ''}`} ref={e => this.aboutSectionTitle = e}>
        //               O nas
        //         </div>
        //           </Waypoint>
        //           <Waypoint
        //             bottomOffset={this.state.bottomOffset}
        //             onEnter={() => this.setState({
        //               aboutSectionContent: true
        //             })}
        //             onLeave={() => this.setState({
        //               aboutSectionContent: false
        //             })}
        //           >
        //             <div className={`section-content invisible ${this.state.aboutSectionContent ? 'visible' : ''}`} ref={e => this.aboutSectionContent = e}>
        //             Najważniejsi są ludzie. Członkowie zespołu artystycznego Operobusa to{'\u00A0'}młodzi entuzjaści sztuki, kochający świat i{'\u00A0'}ludzi. "Nadając na{'\u00A0'}tych samych falach", doskonale się{'\u00A0'}rozumieją, co bardzo pomaga i{'\u00A0'}sprawdza się nie{'\u00A0'}tylko na{'\u00A0'}scenie, ale{'\u00A0'}także w{'\u00A0'}życiu prywatnym.
        //         </div>
        //           </Waypoint>
        //         </div>
        //       </div>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           person0visible: true
        //         })}
        //         onLeave={() => this.setState({
        //           person0visible: false
        //         })}
        //       >
        //         <div className={`section-person ${this.state.person0visible ? 'visible' : ''}`}>
        //           <div className={`section-person-image invisible`} ref={e => this.aboutPerson0image = e}>
        //             <img src={`./person-0.jpg`} alt={`Paweł Michalczuk`} />
        //           </div>
        //           <div className={`section-person-details`}>
        //             <div className={`section-person-title invisible`} ref={e => this.aboutPerson0title = e}>
        //               Paweł Michalczuk
        //         </div>
        //             <div className={`section-person-content invisible`} ref={e => this.aboutPerson0content = e}>
        //             Bas, śpiewak młodego pokolenia, który{'\u00A0'}po{'\u00A0'}starannej edukacji muzycznej z{'\u00A0'}sukcesem wkroczył w{'\u00A0'}zawodowy świat opery. Jako 24 latek ma na{'\u00A0'}swoim koncie debiuty w{'\u00A0'}pierwszoplanowych partiach w{'\u00A0'}Polskiej Operze Królewskiej i{'\u00A0'}Operze Bałtyckiej, a{'\u00A0'}także tournee po{'\u00A0'}Chinach kontynentalnych i{'\u00A0'}liczne koncerty w{'\u00A0'}Polsce i{'\u00A0'}Europie. Od trzech sezonów związany jako solista z{'\u00A0'}programem edukacyjnym Spotkania z{'\u00A0'}Muzyką Filharmonii Narodowej, którego{'\u00A0'}esencją są{'\u00A0'}wyjazdowe trasy koncertowe do{'\u00A0'}miejscowości w{'\u00A0'}północno-wschodnich regionach Polski.
        //         </div>
        //           </div>
        //         </div>
        //       </Waypoint>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           person1visible: true
        //         })}
        //         onLeave={() => this.setState({
        //           person1visible: false
        //         })}
        //       >
        //         <div className={`section-person ${this.state.person1visible ? 'visible' : ''}`}>
        //           <div className={`section-person-image invisible`} ref={e => this.aboutPerson1image = e}>
        //             <img src={`./person-1.jpg`} alt={`Aleksandra Klimczak`} />
        //           </div>
        //           <div className={`section-person-details`}>
        //             <div className={`section-person-title invisible`} ref={e => this.aboutPerson1title = e}>
        //               Aleksandra Klimczak
        //         </div>
        //             <div className={`section-person-content invisible`} ref={e => this.aboutPerson1content = e}>
        //             Sopran, prezes Fundacji o.to.ja, która od{'\u00A0'}6 lat z{'\u00A0'}powodzeniem realizuje misję wyprowadzania kultury i{'\u00A0'}sztuki wysokiej z{'\u00A0'}murów instytucji, oper i{'\u00A0'}filharmonii do{'\u00A0'}szerokiej publiczności. Dwukrotna stypendystka Ministra Kultury i{'\u00A0'}Dziedzictwa Narodowego na{'\u00A0'}autorskie projekty; od{'\u00A0'}sześciu lat jako solistka współpracuje z{'\u00A0'}Filharmonią Narodową w{'\u00A0'}ramach programu Spotkań z{'\u00A0'}Muzyką.
        //         </div>
        //           </div>
        //         </div>
        //       </Waypoint>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           person2visible: true
        //         })}
        //         onLeave={() => this.setState({
        //           person2visible: false
        //         })}
        //       >
        //         <div className={`section-person ${this.state.person2visible ? 'visible' : ''}`}>
        //           <div className={`section-person-image invisible`} ref={e => this.aboutPerson2image = e}>
        //             <img src={`./person-2.jpg`} alt={`Maciej Gronek`} />
        //           </div>
        //           <div className={`section-person-details`}>
        //             <div className={`section-person-title invisible`} ref={e => this.aboutPerson2title = e}>
        //               Maciej Gronek
        //         </div>
        //             <div className={`section-person-content invisible`} ref={e => this.aboutPerson2content = e}>
        //             Tenor, artysta zespołu wokalnego Polskiej Opery Królewskiej. Od{'\u00A0'}lat współpracuje jako solista z{'\u00A0'}wieloma instytucjami kultury i{'\u00A0'}organizacjami pożytku publicznego, m.in.{'\u00A0'}Operą Bałtycką, Filharmonią Narodową, Radzymińską Orkiestrą Dętą, Małą Operetką Warszawską, Ursynowskim Chórem Juvenis. Na{'\u00A0'}swoim koncie posiada również uczestnictwo w{'\u00A0'}międzynarodowych festiwalach w{'\u00A0'}Bremen i{'\u00A0'}Bad Wildbad.
        //         </div>
        //           </div>
        //         </div>
        //       </Waypoint>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           person3visible: true
        //         })}
        //         onLeave={() => this.setState({
        //           person3visible: false
        //         })}
        //       >
        //         <div className={`section-person ${this.state.person3visible ? 'visible' : ''}`}>
        //           <div className={`section-person-image invisible`} ref={e => this.aboutPerson3image = e}>
        //             <img src={`./person-3.jpg`} alt={`Marcin Piotr Łopacki`} />
        //           </div>
        //           <div className={`section-person-details`}>
        //             <div className={`section-person-title invisible`} ref={e => this.aboutPerson3title = e}>
        //               Marcin Piotr Łopacki
        //         </div>
        //             <div className={`section-person-content invisible`} ref={e => this.aboutPerson3content = e}>
        //             Pianista, kompozytor, dyrygent. Doktor sztuk muzycznych. Wykładowca Uniwersytetu Muzycznego Fryderyka Chopina w{'\u00A0'}Warszawie. Laureat licznych konkursów kompozytorskich, działacz organizacji pozarządowych. Prezes fundacji Ensemblage.
        //         </div>
        //           </div>
        //         </div>
        //       </Waypoint >
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           aboutLast: true
        //         })}
        //         onLeave={() => this.setState({
        //           aboutLast: false
        //         })}
        //       >
        //         <div className={`about-footer invisible ${this.state.aboutLast ? 'visible' : ''}`}>
        //           ... oraz wielu innych znakomitych artystów, solistów, którzy{'\u00A0'}wyrazili chęć współpracy i{'\u00A0'}zaangażowania się w{'\u00A0'}nasz autorski projekt.
        //         </div>
        //       </Waypoint >
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           aboutVerticalLine: true
        //         })}
        //         onLeave={() => this.setState({
        //           aboutVerticalLine: false
        //         })}
        //       >
        //         <div className={`vertical-line ${this.state.aboutVerticalLine ? 'visible' : ''}`} ref={e => this.aboutVerticalLine = e}>
        //           <div className={`vertical-line-inner`} />
        //         </div>
        //       </Waypoint>
        //     </section >
        //     <section id='what-we-need' ref={e => this.whatWeNeed = e}>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           whatWeNeedSectionTitle: true
        //         })}
        //         onLeave={() => this.setState({
        //           whatWeNeedSectionTitle: false
        //         })}
        //       >
        //         <div className={`section-title invisible ${this.state.whatWeNeedSectionTitle ? 'visible' : ''}`} ref={e => this.whatWeNeedSectionTitle = e}>
        //           Czego potrzebujemy?
        //     </div>
        //       </Waypoint>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           whatWeNeedSectionContentTop: true
        //         })}
        //         onLeave={() => this.setState({
        //           whatWeNeedSectionContentTop: false
        //         })}
        //       >
        //         <div className={`section-content text invisible ${this.state.whatWeNeedSectionContentTop ? 'visible' : ''}`} ref={e => this.whatWeNeedSectionContentTop = e}>
        //         Prężnie działające instytucje kultury mają do{'\u00A0'}dyspozycji pokaźne budżety i{'\u00A0'}cały sztab administracyjny. Nasz projekt OperoBusa jest kosztochłonny tylko w{'\u00A0'}początkowej fazie realizacji. Największym wyzwaniem finansowym jest zakupienie odpowiedniego samochodu dostawczego, który{'\u00A0'}stanie się bazą naszego przedsięwzięcia. Nie mamy wygórowanych wymagań. Pragniemy, aby był{'\u00A0'}on przede wszystkim bezpieczny, wygodny i{'\u00A0'}ekologiczny. Bardzo istotną kwestią, na{'\u00A0'}której nie{'\u00A0'}możemy oszczędzać, jest nagłośnienie. Aby zapewnić odbiorcom możliwie najlepsze doznania akustyczne, pragniemy, aby sprzęt ten był wysokiej jakości. Nie chodzi nam o{'\u00A0'}pełne nagłośnienie sceniczne, tylko o{'\u00A0'}dobre kolumny aktywne, które będą energooszczędne i{'\u00A0'}łatwe w transporcie. Dla zapewnienia mobilności i{'\u00A0'}organizacyjnej niezależności, potrzebny prąd będziemy musieli magazynować w{'\u00A0'}uprzednio przygotowanym pojeździe. Teatr, to{'\u00A0'}również tworzące nastrój oświetlenie, dlatego nie{'\u00A0'}możemy go pominąć w{'\u00A0'}tym zestawieniu. Ważnym wyzwaniem finansowym będzie zakup stosownych kostiumów oraz prostej, mobilnej scenografii, a{'\u00A0'}także dobrej jakości pianina cyfrowego z{'\u00A0'}ważoną klawiaturą. Tak{'\u00A0'}przygotowani możemy ruszać w{'\u00A0'}stronę zachodzącego słońca i{'\u00A0'}muzycznej, życiowej przygody…
        //         </div>
        //       </Waypoint>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           whatWeNeedSectionContentBottom: true
        //         })}
        //         onLeave={() => this.setState({
        //           whatWeNeedSectionContentBottom: false
        //         })}
        //       >
        //         <div className={`section-content donate-button invisible ${this.state.whatWeNeedSectionContentBottom ? 'visible' : ''}`} ref={e => this.whatWeNeedSectionContentBottom = e}>
        //           <a href="https://zrzutka.pl/4jztdh" rel="noopener noreferrer" target="_blank">
        //             <button>Wesprzyj projekt</button>
        //           </a>
        //         </div>
        //       </Waypoint>
        //       <Waypoint
        //         bottomOffset={this.state.bottomOffset}
        //         onEnter={() => this.setState({
        //           whatWeNeedHorizontalLine: true
        //         })}
        //         onLeave={() => this.setState({
        //           whatWeNeedHorizontalLine: false
        //         })}
        //       >
        //         <div className={`horizontal-line ${this.state.whatWeNeedHorizontalLine ? 'visible' : ''}`} ref={e => this.whatWeNeedHorizontalLine = e} />
        //       </Waypoint>
        //     </section>
        //     <section id='contact' ref={e => this.contact = e}>
        //       <div className={`contact-left`}>
        //         <div className={`title`}>
        //           Kontakt
        //       </div>
        //         <div className={`phone`}>
        //           +48 798 670 090
        //       </div>
        //         <div className={`email`}>
        //           operobus@gmail.com
        //       </div>
        //         <div className={`social-media`}>
        //         </div>
        //       </div>
        //       <div className={`contact-right`}>
        //         <a href="https://www.linkedin.com/in/pmastrzykowski/" rel="noopener noreferrer" target="_blank">
        //           <div className={`creadores`} />
        //         </a>
        //       </div>
        //     </section>
        //   </div >
        // );
    };
}

export default Landing;
