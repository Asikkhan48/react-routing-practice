import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Foter from "../Footer/Foter";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Foter></Foter>
        </div>
    );
};

export default Home;