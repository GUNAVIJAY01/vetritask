import React from "react";
import { Banner } from "./Homepage/Banner";
import { Nav } from "./Homepage/Nav";
import { Arrof } from "./Homepage/Arryofobj";
import { Round } from "./Roundimg";
import { Footer } from "./Homepage/Footer";
export const Home=()=>{
    return (<>
    <Nav/>
    <Banner/>
    <Arrof/>
    <Round/>
     <Footer/>                      
    </>)
}