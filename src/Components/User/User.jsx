import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id,name, email, address, phone, website} =user;
    return (
        <div className="border-2 border-pink-500 mt-5 rounded-lg p-4">
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Town: {address.city}</p>
            <p>Number: {phone}</p>
            <p>Website: {website}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <br />
            <Link to={`/user/${id}`}>
                <button className="btn btn-ghost">Click Me</button>
            </Link>
        </div>
    );
};

export default User;