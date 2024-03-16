import React from "react"
import "../App.css"
import { Box } from "@mui/material"

export const Round=()=>{
    
let rouns=[{img:"https://secure.meetupstatic.com/next/images/indexPage/popularCities/new_york.webp?w=256",name:"New York"},
{img:"https://secure.meetupstatic.com/next/images/indexPage/popularCities/san_francisco.webp?w=256",name:"San fransisco"},
{img:"https://secure.meetupstatic.com/next/images/indexPage/popularCities/chicago.webp?w=256",name:"Chicago"},
{img:"https://secure.meetupstatic.com/next/images/indexPage/popularCities/nashville.webp?w=256",name:"Nashvile"},
{img:"https://secure.meetupstatic.com/next/images/indexPage/popularCities/miami.webp?w=256",name:"Miami"}]
 console.log(rouns)
 return (<>
 <Box className="container"> 
        <Box component="h2" variant="h1">Popular cities on Meetup</Box>
        <p style={{margin:"5px 0"}}>Looking for fun things to do near you? See what Meetup organizers are planning in cities around the country.</p>
        <Box className="container" style={{margin:"0px"}}>
            <Box sx={{display:"flex",pading:"0 40px"}}>
                {rouns.map((v,i)=>{
                    return (<>
                        <Box sx={{width:"100%",padding:"10px 15px",textAlign:"center"}}> 
                            <img src={v.img} height="100%" width="100%" style={{borderRadius:"25px"}}/>
                              <b style={{fontSize:"20px"}}>{v.name}</b>                          
                                                    </Box>
                    </>)
                })}
                
                 </Box>
            
            </Box>    
            </Box>
    </>)
}