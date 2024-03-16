import React from "react"
import "../../App.css"
import { Box, Button } from "@mui/material"

export const Footer=()=>{
    return(<>
        <Box component="header" sx={{backgroundColor:"black"}}>
            <Box className="container">
                 <Box  sx={{color:"white"}}>Create your own Meetup group.</Box>
                 <Button variant="outlined">Get Started</Button>
                 
        
            </Box>
        </Box>
    </>)
}
