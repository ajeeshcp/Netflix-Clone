import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import "../Banner/Banner.css" ;
import axios from "../../constants/Axios" ;
import {API_KEY,IMG_URL} from "../../constants/Constants"
import YouTube from 'react-youtube';

function Banner() {

    const [movie, setMovie] = useState("");
    const [key, setKey] = useState("")

        useEffect(() => {
            axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
                const randomNum = Math.floor(Math.random() * 21)
               
                setMovie(res.data.results[randomNum])
            })

        }, [])

        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };

        const handleMovie = (id) => {
            axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
                
                if(res.data.results.length!==0){
                    setKey(res.data.results[0].key) 
                }else{
                    alert("Trialer is not availbe")
                }
                
            })
          }

    return (
        <div>
            <div className="banner" style={{backgroundImage:`url(${movie ? IMG_URL+movie.backdrop_path : " "})`}}>
            <Container>
            <div className="content container-fluid">
                <div className="title">{movie ? movie.name || movie.title : "Loading.."}</div>
                <div className="description">
                    {movie ? (movie.overview).substring(0,150)+" ......." : "Loading.."}
                </div>
                <div className="banner-buttons">
                    <button className="button" onClick={
                        ()=>{
                            handleMovie(movie.id)
                        }
                    }><i className="bi bi-play-fill banner-i"></i>Play</button>
                    <button className="button"><i className="bi bi-plus-lg  banner-i"></i>My list</button>
                </div>
            </div>  
            
            </Container>
            
        </div>
        <Container>
        {
              key && <YouTube videoId={key} opts={opts} className="mt-4"/> 
        }
        </Container>
        </div>
       
    )
}

export default Banner
