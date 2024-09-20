import React from "react";
import {
  Card,
  CardHeader,
  Image,
  Divider,
  CardBody,
  CardFooter,
  Link,
} from "@nextui-org/react";
const Community = () => {
  return (
      <div className="flex flex-col gap-8 my-8">
        <h1 className="text-3xl font-bold text-center">Community</h1>
<div className="flex max-w-6xl justify-around  gap-4 mx-auto flex-wrap">
    <Card1/>

    <Card1/>
    <Card1/>
    <Card1/>
    <Card1/>
    <Card1/>
</div>
      </div>
  );
};
const Card1 = ()=>{
    return (
        <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Mohit Nippanikar</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Growing cereals crops  in urban areas is really helpful for the environment.
  
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit Blog on Younova
          </Link>
        </CardFooter>
      </Card>
    )
}
export default Community;
