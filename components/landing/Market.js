/* eslint-disable @next/next/no-img-element */
import React from "react";

const Market = () => {
  return (
    <>
      <div className="table-section pt-10 pb-80" id="table">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="dreamit-section-title pb-3">
                <h1>
                  Market <span>Trend</span>
                </h1>
                <p>
                  <span className="table-title">+0.36%</span> Market up in the last
                  24 hours
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="explore_nav text-right">
                <div className="explore_menu">
                  <form action="#">
                    <select name="catagories" id="catagories">
                      <option value="volvo">All Catagories</option>
                      <option value="volvo">Video Game Items</option>
                      <option value="volvo">Art</option>
                      <option value="volvo">Music</option>
                      <option value="volvo">Domain Names</option>
                    </select>
                    <select name="cars" id="cars">
                      <option value="7days">7 Days</option>
                      <option value="8days">8 Days</option>
                      <option value="9days">9 Days</option>
                      <option value="5days">5 Days</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="table-reponsive box wow fadeInLeft"
              data-wow-delay=".4s"
            >
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>
                      <span>#</span> Currency
                    </th>
                    <th>$ Price</th>
                    <th>24H Change</th>
                    <th>Market Cap.</th>
                    <th>T. Supply</th>
                    <th>24H Volume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="single">
                    <td>
                      <span>1</span>
                      <img src="assets/images/resource/ra-1.png" alt="" />
                      <h6>
                        Bitcoin <span className="img-text">BTC</span>
                      </h6>
                    </td>
                    <td>$53,967.089</td>
                    <td>
                      <img
                        className="images"
                        src="assets/images/resource/icon7.png"
                        alt=""
                      />
                      <span className="color-1">5.43%</span>
                    </td>
                    <td>0.05M</td>
                    <td>1.5K</td>
                    <td>68.5K</td>
                  </tr>
                  <tr className="one">
                    <td>
                      <span>2</span>
                      <img src="assets/images/resource/ra-2.png" alt="" />
                      <h6>
                        Ethereum <span className="img-text">ETH</span>
                      </h6>
                    </td>
                    <td>$98,967.056</td>
                    <td>
                      <img
                        className="images"
                        src="assets/images/resource/icon8.png"
                        alt=""
                      />
                      <span className="color-2">6.85</span>
                    </td>
                    <td>10.80M</td>
                    <td>5.5K</td>
                    <td>85.09K</td>
                  </tr>
                  <tr className="double">
                    <td>
                      <span>3</span>
                      <img src="assets/images/resource/ra-3.png" alt="" />
                      <h6>
                        Tether <span className="img-text">THR</span>
                      </h6>
                    </td>
                    <td>$44,967.090</td>
                    <td>
                      <img
                        className="images"
                        src="assets/images/resource/icon7.png"
                        alt=""
                      />
                      <span className="color-1">3.96%</span>
                    </td>
                    <td>0.05M</td>
                    <td>0.3k</td>
                    <td>100k</td>
                  </tr>
                  <tr className="one">
                    <td>
                      <span>4</span>
                      <img src="assets/images/resource/ra-4.png" alt="" />
                      <h6>
                        Solana <span className="img-text">SOL</span>
                      </h6>
                    </td>
                    <td>$53,967.089</td>
                    <td>
                      <img
                        className="images"
                        src="assets/images/resource/icon7.png"
                        alt=""
                      />
                      <span className="color-1">9.30%</span>
                    </td>
                    <td>12.09M</td>
                    <td>1.5K</td>
                    <td>68.5K</td>
                  </tr>
                  <tr className="triple">
                    <td>
                      <span>5</span>
                      <img src="assets/images/resource/ra-5.png" alt="" />
                      <h6>
                        Binance Coin <span className="img-text">BNC</span>
                      </h6>
                    </td>
                    <td>$67,967.070</td>
                    <td>
                      <img
                        className="images"
                        src="assets/images/resource/icon8.png"
                        alt=""
                      />
                      <span className="color-2">8.90%</span>
                    </td>
                    <td>0.07M</td>
                    <td>45K</td>
                    <td>98.9K</td>
                  </tr>
                  <tr className="one">
                    <td>
                      <span>6</span>
                      <img src="assets/images/resource/ra-6.png" alt="" />
                      <h6>
                        Dogecoin <span className="img-text">DOGE</span>
                      </h6>
                    </td>
                    <td>$53,967.089</td>
                    <td>
                      <img
                        className="images"
                        src="assets/images/resource/icon7.png"
                        alt=""
                      />
                      <span className="color-1">5.43%</span>
                    </td>
                    <td>0.05M</td>
                    <td>1.5K</td>
                    <td>68.5K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
