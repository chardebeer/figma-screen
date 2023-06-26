import React from "react";
import { ButtonLink } from "../../components/ButtonLink";
import { ButtonPill } from "../../components/ButtonPill";
import { DPrimaryNav } from "../../components/DPrimaryNav";
import { IconBasket } from "../../components/IconBasket";
import { IconEnvelope } from "../../components/IconEnvelope";
import { Logo } from "../../components/Logo";
import { Radio } from "../../components/Radio";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="welcome-wrapper">
        <div className="welcome">
          <div className="d-footer">
            <div className="divider" />
            <div className="footer-items">
              <div className="logo-and-address">
                <Logo
                  size="large"
                  style={{
                    left: "unset",
                    minWidth: "232px",
                    position: "relative",
                    top: "unset",
                    width: "unset",
                  }}
                />
                <p className="element-produce-lane">
                  5555 Produce Lane
                  <br />
                  Gardentown, CA 51512
                </p>
              </div>
              <div className="footer-links">
                <div className="link-column">
                  <div className="d-footer-menu-item">
                    <div className="label-text-2">Shop</div>
                  </div>
                  <div className="label-text-wrapper">
                    <div className="label-text-3">Who we are</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="label-text-4">Newsstand</div>
                  </div>
                </div>
                <div className="link-column-2">
                  <div className="d-footer-menu-item-2">
                    <div className="label-text-5">My profile</div>
                  </div>
                  <div className="d-footer-menu-item-3">
                    <div className="label-text-6">My basket</div>
                  </div>
                  <div className="d-footer-menu-item-4">
                    <div className="label-text-7">My preferences</div>
                  </div>
                </div>
                <div className="link-column-3">
                  <div className="d-footer-menu-item-5">
                    <div className="label-text-8">Contact us</div>
                  </div>
                  <div className="d-footer-menu-item-6">
                    <div className="label-text-9">Our values</div>
                  </div>
                  <div className="d-footer-menu-item-7">
                    <div className="label-text-10">Accessibility</div>
                  </div>
                </div>
                <div className="link-column-4">
                  <div className="d-footer-menu-item-8">
                    <div className="label-text-11">Privacy policy</div>
                  </div>
                  <div className="d-footer-menu-item-9">
                    <div className="label-text-12">Site map</div>
                  </div>
                  <div className="d-footer-menu-item-10">
                    <div className="label-text-13">Terms and conditions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-email-opt-in">
            <div className="divider-2" />
            <div className="frame">
              <div className="frame-2">
                <h1 className="h-1">Farm Fresh</h1>
                <div className="text-wrapper-2">Email Newsletter</div>
              </div>
              <div className="comms-prefs-and-opt">
                <div className="form-input">
                  <div className="text-wrapper-3">Enter your email address</div>
                </div>
                <div className="notificaion">
                  <div className="text-wrapper-4">Email me about</div>
                  <div className="frame-3">
                    <Radio selected={false} text="Sales and promotions" />
                    <Radio selected={false} text="Harvests" />
                    <Radio selected={false} text="Articles and recipes" />
                  </div>
                </div>
                <ButtonPill
                  override={
                    <IconEnvelope
                      style={{
                        minWidth: "20px",
                        width: "unset",
                      }}
                    />
                  }
                  showLeftIcon={false}
                  showQty={false}
                  style="outlined"
                  styleOverride={{
                    alignSelf: "stretch",
                    gap: "unset",
                    justifyContent: "space-between",
                    width: "unset",
                  }}
                  text="Sign me up"
                />
              </div>
            </div>
          </div>
          <div className="newsstand-featured">
            <div className="section-heading">From the Newsstand</div>
            <div className="featured-articles">
              <div className="article-card">
                <div className="title-and-text">
                  <p className="title">
                    <span className="span">Sigh of re-leaf </span>
                    <span className="text-wrapper-5">— a deeper dive into eco-friendly farming. </span>
                  </p>
                  <p className="p">
                    The way we grow our food has a significant impact on the health of our planet and our bodies.
                    Traditional agricultural practices often prioritize maximizing yields and profits over environmental
                    sustainability and public health. However, eco-friendly and organic farming practices provide an
                    alternative approach that benefits both the planet and our health.
                  </p>
                </div>
                <div className="date-and-link">
                  <div className="text-wrapper-6">July 20, 2023</div>
                  <ButtonLink
                    elementStyle={{
                      marginTop: "unset",
                    }}
                    linkLabelStyle={{
                      fontSize: "18px",
                      letterSpacing: "-0.18px",
                      lineHeight: "28.8px",
                    }}
                    showLeftArrow={false}
                    size="small"
                    style={{
                      alignItems: "center",
                      gap: "8px",
                    }}
                    text="Read article"
                  />
                </div>
              </div>
              <div className="row">
                <div className="article-card-2">
                  <div className="title-2">Zesty Melon Salsa</div>
                  <div className="text-date-and-link">
                    <p className="text-2">
                      This fresh and tangy twist on salsa makes for an irresistible chip dip, and adds a kick to almost
                      any dish. Take your tacos to the next level with a summer-ready recipe that’s sure to be one of
                      your favorites.
                    </p>
                    <div className="date-and-link-2">
                      <div className="text-wrapper-7">August 18, 2023</div>
                      <ButtonLink
                        elementStyle={{
                          marginTop: "unset",
                        }}
                        linkLabelStyle={{
                          fontSize: "18px",
                          letterSpacing: "-0.18px",
                          lineHeight: "28.8px",
                        }}
                        showLeftArrow={false}
                        size="small"
                        style={{
                          alignItems: "center",
                          gap: "8px",
                        }}
                        text="Read article"
                      />
                    </div>
                  </div>
                </div>
                <div className="article-card-3">
                  <p className="title-3">
                    <span className="text-wrapper-8">Fungus finder </span>
                    <span className="text-wrapper-9">— a guide to sustainable mushroom hunting.</span>
                  </p>
                  <div className="frame-4">
                    <p className="text-3">
                      Omnis quo commodi repelle ndus eveniet nostrum aut voluptas iure. Simi lique vitae est. Est
                      necessitatibus soluta modi recusandae praes entium nulla. Vel voluptatum molestias nam distinctio
                      sint.
                    </p>
                    <div className="date-and-link-3">
                      <div className="text-wrapper-10">September 13, 2023</div>
                      <ButtonLink
                        elementStyle={{
                          marginTop: "unset",
                        }}
                        linkLabelStyle={{
                          fontSize: "18px",
                          letterSpacing: "-0.18px",
                          lineHeight: "28.8px",
                        }}
                        showLeftArrow={false}
                        size="small"
                        style={{
                          alignItems: "center",
                          gap: "8px",
                        }}
                        text="Read article"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-items-carousel">
            <div className="section-heading-2">Just harvested near you</div>
            <div className="carousel-container">
              <div className="item-carusel">
                <div className="d-item-card">
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/image-4@2x.png)",
                    }}
                  />
                  <div className="info-and-button">
                    <div className="frame-5">
                      <div className="text-wrapper-11">Shiitakes</div>
                      <div className="text-wrapper-12">$8.99/lb</div>
                    </div>
                  </div>
                </div>
                <div className="d-item-card-2">
                  <div
                    className="image-2"
                    style={{
                      backgroundImage:
                        "url(https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/image-3@2x.png)",
                    }}
                  />
                  <div className="frame-wrapper">
                    <div className="frame-6">
                      <div className="text-wrapper-13">Rainier Cherries</div>
                      <div className="text-wrapper-14">$3.99/lb</div>
                    </div>
                  </div>
                </div>
                <div className="d-item-card-3">
                  <div
                    className="image-3"
                    style={{
                      backgroundImage:
                        "url(https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/image-2@2x.png)",
                    }}
                  />
                  <div className="info-and-button-2">
                    <div className="frame-7">
                      <div className="text-wrapper-15">Radishes</div>
                      <div className="text-wrapper-16">$2.29/lb</div>
                    </div>
                  </div>
                </div>
                <div className="d-item-card-4">
                  <div
                    className="image-4"
                    style={{
                      backgroundImage:
                        "url(https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/image-1@2x.png)",
                    }}
                  />
                  <div className="info-and-button-3">
                    <div className="frame-8">
                      <div className="text-wrapper-17">Greens Mix</div>
                      <div className="text-wrapper-18">$3.99/lb</div>
                    </div>
                  </div>
                </div>
                <div className="d-item-card-5">
                  <div
                    className="image-5"
                    style={{
                      backgroundImage:
                        "url(https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/image@2x.png)",
                    }}
                  />
                  <div className="info-and-button-4">
                    <div className="frame-9">
                      <div className="text-wrapper-19">Icebox melon</div>
                      <div className="text-wrapper-20">$0.89/lb</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="subheadline">
            Sustainability is at the heart of what World Peas stands for—that’s why we only partner with farmers that
            pledge to use environmentally-friendly farming methods.
          </p>
          <header className="header">
            <DPrimaryNav
              buttonPill={
                <IconBasket
                  hasItems={false}
                  style={{
                    minWidth: "20px",
                    width: "unset",
                  }}
                  union="https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/union.svg"
                />
              }
              visible={false}
            />
            <Logo
              size="jumbo"
              style={{
                left: "unset",
                minWidth: "758px",
                position: "relative",
                top: "unset",
                width: "unset",
              }}
            />
            <div
              className="frame-10"
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/4b79f7add0afd3aca8e576740b717f20/img/frame-15270.png)",
              }}
            />
          </header>
        </div>
      </div>
    </div>
  );
};
