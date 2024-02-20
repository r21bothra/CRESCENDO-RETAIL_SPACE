/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <>
      <div id="blogs" className="blog-section pt-100 pb-20">
        <div className="container">
          <div className="row">
            <div className="dreamit-section-title text-center up pb-30">
              <h4>Blog</h4>
              <h1>
                Recent <span>Blog</span>
              </h1>
              <p className="section-text">
                Cryptocurrencies are used primarily outside existing banking
                governmental institutions and exchanged
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="dreamit-blog-box wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="blog-box-inner">
                  <div className="dreamit-blog-thumb">
                    <img src="assets/images/resource/blog-1.jpg" alt="" />
                  </div>
                  <div className="popular-blog-content">
                    <div className="meta-blog">
                      <a href="#">Mar 19, 2022</a>
                    </div>
                    <div className="blog-title">
                      <h2>
                        <Link href="/blogs_details">
                          Content strategy can help <br />
                          engage customers.
                        </Link>
                      </h2>
                    </div>
                    <div className="blog-text">
                      <p>
                        Collaboratively syndicate turnkey are Energistically
                        enable standards in the pontificate interman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="dreamit-blog-box upper1 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="blog-box-inner">
                  <div className="dreamit-blog-thumb">
                    <img src="assets/images/resource/blog-2.jpg" alt="" />
                  </div>
                  <div className="popular-blog-content">
                    <div className="meta-blog">
                      <a href="#">Mar 19, 2022</a>
                    </div>
                    <div className="blog-title">
                      <h2>
                        <Link href="/blogs_details">
                          Crypto Buy and Sell Coin <br />
                          with Trusted Agency.
                        </Link>
                      </h2>
                    </div>
                    <div className="blog-text">
                      <p>
                        Collaboratively syndicate turnkey are Energistically
                        enable standards in the pontificate interman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="dreamit-blog-box upper2 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="blog-box-inner">
                  <div className="dreamit-blog-thumb">
                    <img src="assets/images/resource/blog-3.jpg" alt="" />
                  </div>
                  <div className="popular-blog-content">
                    <div className="meta-blog">
                      <a href="#">Mar 19, 2022</a>
                    </div>
                    <div className="blog-title">
                      <h2>
                        <Link href="/blogs_details">
                          Coin strategy can help you <br />
                          engage Audience
                        </Link>
                      </h2>
                    </div>
                    <div className="blog-text">
                      <p>
                        Collaboratively syndicate turnkey are Energistically
                        enable standards in the pontificate interman.
                      </p>
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
};

export default Blogs;
