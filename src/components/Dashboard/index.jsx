import React, { useState } from "react";
import { FlipWords } from "../ui/flips-words";
import Result from "./Result";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
const Dashboard = () => {
  const [file, setFile] = useState(null);
  const words = [
    "Plant Growth",
    "Soil Health",
    "Water Usage",
    "Sunlight Exposure",
    "Temperature Levels",
    "Humidity Levels",
    "Fertilizer Application",
    "Pest Activity",
  ];
  return (
    <div className="mb-16">
      {file ? (
        <Result />
      ) : (
        <>
          <div className="h-[18rem] flex justify-center items-center">
            <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              <div className="text-3xl">
                Track
                <FlipWords words={words} />{" "}
              </div>{" "}
              <br />
              Get an overall health score for your plants, <br /> combining
              various environmental factors.
            </div>
          </div>
          <FileInput setFile={setFile} />

          <div className="w-full flex justify-center">
            <Card className="py-4 m-12">
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

            <Card className="py-4 m-12">
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

            <Card className="py-4 m-12">
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
          </div>
        </>
      )}
    </div>
  );
};
const FileInput = ({ setFile }) => {
  return (
    <div class="flex items-center justify-center max-w-lg mx-auto">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          class="hidden"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      </label>
    </div>
  );
};

export default Dashboard;
