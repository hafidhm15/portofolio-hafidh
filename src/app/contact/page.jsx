import React from 'react';
import Header from '../component/Header';
import Image from 'next/image'; // Import Image component from Next.js

const ContactPage = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto mt-8 px-4">
                <h1 className="text-3xl font-semibold mb-4 flex items-center justify-center">Contact Me</h1>

                <div className="flex flex-col space-y-8 items-center">
                    {/* Replace the <a> tags with <Image> components */}
                    <div className="bg-red-500 text-white py-4 px-6 rounded-md inline-flex items-center justify-center gap-4 hover:bg-blue-600 transition-colors">
                        <Image src="/instagram-logo.png" alt="Instagram Logo" width={32} height={32} />
                        <span className="text-lg font-semibold">Visit My Instagram</span>
                    </div>
                    <div className="bg-blue-500 text-white py-4 px-6 rounded-md inline-flex items-center justify-center gap-4 hover:bg-blue-600 transition-colors">
                        <Image src="/linkedin-logo.png" alt="LinkedIn Logo" width={32} height={32} />
                        <span className="text-lg font-semibold">Visit My LinkedIn</span>
                    </div>
                    {/* Uncomment and update the following <Image> component for a downloadable CV link */}
                    {/* <a
                        href="/your-cv.pdf" // Replace with your CV file path
                        download="your_cv.pdf"
                        className="bg-green-500 text-white py-4 px-6 rounded-md inline-flex items-center justify-center gap-4 hover:bg-green-600 transition-colors"
                    >
                        <Image src="/download-icon.png" alt="Download Icon" width={32} height={32} />
                        <span className="text-lg font-semibold">Download CV</span>
                    </a> */}
                </div>
            </div>
        </>
    );
};

export default ContactPage;
