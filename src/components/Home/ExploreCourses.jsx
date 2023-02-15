import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Carousel from "react-elastic-carousel";
import house1 from "../../assets/pic1.jpg";
import house2 from "../../assets/pic2.jpg";
import house3 from "../../assets/pic3.jpg";
import house4 from "../../assets/pic4.jpg";
import house5 from "../../assets/pic5.jpg";
import house6 from "../../assets/pic6.jpg";
import { Link } from "react-router-dom";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const ExploreCourses = () => {
  const CarouselItems = [
    {
      Image: house1,
      Name: "Backend Development",
      Title: "Php, Nodejs",
    },
    {
      Image: house2,
      Name: "Frontend Development",
      Title: "React, Angular and Vue",
    },
    {
      Image: house3,
      Name: "Data Analysis",
      Title: "Python and Django",
    },
    {
      Image: house4,
      Name: "Artificial Intelligence",
      Title: "Java",
    },
    {
      Image: house5,
      Name: "Machine Learning",
      Title: "Python",
    },
    {
      Image: house6,
      Name: "Mobile Development",
      Title: "React Native and Flutter",
    },
  ];

  return (
    <Box container component="div" className="  py-2 sm:p-20 ">
      <Container>
        <Box component="div" className="text-center mt-16 sm:mt-5">
          <Typography variant="title1" sx={{ fontWeight: "bold" }}>
            A Tech Hub for your Skills
          </Typography>
          <Typography variant="h4">
            {" "}
            <span className="text-green-600 font-bold sm:text-5xl text-md">
              Explore
            </span>{" "}
            <span className="text-blue-800 font-bold sm:text-5xl text-md">
              Courses
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
                <Box component="div" className="">
                  <img
                    src={items.Image}
                    alt="house Image"
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
          <Link to="/register">
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
              Get Started
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ExploreCourses;
