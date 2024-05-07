import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user =useLoaderData();
    const {id, name, email, address} = user;

    return (
        <div className="mt-20">
            <h2><span className="font-bold">Details About User:</span> {name}</h2>
            <p><span className="font-bold">Email:</span> {email}</p>
        </div>
    );
};

export default UserDetails;