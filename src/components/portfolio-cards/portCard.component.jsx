import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Box, Typography, IconButton } from "@mui/material/";

import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

import "./portCard.styles.scss";

export default function PortfolioCard({ project }) {
  const { projTitle, image, href, gh, desc } = project;
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);

  return (
    <Box className="container">
      <Box className="card" data-aos="flip-up">
        <Box className="proj-img-box">
          <img src={process.env.PUBLIC_URL + image || image} alt={projTitle} />
        </Box>
        <Box className="content">
          <Typography variant="h3" className="proj-title">
            {projTitle}
          </Typography>
          <Typography variant="p" className="tech">
            Tech Used: <br />
          </Typography>
          <Typography variant="p" className="proj-desc">
            {desc}
          </Typography>
          <Box className="btn-group">
            <IconButton
              href={gh}
              target="_blank"
              rel="noreferrer noopener"
              disableRipple
            >
              <GitHubIcon className="iconBtn" />
            </IconButton>
            <IconButton
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              disableRipple
            >
              <WebIcon className="iconBtn" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}