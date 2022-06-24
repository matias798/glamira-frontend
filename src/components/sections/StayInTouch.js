import Swal from "sweetalert2";
const StayInTouch = () => {
  // stay in touch section
const subscribeHandler = () => {
  Swal.fire({
    icon: "success",
    text: "You have successfully subscribed",
    showConfirmButton: false,
    timer: 1500,
  });}

  return (
    <div className="container mt-5 pt-5">
      <div className="my-5">
        {/* title */}
        <div className="title">
          <h4>Suscribe to our newsleter</h4>

          <div className="form-group">
            <input
              type="text"
              className="form-control m-4"
              placeholder="Enter your name"
            />
            <input
              type="email"
              className="form-control m-4"
              placeholder="Enter your email"
            />
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary rounded" onClick={()=>{subscribeHandler()}}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StayInTouch;
