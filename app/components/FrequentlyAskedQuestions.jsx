import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

let data = [
  {
    question: "What is Interior Design?",
    answer:
      "Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. It involves the strategic planning and arrangement of furniture, color schemes, lighting, and other elements to create functional and beautiful spaces.",
  },
  {
    question: "Why need interior design?",
    answer:
      "Interior design is essential because it improves the functionality, safety, and aesthetics of a space. A well-designed interior can enhance the comfort and efficiency of a space, reflect personal or brand identity, and increase property value. Professional interior design ensures that every element works harmoniously to meet your needs and preferences.",
  },
  {
    question: "Who are the luxury interior designer brands in BD?",
    answer:
      "In Bangladesh, luxury interior designer brands include Chitron Interior, which is renowned for its high-end design solutions and premium service. Other notable brands also focus on delivering luxury and bespoke interior designs",
  },
  {
    question: "Who are the top interior design companies in Bangladesh?",
    answer:
      "Some of the top interior design companies in Bangladesh include Chitron Interior, [insert other notable companies], and [insert additional companies]. These firms are recognized for their innovative designs and exceptional service.",
  },
  {
    question: "What exactly does an interior designer do?",
    answer:
      "An interior designer plans and designs interior spaces to improve their functionality, aesthetics, and safety. They assess client needs, create design plans, select materials and furnishings, and oversee the implementation of the design. Interior designers ensure that the finished space aligns with the client's vision and meets all practical requirements.",
  },
  {
    question: "What services does Chitron provide for interior design in Bangladesh?",
    answer:
      "Chitron Interior offers a comprehensive range of services, including residential and commercial interior design, space planning, project management, custom furniture design, and renovation. We work closely with clients to deliver tailored solutions that enhance the beauty and functionality of their spaces.",
  },
  
];

const FrequentlyAskedQuestions = () => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="h2"
        color="text.main"
        sx={{ textAlign: "center", mb: 6.5 }}
      >
        Frequently Asked Questions
      </Typography>
      {data?.map((item, i) => (
        <Accordion key={i} sx={{ background: "#F6F6F6", mb: 3.125 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{
              color: "#2E2E2E",
              px: 4,
              py: 1,

              py: {
                xs: 0,
                sm: 0,
                md: 1,
                lg: 1,
                xl: 1,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                  md: "18px",
                  lg: "24px",
                  xl: "24px",
                },

                color: "#2E2E2E",
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <Typography
              sx={{
                color: "#2E2E2E",
                px: 2,
                fontSize: {
                  xs: "13px",
                  sm: "13px",
                  md: "14px",
                  lg: "16px",
                  xl: "16px",
                },
              }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default FrequentlyAskedQuestions;
