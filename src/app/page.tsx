import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
			<div className="flex flex-col p-24">
          <p className="text-9xl text-brown-dark z-10">clara</p>
          <p className="text-9xl text-brown-dark z-10">Lacroix</p>
			</div>
				<h2 className="absolute right-44 bottom-28  h-[470px] w-[700px] bg-pink-brown"/>
				<div className="absolute right-20 bottom-20 ">
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
