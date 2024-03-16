import { Box, Button } from "@mui/material"
import React from "react"
import "../../App.css"
import DateRangeIcon from '@mui/icons-material/DateRange';
import DoneIcon from '@mui/icons-material/Done';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export const Arrof=()=>{
let arry=[{img:"https://secure.meetupstatic.com/photos/event/4/7/f/e/event_519678430.webp?w=384",imgName:"Monthly Meet & First Quarter Moon Observation",
cont:"Hosted by: Chennai Astronomy Meetup Group",date:"SUN, MAR 17 ·",time:" 7:00 PM IST",tick:"8 Going",ticket:"free"},
{img:"https://secure.meetupstatic.com/photos/event/5/e/7/a/event_519564186.webp?w=384",imgName:"OWASP Chapter Meetup - March",
cont:"Hosted by: OWASP Chennai Chapter",date:"SUN, MAR 24 · ",time:" 10:00 AM IST",tick:"144 Going",ticket:"free"},
{img:"https://secure.meetupstatic.com/photos/event/9/e/9/4/event_519100596.webp?w=384",imgName:"Elevate your Mendix Development: AI-Driven Innovation & Cloud Mastery",
cont:"Hosted by: Mendix India",date:"FRI, MAR 22 · ",time:" 4:00 PM IST",tick:"48 Going",ticket:"free"},
{img:"https://secure-content.meetupstatic.com/images/classic-events/487760807/272x153.webp?w=384",imgName:"CFC Chennai Freelancers Mega Meetup – March 30, 2024",
cont:"Hosted by: Makers Tribe",date:"SAT, MAR 30 ·",time:" 10:00 AM IST",tick:"86 Going",ticket:"free"}]

    return (<>
        <Box sx={{display:"flex",flexWrap:"wrap"}}>
        
        {arry.map((v,i)=>{
            return (<>
                    
                       <Box sx={{width:"25%",padding:"0 15px"}}>
                       <Box component="img" src={v.img} height="150px" width="250px" sx={{borderRadius:"10px"}}/>
                        <Box sx={{margin:"10px 0",display:"inline-block"}} component="b" variant="h1">{v.imgName}</Box>  
                       <Box sx={{color:"gray"}}>{v.cont}    </Box>
                       
                       <Box sx={{color:"grey",margin:"10px 0"}}>
                        <Box sx={{display:"flex",alignItems:"center",margin:"5px 0"}}> <p style={{display:"flex",alignItems:"center"}}> <DateRangeIcon/>{v.date}             </p>
                          <p>{v.time}</p>
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",color:"lightgray",margin:"10px 0"}}>
                          <p style={{display:"flex",alignItems:"center"}}><DoneIcon/>{v.tick}</p>  
                          <p style={{display:"flex",alignItems:"center",margin:"0 10px"}}><ConfirmationNumberIcon/>{v.ticket}</p>  

                        </Box>

                       </Box>
                       </Box>
 
            </>
            )
        })}
        </Box>

         <Box className="container">
                <Box sx={{backgroundColor:"#e4fafc",height:"20%",width:"100%",margin:"45px 0"}}>
                  <Box className="container">
                       <Box sx={{display:"flex",alignItems:"center",padding:"5px"}}>
                        <Box sx={{width:"70%"}}>
                            <Box sx={{fontSize:"25px"}} component="h3">Join Meetup</Box>
                            <p style={{margin:"15px 0"}}>People use Meetup to meet new people, learn new things, find support,
                                 get out of their comfort zones, and pursue their passions, together. Membership is free.</p>
                              <Button variant="contained" color="error">Sign up </Button>   
                        </Box>
                        <Box sx={{width:"30%"}}>
                            <img src="https://www.meetup.com/_next/image/?url=%2Fimages%2FindexPage%2Fjoin%2Fjoin_meetup.webp&w=384&q=75"width="100%"/>
                            </Box>    

                        </Box> 

                    </Box>      
                </Box>
            </Box>   

    </>)
}