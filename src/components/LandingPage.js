import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectShowcase from "./ProjectShowCase";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTimes, FaWhatsapp } from "react-icons/fa";
import "@fontsource/playfair-display";
import ImageGallery from "./ImageGallery";

import heroimage from '../interior images/herosection.jpg';
import modernimage from '../interior images/modernminimilistic.jpg';
import profilepic from '../interior images/pp.jpg';
import card from '../interior images/space edge visiting card.png';
const LandingPage = () => {
    const [showGallery, setShowGallery] = useState(false);

    return (
        <div className="bg-[#E9E9E9] text-black">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md relative">
                <h1 className="text-xl font-bold">Space&Edge</h1>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeGAkkwrIDbsd2p5bLZkfqRaEbP--5tBYTyjMLtpr6QbpPsyQ/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2.5 rounded-lg font-semibold fixed top-1 right-6 z-50"
                >
                    Get a quote
                </a>
            </nav>

            <a
                href="https://wa.me/919767787898"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-4 top-3/4 transform -translate-y-1/2 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 flex items-center gap-2"
            >
                <FaWhatsapp size={32} />
            </a>

            {/* Hero Section or Image Gallery */}
            {showGallery ? (
                <div className="relative">
                    <button
                        className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-md z-50"
                        onClick={() => setShowGallery(false)}
                    >
                        <FaTimes size={24} />
                    </button>
                    <ImageGallery />
                </div>
            ) : (
                <section className="relative text-white">
                    <img
                        src={heroimage}
                        alt="Contemporary Interior"
                        className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <h2 className="text-6xl font-bold">Space&Edge</h2>
                        <p className="mt-4 max-w-4xl">
                               Crafting spaces that harmonize modern aesthetics with timeless elegance.
                        </p>
                        <button
                            className="mt-4 bg-black text-white px-6 py-2 rounded-lg"
                            onClick={() => setShowGallery(true)}
                        >
                            Explore Us
                        </button>
                    </div>
                </section>
            )}

            {/* Modern Minimalist Section */}
            <section className="p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold">Modern Minimalist</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <img src={modernimage} alt="Modern Minimalist" className="w-5/6 md:w-3/4 mx-auto rounded-lg" />
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-black">OUR OFFERINGS :</h1>
                        <div className="text-xl md:text-2xl mt-4 space-y-4">
                            {[". Residential Interior Design", ". End-to-End Projects", ". Commercial Interior Design", ". Renovation Projects", ". Luxury & Custom Design", ". Sustainable & Smart Interiors"].map((text, index) => (
                                <motion.h2
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.3, duration: 0.6 }}
                                    className="font-semibold"
                                >
                                    {text}
                                </motion.h2>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leader Section */}
            <section className="bg-gray-900 text-white py-10 px-6 flex flex-col md:flex-row items-center justify-center">
                <div className="text-left md:w-1/2">
                    <h2 className="text-6xl font-light text-gray-300">
                        Meet the <span className="font-bold text-white">Leader</span>
                    </h2>
                    <div className="border-t-2 border-red-500 w-16 my-2"></div>
                    <div className="mt-4">
                        <span className="bg-red-500 text-white px-3 py-1 font-bold text-lg rounded">
                            Shruti Chhachwale-Lambe
                        </span>
                        <p className="italic text-gray-400 mt-3">the founder ceo</p>
                        <p className="italic text-2xl text-gray-300 mt-3">"Great interiors tell a story. Shruti Chhachwale-Lambe crafts each space with passion, creativity, and purpose."</p>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <img
                        src={profilepic}
                        alt="Shruti Chhachwale-Lambe"
                        className="w-64 h-64 rounded-full object-cover border-4 border-white"
                    />
                </div>
            </section>

            {/* Collection Section */}
            <section className="p-10">
                <ProjectShowcase />
            </section>

            {/* Footer */}
            <footer className="bg-black text-white p-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold">Engage with Us in Conversation.</h2>
                        <p className="mt-4 max-w-md">
                            In a global world based on communication, a brand must look beyond its borders.
                        </p>
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center justify-center md:justify-start space-x-3">
                                <FaEnvelope className="text-xl text-gray-400" />
                                <a href="mailto:spaced9einteriors@gmail.com" className="text-white hover:underline">
                                    spaced9einteriors@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-3">
                                <FaInstagram className="text-xl text-gray-400" />
                                <a href="https://www.instagram.com/space_edge_interiors" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                                    @space_edge_interiors
                                </a>
                            </div>
                            <a href="tel:+919767787898" className="block hover:underline">📞 +91 9767787898</a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 ">
                        <img
                            src={card}
                            alt="Brand Engagement"
                            className="w-100 h-60 rounded-lg object-cover shadow-lg"
                        />
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-6 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()}{" "}
                        <span className="font-semibold">Space&Edge</span>. Designed by{" "}
                        <span className="font-semibold">LeadGate</span>.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
