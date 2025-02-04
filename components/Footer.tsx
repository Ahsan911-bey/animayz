import React from 'react';
import Image from 'next/image';
import FooterImg3 from './FooterImg3.jpg';
import Logo from './Logo.png';

const Footer = () => {
    return (
        <div className="mt-20 relative bg-black">
            <div className="relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 min-h-[15rem] md:min-h-[20rem]">
                    <div className="hidden md:block">
                        <h2 className="text-3xl font-bold text-white">A-Z List</h2>
                        <p className="text-lg mt-2 text-white">
                            Searching anime order by alphabet name A to Z.
                        </p>
                        <div className="flex flex-wrap justify-center space-x-2 mt-4 mb-4">
                            {['All', ...Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')].map((letter) => (
                                <button
                                    key={letter}
                                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1"
                                >
                                    {letter}
                                </button>
                            ))}
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
                    <p className="mt-4 text-white">Copyright © 2025 GogoAnime. All Rights Reserved.</p>
                    <p className="text-sm mt-2 text-white">
                        This site does not store any files on its server. All contents are provided by non-affiliated third parties.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;