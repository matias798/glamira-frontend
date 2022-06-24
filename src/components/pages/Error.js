import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="d-flex justify-content-center my-5 py-5">
        <div>
        <p>Sorry, something went wrong.</p>
        <button className="btn btn-outlined-primary">
            <Link to="/">Continue Shopping</Link>
        </button>

        </div>
        </div>
    );
    }
export default Error;