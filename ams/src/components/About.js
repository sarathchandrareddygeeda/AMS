import React from "react";
import '../styles/About.css';
import { useTheme } from "./themeContext";


export default function About({ children }) {
  const theme = useTheme();
  return (
    <>
      <div className={theme.theme === true ? "about_dark" : "about_light"}>
        <div className="responsive-container-block outer-container">
          <div className="responsive-container-block inner-container">
            <p className="text-blk section-head-text">Meet Our Team Members</p>
            <p className="text-blk section-subhead-text">
              We are developing this website as our skill development project.We
              wanted to make a website that has all the spare parts and
              accessories required for a bike.
            </p>
            <div className="responsive-container-block">
              <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                <div className="about_header1">
                  <div className="team-card">
                    <div className="img-wrapper">
                      <img
                        className="team-img"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                        alt=""
                      />
                    </div>
                    <p className="text-blk about_name">Sai Kishore</p>
                    <p className="text-blk position">Developer</p>
                    <div className="social-media-links">
                      <a href="http://www.twitter.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                          alt=" "
                        />
                      </a>
                      <a href="http://www.facebook.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                          alt=" "
                        />
                      </a>
                      <a href="http://www.instagram.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                          alt=" "
                        />
                      </a>
                      <a href="http://www.gmail.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                          alt=" "
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                <div className="about_header2">
                  <div className="team-card">
                    <div className="img-wrapper">
                      <img
                        className="team-img"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                        alt=""
                      />
                    </div>
                    <p className="text-blk about_name">Sarath Chandra</p>
                    <p className="text-blk position">Designer</p>
                    <div className="social-media-links">
                      <a href="http://www.twitter.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                          alt=" "
                        />
                      </a>
                      <a href="http://www.facebook.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                          alt=" "
                        />
                      </a>
                      <a href="http://www.instagram.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                          alt=" "
                        />
                      </a>
                      <a href="http://www.gmail.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                          alt=" "
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                <div className="about_header3">
                  <div className="team-card">
                    <div className="img-wrapper">
                      <img
                        className="team-img"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                        alt=""
                      />
                    </div>
                    <p className="text-blk about_name">Koushik</p>
                    <p className="text-blk position">Team Leader</p>
                    <div className="social-media-links">
                      <a href="http://www.twitter.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                          alt=" "
                        />
                      </a>
                      <a href="http://www.facebook.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                          alt=" "
                        />
                      </a>
                      <a href="http://www.instagram.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                          alt=" "
                        />
                      </a>
                      <a href="http://www.gmail.com/">
                        <img
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                          alt=" "
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

