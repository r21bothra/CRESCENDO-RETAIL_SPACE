/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <a href="/">Homepage</a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
