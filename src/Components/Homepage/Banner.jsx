import React from "react";
import "../../App.css"
import { Box,Button,Typography } from "@mui/material";

export  const Banner=()=>{

    let clickable=()=>{

    }

return(<>
        <Box className="container" sx={{}}>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px"}}>
            
            <Box sx={{width:"50%",height:"100%"}}>
            <Typography sx={{fontWeight:"800"}} variant="h3">
                     The people platform—Where interests become friendships
            </Typography>
            <Box sx={{margin:"10px 0"}}>
            <p>Whatever your interest, from hiking and reading to networking and skill sharing,
             there are thousands of people who share it on Meetup. Events are happening every day—sign up to join the fun.</p>
                <Button sx={{backgroundColor:"#00798a",margin:"10px 0"}}
                variant="contained"
                onClick={()=>{clickable}}
                >Join Meetup</Button>   
            </Box>

            </Box>
            

            <Box sx={{width:"50%",textAlign:"center"}}>
                <Box component="img" height="350px"
                 width="450px"
                 src="https://secure.meetupstatic.com/next/images/indexPage/irl_event.svg?w=384"/>

            </Box>
            </Box>

            </Box>
    </>)
}