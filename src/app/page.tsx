import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p className="text-3xl lg:text-9xl text-brown-dark z-10 absolute right-1/2 bottom-[560px] md:right-[500px] md:bottom-[800px] lg:bottom-[700px] lg:right-[850px]">
        clara
      </p>
      <p className="text-3xl lg:text-9xl text-brown-dark absolute right-2/2 bottom-[530px] md:right-[380px] md:bottom-[770px] lg:bottom-[590px] lg:right-72 z-10">
        Lacroix
      </p>
      <div className="absolute lg:right-56 lg:bottom-28 md:w-2/3 w-[260px] h-[180px] right-10 bottom-20 lg:h-[530px] lg:w-[800px] bg-pink-brown">
        <p className="w-full h-full flex justify-sart items-end pl-2 text-xl lg:text-4xl text-brown-dark">
          002/
        </p>
      </div>
      <div className="absolute bottom-0 z-30">
        <Button />
      </div>
      <div className="absolute w-2/3 right-2 bottom-16  lg:right-32 lg:bottom-20 lg:w-fit z-20">
        <Image
          src="/homePicture.JPG"
          alt="homePicture"
          width="800"
          height="700"
        />
      </div>
			<div className="h-screen w-full lg:grid lg:grid-cols-4 md:px-10 py-32">
        <h1 className=" w-full h-full flex justify-center items-center description z-10" >
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type.
        </h1>
			</div>
    </main>
  );
}
