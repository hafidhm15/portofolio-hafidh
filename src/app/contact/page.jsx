import React from 'react';
import Header from '../component/Header';

const ContactPage = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto mt-8 px-4">
            <h1 className="text-3xl font-semibold mb-4 flex items-center justify-center">Contact Me</h1>

                <div className="flex flex-col space-y-8 items-center">
                    <a
                        href="https://www.instagram.com/superdevhub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-500 text-white py-4 px-6 rounded-md inline-flex items-center justify-center gap-4 hover:bg-blue-600 transition-colors"
                    >
                        <span className="text-lg font-semibold">Visit My Instagram</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/muhamad-hafidh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white py-4 px-6 rounded-md inline-flex items-center justify-center gap-4 hover:bg-blue-600 transition-colors"
                    >
                        <span className="text-lg font-semibold">Visit My LinkedIn</span>
                    </a>
                    {/* <a
                        href="/your-cv.pdf" // Replace with your CV file path
                        download="your_cv.pdf"
                        className="bg-green-500 text-white py-4 px-6 rounded-md inline-flex items-center justify-center gap-4 hover:bg-green-600 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-12 w-12"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 10V3a1 1 0 011-1h4a1 1 0 011 1v7m-5 7h6a2 2 0 002-2V11a2 2 0 00-2-2H8a2 2 0 00-2 2v4a2 2 0 002 2zM12 15v3m0 0v3m0-3h3m-3 0h-3"
                            />
                        </svg>
                        <span className="text-lg font-semibold">Download CV</span>
                    </a> */}
                </div>
            </div>
        </>
    );
};

export default ContactPage;
