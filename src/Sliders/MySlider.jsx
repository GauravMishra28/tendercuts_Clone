
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import {
        Box,
        Flex,
        Image,
        Text,
      } from "@chakra-ui/react";

export default function SimpleSlider() {
    var settings = {
      dots: true,

      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
	autoplay: false,
    };
    return (
    
      <Slider {...settings}>
        
          <Box
            _hover={{ transform: "scale(1.01)" }}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            borderRadius={["lg", "lg", "", ""]}
            minW={"357px"}
            minH={"354px"}
          >
            <Image
              borderRadius={["lg", "lg", "", ""]}
              // borderRadius={"lg"}
              src={
                "https://assets.tendercuts.in/product/P/R/63c42955-a41b-45ce-98e1-cb7510eeac4f.jpg"
              }
            ></Image>
            <Box p={"4"}>
              <Text fontWeight={"bold"}>
                {"Chicken Curry Cut (Skin Off)-1Kg"}
              </Text>
              <Text>{"32 - 36 pieces"}</Text>
              <Flex
                bg={"rgb(242,242,242)"}
                minH={"36px"}
                maxW={"60%"}
                align={"center"}
                justify="space-evenly"
              >
                <Image
                  w={"8"}
                  src="https://www.tendercuts.in/assets/images/weight.png"
                ></Image>
                <Text color={"black"}>Weight: 960 - 1000 Gms</Text>
              </Flex>
              <Flex
                align={"center"}
                direction={["column", "row"]}
                justify="space-between"
              >
                <Flex gap={"10"}>
                  <Text>
                    {" "}
                    MRP{" "}
                    <span>
                      {" "}
                      <s>&#x20b9; 299</s>{" "}
                    </span>{" "}
                  </Text>
  
                  <Text fontWeight={"bold"} color="black">
                    ELITE &#x20b9; 1
                  </Text>
                </Flex>
  
                {/* <TPFYButton /> */}
              </Flex>
            </Box>
          </Box>
  {/* 2 */}
  <Box
            _hover={{ transform: "scale(1.01)" }}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            borderRadius={["lg", "lg", "", ""]}
            minW={"377px"}
            minH={"354px"}
          >
            <Image
              borderRadius={["lg", "lg", "", ""]}
              // borderRadius={"lg"}
              src={
                "https://assets.tendercuts.in/product/P/R/63c42955-a41b-45ce-98e1-cb7510eeac4f.jpg"
              }
            ></Image>
            <Box p={"4"}>
              <Text fontWeight={"bold"}>
                {"Chicken Curry Cut (Skin Off)-1Kg"}
              </Text>
              <Text>{"32 - 36 pieces"}</Text>
              <Flex
                bg={"rgb(242,242,242)"}
                minH={"36px"}
                maxW={"60%"}
                align={"center"}
                justify="space-evenly"
              >
                <Image
                  w={"8"}
                  src="https://www.tendercuts.in/assets/images/weight.png"
                ></Image>
                <Text color={"black"}>Weight: 960 - 1000 Gms</Text>
              </Flex>
              <Flex
                align={"center"}
                direction={["column", "row"]}
                justify="space-between"
              >
                <Flex gap={"10"}>
                  <Text>
                    {" "}
                    MRP{" "}
                    <span>
                      {" "}
                      <s>&#x20b9; 299</s>{" "}
                    </span>{" "}
                  </Text>
  
                  <Text fontWeight={"bold"} color="black">
                    ELITE &#x20b9; 2
                  </Text>
                </Flex>
  
                {/* <TPFYButton /> */}
              </Flex>
            </Box>
          </Box>

          {/* 3 */}
          <Box
            _hover={{ transform: "scale(1.01)" }}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            borderRadius={["lg", "lg", "", ""]}
            minW={"377px"}
            minH={"354px"}
          >
            <Image
              borderRadius={["lg", "lg", "", ""]}
              // borderRadius={"lg"}
              src={
                "https://assets.tendercuts.in/product/P/R/63c42955-a41b-45ce-98e1-cb7510eeac4f.jpg"
              }
            ></Image>
            <Box p={"4"}>
              <Text fontWeight={"bold"}>
                {"Chicken Curry Cut (Skin Off)-1Kg"}
              </Text>
              <Text>{"32 - 36 pieces"}</Text>
              <Flex
                bg={"rgb(242,242,242)"}
                minH={"36px"}
                maxW={"60%"}
                align={"center"}
                justify="space-evenly"
              >
                <Image
                  w={"8"}
                  src="https://www.tendercuts.in/assets/images/weight.png"
                ></Image>
                <Text color={"black"}>Weight: 960 - 1000 Gms</Text>
              </Flex>
              <Flex
                align={"center"}
                direction={["column", "row"]}
                justify="space-between"
              >
                <Flex gap={"10"}>
                  <Text>
                    {" "}
                    MRP{" "}
                    <span>
                      {" "}
                      <s>&#x20b9; 299</s>{" "}
                    </span>{" "}
                  </Text>
  
                  <Text fontWeight={"bold"} color="black">
                    ELITE &#x20b9; 3
                  </Text>
                </Flex>
  
                {/* <TPFYButton /> */}
              </Flex>
            </Box>
          </Box>

          {/* 4 */}
          <Box
            _hover={{ transform: "scale(1.01)" }}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            borderRadius={["lg", "lg", "", ""]}
            minW={"377px"}
            minH={"354px"}
          >
            <Image
              borderRadius={["lg", "lg", "", ""]}
              // borderRadius={"lg"}
              src={
                "https://assets.tendercuts.in/product/P/R/63c42955-a41b-45ce-98e1-cb7510eeac4f.jpg"
              }
            ></Image>
            <Box p={"4"}>
              <Text fontWeight={"bold"}>
                {"Chicken Curry Cut (Skin Off)-1Kg"}
              </Text>
              <Text>{"32 - 36 pieces"}</Text>
              <Flex
                bg={"rgb(242,242,242)"}
                minH={"36px"}
                maxW={"60%"}
                align={"center"}
                justify="space-evenly"
              >
                <Image
                  w={"8"}
                  src="https://www.tendercuts.in/assets/images/weight.png"
                ></Image>
                <Text color={"black"}>Weight: 960 - 1000 Gms</Text>
              </Flex>
              <Flex
                align={"center"}
                direction={["column", "row"]}
                justify="space-between"
              >
                <Flex gap={"10"}>
                  <Text>
                    {" "}
                    MRP{" "}
                    <span>
                      {" "}
                      <s>&#x20b9; 299</s>{" "}
                    </span>{" "}
                  </Text>
  
                  <Text fontWeight={"bold"} color="black">
                    ELITE &#x20b9; 4
                  </Text>
                </Flex>
  
                {/* <TPFYButton /> */}
              </Flex>
            </Box>
          </Box>
      {/* 5 */}
      <Box
            _hover={{ transform: "scale(1.01)" }}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            borderRadius={["lg", "lg", "", ""]}
            minW={"377px"}
            minH={"354px"}
          >
            <Image
              borderRadius={["lg", "lg", "", ""]}
              // borderRadius={"lg"}
              src={
                "https://assets.tendercuts.in/product/P/R/63c42955-a41b-45ce-98e1-cb7510eeac4f.jpg"
              }
            ></Image>
            <Box p={"4"}>
              <Text fontWeight={"bold"}>
                {"Chicken Curry Cut (Skin Off)-1Kg"}
              </Text>
              <Text>{"32 - 36 pieces"}</Text>
              <Flex
                bg={"rgb(242,242,242)"}
                minH={"36px"}
                maxW={"60%"}
                align={"center"}
                justify="space-evenly"
              >
                <Image
                  w={"8"}
                  src="https://www.tendercuts.in/assets/images/weight.png"
                ></Image>
                <Text color={"black"}>Weight: 960 - 1000 Gms</Text>
              </Flex>
              <Flex
                align={"center"}
                direction={["column", "row"]}
                justify="space-between"
              >
                <Flex gap={"10"}>
                  <Text>
                    {" "}
                    MRP{" "}
                    <span>
                      {" "}
                      <s>&#x20b9; 299</s>{" "}
                    </span>{" "}
                  </Text>
  
                  <Text fontWeight={"bold"} color="black">
                    ELITE &#x20b9; 5
                  </Text>
                </Flex>
  
                {/* <TPFYButton /> */}
              </Flex>
            </Box>
          </Box>
      {/* 6 */}
      <Box
            _hover={{ transform: "scale(1.01)" }}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            borderRadius={["lg", "lg", "", ""]}
            minW={"377px"}
            minH={"354px"}
          >
            <Image
              borderRadius={["lg", "lg", "", ""]}
              // borderRadius={"lg"}
              src={
                "https://assets.tendercuts.in/product/P/R/63c42955-a41b-45ce-98e1-cb7510eeac4f.jpg"
              }
            ></Image>
            <Box p={"4"}>
              <Text fontWeight={"bold"}>
                {"Chicken Curry Cut (Skin Off)-1Kg"}
              </Text>
              <Text>{"32 - 36 pieces"}</Text>
              <Flex
                bg={"rgb(242,242,242)"}
                minH={"36px"}
                maxW={"60%"}
                align={"center"}
                justify="space-evenly"
              >
                <Image
                  w={"8"}
                  src="https://www.tendercuts.in/assets/images/weight.png"
                ></Image>
                <Text color={"black"}>Weight: 960 - 1000 Gms</Text>
              </Flex>
              <Flex
                align={"center"}
                direction={["column", "row"]}
                justify="space-between"
              >
                <Flex gap={"10"}>
                  <Text>
                    {" "}
                    MRP{" "}
                    <span>
                      {" "}
                      <s>&#x20b9; 299</s>{" "}
                    </span>{" "}
                  </Text>
  
                  <Text fontWeight={"bold"} color="black">
                    ELITE &#x20b9; 6
                  </Text>
                </Flex>
  
                {/* <TPFYButton /> */}
              </Flex>
            </Box>
          </Box>
      </Slider>
    );
  }