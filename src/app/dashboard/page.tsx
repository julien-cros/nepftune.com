"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import NavBarDashboard from "@/components/NavBarDashboard";


// TODO: create alert component
const dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
		
    if (!token) {
      router.push("/login");
    }

    const validateToken = async () => {
      try {
        const res = await fetch("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error("Token validation failed")
        }
      } catch (error) {
        router.push("/login");

      }
    };

    validateToken();
  }, [router]);
	
  return (
    <div className="w-full h-ull flex justify-center items-center">
			{/* button new Post/album */}
      <div className="w-full flex justify-start items-end">
				<NavBarDashboard/>
			</div>

			{/* update post */}
			<div>

			</div>

			{/* update photo */}
			<div>

			</div>

			{/* update home */}
			<div>

			</div>
    </div>
  );
};

export default dashboard;
