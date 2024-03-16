import React from "react";
import "../../App.css"
import { Box, Button } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
export const Nav=()=>{
    return(<>
    <div className="container">

        <Box sx={{display:"flex",flexWrap:"wrap",marginTop:"15px",alignItems:"center"}}>
          <Box component="div" sx={{width:"50%",display:"flex"}}> 
          <Box sx={{fontSize:"25px",fontWeight:"900",color:"red",width:"50%"}}>
                 Meetup
          </Box>
          <Box sx={{width:"50%",display:"flex",justifyContent:"space-between"}}>
            <Box sx={{position:"relative"}}>
          <Box sx={{width:"100%",height:"25px",paddingLeft:"10px"}} placeholder="search.." component="input" />
            <Box component="i" sx={{position:"absolute",right:"0",top:"1px"}}><SearchIcon/> </Box>
          </Box>
          </Box>  

        </Box>
        <Box sx={{width:"50%"}}>
            <Box sx={{display:"flex",justifyContent:"end",alignItems:"center",marginRight:"20px"}}>
                <p style={{display:"flex",alignItems:"center",marginRight:"20px"}}><i><LanguageIcon/></i>English</p>
                <p>Log In</p>
                <Button sx={{backgroundColor:"#00798a",height:"30px",lineHeight:"20px",margin:"0 10px",width:"20%",display:"inline-block"}} variant="contained">Sign up</Button>
            </Box>
            </Box>


        </Box>
        </div>
        
    </>)
}