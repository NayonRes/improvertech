"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

import Image from "next/image";
const HomeSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const projectNameStyle = {
    color: "#fff",
    fontFamily: '"Playfair Display", serif',
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    zIndex: 2,
  };
  return (
    <Box
      className="slider-container"
      sx={{
        position: "relative",
        "& img": {
          width: "100%",
          maxHeight: {
            xs: "auto",
            sm: "auto",
            md: "Calc(100vh - 103px)",
            lg: "Calc(100vh - 103px)",
            xl: "Calc(100vh - 103px)",
          },
        },
      }}
    >
      <Typography
        sx={{
          ...projectNameStyle,
          fontSize: {
            xs: "28px",
            sm: "52px",
            md: "72px",
            lg: "90px",
            xl: "126px",
          },
          fontWeight: "bold",

          // color: "black", // Text color
          // mixBlendMode: "overlay", // Apply blend mode

          // backgroundColor: "transparent",
        }}
      >
        CHITRON INTERIOR
      </Typography>
      <Slider {...settings}>
        <Box className="image_contrainer">
          {/* <Image
            src="/slider-images/7.png"
            width={650}
            height={650}
            layout="responsive"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="chitron design"
          /> */}
          <img loading="lazy" src="/slider-images/7.webp" alt="chitron design" />
        </Box>
        <Box className="image_contrainer">
          <img loading="lazy" src="/slider-images/8.webp" alt="chitron design" />
        </Box>
        <Box className="image_contrainer">
          <img loading="lazy" src="/slider-images/9.webp" alt="chitron design" />
        </Box>
        <Box className="image_contrainer">
          <img
            loading="lazy"
            src="/slider-images/10.webp"
            alt="chitron design"
          />
        </Box>
        <Box className="image_contrainer">
          <img
            loading="lazy"
            src="/slider-images/11.webp"
            alt="chitron design"
          />
        </Box>
        <Box className="image_contrainer">
          <img
            loading="lazy"
            src="/slider-images/12.webp"
            alt="chitron design"
          />
        </Box>
        <Box className="image_contrainer">
          <img
            loading="lazy"
            src="/slider-images/13.webp"
            alt="chitron design"
          />
        </Box>
        <Box className="image_contrainer">
          <img
            loading="lazy"
            src="/slider-images/14.webp"
            alt="chitron design"
          />
        </Box>
        <Box className="image_contrainer">
          <img
            loading="lazy"
            src="/slider-images/15.webp"
            alt="chitron design"
          />
        </Box>
        <Box className="image_contrainer">
          <img
            loading="lazy"
            src="/slider-images/16.webp"
            alt="chitron design"
          />
        </Box>
        <Box className="image_contrainer">
          <img
            loading="lazy"
            src="/slider-images/17.webp"
            alt="chitron design"
          />
        </Box>
        <Box className="image_contrainer">
          <img
            loading="lazy"
            src="/slider-images/18.webp"
            alt="chitron design"
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default HomeSlider;
