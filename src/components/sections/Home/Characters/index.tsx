"use client";
import React from "react";
import banner from "../../../../../public/images/olamide-famojuro-asset (1).jpg";
import oldman from "../../../../../public/images/oldman.jpg";
import wole from "../../../../../public/images/wole.jpg";
import wolf from "../../../../../public/images/olamide-famojuro-gray-wolf-ia.jpg";
import Section from "@/components/shared/Section";
import ImageWithCaption from "@/components/shared/ImageWithCaption";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
const Player = dynamic(() => import("@/components/shared/VideoPlayer"), {
  ssr: false,
});

const Characters = () => {
  return (
    <Section>
      <div className="container flex flex-col items-center justify-center pt-5 pb-8 mx-auto rounded-lg md:p-1">
        <ImageWithCaption banner={banner} caption="The GOAT KING" />
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          <ImageWithCaption banner={wole} caption="" />
          <ImageWithCaption banner={oldman} caption="" />
          <ImageWithCaption banner={wolf} caption="" />
        </div>
        {/* <ScrollableImageGallery
          cards={[
            { banner: wole, caption: "The GOAT KING" },
            { banner: oldman, caption: "The GOAT KING" },
            { banner: wolf, caption: "The GOAT KING" },
            { banner: oldman, caption: "The GOAT KING" },
            { banner: wolf, caption: "The GOAT KING" },
          ]}
        /> */}
      </div>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col gap-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/3 w-1/2">
              <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                <CountUp end={120} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <p className="leading-relaxed">Characters</p>
            </div>
            <div className="p-4 sm:w-1/3 w-1/2">
              <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                <CountUp end={3} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <p className="leading-relaxed">Animations</p>
            </div>
            <div className="p-4 sm:w-1/3 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                <CountUp end={7} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <p className="leading-relaxed">Clients</p>
            </div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 mb-2 text-4xl font-bold tracking-tighter text-white  md:text-7xl"
          >
            <Link href={"/projects"}>Animations</Link>
          </motion.h2>
          <Player
            play={false}
            caption="Finding Jumijo"
            link="/projects/finding-jomijo"
            media={
              "https://firebasestorage.googleapis.com/v0/b/greencalbackend.appspot.com/o/Finding%20Jimijo.mp4?alt=media&token=7d685ed6-9705-44eb-8a93-d214bc227e23"
            }
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12 mb-2 text-4xl font-bold tracking-tighter text-white  md:text-7xl"
          >
            <Link href={"/tutorials"}>Tutorials</Link>
          </motion.h2>
          <Player
            link={"https://www.youtube.com/watch?v=Cw0xdVGspZY"}
            caption="Stylized Male Portrait"
            media={"https://www.youtube.com/watch?v=Cw0xdVGspZY"}
          />
        </div>
      </section>
    </Section>
  );
};

export default Characters;
