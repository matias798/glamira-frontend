import {TbTools} from 'react-icons/tb';
import {IoMdGlobe} from 'react-icons/io';
import {BsBrush} from 'react-icons/bs';

const AboutUs = () => {
  return (
    <div class="container">
      <div class="main-title">
        <h2>WHY CHOOSE US?</h2>
        <hr />
      </div>
      <div class="services-home-page pt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="services-icon">
              <p ><TbTools size={40}  /></p>
              <hr />
              <br/>
              <br/>
            </div>
            <h4>BRANDING</h4>
            <p>
              Expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because procure him.
            </p>
          </div>
          <div class="col-md-4">
            <div class="services-icon">
              <p class="icon-globe"><IoMdGlobe size={40}/></p>
              <hr />
            </div>
            <hr />
              <br/>
              <br/>
            <h4>PLAN OF WORK</h4>
            <p>
              Expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because procure him.
            </p>
          </div>
          <div class="col-md-4">
            <div class="services-icon">
              <p class="icon-paintbrush"><BsBrush size={40}/> </p>
              <hr />
              <br/>
              <br/>
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
