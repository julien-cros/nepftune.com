"use client"

import { useCallback, useRef, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Modal = ({ children }: { children: ReactNode }) => {
	const overlay = useRef<HTMLDivElement>(null);
	const wrapper = useRef<HTMLDivElement>(null);
	const router = useRouter();

	const onDismiss = useCallback(() => {
		router.push("/");
	}, [router]);

	const handleClick = useCallback((e: React.MouseEvent) => {
		if((e.target === overlay.current) && onDismiss){
			onDismiss();
		}
	}, [onDismiss, overlay]);

  return (
	<div ref={overlay} className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80" onClick={handleClick}>
		<button type="button" onClick={onDismiss}  className="absolute top-4 right-8">
		< XMarkIcon className="w-5 h-5" />
		</button>
		<div ref={wrapper} className="modal_wrapper">
			{children}
		</div>
	</div>
  )
}


export default Modal