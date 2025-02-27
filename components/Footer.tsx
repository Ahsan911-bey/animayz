import React from 'react';
import Image from 'next/image';
import FooterImg3 from './FooterImg3.jpg';
import Logo from './Logo.png';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-20 relative bg-black">
            <div className="relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 min-h-[15rem] md:min-h-[20rem]">
                    <div className="hidden md:block">
                        <h2 className="text-3xl font-bold text-white">A-Z List</h2>
                        <p className="text-lg mt-2 text-white">
                            Searching anime order by alphabet name A to Z.
                        </p>
                        <div className="flex flex-wrap justify-center space-x-1 mt-4 mb-4">
                           <Link href={`/Search?q=a`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 A
                           </button></Link>
                           <Link href={`/Search?q=b`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 B
                           </button></Link>
                           <Link href={`/Search?q=c`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 C
                           </button></Link>
                           <Link href={`/Search?q=d`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 D
                           </button></Link>
                           <Link href={`/Search?q=e`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 E
                           </button></Link>
                           <Link href={`/Search?q=f`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 F
                           </button></Link>
                           <Link href={`/Search?q=g`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 G
                           </button></Link>
                           <Link href={`/Search?q=h`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 H
                           </button></Link>
                           <Link href={`/Search?q=i`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 I
                           </button></Link>
                           <Link href={`/Search?q=J`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 J
                           </button></Link>
                           <Link href={`/Search?q=K`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 K
                           </button></Link>
                           <Link href={`/Search?q=L`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 L
                           </button></Link>
                           <Link href={`/Search?q=M`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                M
                           </button></Link>
                           <Link href={`/Search?q=N`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 N
                           </button></Link>
                           <Link href={`/Search?q=O`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 O
                           </button></Link>
                           <Link href={`/Search?q=P`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 P
                           </button></Link>
                           <Link href={`/Search?q=Q`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 Q
                           </button></Link>
                           <Link href={`/Search?q=R`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 R
                           </button></Link>
                           <Link href={`/Search?q=S`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 S
                           </button></Link>
                           <Link href={`/Search?q=T`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 T
                           </button></Link>
                           <Link href={`/Search?q=U`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 U
                           </button></Link>
                           <Link href={`/Search?q=V`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 V
                           </button></Link>
                           <Link href={`/Search?q=W`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 W
                           </button></Link>
                           <Link href={`/Search?q=X`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 X
                           </button></Link>
                           <Link href={`/Search?q=Y`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 Y
                           </button></Link>
                           <Link href={`/Search?q=Z`}><button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1'>
                                 Z
                           </button></Link>
                           
                            
                        </div>
                    </div>
                    <Image
                        className="rounded-md"
                        src={Logo}
                        alt="Logo"
                        objectFit="contain"
                        layout="fixed"
                        height={50}
                        width={150}
                    />
                    <p className="mt-4 text-white">Copyright © 2025 AniMAZE. All Rights Reserved.</p>
                    <p className="text-sm mt-2 text-white">
                        This site does not store any files on its server. All contents are provided by non-affiliated third parties.
                    </p>
                    <p>This is just an info site</p>
                    <p>Developed By Ahsan </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;