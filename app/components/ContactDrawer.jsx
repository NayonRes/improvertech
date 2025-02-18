"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Grid, IconButton, Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

// import { useLocation, useNavigate } from "react-router-dom";
// import "../App.css";
// import "./Header.css";
const ContactDrawer = () => {
  // const location = useLocation();
  const pathname = usePathname();
  const router = useRouter();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // const navigate = useNavigate();
  const [openCollapse, setOpenCollapse] = useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleChange = (route) => {
    // console.log("id", id);
    // console.log("openCollapse", openCollapse);
    // if (id === openCollapse) {
    //   setOpenCollapse("");
    // } else {
    //   setOpenCollapse(id);
    // }

    router.push(route);
    route;
  };
  const list = (anchor) => (
    <Box
      sx={{
        height: "100vh",
        overflowY: "auto",
        width: anchor === "top" || anchor === "bottom" ? "auto" : "auto",
      }}
      role="presentation"

      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        className="mobile_drawer_menu"
        sx={{ px: 6, py: 6 }}
        // sx={{
        //   "& .MuiListItemIcon-root": {
        //     paddingLeft: "13px",
        //   },
        //   "& .MuiTypography-root": {
        //     fontWeight: 600,
        //     color: "#2E2E2E",
        //   },
        // }}
      >
        {/* <div style={{ position: "relative", padding: "3px 15px 0px" }}>
          <Link href="/">
            <img src="/Logo.svg" alt="chitron logo" style={{ width: "30px" }} />
          </Link>
          <IconButton
            id="closeButton"
            onClick={toggleDrawer(anchor, false)}
            style={{ position: "absolute", right: 7, top: 3 }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

        
        </div>
        <Divider /> */}
        <Box>
          <Typography
            variant="h4"
            color="#fff"
            sx={{
              color: "#fff",
              mb: 3,
            }}
          >
            What are you waiting for?
          </Typography>

          <Typography
            variant="base"
            color="primary.main"
            sx={{
              fontWeight: 600,
              mb: 2,
            }}
          >
            Let's talk
          </Typography>
        </Box>
        <Box
          sx={{
            height: "1px",
            mb: 2,
            background:
              "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .2) 48.44%, hsla(0, 0%, 100%, 0))",
          }}
        ></Box>
        <Grid container alignItems="center" sx={{ mb: 2 }}>
          <Grid item xs="auto" sx={{ pr: 3 }}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="49"
                height="49"
                rx="15.5"
                fill="url(#paint0_linear_13855_63233)"
                stroke="#202124"
              ></rect>
              <path
                d="M15.3999 16.6004C15.3999 15.9376 15.9372 15.4004 16.5999 15.4004H19.1834C19.77 15.4004 20.2706 15.8245 20.367 16.4031L21.2542 21.7262C21.3408 22.2458 21.0784 22.7612 20.6072 22.9968L18.7494 23.9256C20.089 27.2544 22.7459 29.9113 26.0747 31.2509L27.0035 29.3931C27.2391 28.9219 27.7545 28.6595 28.2741 28.7461L33.5972 29.6333C34.1758 29.7297 34.5999 30.2303 34.5999 30.8169V33.4004C34.5999 34.0631 34.0626 34.6004 33.3999 34.6004H30.9999C22.3843 34.6004 15.3999 27.616 15.3999 19.0004V16.6004Z"
                fill="#00FFA3"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_13855_63233"
                  x1="25"
                  y1="0"
                  x2="25"
                  y2="50"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#191A1D"></stop>
                  <stop offset="1" stop-color="#191A1D" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Grid>
          <Grid item xs="auto">
            <Typography
              variant="medium"
              sx={{ color: "#6b6e78", fontWeight: 500 }}
            >
              Phone number
            </Typography>
            <Typography
              sx={{ color: "#fff", fontWeight: 500, fontSize: "20px" }}
            >
              <a className="no_link_design" href="tel:+17169512616">
                +1 71 69 51 26 16
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            height: "1px",
            mb: 2,
            background:
              "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .2) 48.44%, hsla(0, 0%, 100%, 0))",
          }}
        ></Box>
        <Grid container alignItems="center" sx={{ mb: 2 }}>
          <Grid item xs="auto" sx={{ pr: 3 }}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="49"
                height="49"
                rx="15.5"
                fill="url(#paint0_linear_13855_63234)"
                stroke="#202124"
              ></rect>
              <path
                d="M15.4039 20.0601L24.9998 24.858L34.5959 20.06C34.5235 18.7996 33.4785 17.7998 32.1999 17.7998H17.7999C16.5213 17.7998 15.4763 18.7996 15.4039 20.0601Z"
                fill="#4991FF"
              ></path>
              <path
                d="M34.5999 22.7413L24.9998 27.5413L15.3999 22.7414V29.7998C15.3999 31.1253 16.4744 32.1998 17.7999 32.1998H32.1999C33.5254 32.1998 34.5999 31.1253 34.5999 29.7998V22.7413Z"
                fill="#4991FF"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_13855_63234"
                  x1="25"
                  y1="0"
                  x2="25"
                  y2="50"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#191A1D"></stop>
                  <stop offset="1" stop-color="#191A1D" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Grid>
          <Grid item xs="auto">
            <Typography
              variant="medium"
              sx={{ color: "#6b6e78", fontWeight: 500 }}
            >
              Email address
            </Typography>
            <Typography
              sx={{ color: "#fff", fontWeight: 500, fontSize: "20px" }}
            >
              info@imporvertech.com
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            height: "1px",
            mb: 2,
            background:
              "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .2) 48.44%, hsla(0, 0%, 100%, 0))",
          }}
        ></Box>
        <Grid container alignItems="center" sx={{ mb: 2 }}>
          <Grid item xs="auto" sx={{ pr: 3 }}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="49"
                height="49"
                rx="15.5"
                fill="url(#paint0_linear_13855_63235)"
                stroke="#202124"
              ></rect>
              <path
                d="M19.9321 33.8862L20.3077 34.074C21.8389 34.9847 23.5896 35.4608 25.3712 35.4509C30.8561 35.4384 35.3626 30.9214 35.3626 25.4369C35.3626 22.7863 34.3098 20.2409 32.4377 18.3645C30.5681 16.4688 28.0138 15.4004 25.3518 15.4004C19.8921 15.4004 15.3999 19.8929 15.3999 25.3518C15.3999 25.395 15.3999 25.4375 15.4005 25.4807C15.417 27.3367 15.9361 29.1535 16.9027 30.738L17.1531 31.1136L16.1516 34.8062L19.9321 33.8862V33.8862Z"
                fill="#00E676"
              ></path>
              <path
                d="M30.9854 27.9399L30.2969 27.627C30.2969 27.627 29.2954 27.1888 28.6695 26.8759C28.6069 26.8759 28.5443 26.8133 28.4817 26.8133C28.3274 26.8171 28.1766 26.8602 28.0436 26.9385C27.9103 27.0167 27.981 27.0011 27.1047 28.0025C27.0453 28.1195 26.9232 28.1928 26.7918 28.1902H26.7292C26.6351 28.1745 26.5479 28.1309 26.4788 28.0651L26.1659 27.9399C25.4944 27.6556 24.8795 27.2528 24.3507 26.7507C24.2256 26.6256 24.0378 26.5004 23.9126 26.3752C23.4492 25.9314 23.0491 25.4259 22.7234 24.8731L22.6608 24.7479C22.6064 24.6714 22.5642 24.587 22.5356 24.4976C22.5192 24.3892 22.5414 24.2784 22.5982 24.1847C22.6552 24.0908 22.8486 23.8717 23.0363 23.684C23.2241 23.4962 23.2241 23.371 23.3493 23.2458C23.4136 23.1565 23.4581 23.0544 23.4797 22.9465C23.5013 22.8385 23.4995 22.7272 23.4745 22.62C23.1828 21.8101 22.8485 21.0162 22.473 20.2417C22.3724 20.0851 22.2156 19.9731 22.0349 19.9287H21.3464C21.2212 19.9287 21.096 19.9913 20.9708 19.9913L20.9082 20.0539C20.7831 20.1165 20.6579 20.2417 20.5327 20.3042C20.4075 20.3668 20.3449 20.5546 20.2198 20.6798C19.7822 21.2327 19.5401 21.9149 19.5312 22.62C19.5382 23.1159 19.6446 23.6054 19.8442 24.0595L19.9068 24.2472C20.4688 25.4488 21.2548 26.5321 22.2227 27.4392L22.473 27.6895C22.6552 27.8404 22.8228 28.0081 22.9737 28.1902C24.2706 29.3187 25.811 30.1323 27.474 30.5686C27.6618 30.6312 27.9122 30.6312 28.0999 30.6937H28.7258C29.053 30.6776 29.373 30.5923 29.6647 30.4434C29.818 30.3739 29.9645 30.2901 30.1028 30.193L30.228 30.0679C30.3532 29.9427 30.4784 29.8801 30.6036 29.7549C30.7259 29.6459 30.8314 29.5194 30.9165 29.3794C31.0367 29.099 31.1212 28.8049 31.1669 28.5032V28.0651C31.1106 28.0145 31.0474 27.9724 30.9791 27.9399"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_13855_63235"
                  x1="25"
                  y1="0"
                  x2="25"
                  y2="50"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#191A1D"></stop>
                  <stop offset="1" stop-color="#191A1D" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Grid>
          <Grid item xs="auto">
            <Typography
              variant="medium"
              sx={{ color: "#6b6e78", fontWeight: 500 }}
            >
              WhatsApp
            </Typography>
            <Typography
              sx={{ color: "#fff", fontWeight: 500, fontSize: "20px" }}
            >
              <a
                className="no_link_design"
                href="https://wa.me/+17169512616"
                target="_blank"
              >
                +1 71 69 51 26 16
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            height: "1px",
            mb: 2,
            background:
              "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .2) 48.44%, hsla(0, 0%, 100%, 0))",
          }}
        ></Box>
        <Grid container alignItems="center" sx={{ mb: 2 }}>
          <Grid item xs="auto" sx={{ pr: 3 }}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="49"
                height="49"
                rx="15.5"
                fill="url(#paint0_linear_13855_63232)"
                stroke="#202124"
              ></rect>
              <g clip-path="url(#clip0_13855_63232)">
                <ellipse
                  cx="21.0714"
                  cy="20.7143"
                  rx="6.07143"
                  ry="5.71429"
                  fill="#184AA9"
                ></ellipse>
                <circle
                  cx="29.2866"
                  cy="29.2856"
                  r="5.71429"
                  fill="#2173F0"
                ></circle>
                <circle
                  cx="25.0006"
                  cy="25.0006"
                  r="9.28571"
                  fill="url(#paint1_linear_13855_63232)"
                ></circle>
                <path
                  d="M25.0483 20C26.5578 20 28.5706 20.7143 28.0674 21.6667C27.3796 22.9684 26.0547 21.6667 25.0483 21.6667C24.0419 21.6667 23.5387 22.1429 23.5387 22.619C23.5387 23.0952 23.7903 23.5714 25.0483 24.0476C26.3062 24.5238 28.5706 25.2381 28.5706 27.1429C28.5706 29.0476 26.8094 30 24.5451 30C22.5167 30 21.0228 29.0476 21.526 28.0952C22.1046 27 23.5387 28.3333 24.5451 28.3333C25.5515 28.3333 26.5578 28.0952 26.5578 27.1429C26.5578 26.1905 25.0483 25.9524 24.0419 25.4762C22.7839 24.8809 21.526 24.2857 21.526 22.619C21.526 20.9524 23.5387 20 25.0483 20Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_13855_63232"
                  x1="25"
                  y1="0"
                  x2="25"
                  y2="50"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#191A1D"></stop>
                  <stop offset="1" stop-color="#191A1D" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_13855_63232"
                  x1="17.7783"
                  y1="19.326"
                  x2="31.7069"
                  y2="30.9331"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#297AC0"></stop>
                  <stop offset="1" stop-color="#48B0F9"></stop>
                </linearGradient>
                <clipPath id="clip0_13855_63232">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(15 15)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </Grid>
          <Grid item xs="auto">
            <Typography
              variant="medium"
              sx={{ color: "#6b6e78", fontWeight: 500 }}
            >
              Skype
            </Typography>
            <Typography
              sx={{ color: "#fff", fontWeight: 500, fontSize: "20px" }}
            >
              improvertech
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            height: "1px",
            mb: 5,
            background:
              "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .2) 48.44%, hsla(0, 0%, 100%, 0))",
          }}
        ></Box>

        {/* <Box
          sx={{
            mb: 2,
            cursor: "pointer",
            boxSizing: "border-Box",
            padding: "20px",
            border: "1px solid #202124",
            borderRadius: "16px",
            background:
              "linear-gradient(180deg, #191a1d 0%, rgba(25, 26, 29, 0) 100%)Box",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs="auto" sx={{ pr: 3 }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3335 3.33301V8.33301"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M26.6665 3.33301V8.33301"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.8335 15.1504H34.1668"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M35 14.1663V27.2663C33.7833 25.883 32 24.9997 30 24.9997C26.3167 24.9997 23.3333 27.983 23.3333 31.6663C23.3333 32.9163 23.6833 34.0997 24.3 35.0997C24.65 35.6997 25.1 36.233 25.6167 36.6663H13.3333C7.5 36.6663 5 33.333 5 28.333V14.1663C5 9.16634 7.5 5.83301 13.3333 5.83301H26.6667C32.5 5.83301 35 9.16634 35 14.1663Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M19.9926 22.8333H20.0076"
                  stroke="url(#paint0_linear_13854_63203)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.8237 22.8333H13.8387"
                  stroke="url(#paint1_linear_13854_63203)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.8237 27.8333H13.8387"
                  stroke="url(#paint2_linear_13854_63203)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M36.6668 31.6667C36.6668 32.9167 36.3168 34.1 35.7002 35.1C34.5502 37.0333 32.4335 38.3333 30.0002 38.3333C28.3168 38.3333 26.7835 37.7167 25.6168 36.6667C25.1002 36.2333 24.6502 35.7 24.3002 35.1C23.6835 34.1 23.3335 32.9167 23.3335 31.6667C23.3335 27.9833 26.3168 25 30.0002 25C32.0002 25 33.7835 25.8833 35.0002 27.2666C36.0335 28.45 36.6668 29.9833 36.6668 31.6667Z"
                  stroke="url(#paint3_linear_13854_63203)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M27.4004 31.6666L29.0504 33.3165L32.6004 30.0332"
                  stroke="url(#paint4_linear_13854_63203)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_13854_63203"
                    x1="19.1685"
                    y1="21.9124"
                    x2="21.3676"
                    y2="22.5414"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFA3"></stop>
                    <stop
                      offset="1"
                      stop-color="#00FFA3"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_13854_63203"
                    x1="12.9995"
                    y1="21.9124"
                    x2="15.1987"
                    y2="22.5414"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFA3"></stop>
                    <stop
                      offset="1"
                      stop-color="#00FFA3"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_13854_63203"
                    x1="12.9995"
                    y1="26.9124"
                    x2="15.1987"
                    y2="27.5414"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFA3"></stop>
                    <stop
                      offset="1"
                      stop-color="#00FFA3"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_13854_63203"
                    x1="23.3335"
                    y1="24.2988"
                    x2="40.9567"
                    y2="29.35"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFA3"></stop>
                    <stop
                      offset="1"
                      stop-color="#00FFA3"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_13854_63203"
                    x1="27.4004"
                    y1="29.8605"
                    x2="33.5673"
                    y2="32.6599"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFA3"></stop>
                    <stop
                      offset="1"
                      stop-color="#00FFA3"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </Grid>
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#fff", fontWeight: 500, fontSize: "20px" }}
              >
                Schedule a call
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            mb: 2,
            cursor: "pointer",
            boxSizing: "border-Box",
            padding: "20px",
            border: "1px solid #202124",
            borderRadius: "16px",
            background:
              "linear-gradient(180deg, #191a1d 0%, rgba(25, 26, 29, 0) 100%)Box",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs="auto" sx={{ pr: 3 }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6167 14.7998H29.3667"
                  stroke="url(#paint0_linear_13854_63208)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.6333 14.7998L11.8833 16.0498L15.6333 12.2998"
                  stroke="url(#paint1_linear_13854_63208)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M20.6167 26.4668H29.3667"
                  stroke="url(#paint2_linear_13854_63208)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.6333 26.4668L11.8833 27.7168L15.6333 23.9668"
                  stroke="url(#paint3_linear_13854_63208)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.0002 36.6663H25.0002C33.3335 36.6663 36.6668 33.333 36.6668 24.9997V14.9997C36.6668 6.66634 33.3335 3.33301 25.0002 3.33301H15.0002C6.66683 3.33301 3.3335 6.66634 3.3335 14.9997V24.9997C3.3335 33.333 6.66683 36.6663 15.0002 36.6663Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_13854_63208"
                    x1="20.6167"
                    y1="14.7472"
                    x2="22.3336"
                    y2="19.053"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFA3"></stop>
                    <stop
                      offset="1"
                      stop-color="#00FFA3"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_13854_63208"
                    x1="10.6333"
                    y1="12.1026"
                    x2="16.8735"
                    y2="14.4874"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFA3"></stop>
                    <stop
                      offset="1"
                      stop-color="#00FFA3"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_13854_63208"
                    x1="20.6167"
                    y1="26.4142"
                    x2="22.3336"
                    y2="30.72"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFA3"></stop>
                    <stop
                      offset="1"
                      stop-color="#00FFA3"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_13854_63208"
                    x1="10.6333"
                    y1="23.7696"
                    x2="16.8735"
                    y2="26.1544"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00FFA3"></stop>
                    <stop
                      offset="1"
                      stop-color="#00FFA3"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </Grid>
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#fff", fontWeight: 500, fontSize: "20px" }}
              >
                Satrt a project
              </Typography>
            </Grid>
          </Grid>
        </Box> */}
      </List>
    </Box>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <span
            variant="contained"
            disableElevation
            // color="#25316d"
            aria-label="open drawer"
            edge="start"
            color="primary"
            style={{ cursor: "pointer" }}
            // sx={{
            //   padding: "9px 9px !important",
            //   minWidth: "0px !important",
            // }}
            onClick={toggleDrawer(anchor, true)}
          >
            <svg
              width="89"
              height="72"
              viewBox="0 0 89 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M89 36C89 43.7143 55.7927 72 35.9423 72C16.0919 72 0 55.8823 0 36C0 16.1177 16.0919 0 35.9423 0C55.7927 0 89 28.2857 89 36Z"
                fill="#00FFA3"
              />
              <path
                d="M12.97 40.29V31.575H11.05V42H17.89V40.29H12.97ZM19.9858 38.655H26.1208C26.1508 38.49 26.1658 38.19 26.1658 37.89C26.1658 35.865 24.6508 33.915 22.1608 33.915C19.8958 33.915 18.1108 35.76 18.1108 38.055C18.1108 40.41 19.7608 42.195 22.2808 42.195C24.2008 42.195 25.2508 41.385 25.8508 40.41L24.3508 39.45C23.9908 40.155 23.4208 40.56 22.3408 40.56C21.1558 40.56 20.2408 39.84 19.9858 38.655ZM19.9858 37.32C20.2258 36.105 21.0958 35.415 22.2058 35.415C23.3158 35.415 24.1258 36.135 24.3358 37.32H19.9858ZM30.8455 42H32.0905V40.335H31.2205C30.3655 40.335 29.9005 39.84 29.9005 38.925V35.73H32.0305V34.095H29.9605V32.04H28.1005V33.285C28.1005 33.825 27.8455 34.095 27.3205 34.095H26.6005V35.73H27.9805V39.135C27.9805 40.875 28.9555 42 30.8455 42ZM33.9027 31.185C33.2877 31.185 32.7777 31.665 32.7777 32.31C32.7777 32.925 33.1527 33.285 33.6927 33.36L32.8227 35.205H33.9027L34.7127 33.495C34.9227 33.03 35.0127 32.685 35.0127 32.34C35.0127 31.665 34.5177 31.185 33.9027 31.185ZM38.5773 42.18C40.5573 42.18 41.8473 41.25 41.8473 39.675C41.8473 36.78 37.5123 37.605 37.5123 36.165C37.5123 35.685 37.8873 35.385 38.5923 35.385C39.2523 35.385 39.7173 35.67 39.9273 36.27L41.5923 35.625C41.2623 34.545 40.1523 33.915 38.6223 33.915C36.7623 33.915 35.5623 34.815 35.5623 36.255C35.5623 38.97 39.8973 38.25 39.8973 39.81C39.8973 40.365 39.4173 40.68 38.6523 40.68C37.6923 40.68 37.0773 40.245 36.8523 39.51L35.1873 40.155C35.6223 41.49 36.8673 42.18 38.5773 42.18ZM53.3365 31.575H45.1315V33.285H48.2815V42H50.2015V33.285H53.3365V31.575ZM59.0167 34.095V35.22C58.4317 34.455 57.5467 34.035 56.4067 34.035C54.1417 34.035 52.4917 35.685 52.4917 38.055C52.4917 40.41 54.1417 42.18 56.4067 42.18C57.5467 42.18 58.4317 41.715 59.0167 40.935V42H60.7867V34.095H59.0167ZM56.6617 40.5C55.3567 40.5 54.3967 39.465 54.3967 38.055C54.3967 36.645 55.3567 35.61 56.6617 35.61C58.0267 35.61 58.9567 36.6 58.9567 38.055C58.9567 39.495 58.0267 40.5 56.6617 40.5ZM62.55 42H64.455V31.035H62.55V42ZM73.4118 42L69.9618 37.74L73.3518 34.095H71.1918L68.1318 37.29V31.035H66.2268V42H68.1318V38.28L71.3268 42H73.4118Z"
                fill="#121316"
              />
            </svg>
          </span>

          <Drawer
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 420,
                backgroundColor: "#121316", // Change the background color
                overflowY: "inherit",

                // Optional: Set text color
              },
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{
                cursor: "pointer",
                width: "100px",
                // background: "red",
                position: "relative",
                top: "47%",
                transform: "translateY(-50%)",
                left: "-100px",
                height: "0px",
              }}
              onClick={toggleDrawer(anchor, false)}
            >
              <svg
                width="89"
                height="72"
                viewBox="0 0 89 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M89 36C89 43.7143 55.7927 72 35.9423 72C16.0919 72 0 55.8823 0 36C0 16.1177 16.0919 0 35.9423 0C55.7927 0 89 28.2857 89 36Z"
                  fill="#00FFA3"
                />
                <path
                  d="M45.707 30.707L44.293 29.293L39 34.586L33.707 29.293L32.293 30.707L37.586 36L32.293 41.293L33.707 42.707L39 37.414L44.293 42.707L45.707 41.293L40.414 36L45.707 30.707Z"
                  fill="#121316"
                />
              </svg>
            </Box>

            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default ContactDrawer;
