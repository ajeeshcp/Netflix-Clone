import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import "../Rowpost/RowPost.css" ;
import axios from '../../constants/Axios';
import {API_KEY,IMG_URL} from "../../constants/Constants" ;
import { Container } from 'react-bootstrap';


function RowPost(props) {
    const [movies, setMovies] = useState([]) ;
    const [key, setKey] = useState("")
    const {title,url,isSmall} = props ;

    
    useEffect(() => {
        axios.get(`${url}`).then((res) => {
            
            setMovies(res.data.results)
        })

    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
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
        <div className="row-post ">
            <h3 className="poster-title">{title}</h3>
            <div className="posters" >

                {
                    movies.map((item) => {
                        return (
                            <div className="image-wrapper" onClick={
                                () =>{handleMovie(item.id)}
                            }>
                                <img className={ isSmall ? "small-poster img-fluid" :"poster img-fluid"} src={`${IMG_URL+item.backdrop_path}`} alt="Netflix" />
                                <div className="img-text-container">
                                    <h3 className="img-title">{item ? item.title || item.name : " "}</h3>
                                    <p className="img-description">{item ? (item.overview).substring(0,30)+" .. " : " "}</p>
                                </div>
                                
                            </div>
                        )
                                
                    })
                    
                }
                
            </div>
            <Container>
                {
                    key && <YouTube videoId={key} opts={opts} className="mt-4"/> 
                }

            
            </Container>
            
        </div>  
    )
}

export default RowPost
