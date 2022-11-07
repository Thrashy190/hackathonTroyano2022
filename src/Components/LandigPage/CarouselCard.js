import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Slider } from "@mui/material";

const CarouselCard = () => {
  var items = [
    {
      name: "Universidad Autonoma de Querétaro",
      img: "https://amqueretaro.com/wp-content/uploads/2019/12/uaq-2.jpg",
    },
    {
      name: "Anahuac Plantel Querétaro",
      img: "https://www.im.education/blog/wp-content/uploads/2021/11/universidad-anahuac-mexico-3.png",
    },
    {
      name: "Instituto Tecnológico de Saltillo",
      img: "https://viveloensaltillo.com/wp-content/uploads/2018/08/1254x851tecsaltillo1-768x521.jpg",
    },
  ];

  return (
    <Carousel
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      autoPlay={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper>
      <div className="flex justify-center items-center relative rounded-lg bg-transparent">
        <img
          className=" w-[100%] h-[40vw] object-cover brightness-50"
          src={props.item.img}
        />
        <h1 className="text-white absolute text-center font-bold text-4xl ">
          {props.item.name}
        </h1>
      </div>
    </Paper>
  );
}

export default CarouselCard;
