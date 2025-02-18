"use client";
import React, { useEffect } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";
import { usePathname } from "next/navigation";
import QuotationForm from "./QuotationForm";
import EastIcon from "@mui/icons-material/East";
import ContactDrawer from "./ContactDrawer";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname, pathname);

  const [open, setOpen] = React.useState(false);

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
  const active = {
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
            {/* <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(pathname === "/" ? active : {}),
              }}
              // component={Link}
              // href="/"
            >
              Services
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(activeProjects() ? active : {}),
              }}
              // component={Link}
              // href="/portfolio"
            >
              About
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(activeProjects() ? active : {}),
              }}
              // component={Link}
              // href="/portfolio"
            >
              How We Work
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(activeProjects() ? active : {}),
              }}
              // component={Link}
              // href="/portfolio"
            >
              Portfolio
            </Button>
            <Button
              disableRipple
              sx={{
                ...buttonStyle,
                ...(activeProjects() ? active : {}),
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
                ...(activeProjects() ? active : {}),
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
                ...(pathname === "/contacts" ? active : {}),
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
                ...(pathname === "/categories" ? active : {}),
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
                ...(pathname === "/about-us" ? active : {}),
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
                ...(pathname === "/contacts" ? active : {}),
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
