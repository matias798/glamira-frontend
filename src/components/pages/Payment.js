import { useState } from "react";

const Payment = () => {
  const [dni, setDni] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(dni, name, email);
  };

  return (
    <div className="p-5">
      <h1>Payment information</h1>
      {/* form  */}
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <fieldset>
          <div className="form-group">
            <label className="form-label mt-4">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-4">Document ID</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="document id"
              placeholder="Enter your document id"
              onChange={(e) => {
                setDni(e.target.value);
              }}
              required
            />
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-primary rounded">
              Purchase
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default Payment;
