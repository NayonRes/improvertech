import { Playfair_Display, Tinos, Montserrat } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import MyLayout from "./MyLayout";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const playfair_display = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const tinos = Tinos({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// font-family: "Playfair Display", serif;
// font-family: "Montserrat", serif; alternative of  Helvetica Neue
// font-family: "Tinos", serif; alternative of  Times New Roman

export const metadata = {
  title: "Improver tech",
  description:
    "We provides a full range of interior design, architectural design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${playfair_display.className} ${tinos.className}`}
      >
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <MyLayout>{children}</MyLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
