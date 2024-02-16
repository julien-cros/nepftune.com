'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Cookies from "js-cookie";
import Modal from '@/components/Modal';
import CreateNew from '@/components/form/CreateNew';

type ParamsProps = {
	params: {
		slug: string
	}
}

const createPostAlbum = ({ params }: ParamsProps ) => {

	
	const router = useRouter();
	const slug = usePathname()

	const path = slug.split(/[/]+/).pop();
	if (!path) {
		return router.push('/')
	}

	useEffect(() => {
    const token = Cookies.get("token");

		if (path !== 'post' && path !== 'album') {
			return router.push('/')
		}
		
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
		<Modal>
			<h2 className='text-5xl text-brown-dark flex justify-center items-center pt-10'>Create a new {path}</h2>
			<CreateNew type={path}/>
		</Modal>
	)
}

export default createPostAlbum