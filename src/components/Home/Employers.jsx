import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Carousel from "react-elastic-carousel";
import people1 from "../../assets/people1.jpg";
import people2 from "../../assets/people2.jpg";
import people3 from "../../assets/people3.jpg";
import people4 from "../../assets/people4.jpg";
import people5 from "../../assets/people5.jpg";
import people6 from "../../assets/people3.jpg";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Employers = () => {
  const CarouselItems = [
    {
      Image: people1,
      Name: "Backend Developers",
      Title: "Php, Nodejs",
    },
    {
      Image: people2,
      Name: "Frontend Developers",
      Title: "React, Angular and Vue",
    },
    {
      Image: people3,
      Name: "Data Analysts",
      Title: "Python and Django",
    },
    {
      Image: people4,
      Name: "A.I Engineers",
      Title: "Java",
    },
    {
      Image: people5,
      Name: "Machine Learning",
      Title: "Python",
    },
    {
      Image: people6,
      Name: "Mobile Developers",
      Title: "React Native and Flutter",
    },
  ];
  return (
    <Box container component="div" className=" aboutlockbg  p-2 sm:p-20 ">
      <Container>
        <Box component="div" className="text-center mt-10 sm:mt-5">
          <Typography variant="h4">
            {" "}
            <span className="text-dark font-bold sm:text-5xl text-md">
              Exciting Offers for
            </span>{" "}
            <span className="text-dark font-bold sm:text-5xl text-md">
              Employers
            </span>
          </Typography>
          <Typography
            variant="subtitle2"
            className=" w-100 "
            style={{
              lineHeight: "1.3rem",
              marginTop: ".5%",
              fontSize: "14px",
              fontWeight: "",
              opacity: "90%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            eum numquam! Commodi rem velit rerum.
          </Typography>
        </Box>

        <Box component="div" className=" mt-5 p-2 text-center">
          <Carousel
            breakPoints={breakPoints}
            itemPadding={[5, 5]}
            enableAutoPlay
            autoPlaySpeed={1500}
          >
            {CarouselItems.map((items, key) => {
              return (
                <Box
                  component="div"
                  className=" shadow-xl rounded-lg p-5 bg-gray-300"
                >
                  <img
                    src={items.Image}
                    alt="people Image"
                    className="rounded-xl"
                  />
                  <Box component="div" className="mt-3 p-2">
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {items.Name}
                    </Typography>
                    <Typography variant="subtitle2">{items.Title}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Carousel>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#1e40af",
              textTransform: "none",
              fontWeight: "bold",
            }}
            className="bg-blue-500"
            size="large"
          >
            Load More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Employers;
