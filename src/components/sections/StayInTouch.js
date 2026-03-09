import Swal from "sweetalert2";
const StayInTouch = () => {
  // stay in touch section
const subscribeHandler = () => {
  Swal.fire({
    icon: "success",
    title: "Thank You",
    text: "You've been added to our exclusive mailing list",
    confirmButtonText: "Continue",
  });}

  return (
    <div className="container mt-2">
      <div className="my-5 py-4">
        {/* title */}
        <div className="title centerTextOnMobile" style={{maxWidth: '600px'}}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#D4AF37',
            marginBottom: '10px'
          }}>Newsletter</p>
          <h4 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.8rem',
            fontWeight: 500,
            marginBottom: '20px'
          }}>Stay in Touch</h4>
          <p style={{color: '#666', marginBottom: '25px'}}>
            Subscribe to receive updates on new collections, exclusive offers, and styling inspiration.
          </p>

          <div className="form-group">
            <input
              type="text"
              className="form-control my-3"
              placeholder="Your name"
            />
            <input
              type="email"
              className="form-control my-3"
              placeholder="Your email"
            />
            <div className="d-flex justify-content-start mt-4">
              <button className="btn btn-primary" onClick={()=>{subscribeHandler()}}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StayInTouch;
