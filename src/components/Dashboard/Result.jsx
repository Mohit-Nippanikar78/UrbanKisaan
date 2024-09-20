import React from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import ProgressBar from "./ProgressBar";
import Photo1 from "../../assets/photo1.png";
import Photo2 from "../../assets/photo2.png";
import Photo3 from "../../assets/photo3.png";

const Result = () => {
  return (
    <div className="flex max-w-5xl py-4 mx-auto ">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8="
            width={270}
          />
        </CardBody>
      </Card>
      <div className="m-4  shadow-md p-4 rounded-lg">
        <ProgressBar />
        <img className="w-[32rem] mt-4" src={Photo1} alt="" />
        <div className="flex justify-between gap-8 my-4">
        <img className="w-56" src={Photo2} alt="" />
        <img className="w-56" src={Photo3} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Result;
