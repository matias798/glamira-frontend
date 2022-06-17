const StayInTouch = () => {
  // stay in touch section

  return (
    <div className="my-5">
      {/* title */}
      <div className="title">
        <h2>Stay in touch</h2>
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
            <button className="btn btn-primary rounded">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StayInTouch;
