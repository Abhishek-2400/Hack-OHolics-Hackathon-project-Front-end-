import React from 'react'
import Hero from '../Hero';
import Cards from '../Cards';
import Footer from '../Footer';
import Facilities from '../Facilities';
import Chat from '../Chat';
function Home() {
    return (
        <>
            <Hero />
            <Chat />
            <Cards />
            <Chat />
            {/* <Facilities /> */}
            <Chat />
            <Footer />
            <Chat />
        </>
    )
}

export default Home;