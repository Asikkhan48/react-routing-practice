import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData();

    return (
        <div className="mt-10">
            <h2 className="font-bold">Our Users: {users.length}</h2>
            
            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;