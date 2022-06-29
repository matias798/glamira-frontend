import { TbTools } from "react-icons/tb";
import { IoMdGlobe } from "react-icons/io";
import { BsBrush } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="container my-3 centerTextOnMobile">
      <div className="main-title">
        <h2>WHY CHOOSE US?</h2>
        <hr className="dontShowOnMobile" />
      </div>
      <div className="services-home-page pt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="dontShowOnMobile">
              <p>
                <TbTools size={40} />
              </p>
              <hr />
              <hr />
              <br />
              <br />
            </div>
            <h4>BRANDING</h4>
            <p>
              Expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because procure him.
            </p>
          </div>
          <div className="col-md-4">
            <div className="dontShowOnMobile">
              <p className="icon-globe">
                <IoMdGlobe size={40} />
              </p>
              <hr />
              <hr />
            </div>
            <br />
            <br />
            <h4>PLAN OF WORK</h4>
            <p>
              Expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because procure him.
            </p>
          </div>
          <div className="col-md-4">
            <div className="dontShowOnMobile">
              <p className="icon-paintbrush">
                <BsBrush size={40} />{" "}
              </p>
              <hr />
              <hr />
              <br />
              <br />
            </div>
            <h4>ILUSTRATION</h4>
            <p>
              Expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because procure him.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
