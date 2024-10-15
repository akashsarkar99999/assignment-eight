import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Opps Sorry! Somthing Went Wrong</h2>
            <Link><button to="/">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;