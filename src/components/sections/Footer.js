const Footer = () => {
  return (
    <div className="m-0 p-0">
      <footer className=" footer m-0 p-0" style={{ backgroundColor: "#282424" }}>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="widget widget-about">
                  <h4 className="widget-title text-white text-start mt-5 pb-3 ">
                    about shop
                  </h4>
                  <p className="m-1 text-start">
                    A modern fashion store where design meets aeshetics,
                    elegance and sophistication{" "}
                  </p>

                  <div className="social-icons">
                    <p
                      className="social-icon"
                      title="Facebook"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="icon-facebook-f"></i>
                    </p>
                    <p
                      className="social-icon"
                      title="Twitter"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="icon-twitter"></i>
                    </p>
                    <p
                      rel="noreferrer"
                      className="social-icon"
                      title="Instagram"
                      target="_blank"
                    >
                      <i className="icon-instagram"></i>
                    </p>
                    <p
                      className="social-icon"
                      title="Youtube"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="icon-youtube"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title text-white text-start mt-5 pb-3">
                    Useful Links
                  </h4>

                  <p className="m-1 text-start">About Shop</p>

                  <p className="m-1 text-start">How to shop</p>

                  <p className="m-1 text-start">FAQ</p>

                  <p className="m-1 text-start">Contact us</p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title text-white text-start mt-5 pb-3">
                    Customer Service
                  </h4>

                  <p className="m-1 text-start">Payment Methods</p>

                  <p className="m-1 text-start">Money-back guarantee!</p>

                  <p className="m-1 text-start">Returns</p>

                  <p className="m-1 text-start">Shipping</p>

                  <p className="m-1 text-start">Terms and conditions</p>

                  <p className="m-1 text-start">Privacy Policy</p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title text-white text-start mt-5 pb-3">
                    My Account
                  </h4>

                  <p className="m-1 text-start">Sign In</p>

                  <p className="m-1 text-start">View Cart</p>

                  <p className="m-1 text-start">My Wishlist</p>

                  <p className="m-1 text-start">Track My Order</p>

                  <p className="m-1 text-start">Help</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <figure className="footer-payments m-4">
              <img
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAAUCAYAAABF7GK3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzRBMjlCOTczRTVGMTFFOTlBRDNBODMwRjQ5NUM1QjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzRBMjlCOTgzRTVGMTFFOTlBRDNBODMwRjQ5NUM1QjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNEEyOUI5NTNFNUYxMUU5OUFEM0E4MzBGNDk1QzVCOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNEEyOUI5NjNFNUYxMUU5OUFEM0E4MzBGNDk1QzVCOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlS88fgAAB8NSURBVHjavFwJeFzV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"
                }
                alt="Payment methods"
                width="272"
                height="20"
              />
            </figure>
            {/* <img src={Logo} alt="FooterLogo" width="82" height="25" /> */}
            <p className="footer-copyright mb-0">
              Copyright © 2022 Glamira.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
