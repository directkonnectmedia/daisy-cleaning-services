import React, { useState } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  const [areaMapImageFailed, setAreaMapImageFailed] = useState(false)

  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Daisy Cleaning Services</title>
          <meta property="og:title" content="Daisy Cleaning Services" />
          <link
            rel="canonical"
            href="https://sturdy-high-panther-aswkf6.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://sturdy-high-panther-aswkf6.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero-content, .quote-step, .service-card, .testimonial-card, .how-step .how-step-icon-wrap {
  animation: none;
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <section
          id="hero"
          aria-label="Hero"
          className="hero-section hero-container"
        >
          <div className="hero-content">
            <div className="hero-logo-cloud">
              <img
                src="/daisy-final-v1.png"
                alt="Daisy's Professional Home Cleaning"
                width={320}
                className="hero-logo"
              />
            </div>
            <h1 className="hero-heading-main hero-title">
              A spotless home starts here.
            </h1>
            <div className="hero-cta-row">
              <a href="#quote-wizard">
                <div className="btn-lg btn-primary hero-btn-primary btn">
                  <span>Get a Free Quote</span>
                </div>
              </a>
              <a href="#services">
                <div className="btn-lg btn-primary hero-btn-primary btn">
                  <span>See Our Services</span>
                </div>
              </a>
            </div>
            <div className="hero-badge-row">
              <div className="hero-badge">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
                <span>Bonded &amp; Insured</span>
              </div>
              <div className="hero-badge">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>5-Star Rated</span>
              </div>
              <div className="hero-badge">
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
                    <path d="M8 2v4m8-4v4"></path>
                    <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                    <path d="M3 10h18"></path>
                  </g>
                </svg>
                <span>Easy Online Booking</span>
              </div>
            </div>
          </div>
        </section>
        <section aria-label="Trust &amp; Ease Banner" className="trust-section">
          <div className="trust-inner">
            <div className="trust-col">
              <div aria-hidden="true" className="trust-icon-wrap">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="trust-heading">Fully Vetted Pros</h3>
              <p className="trust-subtext section-content">
                Every cleaner is background-checked, trained, and insured so you
                can open your door with complete confidence.
              </p>
            </div>
            <div aria-hidden="true" className="trust-divider"></div>
            <div className="trust-col">
              <div aria-hidden="true" className="trust-icon-wrap">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 2v4m8-4v4"></path>
                    <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                    <path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path>
                  </g>
                </svg>
              </div>
              <h3 className="trust-heading">Easy Online Booking</h3>
              <p className="trust-subtext section-content">
                Schedule in under two minutes. Choose your date, service, and
                let us handle the rest — no phone tag required.
              </p>
            </div>
            <div aria-hidden="true" className="trust-divider"></div>
            <div className="trust-col">
              <div aria-hidden="true" className="trust-icon-wrap">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="trust-heading">Satisfaction Guaranteed</h3>
              <p className="trust-subtext section-content">
                If something isn&apos;t right, we come back. Your complete
                satisfaction is our unwavering promise — every single visit.
              </p>
            </div>
          </div>
        </section>
        <section
          id="services"
          aria-label="Service Highlights"
          className="services-section"
        >
          <div className="services-inner">
            <div className="services-header">
              <h2 className="services-title section-title">What We Do Best</h2>
              <p className="section-content services-intro">
                From everyday tidying to deep-clean transformations, our
                services are designed to bring your home back to life.
              </p>
            </div>
            <div className="services-grid">
              <article className="service-card">
                <div className="service-card-img-wrap">
                  <img
                    alt="Professional home cleaning team vacuuming a living room"
                    src="https://images.pexels.com/photos/6195277/pexels-photo-6195277.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="service-card-img"
                  />
                  <div className="service-card-badge">
                    <span>Most Popular</span>
                  </div>
                </div>
                <div className="service-card-body">
                  <div aria-hidden="true" className="service-card-icon">
                    <svg
                      width="22"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
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
                  </div>
                  <h3 className="service-card-title">Home Cleaning</h3>
                  <p className="service-card-desc section-content">
                    Regular maintenance cleans that keep your living spaces
                    fresh, organized, and dust-free week after week.
                  </p>
                  <ul className="service-card-list">
                    <li>
                      <span>Kitchen &amp; bathrooms</span>
                    </li>
                    <li>
                      <span>Dusting &amp; vacuuming</span>
                    </li>
                    <li>
                      <span>Mopping &amp; surface wipe-downs</span>
                    </li>
                  </ul>
                  <a href="#quote-wizard">
                    <div className="btn-sm service-card-cta btn-outline btn">
                      <span>Book This Service</span>
                    </div>
                  </a>
                </div>
              </article>
              <article className="service-card">
                <div className="service-card-img-wrap">
                  <img
                    alt="Professional cleaners doing a colorful deep clean in a bright kitchen"
                    src="https://images.pexels.com/photos/4107179/pexels-photo-4107179.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="service-card-img"
                  />
                  <div className="service-card-badge service-card-badge--accent">
                    <span>Deep Clean</span>
                  </div>
                </div>
                <div className="service-card-body">
                  <div aria-hidden="true" className="service-card-icon">
                    <svg
                      width="22"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle r="2" cx="4" cy="20"></circle>
                      </g>
                    </svg>
                  </div>
                  <h3 className="service-card-title">In-Depth Clean</h3>
                  <p className="service-card-desc section-content">
                    A thorough top-to-bottom clean including laundry folding and
                    dish washing — perfect for move-ins or seasonal resets.
                  </p>
                  <ul className="service-card-list">
                    <li>
                      <span>Laundry &amp; folding</span>
                    </li>
                    <li>
                      <span>Dishes &amp; appliance interiors</span>
                    </li>
                    <li>
                      <span>Baseboards, vents &amp; detail work</span>
                    </li>
                  </ul>
                  <a href="#quote-wizard">
                    <div className="btn-sm service-card-cta btn-outline btn">
                      <span>Book This Service</span>
                    </div>
                  </a>
                </div>
              </article>
              <article className="service-card">
                <div className="service-card-img-wrap">
                  <img
                    alt="Professional carpet cleaning with yellow vacuum"
                    src="https://images.pexels.com/photos/6195273/pexels-photo-6195273.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="service-card-img"
                  />
                  <div className="service-card-badge--gold service-card-badge">
                    <span>Specialty</span>
                  </div>
                </div>
                <div className="service-card-body">
                  <div aria-hidden="true" className="service-card-icon">
                    <svg
                      width="22"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="service-card-title">Carpet Care</h3>
                  <p className="service-card-desc section-content">
                    Specialized carpet cleaning that removes embedded dirt,
                    allergens, and stains — restoring texture and freshness.
                  </p>
                  <ul className="service-card-list">
                    <li>
                      <span>Deep fiber extraction</span>
                    </li>
                    <li>
                      <span>Stain &amp; odor treatment</span>
                    </li>
                    <li>
                      <span>Rugs &amp; high-traffic areas</span>
                    </li>
                  </ul>
                  <a href="#quote-wizard">
                    <div className="btn-sm service-card-cta btn-outline btn">
                      <span>Book This Service</span>
                    </div>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section
          id="quote-wizard"
          aria-label="Quote Wizard"
          className="quote-section"
        >
          <div className="quote-outer">
            <div className="quote-header-wrap">
              <p className="quote-eyebrow">Get Started Today</p>
              <h2 className="quote-section-title section-title">
                Get Your Free Quote
              </h2>
              <p className="quote-section-sub section-content">
                Answer three quick questions and we&apos;ll prepare your
                personalized estimate instantly.
              </p>
            </div>
            <div
              role="region"
              aria-label="Quote wizard form"
              className="quote-card"
            >
              <div aria-label="Step progress" className="quote-steps-indicator">
                <div
                  data-step="1"
                  aria-label="Step 1: Home Size"
                  className="quote-step-dot quote-step-dot--active"
                ></div>
                <div className="quote-step-line"></div>
                <div
                  data-step="2"
                  aria-label="Step 2: Service Type"
                  className="quote-step-dot"
                ></div>
                <div className="quote-step-line"></div>
                <div
                  data-step="3"
                  aria-label="Step 3: Contact"
                  className="quote-step-dot"
                ></div>
              </div>
              <form
                id="quoteForm"
                action="/submit-quote"
                method="POST"
                data-form-id="bc550cd2-896c-480d-8a25-ff96af596898"
                noValidate="true"
                className="quote-form"
              >
                <div id="step-1" className="quote-step--active quote-step">
                  <p className="quote-step-label">Step 1 of 3</p>
                  <h3 className="quote-step-title">What size is your home?</h3>
                  <div
                    role="group"
                    aria-label="Select home size"
                    className="quote-pill-group"
                  >
                    <label className="quote-pill">
                      <input
                        type="radio"
                        id="thq_home_size_VL97"
                        name="home_size"
                        value="studio"
                        required="true"
                        data-form-field-id="thq_home_size_VL97"
                      />
                      <span>Studio / 1 Bed</span>
                    </label>
                    <label className="quote-pill">
                      <input
                        type="radio"
                        id="thq_home_size_Ffs2"
                        name="home_size"
                        value="2bed"
                        data-form-field-id="thq_home_size_Ffs2"
                      />
                      <span>2 Bedrooms</span>
                    </label>
                    <label className="quote-pill">
                      <input
                        type="radio"
                        id="thq_home_size_hOMI"
                        name="home_size"
                        value="3bed"
                        data-form-field-id="thq_home_size_hOMI"
                      />
                      <span>3 Bedrooms</span>
                    </label>
                    <label className="quote-pill">
                      <input
                        type="radio"
                        id="thq_home_size_eMce"
                        name="home_size"
                        value="4plus"
                        data-form-field-id="thq_home_size_eMce"
                      />
                      <span>4+ Bedrooms</span>
                    </label>
                  </div>
                  <div className="quote-nav-row">
                    <button
                      id="step1Next"
                      name="button"
                      type="button"
                      data-form-field-id="step1Next"
                      className="quote-next-btn btn-primary btn"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
                <div id="step-2" className="quote-step">
                  <p className="quote-step-label">Step 2 of 3</p>
                  <h3 className="quote-step-title">
                    Which service do you need?
                  </h3>
                  <div
                    role="group"
                    aria-label="Select service type"
                    className="quote-pill-group"
                  >
                    <label className="quote-pill">
                      <input
                        type="radio"
                        id="thq_service_type_NL9t"
                        name="service_type"
                        value="home_cleaning"
                        required="true"
                        data-form-field-id="thq_service_type_NL9t"
                      />
                      <span>Home Cleaning</span>
                    </label>
                    <label className="quote-pill">
                      <input
                        type="radio"
                        id="thq_service_type_VJSp"
                        name="service_type"
                        value="indepth"
                        data-form-field-id="thq_service_type_VJSp"
                      />
                      <span>In-Depth Clean</span>
                    </label>
                    <label className="quote-pill">
                      <input
                        type="radio"
                        id="thq_service_type_S8wf"
                        name="service_type"
                        value="carpet"
                        data-form-field-id="thq_service_type_S8wf"
                      />
                      <span>Carpet Care</span>
                    </label>
                    <label className="quote-pill">
                      <input
                        type="radio"
                        id="thq_service_type_aedK"
                        name="service_type"
                        value="all"
                        data-form-field-id="thq_service_type_aedK"
                      />
                      <span>All Services</span>
                    </label>
                  </div>
                  <div className="quote-nav-row">
                    <button
                      id="step2Back"
                      name="button"
                      type="button"
                      data-form-field-id="step2Back"
                      className="quote-back-btn btn-accent btn"
                    >
                      Back
                    </button>
                    <button
                      id="step2Next"
                      name="button"
                      type="button"
                      data-form-field-id="step2Next"
                      className="quote-next-btn btn-primary btn"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
                <div id="step-3" className="quote-step">
                  <p className="quote-step-label">Step 3 of 3</p>
                  <h3 className="quote-step-title">How can we reach you?</h3>
                  <div className="quote-fields">
                    <div className="quote-field-group">
                      <label htmlFor="quote-name" className="quote-field-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="quote-name"
                        name="full_name"
                        required="true"
                        maxlength="80"
                        minlength="2"
                        placeholder="Jane Smith"
                        data-form-field-id="quote-name"
                        className="quote-input"
                      />
                    </div>
                    <div className="quote-field-group">
                      <label
                        htmlFor="quote-email"
                        className="quote-field-label"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="quote-email"
                        name="email"
                        required="true"
                        placeholder="jane@example.com"
                        data-form-field-id="quote-email"
                        className="quote-input"
                      />
                    </div>
                    <div className="quote-field-group">
                      <label
                        htmlFor="quote-phone"
                        className="quote-field-label"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="quote-phone"
                        name="phone"
                        required="true"
                        placeholder="619-000-0000"
                        data-form-field-id="quote-phone"
                        className="quote-input"
                      />
                    </div>
                  </div>
                  <div className="quote-nav-row">
                    <button
                      id="step3Back"
                      name="button"
                      type="button"
                      data-form-field-id="step3Back"
                      className="quote-back-btn btn-accent btn"
                    >
                      Back
                    </button>
                    <button
                      id="thq_button_pSNC"
                      name="button"
                      type="submit"
                      data-form-field-id="thq_button_pSNC"
                      className="quote-submit-btn btn-primary btn"
                    >
                      Send My Free Quote
                    </button>
                  </div>
                </div>
                <div
                  id="step-success"
                  aria-live="polite"
                  className="quote-step quote-success"
                >
                  <div aria-hidden="true" className="quote-success-icon">
                    <svg
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="quote-success-title">You&apos;re All Set!</h3>
                  <p className="quote-success-text section-content">
                    Thank you! We&apos;ll review your request and get back to
                    you within the hour with your personalized quote.
                  </p>
                  <p className="quote-success-phone">
                    <span>
                      {' '}
                      Or call us directly:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a href="tel:6193660809">
                      <div>
                        <span>619-366-08-09</span>
                      </div>
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section aria-label="How It Works" className="how-section">
          <div className="how-inner">
            <div className="how-header">
              <h2 className="how-title section-title">How It Works</h2>
              <p className="how-subtitle section-content">
                Three simple steps to a beautifully clean home. No hassle, no
                guesswork.
              </p>
            </div>
            <div className="how-steps-row">
              <div className="how-step">
                <div aria-hidden="true" className="how-step-num">
                  <span>01</span>
                </div>
                <div aria-hidden="true" className="how-step-icon-wrap">
                  <svg
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="how-step-title">Book Online</h3>
                <p className="section-content how-step-desc">
                  Pick your service, choose a date that works for you, and
                  confirm your booking in under two minutes.
                </p>
              </div>
              <div aria-hidden="true" className="how-connector">
                <div className="how-connector-line"></div>
                <div className="how-connector-arrow"></div>
              </div>
              <div className="how-step">
                <div aria-hidden="true" className="how-step-num">
                  <span>02</span>
                </div>
                <div aria-hidden="true" className="how-step-icon-wrap">
                  <svg
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                      <circle r="2" cx="4" cy="20"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="how-step-title">We Clean</h3>
                <p className="section-content how-step-desc">
                  Our vetted professionals arrive on time, fully equipped, and
                  ready to make your home shine from top to bottom.
                </p>
              </div>
              <div aria-hidden="true" className="how-connector">
                <div className="how-connector-line"></div>
                <div className="how-connector-arrow"></div>
              </div>
              <div className="how-step">
                <div aria-hidden="true" className="how-step-num">
                  <span>03</span>
                </div>
                <div aria-hidden="true" className="how-step-icon-wrap">
                  <svg
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="how-step-title">Enjoy Your Home</h3>
                <p className="section-content how-step-desc">
                  Relax and enjoy a spotless, fresh-smelling home. If
                  anything&apos;s not right, we come back — no questions asked.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          aria-label="Customer Testimonials"
          className="testimonials-section"
        >
          <div className="testimonials-header">
            <h2 className="testimonials-title section-title">
              What Our Clients Say
            </h2>
            <p className="section-content testimonials-sub">
              Real reviews from real Arizona homeowners who trust us every
              week.
            </p>
          </div>
          <div className="testimonials-rail-wrap">
            <div
              id="testimonialsRail"
              role="list"
              className="testimonials-rail"
            >
              <article role="listitem" className="testimonial-card">
                <div
                  aria-label="5 out of 5 stars"
                  className="testimonial-stars"
                >
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <blockquote className="testimonial-quote">
                  <span>
                    &quot;Daisy&apos;s team transformed our home before a family
                    gathering. The attention to detail was extraordinary — even
                    the baseboards sparkled. I&apos;ll never use another
                    cleaning service.&quot;
                  </span>
                </blockquote>
                <footer className="testimonial-footer">
                  <div aria-hidden="true" className="testimonial-avatar">
                    <span>M</span>
                  </div>
                  <div className="testimonial-author-info">
                    <span className="testimonial-name">Maria G.</span>
                    <span className="testimonial-location">
                      Chandler, Arizona
                    </span>
                  </div>
                </footer>
              </article>
              <article role="listitem" className="testimonial-card">
                <div
                  aria-label="5 out of 5 stars"
                  className="testimonial-stars"
                >
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <blockquote className="testimonial-quote">
                  <span>
                    &quot;I&apos;ve tried four different cleaning services over
                    the years. Daisy&apos;s is on a completely different level.
                    They&apos;re reliable, thorough, and incredibly
                    professional. Highly recommend to anyone in the Arizona Metro Area.&quot;
                  </span>
                </blockquote>
                <footer className="testimonial-footer">
                  <div aria-hidden="true" className="testimonial-avatar">
                    <span>J</span>
                  </div>
                  <div className="testimonial-author-info">
                    <span className="testimonial-name">James R.</span>
                    <span className="testimonial-location">
                      Scottsdale, Arizona
                    </span>
                  </div>
                </footer>
              </article>
              <article role="listitem" className="testimonial-card">
                <div
                  aria-label="5 out of 5 stars"
                  className="testimonial-stars"
                >
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <blockquote className="testimonial-quote">
                  <span>
                    &quot;The carpet cleaning service was outstanding. Stains I
                    thought were permanent are completely gone. My home feels
                    brand new. Worth every penny — I booked a monthly plan on
                    the spot.&quot;
                  </span>
                </blockquote>
                <footer className="testimonial-footer">
                  <div aria-hidden="true" className="testimonial-avatar">
                    <span>S</span>
                  </div>
                  <div className="testimonial-author-info">
                    <span className="testimonial-name">Sofia T.</span>
                    <span className="testimonial-location">
                      Tempe, Arizona
                    </span>
                  </div>
                </footer>
              </article>
              <article role="listitem" className="testimonial-card">
                <div
                  aria-label="5 out of 5 stars"
                  className="testimonial-stars"
                >
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <blockquote className="testimonial-quote">
                  <span>
                    &quot;As a working mom, having a reliable cleaning service
                    is non-negotiable. Daisy&apos;s team respects my time, my
                    home, and my family. They&apos;ve been our cleaning team for
                    two years and counting.&quot;
                  </span>
                </blockquote>
                <footer className="testimonial-footer">
                  <div aria-hidden="true" className="testimonial-avatar">
                    <span>A</span>
                  </div>
                  <div className="testimonial-author-info">
                    <span className="testimonial-name">Amanda K.</span>
                    <span className="testimonial-location">
                      Mesa, Arizona
                    </span>
                  </div>
                </footer>
              </article>
            </div>
            <div
              aria-label="Scroll testimonials"
              className="testimonials-scroll-controls"
            >
              <button
                id="scrollLeft"
                aria-label="Scroll left"
                className="testimonials-scroll-btn"
              >
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m15 18l-6-6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                id="scrollRight"
                aria-label="Scroll right"
                className="testimonials-scroll-btn"
              >
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m9 18l6-6l-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section aria-label="Service Area Snapshot" className="area-section">
          <div className="area-inner">
            <div className="area-col area-col--map">
              <div className="area-map-wrap">
                {!areaMapImageFailed ? (
                  <img
                    alt="Sonoran Desert with saguaro cacti and mountains — our Arizona service area"
                    src="/arizona-bg.jpg"
                    loading="lazy"
                    className="area-map-img"
                    onError={() => setAreaMapImageFailed(true)}
                  />
                ) : null}
                <div aria-hidden="true" className="area-map-overlay">
                  <div className="area-map-pin">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                    <span>Arizona</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="area-col area-col--info">
              <p className="area-eyebrow">We Come to You</p>
              <h2 className="section-title area-heading">
                Serving all of Arizona
              </h2>
              <p className="area-desc section-content">
                From central Arizona to surrounding communities, Daisy&apos;s
                Professional Home Cleaning covers the entire Arizona Metro Area.
                If you call Arizona home, we&apos;ve got you covered.
              </p>
              <div className="area-locations">
                <div className="area-location-item">
                  <svg
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span>Scottsdale</span>
                </div>
                <div className="area-location-item">
                  <svg
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span>Tempe</span>
                </div>
                <div className="area-location-item">
                  <svg
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span>Mesa</span>
                </div>
                <div className="area-location-item">
                  <svg
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span>Chandler</span>
                </div>
                <div className="area-location-item">
                  <svg
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span>Gilbert</span>
                </div>
                <div className="area-location-item">
                  <svg
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span>Glendale</span>
                </div>
                <div className="area-location-item">
                  <svg
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span>Peoria</span>
                </div>
                <div className="area-location-item">
                  <svg
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span>Paradise Valley</span>
                </div>
                <div className="area-location-item">
                  <svg
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span>Downtown Arizona</span>
                </div>
              </div>
              <div className="area-cta-row">
                <a href="tel:6193660809">
                  <div className="btn-primary btn area-phone-btn">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                    <span>Call 619-366-08-09</span>
                  </div>
                </a>
                <a href="#quote-wizard">
                  <div className="area-quote-btn btn-outline btn">
                    <span>Get a Free Quote</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container5">
          <div className="home-container6">
            <Script
              html={`<style>
        @keyframes heroFadeUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes stepFadeIn {from {opacity: 0;
transform: translateX(12px);}
to {opacity: 1;
transform: translateX(0);}}@keyframes successPop {0% {transform: scale(0);
opacity: 0;}
60% {transform: scale(1.2);}
100% {transform: scale(1);
opacity: 1;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container7">
          <div className="home-container8">
            <Script
              html={`<script defer data-name="homepage-interactions">
(function(){
  const step1Next = document.getElementById("step1Next")
  const step2Back = document.getElementById("step2Back")
  const step2Next = document.getElementById("step2Next")
  const step3Back = document.getElementById("step3Back")
  const quoteForm = document.getElementById("quoteForm")

  const steps = [document.getElementById("step-1"), document.getElementById("step-2"), document.getElementById("step-3"), document.getElementById("step-success")]

  const dots = document.querySelectorAll(".quote-step-dot")

  function showStep(index) {
    steps.forEach(function (s, i) {
      s.classList.toggle("quote-step--active", i === index)
    })
    dots.forEach(function (dot, i) {
      dot.classList.remove("quote-step-dot--active", "quote-step-dot--done")
      if (i === index) dot.classList.add("quote-step-dot--active")
      else if (i < index) dot.classList.add("quote-step-dot--done")
    })
  }

  function validateRadioGroup(name) {
    const radios = document.querySelectorAll('input[name="' + name + '"]')
    return Array.from(radios).some(function (r) {
      return r.checked
    })
  }

  step1Next.addEventListener("click", function () {
    if (!validateRadioGroup("home_size")) {
      step1Next.classList.add("quote-btn-shake")
      setTimeout(function () {
        step1Next.classList.remove("quote-btn-shake")
      }, 400)
      return
    }
    showStep(1)
  })

  step2Back.addEventListener("click", function () {
    showStep(0)
  })

  step2Next.addEventListener("click", function () {
    if (!validateRadioGroup("service_type")) {
      step2Next.classList.add("quote-btn-shake")
      setTimeout(function () {
        step2Next.classList.remove("quote-btn-shake")
      }, 400)
      return
    }
    showStep(2)
  })

  step3Back.addEventListener("click", function () {
    showStep(1)
  })

  quoteForm.addEventListener("submit", function (e) {
    e.preventDefault()
    if (!quoteForm.checkValidity()) {
      quoteForm.reportValidity()
      return
    }
    showStep(3)
  })

  const scrollLeftBtn = document.getElementById("scrollLeft")
  const scrollRightBtn = document.getElementById("scrollRight")
  const rail = document.getElementById("testimonialsRail")

  scrollLeftBtn.addEventListener("click", function () {
    rail.scrollBy({ left: -400, behavior: "smooth" })
  })

  scrollRightBtn.addEventListener("click", function () {
    rail.scrollBy({ left: 400, behavior: "smooth" })
  })

  const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        fadeObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".service-card, .trust-col, .how-step, .area-col--info").forEach(function (el, i) {
    el.style.opacity = "0"
    el.style.transform = "translateY(24px)"
    el.style.transition = "opacity 0.5s ease " + i * 0.1 + "s, transform 0.5s ease " + i * 0.1 + "s"
    fadeObserver.observe(el)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container5 {
            display: none;
          }
          .home-container6 {
            display: contents;
          }
          .home-container7 {
            display: none;
          }
          .home-container8 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
