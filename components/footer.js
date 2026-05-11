import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div aria-hidden="true" className="footer-top-accent">
            <div className="footer-petal-row">
              <span className="footer-petal footer-petal--1"></span>
              <span className="footer-petal footer-petal--2"></span>
              <span className="footer-petal--3 footer-petal"></span>
              <span className="footer-petal footer-petal--4"></span>
              <span className="footer-petal--5 footer-petal"></span>
            </div>
          </div>
          <div className="footer-inner">
            <div className="footer-brand-block">
              <div className="footer-logo-wrap">
                <img
                  src="/daisy-logo.png"
                  alt="Daisy's Professional Home Cleaning"
                  width={240}
                  height={72}
                  className="footer-logo-img"
                />
              </div>
              <p className="footer-tagline">
                Bringing freshness and care to every corner of your home.
              </p>
            </div>
            <div role="separator" className="footer-divider"></div>
            <nav aria-label="Footer navigation" className="footer-nav">
              <a href="#">
                <div className="footer-nav-link">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Homepage
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <span aria-hidden="true" className="footer-nav-dot"></span>
              <a href="#">
                <div className="footer-nav-link">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Contact Us
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <span aria-hidden="true" className="footer-nav-dot"></span>
              <a href="#">
                <div className="footer-nav-link">
                  <span>Services</span>
                </div>
              </a>
              <span aria-hidden="true" className="footer-nav-dot"></span>
              <a href="#">
                <div className="footer-nav-link">
                  <span>Get a Quote</span>
                </div>
              </a>
            </nav>
            <div className="footer-contact-row">
              <a href="tel:6193660809">
                <div
                  aria-label="Call us at 619-366-0809"
                  className="footer-contact-chip"
                >
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    619-366-0809
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <a href="mailto:hello@daisyscleaning.com?subject=">
                <div aria-label="Email us" className="footer-contact-chip">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    hello@daisyscleaning.com
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
            <div role="separator" className="footer-divider"></div>
            <div className="footer-bottom-row">
              <p className="footer-legal">
                <span>
                  {' '}
                  &amp;copy;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="footer-year"></span>
                <span>
                  {' '}
                  Daisy&apos;s Professional Home Cleaning. All rights reserved.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span aria-hidden="true" className="footer-dot-sep">
                  &amp;middot;
                </span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-logo-img, .footer-contact-chip, .footer-nav-link, .footer-legal-link {
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="footer-container4">
          <div className="footer-container5">
            <Script
              html={`<script defer data-name="footer-year">
(function(){
  const yearEl = document.querySelector(".footer-year")
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear()
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-container4 {
            display: none;
          }
          .footer-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
