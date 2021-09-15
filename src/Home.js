import React from 'react'
import Banner from './components/Banner/Banner';
import Footer from './components/footer/Footer';
import Header from './components/NavBar/Header';
import RowPost from './components/Rowpost/RowPost';
import {action,comedy,originals,romance,documentry,horror} from "./constants/Urls" ;


function Home() {
    
    
    return (
        <div>
       <Header />
       <Banner />
       <RowPost title="Netflix Originals" url={originals} />
       <RowPost title="Action Movies" url={action} isSmall/>
       <RowPost title="Romance" url={romance}/>
       <RowPost title="Documentaries" url={documentry} isSmall/>
       <RowPost title="Horror" url={horror}/>
       <RowPost title="Comedy" url={comedy} isSmall/>
       <Footer />
        </div>
    )
}

export default Home
