import React from "react";
import banner from "../../../../../public/images/olamide-famojuro-asset (1).jpg";
import Section from "@/components/shared/Section";
import ImageWithCaption from "@/components/shared/ImageWithCaption";

const Characters = () => {
  return (
    <Section>
      <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
        <ImageWithCaption banner={banner} caption="The GOAT KING" />
      </div>
    </Section>
  );
};

export default Characters;
