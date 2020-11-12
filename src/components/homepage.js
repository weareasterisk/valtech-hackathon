import FAQ from "./faq";
import FAQMobile from './faqMobile';
import React, {Component} from "react";
import Media from 'react-media';

import {Col, Row, Button} from "reactstrap";
import Schedule from "./schedule";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";

export default class HomePage extends Component {

  render() {
    return (
      <div className="App">
        <div className="w-100">
          <section id="home" className="pageHome">
            <img src="https://cdn.weareasterisk.com/event-assets/valtech/VALTECH_logo_white.svg" alt="Valtech Logo" className="img-fluid image-center va-logo invert-color-filter"/>
            <h3 className="p-top-50 primary"><i></i></h3>
            <div className="description-block">
              <p className="description-item">December 3th - 5th, 2020</p>
            </div>
            <NavLink to="/signup" >
              <Button className='skeletonButton'>Register Now!</Button>
            </NavLink>
          <br/>
          <br/>
          {/* <Button className='skeletonButton m-r-20' href="https://discord.gg/quakecon" target="_blank">Discord</Button>
          <Button className='skeletonButton m-r-20' href="https://itch.io/jam/version-alpha-homebrew" target="_blank">Itch.io</Button>
          <Button className='skeletonButton' href="https://quakecon.bethesda.net/en" target="_blank">Quakecon at Home</Button> */}
          </section>
          <img src="https://cdn.weareasterisk.com/event-assets/valtech/Valtech_Tagline-white.svg" className="img-fluid image-center controller-art" style={{ padding: "8rem 1rem" }} alt="Where experiences are engineered" />
          <section id="about" className="pageAbout jumptarget">
            <h1>About</h1>
            <div className="w-800p margin-center container-fluid">
              <h4 className="p-header primary">THE VALTECH HACKATHON</h4>
              <p className="speech">
                The Valtech Hackathon is a free virtual Hackathon hosted with
                <a className="primary" href="https://valtech.com" target="_blank" rel="noopener noreferrer"> Valtech</a>. <a className="primary" href="https://www.weareasterisk.com/" target="_blank" rel="noopener noreferrer">Asterisk</a> is proud to partner with Valteceh to bring together the best elements of creativity and software development in a high powered weekend full of building, prototyping, and fun.
              <br/>
              </p>
              <h4 className="p-header primary">WHAT IS VALTECH?</h4>
              <p className="speech">
              Valtech is a global business transformation agency delivering innovation with a purpose. We enable clients to anticipate tomorrow’s trends and connect more directly with consumers across their digital touch points while optimizing time-to-market and ROI.
              <br/>
              <br />
              We are a network of more than 3000 innovators, design thinkers, marketers, creatives and developers spanning 5 continents with offices in 16 countries (USA, UK, Canada, France, Germany, Netherlands, Sweden, Switzerland, Denmark, Brazil, China, India, Australia, Singapore, Argentina, Ukraine).
              <br/>
              <br/>
              While our expertise is in technology, marketing and experience design, our passion is in addressing transformational business challenges for our clients, including strategy consulting, service design, technology services, and optimization of business-critical digital platforms for multichannel e-commerce and marketing.
              <br/>
              <br/>
              </p>
              <p><a className="primary" href="https://www.valtech.com/" target="_blank" rel="noopener noreferrer" > + Learn more about Valtech</a></p>
            </div>
          </section>
          {/* <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_MarkWhite.svg" className="img-fluid image-center break-image-small"/>
          <section id="themes" className="pageThemes jumptarget">
            <h1>Themes</h1>
            <div className="w-800p margin-center container-fluid">
              <h5 class="primary font-weight-bold m-b-8">THERE'S NO PLACE LIKE HOME</h5>
              <br/>
              <p className="m-b-8">
                As a part of Quakecon at Home, it’s only right that the theme for Version Alpha: Homebrew revolves around the home. As a setting or more abstract concept, you can take the idea of the home and interpret it as you please.
              </p>
              <p className="m-b-8">
                Whether your game is about returning home or takes place in one, we’re looking forward to seeing your use of the theme!
              </p>
            </div>
          </section> */}
          {/* <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_MarkWhite.svg" className="img-fluid image-center break-image-small"/> */}
          {/* SCHEDULE DISABLED TEMPORARILY */}
          {/* <section id="schedule" className="jumptarget">
            <Schedule/>
          </section> */}
          <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_MarkWhite.svg" className="img-fluid image-center break-image-small"/>
          {/* IMPORT FAQ */}
          <section id="faq" className="jumptarget">
            <Media
              query="(max-width: 762px)">
              {matches =>
                matches ? (
                  <FAQMobile/>
                ) : (
                  <FAQ/>
                )
              }
            </Media>
          </section>
          {/* ########## */}
          {/* <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_MarkWhite.svg" className="img-fluid image-center break-image-small"/> */}
          {/* <section id="partners" className="jumptarget">
            <h1>Partners</h1>
            <br/>
            <div className="w-800p margin-center container-fluid h-100 justify-content-center">
              <Row className="justify-content-center">
                <Col sm="4" xs="6">
                  <div className="vertical-center-image">
                    <a href="https://quakecon.bethesda.net/en/" target="_blank" rel="noopener noreferrer" title="QuakeCon" >
                      <img src="https://cdn.weareasterisk.com/sponsor-assets/quakecon/quakecon-at-home--longform--color--RGB--transparent-background.png" className="image-center partners-image"/>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </section> */}
        </div>
      </div>
    )
  }
}