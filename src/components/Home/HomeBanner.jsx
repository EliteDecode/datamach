import React from "react";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box component="div" className="banner">
      <Container className="sm:py-28 py-12">
        <Box component="div">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
            }}
            className="banner-text"
          >
            <span className="sm:text-5xl text-2xl">
              A Professional Start <br /> To Technology
            </span>
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 1, marginBottom: 1 }}>
            Learn , Explore and Get Hired on your Skills
          </Typography>
          <Typography
            variant="subtitle2"
            className=" sm:w-2/4 w-100"
            style={{
              lineHeight: "1.3rem",
              marginTop: ".5%",
              fontSize: "15px",
              fontWeight: "",
              opacity: "90%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            quas. Esse cum nobis, officia, odio quis modi eaque labore
            perferendis minima quia laborum animi. Quidem officiis minima
            eveniet unde optio aliquid voluptatum autem, quasi.
          </Typography>

          <Stack spacing={2} direction="row" className="mt-20">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#1e40af",
                textTransform: "none",
                fontWeight: "bold",
              }}
              className="bg-blue-500"
              size="medium"
            >
              Explore Courses
            </Button>
            <Link to="/register">
              <Button
                variant="contained"
                size="medium"
                sx={{
                  bgcolor: "#4ade80",
                  color: "#000",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Enroll Now
              </Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBanner;
