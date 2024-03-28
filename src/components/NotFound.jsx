import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404</h2>
            <p>Page not found <Link to="/">click to be redirected to the home page </Link></p>
           
        </div>
     );
}
 
export default NotFound;