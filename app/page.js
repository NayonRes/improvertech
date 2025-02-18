"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import styles from "./page.module.css";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Link from "next/link";
import HomeSlider from "./components/HomeSlider";
import ContactForm from "./components/ContactForm";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import EastIcon from "@mui/icons-material/East";
import ClientSilder from "./components/ClientSilder";
import ProjectsSlider from "./components/ProjectsSlider";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
export default function Home() {
  const theme = useTheme();
  const router = useRouter();
  const [name, setName] = useState("");
  const workOnlineCard = {
    background: theme.palette.background.default,
    boxSizing: "border-box",
    py: 2.75,
    px: 3.5,
    borderRadius: "10px",
    textAlign: "center",
    width: "194px",
    [theme.breakpoints.down("md")]: {
      width: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      py: 2,
      px: 3,
    },
  };

  const titleUnderline = {
    "&::before": {
      content: '""',
      position: "absolute",
      width: "50%",
      height: "4px",
      bottom: -10,
      // left: "50%",
      backgroundColor: theme.palette.border.main,
      // transition: "all 0.3s ease-in-out",
      // transform: "translateX(-50%)",
    },
  };

  const projectNameStyle = {
    color: "#fff",
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    zIndex: 2,

    fontSize: "1.75rem", //28px
    lineHeight: "1.75rem", // 28px
    fontWeight: 700,
    display: "block",
    fontFamily: '"Poppins", serif',
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.5rem", // Adjust for medium screens
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.125rem", // Adjust for medium screens
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25rem", // Adjust for medium screens
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem", // Adjust for medium screens
    },
  };

  const projectNameStyle2 = {
    fontSize: "1.3rem", //28px
    lineHeight: "1.5rem", // 28px
    fontWeight: 400,
    display: "block",
    fontFamily: '"Poppins", serif',
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.125rem", // Adjust for medium screens
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem", // Adjust for medium screens
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem", // Adjust for medium screens
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".825rem", // Adjust for medium screens
    },
  };
  const gotoDetails = (route) => {
    router.push(route);
    route;
  };
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.scrollTo({
  //       top: 0,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // }, []);
  return (
    <>
      {/* <Box id="hero_section" SX={{ maxWidth: "1920px" }}>
        <HomeSlider />
 
      </Box> */}
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "calc(100vh - 52px)" }}
        >
          <Box
            id="work_online"
            sx={
              {
                // py: {
                //   xs: 2,
                //   sm: 4,
                //   md: 4,
                //   lg: 8,
                //   xl: 12,
                // },
              }
            }
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "#fff",
                mb: 3,

                px: { xs: 4, sm: 0 },
              }}
            >
              Empowering Innovation Through
              <br />
              <b>Software Excellence</b>
            </Typography>
            <Typography
              variant="medium"
              color="text.light"
              sx={{
                textAlign: "center",
                fontWeight: 400,
                mb: { xs: 4, sm: 4, md: 4, lg: 5, xl: 5 },
                px: { xs: 4, sm: 0 },
              }}
            >
              Transforming Ideas into Seamless Web and Software Solutions for an
              <br /> Exceptional Cross-Platform Experience.
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                disableElevation
                sx={{
                  ml: 2,
                  px: 4,
                  py: 1.25,
                  fontSize: "15px",
                  fontWeight: "600 !important",
                  color: "#121316",
                }}
              >
                Our Services&nbsp;&nbsp;{" "}
                <EastIcon sx={{ fontSize: "18px", color: "#121316" }} />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Container>
      <Box
        id="services"
        sx={{ background: theme.palette.background.default, py: 7 }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 3,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 3,
            },
          }}
        >
          <Typography
            variant="medium"
            color="primary.main"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Our services
          </Typography>
          <Typography
            variant="h3"
            color="text.main"
            sx={{
              textAlign: "center",
              color: "#fff",
              mb: 2,
            }}
          >
            Your all-in-one digital solution hub
          </Typography>

          <Typography
            variant="medium"
            color="text.light"
            sx={{
              textAlign: "center",
              fontWeight: 400,
              mb: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3 },
              px: { xs: 4, sm: 0 },
              maxWidth: "70%",
              margin: "auto",
            }}
          >
            From planning and design to execution, we’re with you at every
            stage. Our comprehensive design and development services ensure your
            tech solutions not only meet your digital goals but also drive
            continuous growth and success
          </Typography>

          <img
            loading="lazy"
            src="/line.svg"
            style={{ margin: "auto ", display: "block" }}
          />

          <Box
            className="card_holder"
            sx={{
              mt: 6,
              mb: {
                xs: 2,
                sm: 4,
                md: 4,
                lg: 5.5,
                xl: 6.5,
              },
            }}
          >
            <Box className="three_part_card">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid>
                  <img loading="lazy" src="/test.svg" alt="" width="50px" />

                  <Typography
                    className="card_title"
                    variant="base"
                    sx={{ color: "#fff", mt: 3, mb: 2, transition: "0.5s" }}
                  >
                    Custom Software Development
                    {/* {item?.projectSize}sqf {item?.type} | {item?.location} */}
                  </Typography>
                  <Typography variant="medium" color="text.light">
                    Embracing a mobile-first philosophy, we specialize in
                    crafting cutting-edge mobile applications that redefine user
                    experiences across platforms. From concept to deployment,
                    our innovative solutions are designed to elevate your
                    business, ensuring seamless engagement and expanding your
                    reach in today's mobile-centric world.
                  </Typography>
                </Grid>
                {/* <Grid>
                  <Typography
                    variant="small"
                    color="text.light"
                    sx={{ mt: 3, textDecoration: "none", transition: ".5s" }}
                    component={Link}
                    href="#"
                  >
                    View Custom Software Development{" "}
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontSize: "16px",
                        position: "relative",
                        top: 5,
                        // transition: ".5s",
                      }}
                    />
                  </Typography>
                </Grid> */}
              </Grid>
            </Box>
            <Box className="three_part_card">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid>
                  <img loading="lazy" src="/test.svg" alt="" width="50px" />

                  <Typography
                    className="card_title"
                    variant="base"
                    sx={{ color: "#fff", mt: 3, mb: 2, transition: "0.5s" }}
                  >
                    DevOps Service
                  </Typography>
                  <Typography variant="medium" color="text.light">
                    Our DevOps services are designed to harmonize collaboration
                    between development and operations teams, streamlining
                    software delivery and deployment. By fostering seamless
                    workflows, we empower your organization to achieve faster,
                    more efficient, and reliable results.
                  </Typography>
                </Grid>
                {/* <Grid>
                  <Typography
                    variant="small"
                    color="text.light"
                    sx={{ mt: 3, textDecoration: "none", transition: ".5s" }}
                    component={Link}
                    href="#"
                  >
                    View DevOps Service{" "}
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontSize: "16px",
                        position: "relative",
                        top: 5,
                        // transition: ".5s",
                      }}
                    />
                  </Typography>
                </Grid> */}
              </Grid>
            </Box>
            <Box className="three_part_card">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid>
                  <img loading="lazy" src="/test.svg" alt="" width="50px" />

                  <Typography
                    className="card_title"
                    variant="base"
                    sx={{ color: "#fff", mt: 3, mb: 2, transition: "0.5s" }}
                  >
                    Web Application Development
                  </Typography>
                  <Typography variant="medium" color="text.light">
                    Transform your digital presence with stunning,
                    high-performance, and secure web apps designed to captivate
                    your clients, foster loyalty, and unlock new revenue
                    streams. Enjoy a seamless and consistent UI experience
                    across all platforms, tailored to elevate your brand and
                    deliver results.
                  </Typography>
                </Grid>
                {/* <Grid>
                  <Typography
                    variant="small"
                    color="text.light"
                    sx={{ mt: 3, textDecoration: "none", transition: ".5s" }}
                    component={Link}
                    href="#"
                  >
                    View Web Application Development{" "}
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontSize: "16px",
                        position: "relative",
                        top: 5,
                        // transition: ".5s",
                      }}
                    />
                  </Typography>
                </Grid> */}
              </Grid>
            </Box>
            <Box className="three_part_card">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid>
                  <img loading="lazy" src="/test.svg" alt="" width="50px" />

                  <Typography
                    className="card_title"
                    variant="base"
                    sx={{ color: "#fff", mt: 3, mb: 2, transition: "0.5s" }}
                  >
                    Mobile Application Development
                  </Typography>
                  <Typography variant="medium" color="text.light">
                    Guided by a mobile-first philosophy, we bring your ideas to
                    life with cutting-edge mobile applications designed for
                    performance and elegance across all platforms. Our mission
                    is to create seamless, engaging user experiences that
                    amplify your brand’s presence and unlock limitless potential
                    in today’s mobile-driven landscape.
                  </Typography>
                </Grid>
                {/* <Grid>
                  <Typography
                    variant="small"
                    color="text.light"
                    sx={{ mt: 3, textDecoration: "none", transition: ".5s" }}
                    component={Link}
                    href="#"
                  >
                    View Mobile Application Development{" "}
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontSize: "16px",
                        position: "relative",
                        top: 5,
                        // transition: ".5s",
                      }}
                    />
                  </Typography>
                </Grid> */}
              </Grid>
            </Box>
            <Box className="three_part_card">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid>
                  <img loading="lazy" src="/test.svg" alt="" width="50px" />

                  <Typography
                    className="card_title"
                    variant="base"
                    sx={{ color: "#fff", mt: 3, mb: 2, transition: "0.5s" }}
                  >
                    UI/UX Design
                  </Typography>
                  <Typography variant="medium" color="text.light">
                    Our team of creative UI/UX designers transforms ideas into
                    visually captivating, user-first interfaces that leave a
                    lasting impression. By seamlessly blending beauty and
                    functionality, we craft experiences that not only delight
                    users but also inspire engagement, driving adoption and
                    creating unforgettable digital journeys.
                  </Typography>
                </Grid>
                {/* <Grid>
                  <Typography
                    variant="small"
                    color="text.light"
                    sx={{ mt: 3, textDecoration: "none", transition: ".5s" }}
                    component={Link}
                    href="#"
                  >
                    View UI/UX Design{" "}
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontSize: "16px",
                        position: "relative",
                        top: 5,
                        // transition: ".5s",
                      }}
                    />
                  </Typography>
                </Grid> */}
              </Grid>
            </Box>
            <Box className="three_part_card">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid>
                  <img loading="lazy" src="/test.svg" alt="" width="50px" />

                  <Typography
                    className="card_title"
                    variant="base"
                    sx={{ color: "#fff", mt: 3, mb: 2, transition: "0.5s" }}
                  >
                    ⁠Product Design
                  </Typography>
                  <Typography variant="medium" color="text.light">
                    We integrate cutting-edge technologies like Cloud, AI, Web
                    Analytics, Cognitive Computing, and Machine Learning into
                    every phase of our software product engineering services.
                    This ensures innovative, future-ready solutions that drive
                    efficiency, scalability, and exceptional performance.
                  </Typography>
                </Grid>
                {/* <Grid>
                  <Typography
                    variant="small"
                    color="text.light"
                    sx={{ mt: 3, textDecoration: "none", transition: ".5s" }}
                    component={Link}
                    href="#"
                  >
                    View ⁠Product Design{" "}
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontSize: "16px",
                        position: "relative",
                        top: 5,
                        // transition: ".5s",
                      }}
                    />
                  </Typography>
                </Grid> */}
              </Grid>
            </Box>
            <Box className="three_part_card">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid>
                  <img loading="lazy" src="/test.svg" alt="" width="50px" />

                  <Typography
                    className="card_title"
                    variant="base"
                    sx={{ color: "#fff", mt: 3, mb: 2, transition: "0.5s" }}
                  >
                    Cloud Solution
                  </Typography>
                  <Typography variant="medium" color="text.light">
                    Quality and reliability are the foundation of our software
                    solutions. Our expert QA team employs meticulous testing
                    methodologies to identify and resolve issues, guaranteeing
                    the delivery of resilient, flawless applications that exceed
                    expectations.
                  </Typography>
                </Grid>
                {/* <Grid>
                  <Typography
                    variant="small"
                    color="text.light"
                    sx={{ mt: 3, textDecoration: "none", transition: ".5s" }}
                    component={Link}
                    href="#"
                  >
                    View Cloud Solution{" "}
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontSize: "16px",
                        position: "relative",
                        top: 5,
                        // transition: ".5s",
                      }}
                    />
                  </Typography>
                </Grid> */}
              </Grid>
            </Box>
            <Box className="three_part_card">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid>
                  <img loading="lazy" src="/test.svg" alt="" width="50px" />

                  <Typography
                    className="card_title"
                    variant="base"
                    sx={{ color: "#fff", mt: 3, mb: 2, transition: "0.5s" }}
                  >
                    Software Testing as Service
                  </Typography>
                  <Typography variant="medium" color="text.light">
                    Quality and reliability are the foundation of our software
                    solutions. Our expert QA team employs meticulous testing
                    methodologies to identify and resolve issues, guaranteeing
                    the delivery of resilient, flawless applications that exceed
                    expectations.
                  </Typography>
                </Grid>
                {/* <Grid>
                  <Typography
                    variant="small"
                    color="text.light"
                    sx={{ mt: 3, textDecoration: "none", transition: ".5s" }}
                    component={Link}
                    href="#"
                  >
                    View Quality Assurance{" "}
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontSize: "16px",
                        position: "relative",
                        top: 5,
                        // transition: ".5s",
                      }}
                    />
                  </Typography>
                </Grid> */}
              </Grid>
            </Box>
            <Box className="three_part_card">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid>
                  <img loading="lazy" src="/test.svg" alt="" width="50px" />

                  <Typography
                    className="card_title"
                    variant="base"
                    sx={{ color: "#fff", mt: 3, mb: 2, transition: "0.5s" }}
                  >
                    eCommerce Development
                  </Typography>
                  <Typography variant="medium" color="text.light">
                    We build custom eCommerce solutions that are scalable,
                    secure, and user-friendly, ensuring seamless experiences and
                    growth for your platform.
                  </Typography>
                </Grid>
                {/* <Grid>
                  <Typography
                    variant="small"
                    color="text.light"
                    sx={{ mt: 3, textDecoration: "none", transition: ".5s" }}
                    component={Link}
                    href="#"
                  >
                    View eCommerce Development{" "}
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontSize: "16px",
                        position: "relative",
                        top: 5,
                        // transition: ".5s",
                      }}
                    />
                  </Typography>
                </Grid> */}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ py: 7 }}>
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 3,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 3,
            },
          }}
        >
          <Typography
            variant="medium"
            color="primary.main"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Why us
          </Typography>
          <Typography
            variant="h3"
            color="text.main"
            sx={{
              textAlign: "center",
              color: "#fff",
              mb: 2,
            }}
          >
            ImproverTech brings your digital ideas to life,
            <br /> shaping them into innovative and impactful solutions!
          </Typography>

          <Typography
            variant="medium"
            color="text.light"
            sx={{
              textAlign: "center",
              fontWeight: 400,
              mb: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3 },
              px: { xs: 4, sm: 0 },
              maxWidth: "70%",
              margin: "auto",
            }}
          >
            We’ve helped over 800 startups, SMBs & large enterprises realize
            their online visions; we can do that for you too!
          </Typography>

          <img
            loading="lazy"
            src="/line.svg"
            style={{ margin: "auto ", display: "block" }}
          />

          <Box
            className="card_holder"
            sx={{
              mt: 6,
              mb: {
                xs: 2,
                sm: 4,
                md: 4,
                lg: 5.5,
                xl: 6.5,
              },
            }}
          >
            <Box className="four_part_card">
              <Typography
                variant="h3"
                className="number_Style"
                sx={{
                  color: "#4c4d54",

                  mb: 2,
                  transition: "0.5s",
                  fontWeight: 600,
                }}
              >
                01
              </Typography>
              <Box sx={{ position: "relative" }}>
                <Typography
                  variant="medium"
                  sx={{
                    color: "#fff",

                    mb: 1,
                    transition: "0.5s",
                    "&:before": {
                      content: '""',
                      width: "1px",
                      height: "15px",
                      position: "absolute",
                      top: "5px",
                      left: "-15px",
                      backgroundColor: "#00ffa3",
                    },
                  }}
                >
                  Skilled IT Professionals
                </Typography>
              </Box>
              <Typography variant="medium" color="text.light">
                Our team consists of seasoned product engineers, creative web
                and app designers and developers, insightful business analysts,
                and a wide array of specialists, all committed to driving
                success and innovation for your projects
              </Typography>
            </Box>

            <Box className="four_part_card">
              <Typography
                variant="h3"
                className="number_Style"
                sx={{
                  color: "#4c4d54",

                  mb: 2,
                  transition: "0.5s",
                  fontWeight: 600,
                }}
              >
                02
              </Typography>
              <Box sx={{ position: "relative" }}>
                <Typography
                  variant="medium"
                  sx={{
                    color: "#fff",

                    mb: 1,
                    transition: "0.5s",
                    "&:before": {
                      content: '""',
                      width: "1px",
                      height: "15px",
                      position: "absolute",
                      top: "5px",
                      left: "-15px",
                      backgroundColor: "#00ffa3",
                    },
                  }}
                >
                  Customer-Driven Philosophy
                </Typography>
              </Box>
              <Typography variant="medium" color="text.light">
                We are driven by a commitment to our valued clients and
                partners, believing that your success is the key to our own.
                Together, we create pathways to mutual growth and achievement
              </Typography>
            </Box>
            <Box className="four_part_card">
              <Typography
                variant="h3"
                className="number_Style"
                sx={{
                  color: "#4c4d54",

                  mb: 2,
                  transition: "0.5s",
                  fontWeight: 600,
                }}
              >
                03
              </Typography>
              <Box sx={{ position: "relative" }}>
                <Typography
                  variant="medium"
                  sx={{
                    color: "#fff",

                    mb: 1,
                    transition: "0.5s",
                    "&:before": {
                      content: '""',
                      width: "1px",
                      height: "15px",
                      position: "absolute",
                      top: "5px",
                      left: "-15px",
                      backgroundColor: "#00ffa3",
                    },
                  }}
                >
                  Transparency in Action
                </Typography>
              </Box>
              <Typography variant="medium" color="text.light">
                Every step we take in your project is meticulously defined,
                carefully planned, and transparently shared with you, ensuring
                seamless and effective communication throughout the process
              </Typography>
            </Box>
            <Box className="four_part_card">
              <Typography
                variant="h3"
                className="number_Style"
                sx={{
                  color: "#4c4d54",

                  mb: 2,
                  transition: "0.5s",
                  fontWeight: 600,
                }}
              >
                04
              </Typography>
              <Box sx={{ position: "relative" }}>
                <Typography
                  variant="medium"
                  sx={{
                    color: "#fff",

                    mb: 1,
                    transition: "0.5s",
                    "&:before": {
                      content: '""',
                      width: "1px",
                      height: "15px",
                      position: "absolute",
                      top: "5px",
                      left: "-15px",
                      backgroundColor: "#00ffa3",
                    },
                  }}
                >
                  Customer Contentment
                </Typography>
              </Box>
              <Typography variant="medium" color="text.light">
                Our clients are the heart of our success, and we’ve earned our
                reputation by consistently going above and beyond to meet their
                needs and exceed expectations
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        id="services"
        sx={{ background: theme.palette.background.default, py: 7 }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 3,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 3,
            },
          }}
        >
          <Typography
            variant="medium"
            color="primary.main"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Our specialty
          </Typography>
          <Typography
            variant="h3"
            color="text.main"
            sx={{
              textAlign: "center",
              color: "#fff",
              mb: 2,
            }}
          >
            Industries we <b>specialize in</b>
          </Typography>

          <Typography
            variant="medium"
            color="text.light"
            sx={{
              textAlign: "center",
              fontWeight: 400,
              mb: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3 },
              px: { xs: 4, sm: 0 },
              maxWidth: "70%",
              margin: "auto",
            }}
          >
            We’ve worked on so many different sectors over the years but our
            expertise lies in a selected few mainly because of repeat clients
            from those areas
          </Typography>

          <img
            loading="lazy"
            src="/line.svg"
            style={{ margin: "auto", display: "block" }}
          />

          <Grid container direction="row" spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/Healthcare.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Healthcare
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/eCommerce.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                eCommerce
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/Education.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Education
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/Banking.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Banking
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/Healthcare.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Fintech
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/Healthcare.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                ERP + POS
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/Sports.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Sports
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/Food-Restaurants.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Food & Restaurant
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/Travel-1.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Travel
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/Entertainment.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Entertainment 
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/Transportation.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Transport
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2} className="tech_logos">
              <img
                loading="lazy"
                src="/Lifestyle.svg"
                alt=""
                style={{ display: "block", margin: "auto", transition: ".2s" }}
                className="zoom_effect_icon"
              />
              <Typography
                variant="small"
                color="#fff"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                Lifestyle
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 7 }}>
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 3,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 3,
            },
          }}
        >
          <Typography
            variant="medium"
            color="primary.main"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Technologies we leverage
          </Typography>
          <Typography
            variant="h3"
            color="text.main"
            sx={{
              textAlign: "center",
              color: "#fff",
              mb: 2,
            }}
          >
            Get access to{" "}
            <b>
              industry-leading <br />
              tech solutions
            </b>
          </Typography>

          <Typography
            variant="medium"
            color="text.light"
            sx={{
              textAlign: "center",
              fontWeight: 400,
              mb: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3 },
              px: { xs: 4, sm: 0 },
              maxWidth: "70%",
              margin: "auto",
            }}
          >
            The development tools and technologies we use have a large impact on
            the project outcome, hence we choose only the best resources for the
            best results
          </Typography>

          <img
            loading="lazy"
            src="/line.svg"
            style={{ margin: "auto ", display: "block" }}
          />

          <Grid
            container
            alignItems="center"
            className="tech_card"
            sx={{ borderLeft: "5px solid #ffb156", mt: 8 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={3}
              sx={{ borderRight: "2px solid rgba(76, 77, 84, 0.2)" }}
            >
              <Typography
                variant="medium"
                color="#fff"
                sx={{
                  fontWeight: 400,
                  ml: 2,
                }}
              >
                Product Design
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <Grid container>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/figma.png"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        transition: ".2s",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Figma
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/adobe_xd.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Adobe XD
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/sketch.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Sketch
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/adobe_photoshop.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Photoshop
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/zeplin.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Zeplin
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/illustrator.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Illustrator
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            className="tech_card"
            sx={{ borderLeft: "5px solid #4991ff", mt: 3 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={3}
              sx={{ borderRight: "2px solid rgba(76, 77, 84, 0.2)" }}
            >
              <Typography
                variant="medium"
                color="#fff"
                sx={{
                  fontWeight: 400,
                  ml: 2,
                }}
              >
                Frontend Development
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <Grid container>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/react.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        transition: ".2s",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    ReactJS
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/nextjs.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Nextjs
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/redux.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Redux
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/mui.png"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Mateiral UI
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/tailwind.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Tailwind
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/bootstrap.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Bootstrap
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/html_5.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    HTML5
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/css3.png"
                      alt=""
                      className="zoom_effect_icon"
                      width="26px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    CSS3
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            className="tech_card"
            sx={{ borderLeft: "5px solid #ff317b", mt: 3 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={3}
              sx={{ borderRight: "2px solid rgba(76, 77, 84, 0.2)" }}
            >
              <Typography
                variant="medium"
                color="#fff"
                sx={{
                  fontWeight: 400,
                  ml: 2,
                }}
              >
                Backend Development
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <Grid container>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/php.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        transition: ".2s",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    PHP
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/laravel.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Laravel
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/java.png"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Java
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/Golang.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Golang
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/python.png"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Python
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/Dotnet.png"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    .net
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/CSharpe.png"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    c#
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/Expressjs.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="26px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Express.js
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            className="tech_card"
            sx={{ borderLeft: "5px solid #00ffa3", mt: 3 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={3}
              sx={{ borderRight: "2px solid rgba(76, 77, 84, 0.2)" }}
            >
              <Typography
                variant="medium"
                color="#fff"
                sx={{
                  fontWeight: 400,
                  ml: 2,
                }}
              >
                ⁠Mobile Development
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <Grid container>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/ios.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        transition: ".2s",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    iOS
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/android.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Android
                  </Typography>
                </Grid>

                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/swift.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Swift
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/Kotlin.png"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Kotlin
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/Flutter.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Flutter
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/java.png"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Java
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "95px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/react.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    React Native
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            className="tech_card"
            sx={{ borderLeft: "5px solid #7879f1", mt: 3 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={3}
              sx={{ borderRight: "2px solid rgba(76, 77, 84, 0.2)" }}
            >
              <Typography
                variant="medium"
                color="#fff"
                sx={{
                  fontWeight: 400,
                  ml: 2,
                }}
              >
                Database
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <Grid container>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/database.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        transition: ".2s",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Database
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/postgres.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Postgres
                  </Typography>
                </Grid>

                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/mongo.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    MongoDB
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/sql.svg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    SQL Server
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            className="tech_card"
            sx={{ borderLeft: "5px solid #f178de", mt: 3 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={3}
              sx={{ borderRight: "2px solid rgba(76, 77, 84, 0.2)" }}
            >
              <Typography
                variant="medium"
                color="#fff"
                sx={{
                  fontWeight: 400,
                  ml: 2,
                }}
              >
                Devops
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <Grid container>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/aws2.jpg"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        transition: ".2s",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    AWS
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/azure.webp"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Azure
                  </Typography>
                </Grid>

                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/docker.webp"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Docker
                  </Typography>
                </Grid>
                <Grid
                  className="tech_logos"
                  item
                  sx={{ width: "85px", padding: "5px" }}
                >
                  <Box className="tech_logo_holder">
                    <img
                      loading="lazy"
                      src="/Kubernetes.png"
                      alt=""
                      className="zoom_effect_icon"
                      width="34px"
                      style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                        transition: ".2s",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="small"
                    color="#fff"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Kubernetes
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        id="services"
        sx={{ background: theme.palette.background.default, py: 7 }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: {
              xs: 3,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 3,
            },
          }}
        >
          <Typography
            variant="medium"
            color="primary.main"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Portfolio
          </Typography>
          <Typography
            variant="h3"
            color="text.main"
            sx={{
              textAlign: "center",
              color: "#fff",
              mb: 2,
            }}
          >
            Some <b>projects</b> we’ve done
          </Typography>

          <Typography
            variant="medium"
            color="text.light"
            sx={{
              textAlign: "center",
              fontWeight: 400,
              mb: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3 },
              px: { xs: 4, sm: 0 },
              maxWidth: "70%",
              margin: "auto",
            }}
          >
            We believe in providing transparent process that we follow for
            exponential results and building stronger bonds with our clients
          </Typography>

          <img
            loading="lazy"
            src="/line.svg"
            style={{ margin: "auto", display: "block" }}
          />
        </Container>
        <Box sx={{ mt: 8, maxWidth: "1920px", px: 12 }}>
          <ProjectsSlider />
        </Box>
      </Box>
      {/* <Box
        id="client-stories"
        sx={{ background: theme.palette.background.default, py: 7 }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: {
              xs: 3,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 3,
            },
          }}
        >
          <Typography
            variant="medium"
            color="primary.main"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Client stories
          </Typography>
          <Typography
            variant="h3"
            color="text.main"
            sx={{
              textAlign: "center",
              color: "#fff",
              mb: 2,
            }}
          >
            Our <b>clients</b> say it <b>best!</b>
          </Typography>

          <Typography
            variant="medium"
            color="text.light"
            sx={{
              textAlign: "center",
              fontWeight: 400,
              mb: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3 },
              px: { xs: 4, sm: 0 },
              maxWidth: "70%",
              margin: "auto",
            }}
          >
            Learn how we served our clients beyond their expectations,
            strengthened our relationships, and succeed together for the greater
            good!
          </Typography>

          <img
            loading="lazy"
            src="/line.svg"
            style={{ margin: "auto", display: "block" }}
          />
        </Container>
        <Box sx={{ mt: 8, maxWidth: "1920px", px: 12 }}>
          <ClientSilder />
        </Box>
      </Box> */}
    </>
  );
}
