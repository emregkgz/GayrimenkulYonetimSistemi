import React from "react";

function Footer() {
  return (
    <>
      {/* <!-- BEGIN PRE-FOOTER --> */}
      <div className="page-prefooter">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam dolore.
              </p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs12 footer-block">
              <h2>Subscribe Email</h2>
              <div className="subscribe-form">
                <form action="#">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="mail@email.com"
                      className="form-control"
                    />
                    <span className="input-group-btn">
                      <button className="btn" type="submit">
                        Submit
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
              <h2>Follow Us On</h2>
              <ul className="social-icons">
                <li>
                  <a href="#" data-original-title="rss" className="rss"></a>
                </li>
                <li>
                  <a
                    href="#"
                    data-original-title="facebook"
                    className="facebook"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    data-original-title="twitter"
                    className="twitter"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    data-original-title="googleplus"
                    className="googleplus"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    data-original-title="linkedin"
                    className="linkedin"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    data-original-title="youtube"
                    className="youtube"
                  ></a>
                </li>
                <li>
                  <a href="#" data-original-title="vimeo" className="vimeo"></a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
              <h2>Contacts</h2>
              <address className="margin-bottom-40">
                Phone: 800 123 3456
                <br />
                Email: <a href="mailto:info@metronic.com">info@metronic.com</a>
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="page-footer">
        <div className="container">
          2014 &copy; Metronic by keenthemes.{" "}
          <a
            href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes"
            title="Purchase Metronic just for 27$ and get lifetime updates for free"
            target="_blank"
          >
            Purchase Metronic!
          </a>
        </div>
      </div>
      <div className="scroll-to-top">
        <i className="icon-arrow-up"></i>
      </div>
    </>
  );
}

export default Footer;
