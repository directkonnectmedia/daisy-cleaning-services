import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="navigation-bar"
        >
          <div className="navigation-container">
            <a
              href="/"
              aria-label="Daisy's Professional Home Cleaning - Go to homepage"
              className="navigation-logo"
            >
              <img
                src="/daisy-logo.png"
                alt=""
                height={85}
                className="navigation-logo-img"
              />
            </a>
            <ul role="list" className="navigation-links">
              <li>
                <a href="Homepage">
                  <div className="navigation-link">
                    <span>Home</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="navigation-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="navigation-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="navigation-link">
                    <span>Contact</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-cta-group">
              <a href="tel:6193660809">
                <div className="navigation-phone-link">
                  <span>619-366-0809</span>
                </div>
              </a>
              <a href="#">
                <div className="btn-primary navigation-cta-btn btn">
                  <span>Get a Quote</span>
                </div>
              </a>
            </div>
            <button
              id="navHamburgerBtn"
              aria-label="Open navigation menu"
              aria-controls="mobileMenu"
              aria-expanded="false"
              className="navigation-hamburger"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div
          id="mobileMenu"
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-modal="true"
          className="navigation-mobile-overlay"
        >
          <div className="navigation-mobile-header">
            <a
              href="/"
              aria-label="Daisy's Professional Home Cleaning - Go to homepage"
              className="navigation-logo"
            >
              <img
                src="/daisy-logo.png"
                alt=""
                height={85}
                className="navigation-logo-img navigation-logo-img--menu"
              />
            </a>
            <button
              id="navCloseBtn"
              aria-label="Close navigation menu"
              className="navigation-close-btn"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <ul role="list" className="navigation-mobile-links">
            <li className="navigation-mobile-item">
              <a href="Homepage">
                <div className="navigation-mobile-link">
                  <span>Home</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Services</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>About</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Contact</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-mobile-footer">
            <a href="tel:6193660809">
              <div className="navigation-mobile-phone">
                <span>619-366-0809</span>
              </div>
            </a>
            <a href="#">
              <div className="btn-primary navigation-mobile-cta btn">
                <span>Get a Free Quote</span>
              </div>
            </a>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-item {
  transition: none;
  opacity: 1;
  transform: none;
}
.navigation-logo-img, .navigation-link, .navigation-link::after, .navigation-mobile-link {
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation-mobile-menu">
(function(){
  const hamburgerBtn = document.getElementById("navHamburgerBtn")
  const closeBtn = document.getElementById("navCloseBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  function openMenu() {
    mobileMenu.classList.add("navigation-mobile-overlay--open")
    hamburgerBtn.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
    closeBtn.focus()
  }

  function closeMenu() {
    mobileMenu.classList.remove("navigation-mobile-overlay--open")
    hamburgerBtn.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
    hamburgerBtn.focus()
  }

  hamburgerBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  mobileMenu.addEventListener("click", function (e) {
    if (e.target === mobileMenu) {
      closeMenu()
    }
  })

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu.classList.contains("navigation-mobile-overlay--open")) {
      closeMenu()
    }
  })

  const mobileLinks = mobileMenu.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
