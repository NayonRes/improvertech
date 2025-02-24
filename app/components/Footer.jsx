"use client";
import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import PersonIcon from "@mui/icons-material/Person";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: {
          xs: 4,
          sm: 4,
          md: 4,
          lg: 8,
          xl: 12,
        },
        background: "#191a1d",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }} sx={{ mb: 3 }}>
          <Grid item md={4}>
            <Typography
              variant="small"
              sx={{
                color: "#8d8f98",
                fontWeight: 500,
              }}
            >
              Want to collaborate?
            </Typography>
            <Typography
              variant="base"
              sx={{
                color: "#00ffa3",
                fontWeight: 500,
                textDecoration: "none",
              }}
              // component={Link}
              // href="/"
            >
              <a
                href="mailto:info.improvertech@gmail.com"
                style={{ textDecoration: "none", color: "#00ffa3" }}
              >
                info.improvertech@gmail.com{" "}
              </a>
            </Typography>
          </Grid>
          <Grid item md={4}>
            {/* <Typography
              variant="small"
              sx={{
                color: "#8d8f98",
                fontWeight: 500,
              }}
            >
              Want to join us?
            </Typography>
            <Typography
              variant="base"
              sx={{
                color: "#00ffa3",
                fontWeight: 500,
                textDecoration: "none",
              }}
              // component={Link}
              // href="/"
            >
              <a
                href="mailto:info.improvertech@gmail.com"
                style={{ textDecoration: "none", color: "#00ffa3" }}
              >
                info.improvertech@gmail.com{" "}
              </a>
            </Typography> */}
          </Grid>
          <Grid item md={4}>
            <Typography
              variant="small"
              sx={{
                color: "#8d8f98",
                fontWeight: 500,
              }}
            >
              Want to discuss with us?
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              onClick={() => setOpen(true)}
              sx={{
                mt: 2,
                px: 4,
                py: 1.25,
                fontSize: "20px",
                fontWeight: "500 !important",
              }}
            >
              Book a call now&nbsp;&nbsp; <EastIcon sx={{ fontSize: "18px" }} />
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ mb: 6, opacity: 0.2 }} />
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}>
          <Grid item md={4}>
            <Box
              item
              xs="auto"
              sx={{
                "& img": {
                  width: {
                    xs: "160px",
                    sm: "160px",
                    md: "200px",
                    lg: "200px",
                    xl: "200px",
                  },
                },
              }}
            >
              <Link href="/">
                <img src="/Logo.png" alt="improver tech logo" width="60px" />
              </Link>
            </Box>

            <Typography variant="base" sx={{ my: 3.5, color: "#F6F6F6" }}>
              Empowering innovation <br />
              through software excellence.
            </Typography>

            <Box>
              <a
                target="_blank"
                className="no_link_design"
                href="https://www.facebook.com/share/14twipJ9FJ/?mibextid=wwXIfr"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="zoom_effect"
                >
                  <path
                    d="M20 10.4331C20 4.91311 15.52 0.433105 10 0.433105C4.48 0.433105 0 4.91311 0 10.4331C0 15.2731 3.44 19.3031 8 20.2331V13.4331H6V10.4331H8V7.93311C8 6.00311 9.57 4.43311 11.5 4.43311H14V7.43311H12C11.45 7.43311 11 7.88311 11 8.43311V10.4331H14V13.4331H11V20.3831C16.05 19.8831 20 15.6231 20 10.4331Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </a>
              &nbsp;&nbsp;&nbsp; &nbsp;
              <a className="no_link_design" href="#">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="zoom_effect"
                >
                  <mask
                    id="mask0_167_612"
                    // style="mask-type:luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="19"
                    height="20"
                  >
                    <path d="M0 0.908203H19V19.9082H0V0.908203Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_167_612)">
                    <path
                      d="M11.29 1.04822L10.72 0.968222C9.00693 0.720879 7.25885 0.965577 5.67954 1.67379C4.10023 2.382 2.75476 3.52454 1.8 4.96822C0.784155 6.3482 0.178585 7.98696 0.0529792 9.69591C-0.0726268 11.4049 0.286836 13.1145 1.09 14.6282C1.1722 14.7799 1.22337 14.9465 1.24054 15.1182C1.25771 15.2899 1.24053 15.4632 1.19 15.6282C0.78 17.0382 0.4 18.4582 0 19.9482L0.5 19.7982C1.85 19.4382 3.2 19.0782 4.55 18.7482C4.83494 18.689 5.13112 18.7169 5.4 18.8282C6.6112 19.4193 7.93482 19.7445 9.28205 19.782C10.6293 19.8195 11.9689 19.5683 13.2111 19.0455C14.4533 18.5226 15.5692 17.74 16.4841 16.7503C17.399 15.7607 18.0915 14.5867 18.5153 13.3074C18.9392 12.028 19.0844 10.6728 18.9414 9.33263C18.7983 7.99249 18.3703 6.69846 17.6859 5.53738C17.0016 4.37629 16.0769 3.37502 14.9737 2.60075C13.8706 1.82648 12.6146 1.29713 11.29 1.04822ZM13.81 14.1682C13.4466 14.4936 13.0034 14.7169 12.5256 14.8152C12.0478 14.9136 11.5524 14.8836 11.09 14.7282C8.99456 14.1382 7.17661 12.8235 5.96 11.0182C5.49529 10.3797 5.1217 9.6797 4.85 8.93822C4.70285 8.508 4.67632 8.04569 4.77327 7.60146C4.87023 7.15722 5.08698 6.74801 5.4 6.41822C5.55239 6.22374 5.75981 6.07965 5.99526 6.00474C6.2307 5.92982 6.48325 5.92755 6.72 5.99822C6.92 6.04822 7.06 6.33822 7.24 6.55822C7.386 6.97122 7.557 7.37522 7.75 7.76822C7.89642 7.96873 7.95758 8.21902 7.92011 8.46446C7.88263 8.7099 7.74958 8.93054 7.55 9.07822C7.1 9.47822 7.17 9.80822 7.49 10.2582C8.19745 11.2774 9.1736 12.0805 10.31 12.5782C10.63 12.7182 10.87 12.7482 11.08 12.4182C11.17 12.2882 11.29 12.1782 11.39 12.0582C11.97 11.3282 11.79 11.3382 12.71 11.7382C13.003 11.8612 13.287 12.0052 13.56 12.1682C13.83 12.3282 14.24 12.4982 14.3 12.7382C14.3577 12.9986 14.3425 13.2698 14.2561 13.5221C14.1696 13.7744 14.0153 13.998 13.81 14.1682Z"
                      fill="#F6F6F6"
                    />
                  </g>
                </svg>
              </a>
              &nbsp;&nbsp;&nbsp; &nbsp;
              <a className="no_link_design" href="#">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="zoom_effect"
                >
                  <path
                    d="M8 10.4082L13.19 7.4082L8 4.4082V10.4082ZM19.56 2.5782C19.69 3.0482 19.78 3.6782 19.84 4.4782C19.91 5.2782 19.94 5.9682 19.94 6.5682L20 7.4082C20 9.5982 19.84 11.2082 19.56 12.2382C19.31 13.1382 18.73 13.7182 17.83 13.9682C17.36 14.0982 16.5 14.1882 15.18 14.2482C13.88 14.3182 12.69 14.3482 11.59 14.3482L10 14.4082C5.81 14.4082 3.2 14.2482 2.17 13.9682C1.27 13.7182 0.69 13.1382 0.44 12.2382C0.31 11.7682 0.22 11.1382 0.16 10.3382C0.0900001 9.5382 0.0599999 8.8482 0.0599999 8.2482L0 7.4082C0 5.2182 0.16 3.6082 0.44 2.5782C0.69 1.6782 1.27 1.0982 2.17 0.848203C2.64 0.718203 3.5 0.628203 4.82 0.568203C6.12 0.498203 7.31 0.468203 8.41 0.468203L10 0.408203C14.19 0.408203 16.8 0.568203 17.83 0.848203C18.73 1.0982 19.31 1.6782 19.56 2.5782Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </a>
            </Box>
          </Grid>
          {/* <Grid item md={4}>
            <Typography
              variant="base"
              sx={{
                color: "#F6F6F6",
                fontWeight: 500,
                mb: { xs: 3, sm: 3, md: 6 },
              }}
            >
              Resources
            </Typography>
            <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Typography
                variant="medium"
                sx={{
                  color: "#F6F6F6",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
                component={Link}
                href="/"
              >
                Home
              </Typography>
            </Grid>
            <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Typography
                variant="medium"
                sx={{
                  color: "#F6F6F6",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
                component={Link}
                href="/portfolio"
              >
                Portfolio
              </Typography>
            </Grid>
            <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Typography
                variant="medium"
                sx={{
                  color: "#F6F6F6",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
                component={Link}
                href="/categories"
              >
                Categories
              </Typography>
            </Grid>
            <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Typography
                variant="medium"
                sx={{
                  color: "#F6F6F6",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
                component={Link}
                href="/about-us"
              >
                About us
              </Typography>
            </Grid>

            <Grid container alignItems="center">
              <Typography
                variant="medium"
                sx={{
                  color: "#F6F6F6",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
                component={Link}
                href="/contacts"
              >
                Contact
              </Typography>
            </Grid>
          </Grid> */}
          <Grid item md={4}>
            <Typography
              variant="base"
              sx={{
                color: "#F6F6F6",
                fontWeight: 500,
                mb: { xs: 3, sm: 3, md: 6 },
              }}
            >
              USA office
            </Typography>
            {/* <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Grid item xs="auto" sx={{ pr: 3 }}>
                <PersonIcon sx={{ color: "#F6F6F6" }} />
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  sx={{ color: "#F6F6F6", fontWeight: 500 }}
                >
                  Shihabur Rahman
                </Typography>
              </Grid>
            </Grid> */}
            <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Grid item xs="auto" sx={{ pr: 3 }}>
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.0775 24.6601C9.0775 24.6601 0 17.1692 0 9.7984C0 7.1997 1.05357 4.70744 2.92893 2.86988C4.8043 1.03233 7.34784 0 10 0C12.6522 0 15.1957 1.03233 17.0711 2.86988C18.9464 4.70744 20 7.1997 20 9.7984C20 17.1692 10.9225 24.6601 10.9225 24.6601C10.4175 25.1157 9.58625 25.1108 9.0775 24.6601ZM10 14.0852C10.5745 14.0852 11.1434 13.9743 11.6742 13.7589C12.205 13.5435 12.6873 13.2277 13.0936 12.8296C13.4998 12.4316 13.8221 11.959 14.042 11.4389C14.2618 10.9188 14.375 10.3613 14.375 9.7984C14.375 9.23545 14.2618 8.67801 14.042 8.15791C13.8221 7.63781 13.4998 7.16524 13.0936 6.76717C12.6873 6.36911 12.205 6.05334 11.6742 5.83791C11.1434 5.62248 10.5745 5.5116 10 5.5116C8.83968 5.5116 7.72688 5.96324 6.90641 6.76717C6.08594 7.5711 5.625 8.66147 5.625 9.7984C5.625 10.9353 6.08594 12.0257 6.90641 12.8296C7.72688 13.6336 8.83968 14.0852 10 14.0852Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  sx={{ color: "#F6F6F6", fontWeight: 500 }}
                >
                  412 winspear Avenue,city buffalo
                  <br />
                  New York City
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Grid item xs="auto" sx={{ pr: 3 }}>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33333 0.5C2.44928 0.5 1.60143 0.858213 0.976311 1.49584C0.351189 2.13346 0 2.99826 0 3.9V4.2417L10 9.7344L20 4.2434V3.9C20 2.99826 19.6488 2.13346 19.0237 1.49584C18.3986 0.858213 17.5507 0.5 16.6667 0.5H3.33333ZM20 6.1729L10.395 11.448C10.2736 11.5147 10.1379 11.5496 10 11.5496C9.86212 11.5496 9.7264 11.5147 9.605 11.448L0 6.1729V14.1C0 15.0017 0.351189 15.8665 0.976311 16.5042C1.60143 17.1418 2.44928 17.5 3.33333 17.5H16.6667C17.5507 17.5 18.3986 17.1418 19.0237 16.5042C19.6488 15.8665 20 15.0017 20 14.1V6.1729Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  sx={{ color: "#F6F6F6", fontWeight: 500 }}
                >
                  <a
                    className="no_link_design"
                    href="mailto:info.improvertech@gmail.com"
                  >
                    info.improvertech@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs="auto" sx={{ pr: 3 }}>
                <svg
                  width="19"
                  height="23"
                  viewBox="0 0 19 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.20536 0.982696L4.66698 0.604292C6.03495 0.250088 7.49793 0.823195 8.0842 1.94301L9.25133 4.17383C9.76025 5.14515 9.47796 6.28806 8.55377 6.99867L5.98474 8.97649C6.14307 10.1601 6.63344 11.325 7.45586 12.4712C8.23793 13.5799 9.28585 14.5505 10.5379 15.3258L13.6267 14.4898C14.7965 14.1741 16.0709 14.5382 16.7888 15.3929L18.4607 17.3839C19.2967 18.3783 19.1461 19.7489 18.1106 20.5915L17.0005 21.4946C15.8958 22.3933 14.3188 22.7201 12.8585 22.3504C9.41327 21.4792 6.24531 18.8931 3.35464 14.5921C0.460359 10.2837 -0.5611 6.6287 0.290267 3.62713C0.648546 2.36431 1.75867 1.3578 3.20807 0.982696"
                    fill="#F6F6F6"
                  />
                </svg>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  sx={{ color: "#F6F6F6", fontWeight: 500 }}
                >
                  <a className="no_link_design" href="tel:+17169512616">
                    +1 71 69 51 26 16
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Typography
              variant="base"
              sx={{
                color: "#F6F6F6",
                fontWeight: 500,
                mb: { xs: 3, sm: 3, md: 6 },
              }}
            >
              Bangladesh office
            </Typography>
            {/* <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Grid item xs="auto" sx={{ pr: 3 }}>
                <PersonIcon sx={{ color: "#F6F6F6" }} />
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  sx={{ color: "#F6F6F6", fontWeight: 500 }}
                >
                  Jamil Hasnine
                </Typography>
              </Grid>
            </Grid> */}
            <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Grid item xs="auto" sx={{ pr: 3 }}>
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.0775 24.6601C9.0775 24.6601 0 17.1692 0 9.7984C0 7.1997 1.05357 4.70744 2.92893 2.86988C4.8043 1.03233 7.34784 0 10 0C12.6522 0 15.1957 1.03233 17.0711 2.86988C18.9464 4.70744 20 7.1997 20 9.7984C20 17.1692 10.9225 24.6601 10.9225 24.6601C10.4175 25.1157 9.58625 25.1108 9.0775 24.6601ZM10 14.0852C10.5745 14.0852 11.1434 13.9743 11.6742 13.7589C12.205 13.5435 12.6873 13.2277 13.0936 12.8296C13.4998 12.4316 13.8221 11.959 14.042 11.4389C14.2618 10.9188 14.375 10.3613 14.375 9.7984C14.375 9.23545 14.2618 8.67801 14.042 8.15791C13.8221 7.63781 13.4998 7.16524 13.0936 6.76717C12.6873 6.36911 12.205 6.05334 11.6742 5.83791C11.1434 5.62248 10.5745 5.5116 10 5.5116C8.83968 5.5116 7.72688 5.96324 6.90641 6.76717C6.08594 7.5711 5.625 8.66147 5.625 9.7984C5.625 10.9353 6.08594 12.0257 6.90641 12.8296C7.72688 13.6336 8.83968 14.0852 10 14.0852Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  sx={{ color: "#F6F6F6", fontWeight: 500 }}
                >
                  66/3 barabag, mirpur 2, <br />
                  Dhaka, Bangladesh
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Grid item xs="auto" sx={{ pr: 3 }}>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33333 0.5C2.44928 0.5 1.60143 0.858213 0.976311 1.49584C0.351189 2.13346 0 2.99826 0 3.9V4.2417L10 9.7344L20 4.2434V3.9C20 2.99826 19.6488 2.13346 19.0237 1.49584C18.3986 0.858213 17.5507 0.5 16.6667 0.5H3.33333ZM20 6.1729L10.395 11.448C10.2736 11.5147 10.1379 11.5496 10 11.5496C9.86212 11.5496 9.7264 11.5147 9.605 11.448L0 6.1729V14.1C0 15.0017 0.351189 15.8665 0.976311 16.5042C1.60143 17.1418 2.44928 17.5 3.33333 17.5H16.6667C17.5507 17.5 18.3986 17.1418 19.0237 16.5042C19.6488 15.8665 20 15.0017 20 14.1V6.1729Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  sx={{ color: "#F6F6F6", fontWeight: 500 }}
                >
                  <a
                    className="no_link_design"
                    href="mailto:info.improvertech@gmail.com"
                  >
                    info.improvertech@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs="auto" sx={{ pr: 3 }}>
                <svg
                  width="19"
                  height="23"
                  viewBox="0 0 19 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.20536 0.982696L4.66698 0.604292C6.03495 0.250088 7.49793 0.823195 8.0842 1.94301L9.25133 4.17383C9.76025 5.14515 9.47796 6.28806 8.55377 6.99867L5.98474 8.97649C6.14307 10.1601 6.63344 11.325 7.45586 12.4712C8.23793 13.5799 9.28585 14.5505 10.5379 15.3258L13.6267 14.4898C14.7965 14.1741 16.0709 14.5382 16.7888 15.3929L18.4607 17.3839C19.2967 18.3783 19.1461 19.7489 18.1106 20.5915L17.0005 21.4946C15.8958 22.3933 14.3188 22.7201 12.8585 22.3504C9.41327 21.4792 6.24531 18.8931 3.35464 14.5921C0.460359 10.2837 -0.5611 6.6287 0.290267 3.62713C0.648546 2.36431 1.75867 1.3578 3.20807 0.982696"
                    fill="#F6F6F6"
                  />
                </svg>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  sx={{ color: "#F6F6F6", fontWeight: 500 }}
                >
                  <a className="no_link_design" href="tel:+8801913968201 ">
                    +880 19 13 96 82 01
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item md={4}>
            <Typography
              variant="base"
              sx={{
                color: "#F6F6F6",
                fontWeight: 500,
                mb: { xs: 3, sm: 3, md: 2 },
              }}
            >
              Latest Portfolio
            </Typography>
            <img src="./all_design.svg" alt="chitron design" width="100%" />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
