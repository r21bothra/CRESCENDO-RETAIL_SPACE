import React from "react";

const Stats = () => {
  return (
    <>
      <div className="token-sale-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div className="dreamit-section-title text-center pb-5">
                <h1>Token Sale Proceeds</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="pie-chart-thumb">
                <div id="pie-chart"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5>Information</h5>
              <div id="bar-chart"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
