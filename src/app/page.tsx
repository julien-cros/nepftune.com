import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
			<NavBar />
     <div>
			<p className="text-3xl text-brown">hello</p>
		 </div>
    </main>
  );
}
