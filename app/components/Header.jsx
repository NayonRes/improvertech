"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";
import { usePathname } from "next/navigation";
import QuotationForm from "./QuotationForm";
import EastIcon from "@mui/icons-material/East";
import ContactDrawer from "./ContactDrawer";

const Header = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);

  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [active, setActive] = useState("home");
  const [reload, setReload] = useState(0);

  const buttonStyle = {
    textTransform: "none",
    fontSize: "16px",
    // fontFamily: '"Poppins", serif',
    px: 1.5,
    mx: 0.5,
    color: "#8D8F98",
    overflow: "hidden",
    fontWeight: 600,
    transition: "color 0.3s",
    position: "relative",
    borderRadius: "0px",
    "&:hover": {
      background: "none",
      color: "#fff",
    },

    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   width: "0",
    //   height: "2px",
    //   bottom: "0",
    //   left: "50%",
    //   backgroundColor: "#2E2E2E",
    //   transition: "all 0.3s ease-in-out",
    //   transform: "translateX(-50%)",
    // },
    // "&:hover::before": {
    //   width: "30%",
    // },
  };
  const activeStyle = {
    color: "#00ffa3",
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   width: "30%",
    //   height: "2px",
    //   bottom: "0",
    //   left: "50%",
    //   backgroundColor: "#000",
    //   transition: "all 0.3s ease-in-out",
    //   transform: "translateX(-50%)",
    // },
  };

  const activeProjects = () => {
    return pathname.includes("/portfolio");
    // /projects/
  };

  const fnActive = (id) => {
    console.log("id", id);

    // setActive(id);
    // var elmntToView1 = document.getElementById("menu");
    // elmntToView1.scrollIntoView({
    //   behavior: "smooth",
    // });

    const yOffset = -70;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    if (id === "Contact") {
      setTimeout(() => {
        setActive(id);
      }, 1500);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let lastId = active;
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      // console.log("scrollCheck", scrollCheck);
      let sectionId;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        // console.log("sectionTop", sectionTop, sectionTop-50);

        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        if (scrollCheck >= sectionTop && scrollCheck <= sectionBottom) {
          sectionId = section.getAttribute("id");
          if (lastId !== sectionId) {
            lastId = sectionId;
            setActive(sectionId);
            // console.log("sectionId", sectionId);
          }
        }
      });
    });

    // console.log("body", window.screen.availHeight);
  }, []);
  useEffect(() => {
    setReload(reload + 1);

    // ==================================================
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const navbarPosition = document.getElementById("navbar");
      let y = navbarPosition.offsetTop;
      if (y < 80) {
        navbarPosition.style.background = "rgba(0,0,0,0)";
        navbarPosition.style.backdropFilter = "blur(0px)";
        // box-shadow: 0 10px 15px rgba(25,25,25,0.1);
      } else if (y > 80) {
        navbarPosition.style.background = "rgba(247, 249, 249, 0.5)";
        navbarPosition.style.backdropFilter = "blur(40px)";
      }
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: 1 }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid
          item
          xs="auto"
          sx={{
            "& img": {
              width: {
                xs: "160px",
                sm: "160px",
                md: "160px",
                lg: "160px",
                xl: "160px",
              },
            },
          }}
        >
          <Link href="/">
            <img src="/Logo.png" alt="improver tech logo" width="60px" />
          </Link>
        </Grid>
        <Grid item xs="auto">
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <MobileDrawer open={open} setOpen={setOpen} />
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(active === "home" ? activeStyle : {}),
              }}
              onClick={() => fnActive("home")}
              // component={Link}
              // href="/"
            >
              Home
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(active === "services" ? activeStyle : {}),
              }}
              onClick={() => fnActive("services")}
              // component={Link}
              // href="/"
            >
              Services
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(active === "about" ? activeStyle : {}),
              }}
              onClick={() => fnActive("about")}
              // component={Link}
              // href="/portfolio"
            >
              About
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(active === "our-specialty" ? activeStyle : {}),
              }}
              onClick={() => fnActive("our-specialty")}
              // component={Link}
              // href="/portfolio"
            >
              Our Specialty
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(active === "technologies" ? activeStyle : {}),
              }}
              onClick={() => fnActive("technologies")}
              // component={Link}
              // href="/portfolio"
            >
              Our Technologies
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(active === "portfolio" ? activeStyle : {}),
              }}
              onClick={() => fnActive("portfolio")}
              // component={Link}
              // href="/portfolio"
            >
              Portfolio
            </Button>
            {/* <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(activeProjects() ? activeStyle : {}),
              }}
              // component={Link}
              // href="/portfolio"
            >
              Careers
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(activeProjects() ? activeStyle : {}),
              }}
              // component={Link}
              // href="/portfolio"
            >
              Blog
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(pathname === "/contacts" ? activeStyle : {}),
              }}
              component={Link}
              href="/contacts"
            >
              Contact
            </Button> */}

            {/* <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(pathname === "/categories" ? activeStyle : {}),
              }}
              component={Link}
              href="/categories"
            >
              Categories
            </Button> */}
            {/* <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(pathname === "/about-us" ? activeStyle : {}),
              }}
              // component={Link}
              // href="/about-us"
            >
              About us
            </Button> */}
            {/* <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(pathname === "/contacts" ? activeStyle : {}),
              }}
              component={Link}
              href="/contacts"
            >
              Contacts
            </Button> */}
          </Box>
        </Grid>
        <Grid
          item
          xs="auto"
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="secondary"
            disableElevation
            // onClick={() => setOpen(true)}
            sx={{
              ml: 2,
              px: 4,
              py: 0.75,
              fontSize: "14px",
              fontWeight: "500 !important",
            }}
          >
            Book a call now&nbsp;&nbsp; <EastIcon sx={{ fontSize: "18px" }} />
          </Button>
        </Grid>
      </Grid>
      <QuotationForm open={open} setOpen={setOpen} />
    </Container>
  );
};

export default Header;
