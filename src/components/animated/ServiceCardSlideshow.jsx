import { WEB_SERVICES } from "constants/serviceData";
import ServiceCard from "./ServiceCard";
import { useState } from "react";
import WebDev from "components/ServicesHome/WebDev";

const ServiceCardSlideshow = ({ selectedIndex, selectCard }) => {
  return (
    <div className="w-full flex justify-center gap-10 mb-20 mt-10">
      {WEB_SERVICES.map((data, index) => (
        <ServiceCard
          data={data}
          isSelected={index === selectedIndex}
          onClick={() => selectCard(index)}
        />
      ))}
    </div>
  );
};

export default ServiceCardSlideshow;
