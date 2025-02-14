"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Link from "next/link";
const ProjectsSlider = ({ images, imageSet }) => {
  console.log("images", images);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  // const settings = {
  //   dots: false,
  //   // fade: true,
  //   infinite: true,
  //   // autoplay: true,
  //   speed: 4000,
  //   // autoplaySpeed: 4000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   pauseOnHover: false,
  //   waitForAnimate: false,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1
    slidesToShow: 3,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1500,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1300,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <Box
      className=""
      sx={{
        "& img": {
          width: "100%",
          padding: "5px",
          // border: "5px solid rgba(0,0,0,0)",
        },
      }}
    >
      <Slider {...settings}>
        <Box>
          <Box sx={{}}>
            <img
              src="/project-images/project1.png"
              alt="improver tech project"
            />

            <img
              src="/project-images/project2.png"
              alt="improver tech project"
            />
          </Box>
        </Box>
        <Box>
          <img src="/project-images/project3.png" alt="improver tech project" />

          <img src="/project-images/project4.png" alt="improver tech project" />
        </Box>
        <Box>
          <img src="/project-images/project5.png" alt="improver tech project" />

          <img src="/project-images/project6.png" alt="improver tech project" />
        </Box>
        <Box>
          <img src="/project-images/project7.png" alt="improver tech project" />

          <img src="/project-images/project8.png" alt="improver tech project" />
        </Box>
        <Box>
          <img src="/project-images/project9.png" alt="improver tech project" />
          <img
            src="/project-images/project10.png"
            alt="improver tech project"
          />{" "}
        </Box>
      </Slider>
    </Box>
  );
};

export default ProjectsSlider;
