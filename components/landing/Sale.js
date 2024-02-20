/* eslint-disable @next/next/no-img-element */
import React from "react";

const Sale = () => {
  return (
    <>
      <div className="token-area pt-10 pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div className="dreamit-section-title text-center up pb-5">
                <h4>Token Sales</h4>
                <h1>
                  ICO Token <span>Sales</span>
                </h1>
                <p className="section-text">
                  Cryptocurrencies are used primarily outside existing banking
                  and coingovernmental institutions and are exchanged
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row">
                <div className="col-lg-6 ol-md-6">
                  <div
                    className="single-token-box wow fadeInLeft"
                    data-wow-delay=".4s"
                  >
                    <div className="token-title">
                      <h4>Exchange Rate</h4>
                      <p>
                        <span>1 ETH</span> = $39000.00
                      </p>
                      <p className="token-text">
                        <span>1 BTC</span> = $120.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ol-md-6">
                  <div
                    className="single-token-box wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <div className="token-title">
                      <h4>Monthly Rate</h4>
                      <p>
                        <span>Low</span> = $39000.00
                      </p>
                      <p className="token-text">
                        <span>High</span> = $120.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ol-md-6">
                  <div
                    className="single-token-box wow fadeInLeft"
                    data-wow-delay=".6s"
                  >
                    <div className="token-title">
                      <h4>Private Sales</h4>
                      <p>
                        <span>1 BTC</span> = $39000.00
                      </p>
                      <p className="token-text">
                        Bonus <span>65% (1.10)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ol-md-6">
                  <div
                    className="single-token-box wow fadeInLeft"
                    data-wow-delay=".7s"
                  >
                    <div className="token-title">
                      <h4>Public Sales</h4>
                      <p>
                        <span>1 BTC</span> = $39000.00
                      </p>
                      <p className="token-text">
                        Bonus <span>65% (1.10)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ol-md-6">
                  <div
                    className="single-token-box wow fadeInLeft"
                    data-wow-delay=".8s"
                  >
                    <div className="token-title">
                      <h4>Investors</h4>
                      <p>890,000.00</p>
                      <p className="token-text">
                        Ave. Invest($) <span>: 1200</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ol-md-6">
                  <div
                    className="single-token-box wow fadeInLeft"
                    data-wow-delay=".9s"
                  >
                    <div className="token-title">
                      <h4>Pivot Points</h4>
                      <p>
                        <span>1 ETH</span> = $39000.00
                      </p>
                      <p className="token-text">
                        <span>1 BTC</span> = $120.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="count-down-date-tabs wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <div id="countdown">
                  <div className="coundown-title">
                    <h3>Token Sale Start in</h3>
                  </div>
                  <div id="tiles"></div>
                  <div className="labels">
                    <ul>
                      <li>Days</li>
                    </ul>
                    <ul>
                      <li>Hours</li>
                    </ul>
                    <ul>
                      <li>Mins</li>
                    </ul>
                    <ul>
                      <li className="labels-text">Sec</li>
                    </ul>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="extra-controls form-inline">
                    <div className="form-group">
                      <input
                        type="text"
                        className="js-input-from form-control"
                        value="0"
                      />
                      <span>
                        <input
                          type="text"
                          className="js-input-to form-control"
                          value="0"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="range-slider">
                    <input type="text" className="js-range-slider" value="" />
                  </div>
                  <div className="range-title-menu">
                    <ul>
                      <li>Soft Cap</li>
                      <li>Crowdsale</li>
                      <li className="range-text">Hard Cap</li>
                    </ul>
                  </div>
                </div>
                <div className="count-shape">
                  <img src="assets/images/resource/count.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
