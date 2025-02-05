import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({className , description ,id ,img ,imgClassName ,  spareImg , title  ,titleClassName}) => (
          <BentoGridItem
            id={id}
            key={id}
            description={description}
            title={title}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}

          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
