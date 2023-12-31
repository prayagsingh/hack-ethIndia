import React from "react";
import Image from "next/image";
import Touch from "@/icons/Touch.svg";
import ConnectButton from "./ConnectButton";
import Link from "next/link";
// import SearchBar from "./Search";
const Navbar = () => {
	return (
		<div className='w-full px-8 py-2'>
			<div className='flex items-center justify-between'>
				<Link href='/'>
					<div className='flex gap-2.5 items-center'>
						<Image src={Touch} alt='touch' />
						<div className='font-bold text-2xl text-center h-full bg-gradient-to-r to-[#8C11DA8C] from-[#EE7073] text-transparent bg-clip-text'>
							Web3-Auth
						</div>
						{/* <SearchBar /> */}
					</div>
				</Link>
				<div className='flex items-center gap-x-[36px]'>
					<div className='flex gap-x-[36px]'>
						<p className='text-base font-semibold text-[#04111D]'>
							Explore
						</p>
						<p className='text-base font-semibold text-[#04111D]'>
							Stats
						</p>
						<p className='text-base font-semibold text-[#04111D]'>
							Create
						</p>
					</div>
					<ConnectButton />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
