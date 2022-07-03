import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Fooder from "../Fooder";
import HeroSictoin from "../HeroSictoin";


function Home(){
    return(
        <>
        <HeroSictoin />
        <Cards />
        <Fooder />
        </>
    )
}

export default Home;