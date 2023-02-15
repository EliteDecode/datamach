import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import lock from "../../assets/padlock.png";
import arrow from "../../assets/arrow-right.png";
import arrow2 from "../../assets/right-arrow.png";
import lockImage from "../../assets/datamach3.png";
import escrow from "../../assets/insurance.png";
import growth from "../../assets/growth.png";
import expert from "../../assets/rating.png";
import landMonitoringImg from "../../assets/seed.png";

const AboutDatamach = () => {
  return (
    <Box component="div" className=" mt-5 sm:p-12 p-2 aboutlockbg">
      <Container>
        {/* first section */}
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6}>
              <Box className="rounded-lg p-4 sm:p-7 bg-white shadow-lg">
                <Box className="flex space-x-2 items-center">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "600", fontSize: "14px" }}
                  >
                    Student Spot
                  </Typography>
                  <img src={lock} alt="padlock" width="11px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "28px",
                      margin: "3% 0%",
                    }}
                  >
                    Learn and Explore your <br /> Favourite Courses.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className=" sm:w-5/6 w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "12px",
                      fontWeight: "600",
                      opacity: "90%",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facere tempore placeat amet? Tenetur, omnis ratione.
                  </Typography>
                </Box>
                <Box className="flex space-x-2 sm:mt-10 mt-5 items-center">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "600", fontSize: "14px" }}
                  >
                    Get Started
                  </Typography>
                  <img src={arrow} alt="padlock" width="24px" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box className="rounded-lg p-4 sm:p-7 bg-white shadow-lg">
                <Box className="flex space-x-2 items-center">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "600", fontSize: "14px" }}
                  >
                    Employer Spot
                  </Typography>
                  <img src={lock} alt="padlock" width="11px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "28px",
                      margin: "3% 0%",
                    }}
                  >
                    Hire Reliable and Professional
                    <br /> Hands for the Job
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className=" sm:w-5/6 w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "12px",
                      fontWeight: "600",
                      opacity: "90%",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet voluptates praesentium sit mollitia recusandae
                    laudantium.
                  </Typography>
                </Box>
                <Box className="flex space-x-2 sm:mt-10 mt-5 items-center">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "600", fontSize: "14px" }}
                  >
                    Get Started
                  </Typography>
                  <img src={arrow} alt="padlock" width="24px" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* second section */}
        <Box component="div" sx={{ marginTop: "7%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Box component="div">
                <h1 className="sm:text-6xl text-2xl sm:mt-8 mt-3 font-bold ">
                  About <br /> Datamach
                </h1>
                <Typography
                  variant="subtitle2"
                  className=" sm:w-4/5 w-100"
                  style={{
                    lineHeight: "1.3rem",
                    marginTop: "3%",
                    fontSize: "14px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, expedita? Tenetur nesciunt natus alias modi
                  doloremque. Commodi et libero voluptate ad eum dignissimos
                  officia vero.
                  <a href="https://www.google.com" className="text-blue-700">
                    Read more
                  </a>
                </Typography>
              </Box>
              <Box className="flex space-x-2 sm:mt-16 mt-5 items-center">
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "600", fontSize: "14px" }}
                >
                  Get Started
                </Typography>
                <img src={arrow2} alt="padlock" width="24px" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box className=" flex items-center justify-center">
                <img
                  src={lockImage}
                  alt="Secure lang image"
                  className=""
                  width="85%"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Third section */}
        <Box
          component="div"
          className="mt-5 sm:mt-28 bg-white p-5 sm:p-10  rounded-xl"
        >
          <Grid container>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="p-4 sm:p-5  styled-border">
                <Box component="div">
                  <img src={escrow} alt="Escrow" width="45px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      margin: "10% 0% 10% 0%",
                    }}
                  >
                    Instructor Led Training
                  </Typography>
                  <Typography
                    variant="subtitle"
                    className="  w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "13px",
                      opacity: "90%",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde fugit nisi consequatur aperiam molestias aliquid
                    reiciendi.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className=" p-4 sm:p-5 styled-border">
                <Box component="div">
                  <img src={growth} alt="Escrow" width="45px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      margin: "10% 0% 10% 0%",
                    }}
                  >
                    Career Support
                  </Typography>
                  <Typography
                    variant="subtitle"
                    className="  w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "13px",
                      opacity: "90%",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam tenetur optio neque cupiditate perferendis a incidunt
                    doloribus tempore sunt eveniet.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className=" p-4 sm:p-5 styled-border">
                <Box component="div">
                  <img src={expert} alt="Escrow" width="45px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      margin: "10% 0% 10% 0%",
                    }}
                  >
                    Become an Expert
                  </Typography>
                  <Typography
                    variant="subtitle"
                    className="  w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "13px",
                      opacity: "90%",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto delectus quae unde illum incidunt quis deleniti
                    natus temporibus quod numquam.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className=" p-4 sm:p-5  styled">
                <Box component="div">
                  <img src={landMonitoringImg} alt="Escrow" width="45px" />
                </Box>
                <Box variant="div">
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      margin: "10% 0% 10% 0%",
                    }}
                  >
                    Get Hired
                  </Typography>
                  <Typography
                    variant="subtitle"
                    className="  w-100"
                    style={{
                      lineHeight: "1.3rem",
                      marginTop: ".5%",
                      fontSize: "13px",
                      opacity: "90%",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Autem similique non earum neque necessitatibus? Saepe
                    consectetur libero quis perspiciatis consequuntur!
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutDatamach;
