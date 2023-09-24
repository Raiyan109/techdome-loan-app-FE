import { Link } from "react-router-dom";

const BackToHome = () => {
    return (
        <div className="py-12">
            <Link to='/' className="">Back to Home</Link>
        </div>
    );
};

export default BackToHome;