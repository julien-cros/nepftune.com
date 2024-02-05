import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-3xl lg:text-9xl text-brown-dark z-10 absolute top-24 lg:top-32 right-[850px] ">
        clara
      </p>
      <p className="text-3xl lg:text-9xl text-brown-dark absolute lg:bottom-[590px] lg:right-72 z-10">
        Lacroix
      </p>
      <div className="absolute lg:right-56 lg:bottom-28 w-[260px] h-[180px] right-10 bottom-20 lg:h-[530px] lg:w-[800px] bg-pink-brown">
        <p className="w-full h-full flex justify-sart items-end pl-2 text-xl lg:text-4xl text-brown-dark">
          002/
        </p>
      </div>
      <div className="absolute right-2 bottom-16 lg:right-32 lg:bottom-20 w-2/3 lg:w-fit">
        <Image
          src="/homePicture.JPG"
          alt="homePicture"
          width="800"
          height="700"
        />
      </div>
			<div className="h-screen w-full grid  md:grid-cols-4  lg:grid-cols-3">
      <div className=" w-full flex justify-center items-center">
        <h1 className="description" >
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type .
        </h1>
      </div>
			</div>
      <div>
        <Button />
      </div>
    </main>
  );
}
