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
const ClientSilder = ({ images, imageSet }) => {
  console.log("images", images);

  // const [nav1, setNav1] = useState(null);
  // const [nav2, setNav2] = useState(null);
  // let sliderRef1 = useRef(null);
  // let sliderRef2 = useRef(null);

  // useEffect(() => {
  //   setNav1(sliderRef1);
  //   setNav2(sliderRef2);
  // }, []);

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block" }}
  //       onClick={onClick}
  //     >
  //       {/* <IconButton
  //         sx={{
  //           background: "rgba(240, 240, 240, 0.6)", // Lightly transparent gray background
  //           "&:hover": { background: "rgba(240, 240, 240, 0.7)" }, // Full opacity on hover
  //         }}
  //       >
  //         <ArrowForwardIosRoundedIcon sx={{ fontSize: "50px" }} />
  //       </IconButton> */}
  //     </div>
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     >
  //       {/* <IconButton
  //         sx={{
  //           background: "rgba(240, 240, 240, 0.6)", // Lightly transparent gray background
  //           "&:hover": { background: "rgba(240, 240, 240, 0.7)" }, // Full opacity on hover
  //         }}
  //       >
  //         <ArrowBackIosRoundedIcon
  //           sx={{
  //             fontSize: {
  //               sm: "50px",
  //               sm: "50px",
  //               md: "50px",
  //               lg: "40px",
  //               xl: "50px",
  //             },
  //           }}
  //         />
  //       </IconButton> */}
  //     </div>
  //   );
  // }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
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
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
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
    <Box className="my_slider">
      <Slider {...settings}>
        {[...Array(10).keys()]?.map((item, i) => (
          <Box sx={{ px: 2 }}>
            <Box className="card_style">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid>
                  <img
                    loading="lazy"
                    src="https://www.getwebinc.com/wp-content/uploads/2022/11/outplay.svg"
                    alt=""
                    width="160px"
                  />

                  <Typography
                    variant="medium"
                    color="text.light"
                    sx={{ mt: 2 }}
                  >
                    I’d like to thank Getweb for your wonderful solutions. I
                    personally don’t have much tech know-hows of the software
                    development process, but that didn’t stop me from putting my
                    thoughts and ideas into my app with the help of Getweb’s
                    professional expertise. With this agency, I always feel I’m
                    working with a trusted partner who knows what to do before I
                    even spell it out, and I’m confident that you’ll feel the
                    same too.
                  </Typography>
                </Grid>
                <Grid>
                  {/* <Typography
                    variant="small"
                    color="text.light"
                    sx={{ mt: 3, textDecoration: "none", transition: ".5s" }}
                    component={Link}
                    href="#"
                  >
                    View Ideation and evaluation{" "}
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontSize: "16px",
                        position: "relative",
                        top: 5,
                        // transition: ".5s",
                      }}
                    />
                  </Typography> */}
                </Grid>
              </Grid>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ClientSilder;
