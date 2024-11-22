// src/pages/Landing.tsx
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const LandingContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("src/assets/bg.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const Content = styled.div`
  max-width: 800px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Landing = () => {
  return (
    <LandingContainer>
      <Content>
        <img
          src="/trolley.png"
          alt="Paradise Nursery logo"
          style={{ width: "90px", height: "90px" }}
        />
        <Title>Paradise Nursery</Title>
        <p>
          Welcome to Paradise Nursery, your one-stop destination for beautiful,
          healthy houseplants. We carefully select and nurture each plant to
          ensure you receive the highest quality additions to your indoor
          garden.
        </p>
        <p>
          At Paradise Nursery, we believe that everyone deserves a touch of
          nature in their lives. Specializing in a diverse selection of
          beautiful houseplants, we curate an array of species that cater to
          both novice and experienced plant enthusiasts. Our mission is to
          provide high-quality plants and exceptional customer service,
          promoting the joys of indoor gardening. Whether you're looking to
          brighten your home or find the perfect gift, Paradise Nursery is your
          go-to destination for all things green. Join us in cultivating a
          greener, more vibrant world!
        </p>
        <Button as={Link} to="/products">
          Get Started
        </Button>
      </Content>
    </LandingContainer>
  );
};
