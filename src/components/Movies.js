import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        <Wrap>
          <img
            src="https://rukminim1.flixcart.com/image/416/416/jbgtnrk0/poster/s/a/f/medium-ashd-wall-poster-the-simpsons-homer-simpson-bart-simpson-original-imaek7y5rznmecqj.jpeg?q=70"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://rukminim1.flixcart.com/image/416/416/jbgtnrk0/poster/s/a/f/medium-ashd-wall-poster-the-simpsons-homer-simpson-bart-simpson-original-imaek7y5rznmecqj.jpeg?q=70"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://rukminim1.flixcart.com/image/416/416/jbgtnrk0/poster/s/a/f/medium-ashd-wall-poster-the-simpsons-homer-simpson-bart-simpson-original-imaek7y5rznmecqj.jpeg?q=70"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://rukminim1.flixcart.com/image/416/416/jbgtnrk0/poster/s/a/f/medium-ashd-wall-poster-the-simpsons-homer-simpson-bart-simpson-original-imaek7y5rznmecqj.jpeg?q=70"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://rukminim1.flixcart.com/image/416/416/jbgtnrk0/poster/s/a/f/medium-ashd-wall-poster-the-simpsons-homer-simpson-bart-simpson-original-imaek7y5rznmecqj.jpeg?q=70"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://rukminim1.flixcart.com/image/416/416/jbgtnrk0/poster/s/a/f/medium-ashd-wall-poster-the-simpsons-homer-simpson-bart-simpson-original-imaek7y5rznmecqj.jpeg?q=70"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://rukminim1.flixcart.com/image/416/416/jbgtnrk0/poster/s/a/f/medium-ashd-wall-poster-the-simpsons-homer-simpson-bart-simpson-original-imaek7y5rznmecqj.jpeg?q=70"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://rukminim1.flixcart.com/image/416/416/jbgtnrk0/poster/s/a/f/medium-ashd-wall-poster-the-simpsons-homer-simpson-bart-simpson-original-imaek7y5rznmecqj.jpeg?q=70"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
