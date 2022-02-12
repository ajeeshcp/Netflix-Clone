import React,{useEffect} from 'react'
import { Container, Spinner} from 'react-bootstrap'
import Footer from '../footer/Footer';
import Header from '../NavBar/Header'
import "../popular/Popular.css";
import axios from "../../constants/Axios" ;
import { useState } from 'react';
import { IMG_URL,API_KEY } from '../../constants/Constants';
import YouTube from 'react-youtube';

function Popular(props) {

    const [movie, setMovie] = useState([]) ;
    const [key, setKey] = useState("")
    const [trailer, setTrailer] = useState()
    const {url,title} = props;
    
    useEffect(() => {
        axios.get(`${url}`).then((res) => {
            setMovie(res.data.results)
        })

    }, [])

    const handleMovie = (id) => {
        
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
            
            if(res.data.results.length!==0){
                setKey(res.data.results[0].key) ;
            }else{
                alert("Trialer is not availbe") ;
            }
            
        })
      }

      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };


    return (
        <div>
            <Header />
            <div className="popular-section" style={{textAlign:"center"}}>
                <h2 className="popular-title px-5">{title}</h2>
                <div className="image-wrapper d-flex flex-wrap px-5">
                    {
                       movie ?  movie.map((item) => {
                            return <div key={item.id} className="pop-images">
                                        <img className="img-item flex-wrap me-3 mt-3 flex-grow-1 " src={`${IMG_URL+item.backdrop_path}`} alt="Loading.." />
                                        <div className="image-text">
                                        <i className="bi bi-play-circle" onClick={() => {
                                            setTrailer(item)
                                            handleMovie(item.id);
                                            window. scrollTo({top: 0, behavior: 'smooth'});

                                        }}></i>
                                            <h2 className="pop-title">{item.title ? item.title : " "}</h2>
                                            <p>{item.overview ? (item.overview).substring(0,50) : "" }</p>
                                        </div>
                                </div>
                        }) : <Spinner animation="border" />
                    }
                </div>

                {
                    trailer ?  <div className="trailer-wrap">
                    <div className="popup-trailer">
                        <div className="pop-banner" style={{backgroundImage:`url(${trailer ? IMG_URL+trailer.backdrop_path : " "})`}}>
                        <i className="bi bi-x-circle-fill" onClick={
                            () =>{
                                setTrailer()
                            }
                        }></i>
                            <div className="trailer-content">
                                <h2 className="trailer-title">{trailer ? trailer.title : "Loading..."} </h2>
                                <h3 className="my-4">Release Date : {trailer ? trailer.release_date : "Loading..."}</h3>
                                <p className="trailer-desc">{trailer ? trailer.overview : "Loading..."}</p>

                            </div>

                        
                        </div>
                        <Container>
                            {
                                key && <YouTube videoId={key} opts={opts} className="my-5 youtube"/> 
                            }
                        </Container >
                        </div>
                    </div> : <Spinner style={{color:"red", margin:"10px 0"}} animation="border" />
                      

                }

               
            </div>
           
            <Footer />
        </div>
    )
}

export default Popular
