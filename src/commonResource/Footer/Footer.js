import React from "react";
import "./toggle";
import flag from "../images/icons/16.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24-month
              installment loan with Citizens One or Apple Card Monthly
              Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
              Verizon. Taxes and shipping not included. Additional Apple Card
              Monthly Installments terms are in the{" "}
              <Link
                to="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                target="_blank"
                rel="noreferrer" // Added rel attribute here
              >
                {" "}
                Customer Agreement
              </Link>
              . Additional iPhone Payments terms are{" "}
              <Link
                to="https://www.apple.com/legal/sales-support/iphoneinstallments_us/"
                target="_blank"
                rel="noreferrer" // Added rel attribute here
              >
                {" "}
                here
              </Link>
              .
            </p>
            <p>
              2. Subscription required.
              <br />
              <br />
              Magic Keyboard sold separately.
              <br />
              <br />
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other{" "}
              <Link to="https://www.apple.com/promo/" target="_blank" rel="noreferrer">terms</Link> apply.
            </p>
          </div>
          <div className="footer-links-wrapper row">
            {/* Other sections unchanged */}
            <div className="links-wrapper-1 col-sm-12 col-md">
              <h3>Shop and Learn</h3>
              <ul>
                <li>
                  <Link to="mac">Mac</Link>
                </li>
                <li>
                  <Link to="ipad">iPad</Link>
                </li>
                <li>
                  <Link to="iphones">iPhone</Link>
                </li>
                <li>
                  <Link to="watch">Watch</Link>
                </li>
                <li>
                  <Link to="tv">TV</Link>
                </li>
                <li>
                  <Link to="Music">Music</Link>
                </li>
                <li>
                  <Link to="Support">AirPods</Link>
                </li>
                <li>
                  <Link to="/">HomePod</Link>
                </li>
                <li>
                  <Link to="/">iPod touch</Link>
                </li>
                <li>
                  <Link to="/">Accessories</Link>
                </li>
                <li>
                  <Link to="/">Gift Cards</Link>
                </li>
              </ul>
            </div>
            {/* Continue with the rest of the links */}
          </div>
          <div className="my-apple-wrapper">
            More ways to shop: <Link to="#">Find an Apple Store</Link> or{" "}
            <Link to="#">other retailer</Link> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms of Use</Link>
                </li>
                <li>
                  <Link to="#">Sales and Refunds</Link>
                </li>
                <li>
                  <Link to="#">Legal</Link>
                </li>
                <li>
                  <Link to="#">Site Map</Link>
                </li>
              </ul>
            </div>
            <div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper">
                <img src={flag} alt="Country Flag" />
              </div>
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;