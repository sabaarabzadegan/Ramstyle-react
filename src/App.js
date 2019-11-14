import React from 'react';
import './App.css';
import AutoRotatingCarousel from './CarouselAutoRotate';
import Box from "@material-ui/core/Box";
import Dead from './static/Dead.png';
import Alive from './static/Alive.png';

function App() {
    return (
        <Box>
            <AutoRotatingCarousel open mobile>
                <img src={Dead} alt='Dead' height={700} width={'100%'}/>
                <img src={Alive} alt='Alive' height={700} width={'100%'}/>
            </AutoRotatingCarousel>
        </Box>
    );
}

export default App;
