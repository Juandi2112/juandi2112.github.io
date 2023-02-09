import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

import React from "react";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Las repuestas que buscas, las encotraras adentro de ti.
                find in yourself
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An rare questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Las repuestas que buscas, las encotraras adentro de ti.
                find in yourself
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Anther important questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Las repuestas que buscas, las encotraras adentro de ti.
                find in yourself
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Las repuestas que buscas, las encotraras adentro de ti.
                find in yourself
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Final questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Las repuestas que buscas, las encotraras adentro de ti.
                find in yourself
            </Typography>
        </AccordionDetails>
      </Accordion>

      
    </Box>
  );
};

export default FAQ;
