import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
          <p className="text-9xl text-brown-dark z-10 absolute lg:top-32 lg:right-1/2 ">clara</p>
          <p className="text-9xl text-brown-dark absolute top-56 right-48 z-10">Lacroix</p>
				<h2 className="absolute lg:right-44 lg:bottom-28 w-[260px] h-[180px] right-10 bottom-20 lg:h-[470px] lg:w-[700px] bg-pink-brown"/>
				<div className="absolute right-2 bottom-16 lg:right-20 lg:bottom-20 w-2/3 lg:w-fit">
        <Image
          src="/homePicture.JPG"
          alt="homePicture"
          width="700"
          height="700"
					/>
					</div>
				<div>
					<Button />
				</div>
    </main>
  );
}
