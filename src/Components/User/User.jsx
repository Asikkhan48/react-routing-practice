
const User = ({user}) => {

    const {id,name, email, address, phone, website} =user;
    return (
        <div className="border-2 border-pink-500 mt-5 rounded-lg">
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Town: {address.city}</p>
            <p>Number: {phone}</p>
            <p>Website: {website}</p>

        </div>
    );
};

export default User;