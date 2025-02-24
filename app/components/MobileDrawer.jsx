"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { IconButton } from "@mui/material";
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
const MobileDrawer = ({ fnActive, active }) => {
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 270 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        className="mobile_drawer_menu"
        sx={{
          "& .MuiListItemIcon-root": {
            paddingLeft: "13px",
          },
          "& .MuiTypography-root": {
            fontWeight: 600,
            color: "#8d8f98",
          },
        }}
      >
        <div style={{ position: "relative", padding: "3px 15px 0px" }}>
          <Link href="/">
            <img
              src="/Logo.png"
              alt="improver tech logo"
              style={{ width: "140px" }}
            />
          </Link>
          <IconButton
            id="closeButton"
            onClick={toggleDrawer(anchor, false)}
            style={{ position: "absolute", right: 7, top: 3 }}
          >
            <ArrowForwardIosIcon sx={{ color: "#fff" }} />
          </IconButton>
        </div>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              // handleChange("/");
              fnActive("home");
              document.getElementById("closeButton").click();
            }}
            sx={{
              "& .MuiTypography-root": {
                color: active === "home" ? "#00ffa3" : "",
              },
              "& svg path": {
                fill: active === "home" ? "#00ffa3" : "#8d8f98",
              },
            }}
          >
            <ListItemIcon>
              {/* <img src="/images/home.svg" alt="Home icon" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"
                  fill="#8d8f98"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              // handleChange("/");
              fnActive("services");
              document.getElementById("closeButton").click();
            }}
            sx={{
              "& .MuiTypography-root": {
                color: active === "services" ? "#00ffa3" : "",
              },
              "& svg path": {
                fill: active === "services" ? "#00ffa3" : "#8d8f98",
              },
            }}
          >
            <ListItemIcon>
              {/* <img src="/images/home.svg" alt="Home icon" /> */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"
                  fill="#8d8f98"
                />
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M14,10c0,1.019-.308,1.964-.832,2.754l-3.168-3.168V5.101c2.282,.463,4,2.48,4,4.899Zm-6-4.899c-2.282,.463-4,2.48-4,4.899,0,2.761,2.239,5,5,5,1.019,0,1.964-.308,2.754-.832l-3.754-3.754V5.101Zm8,1.899h4v-2h-4v2Zm0,4h4v-2h-4v2Zm0,4h4v-2h-4v2Zm-3,4v2h5v2H6v-2h5v-2H0V4C0,2.346,1.346,1,3,1H21c1.654,0,3,1.346,3,3v15H13Zm-11-2H22V4c0-.551-.448-1-1-1H3c-.552,0-1,.449-1,1v13Z" />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              // handleChange("/");
              fnActive("about");
              document.getElementById("closeButton").click();
            }}
            sx={{
              "& .MuiTypography-root": {
                color: active === "about" ? "#00ffa3" : "",
              },
              "& svg path": {
                fill: active === "about" ? "#00ffa3" : "#8d8f98",
              },
            }}
          >
            <ListItemIcon>
              {/* <img src="/images/home.svg" alt="Home icon" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  d="m11.5,6.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm-1.596,7.355c.472.287,1.088.136,1.374-.336.559-.922,1.627-1.519,2.722-1.519s2.163.596,2.722,1.519c.188.31.519.481.856.481.177,0,.355-.047.518-.145.472-.286.623-.901.337-1.374-.929-1.531-2.627-2.481-4.433-2.481s-3.504.951-4.433,2.481c-.286.473-.135,1.087.337,1.374Zm12.096-8.855v14c0,2.757-2.243,5-5,5H6c-2.206,0-4-1.794-4-4V5C2,2.243,4.243,0,7,0h10C19.757,0,22,2.243,22,5Zm-5-3h-9v14h12V5c0-1.654-1.346-3-3-3Zm-13,3v11.556c.591-.344,1.268-.556,2-.556V2.184c-1.161.414-2,1.514-2,2.816Zm16,14v-1H6c-1.103,0-2,.897-2,2s.897,2,2,2h11c1.654,0,3-1.346,3-3Z"
                  fill="#8d8f98"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              // handleChange("/");
              fnActive("our-specialty");
              document.getElementById("closeButton").click();
            }}
            sx={{
              "& .MuiTypography-root": {
                color: active === "our-specialty" ? "#00ffa3" : "",
              },
              "& svg path": {
                fill: active === "our-specialty" ? "#00ffa3" : "#8d8f98",
              },
            }}
          >
            <ListItemIcon>
              {/* <img src="/images/home.svg" alt="Home icon" /> */}
              <svg
                id="Layer_1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                width="20"
                height="20"
              >
                <path d="m24 5v16.834l-12 2.182-12-2.182v-16.834c-.045-1.817 1.757-3.319 3.537-2.951l1.375.25c-.311.595-.548 1.234-.702 1.905l-1.031-.187c-.765-.024-1.066.226-1.179.984v15.165l9 1.636v-5.802h2v5.802l9-1.636v-15.166c-.113-.758-.414-1.007-1.179-.984l-1.031.187c-.154-.671-.391-1.31-.702-1.905l1.375-.25c1.78-.369 3.581 1.135 3.537 2.952zm-17.89-.163c.441-2.324 2.287-4.213 4.594-4.7 1.811-.382 3.66.055 5.073 1.201s2.223 2.845 2.223 4.663c0 2.144-1.167 4.135-3.046 5.198-.276.156-.454.501-.454.88v1.922h-5v-1.902c0-.391-.183-.747-.467-.908-2.263-1.287-3.411-3.781-2.923-6.353zm3.911 4.614c.404.23.729.565.979.955v-3.684c-.595-.346-1-.984-1-1.723h4c0 .738-.405 1.376-1 1.723v3.677c.247-.385.569-.716.97-.943 1.252-.708 2.03-2.033 2.03-3.457 0-1.211-.541-2.345-1.483-3.109-.957-.776-2.164-1.06-3.4-.797-1.527.322-2.749 1.575-3.042 3.116-.326 1.719.438 3.384 1.946 4.242z" />
              </svg>
            </ListItemIcon>
            <ListItemText primary=" Our Specialty" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              // handleChange("technologies");
              fnActive("technologies");
              document.getElementById("closeButton").click();
            }}
            sx={{
              "& .MuiTypography-root": {
                color: active === "technologies" ? "#00ffa3" : "",
              },
              "& svg path": {
                fill: active === "technologies" ? "#00ffa3" : "#8d8f98",
              },
            }}
          >
            <ListItemIcon>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="m23,16V7c0-2.757-2.243-5-5-5H6C3.243,2,1,4.243,1,7v9c-.553,0-1,.447-1,1s.447,1,1,1h.051c.252,2.244,2.139,4,4.449,4h13c2.31,0,4.197-1.756,4.449-4h.051c.553,0,1-.447,1-1s-.447-1-1-1Zm-2-9v9h-3V7c0-1.13-.391-2.162-1.026-3h1.026c1.654,0,3,1.346,3,3Zm-15-3h7c1.654,0,3,1.346,3,3v9H3V7c0-1.654,1.346-3,3-3Zm12.5,16H5.5c-1.208,0-2.217-.86-2.449-2h17.899c-.232,1.14-1.242,2-2.449,2Z"
                  fill="#8d8f98"
                />
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="m14,13v-1c0-1.103-.897-2-2-2s-2,.897-2,2,.897,2,2,2v2c-2.206,0-4-1.794-4-4s1.794-4,4-4c1.86,0,3.429,1.277,3.873,3h2.037c-.06-.357-.152-.703-.273-1.037-.93-.171-1.637-.983-1.637-1.963,0-.144.017-.283.045-.418-1.068-.979-2.486-1.582-4.045-1.582s-2.977.603-4.045,1.582c.029.135.045.275.045.418,0,.98-.706,1.792-1.637,1.963-.231.637-.363,1.321-.363,2.037,0,2.762,1.878,5.088,4.423,5.783.366-.473.933-.783,1.577-.783s1.213.311,1.579.785c1.526-.423,2.803-1.443,3.587-2.786h2.246c-.963,2.369-3.035,4.157-5.563,4.761-.299.727-1.013,1.239-1.848,1.239-.829,0-1.54-.504-1.843-1.223-3.524-.836-6.157-4.001-6.157-7.777,0-.953.176-1.863.483-2.711-.297-.349-.483-.795-.483-1.289,0-1.105.895-2,2-2,.214,0,.417.043.611.105,1.424-1.303,3.312-2.105,5.389-2.105s3.966.802,5.389,2.105c.194-.062.396-.105.611-.105,1.105,0,2,.895,2,2,0,.494-.186.94-.483,1.289.198.546.339,1.117.413,1.711h2.02c-.503-5.046-4.773-9-9.95-9C6.486,2,2,6.486,2,12s4.486,10,10,10h0c4.469,0,8.261-2.948,9.539-7h2.066c-1.338,5.167-6.026,9-11.605,9,0,0,0,0,0,0-6.617,0-12-5.383-12-12S5.383,0,12,0s12,5.383,12,12v1h-10Z" />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Our Technologies" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              // handleChange("portfolio");
              fnActive("portfolio");
              document.getElementById("closeButton").click();
            }}
            sx={{
              "& .MuiTypography-root": {
                color: active === "portfolio" ? "#00ffa3" : "",
              },
              "& svg path": {
                fill: active === "portfolio" ? "#00ffa3" : "#8d8f98",
              },
            }}
          >
            <ListItemIcon>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="m23,16V7c0-2.757-2.243-5-5-5H6C3.243,2,1,4.243,1,7v9c-.553,0-1,.447-1,1s.447,1,1,1h.051c.252,2.244,2.139,4,4.449,4h13c2.31,0,4.197-1.756,4.449-4h.051c.553,0,1-.447,1-1s-.447-1-1-1Zm-2-9v9h-3V7c0-1.13-.391-2.162-1.026-3h1.026c1.654,0,3,1.346,3,3Zm-15-3h7c1.654,0,3,1.346,3,3v9H3V7c0-1.654,1.346-3,3-3Zm12.5,16H5.5c-1.208,0-2.217-.86-2.449-2h17.899c-.232,1.14-1.242,2-2.449,2Z"
                  fill="#8d8f98"
                />
              </svg> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M0,7v-2C0,2.24,2.24,0,5,0h2c.55,0,1,.45,1,1s-.45,1-1,1h-2c-1.65,0-3,1.35-3,3v2c0,.55-.45,1-1,1s-1-.45-1-1Zm7,15h-2c-1.65,0-3-1.35-3-3v-2c0-.55-.45-1-1-1s-1,.45-1,1v2c0,2.76,2.24,5,5,5h2c.55,0,1-.45,1-1s-.45-1-1-1Zm16-6c-.55,0-1,.45-1,1v2c0,1.65-1.35,3-3,3h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c2.76,0,5-2.24,5-5v-2c0-.55-.45-1-1-1ZM19,0h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c1.65,0,3,1.35,3,3v2c0,.55,.45,1,1,1s1-.45,1-1v-2c0-2.76-2.24-5-5-5Zm-3.1,16.14l-.9-2.73,2.17-1.77c.29-.25,.4-.65,.27-1.02s-.48-.6-.86-.6h-2.75l-.97-2.61c-.13-.36-.48-.6-.86-.6s-.73,.24-.86,.6l-.97,2.61h-2.75c-.38,0-.73,.24-.86,.6-.13,.36-.03,.77,.27,1.01l2.18,1.77-.86,2.76c-.12,.37,.01,.78,.32,1.01,.16,.12,.36,.18,.55,.18,.18,0,.36-.05,.51-.15l2.48-1.66,2.52,1.64c.33,.21,.75,.2,1.06-.04,.31-.24,.43-.64,.31-1.01Z" />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleChange("categories");
              document.getElementById("closeButton").click();
            }}
            style={{ background: pathname === "/categories" ? "#00ffa3" : "" }}
          >
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <g id="_01_align_center" data-name="01 align center">
                  <path
                    d="M13,2V9H2V3A1,1,0,0,1,3,2H13m2-2H3A3,3,0,0,0,0,3v8H15V0Z"
                    fill="#8d8f98"
                  />
                  <path
                    d="M21,2a1,1,0,0,1,1,1V9H19V2h2m0-2H17V11h7V3a3,3,0,0,0-3-3Z"
                    fill="#8d8f98"
                  />
                  <path
                    d="M5,15v7H3a1,1,0,0,1-1-1V15H5m2-2H0v8a3,3,0,0,0,3,3H7V13Z"
                    fill="#8d8f98"
                  />
                  <path
                    d="M22,15v6a1,1,0,0,1-1,1H11V15H22m2-2H9V24H21a3,3,0,0,0,3-3V13Z"
                    fill="#8d8f98"
                  />
                </g>
              </svg>
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItemButton>
        </ListItem> */}
        {/* <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleChange("/about-us");
              document.getElementById("closeButton").click();
            }}
            style={{ background: pathname === "/about-us" ? "#00ffa3" : "" }}
          >
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="m11.5,6.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm-1.596,7.355c.472.287,1.088.136,1.374-.336.559-.922,1.627-1.519,2.722-1.519s2.163.596,2.722,1.519c.188.31.519.481.856.481.177,0,.355-.047.518-.145.472-.286.623-.901.337-1.374-.929-1.531-2.627-2.481-4.433-2.481s-3.504.951-4.433,2.481c-.286.473-.135,1.087.337,1.374Zm12.096-8.855v14c0,2.757-2.243,5-5,5H6c-2.206,0-4-1.794-4-4V5C2,2.243,4.243,0,7,0h10C19.757,0,22,2.243,22,5Zm-5-3h-9v14h12V5c0-1.654-1.346-3-3-3Zm-13,3v11.556c.591-.344,1.268-.556,2-.556V2.184c-1.161.414-2,1.514-2,2.816Zm16,14v-1H6c-1.103,0-2,.897-2,2s.897,2,2,2h11c1.654,0,3-1.346,3-3Z"
                  fill="#8d8f98"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleChange("/contacts");
              document.getElementById("closeButton").click();
            }}
            style={{ background: pathname === "/contacts" ? "#00ffa3" : "" }}
          >
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="m8.5,9.5c0,.551.128,1.073.356,1.537-.49.628-.795,1.407-.836,2.256-.941-.988-1.52-2.324-1.52-3.792,0-3.411,3.122-6.107,6.659-5.381,2.082.428,3.769,2.105,4.213,4.184.134.628.159,1.243.091,1.831-.058.498-.495.866-.997.866h-.045c-.592,0-1.008-.527-.943-1.115.044-.395.021-.81-.08-1.233-.298-1.253-1.32-2.268-2.575-2.557-2.286-.525-4.324,1.207-4.324,3.405Zm-3.89-1.295c.274-1.593,1.053-3.045,2.261-4.178,1.529-1.433,3.531-2.141,5.63-2.011,3.953.256,7.044,3.719,6.998,7.865-.019,1.736-1.473,3.118-3.208,3.118h-2.406c-.244-.829-1.002-1.439-1.91-1.439-1.105,0-2,.895-2,2s.895,2,2,2c.538,0,1.025-.215,1.384-.561h2.932c2.819,0,5.168-2.245,5.208-5.063C21.573,4.715,17.651.345,12.63.021c-2.664-.173-5.191.732-7.126,2.548-1.499,1.405-2.496,3.265-2.855,5.266-.109.608.372,1.166.989,1.166.472,0,.893-.329.972-.795Zm7.39,8.795c-3.695,0-6.892,2.292-7.955,5.702-.165.527.13,1.088.657,1.253.526.159,1.087-.131,1.252-.657.351-1.127,1.052-2.089,1.952-2.825l1.401,2.101c.355.532,1.136.532,1.491,0l1.254-1.882,1.254,1.882c.355.532,1.136.532,1.491,0l1.363-2.044c.867.729,1.542,1.67,1.884,2.768.134.428.528.702.955.702.099,0,.198-.015.298-.045.527-.165.821-.726.657-1.253-1.063-3.41-4.26-5.702-7.955-5.702Z"
                  fill="#8d8f98"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Button
            variant="contained"
            disableElevation
            // color="#25316d"
            aria-label="open drawer"
            edge="start"
            color="primary"
            sx={{
              padding: "9px 9px !important",
              minWidth: "0px !important",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon sx={{ color: "#222" }} />
          </Button>
          <Drawer
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "#121316", // Change the background color
              },
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default MobileDrawer;
