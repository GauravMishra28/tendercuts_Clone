// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
// import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { NavBar1 } from './Navbar/NavBar1';
import { Navbar2 } from './Navbar/Navbar2';
import { PlacementExample } from './Navbar/Drawer';
import SimpleSlider from './Sliders/MySlider';
import Carousel from './Sliders/MainSlider';
// import TopPickMain from './Sliders/Toppicks';

function App() {

  return (
    <div className="App">


{/* <NavBar1/>
<Navbar2/> */}
{/* <TopPickMain/> */}
<Carousel/>
<SimpleSlider/>
    </div>
  );
}

export default App;
