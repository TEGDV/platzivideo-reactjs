import React from "react";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";
import useInitialState from "../hooks/useInitialState.js";

const API = "http://localhost:3000/initalState";

const MainSection = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    Object.entries(initialState).map(
      ([category, videos]) =>
        videos.length > 0 && (
          <Categories key={category} title={category}>
            <Carousel>
              {videos.map((videoInfo) => (
                <CarouselItem key={videoInfo.id} {...videoInfo} />
              ))}
            </Carousel>
          </Categories>
        )
    )
  );
};

export default MainSection;
