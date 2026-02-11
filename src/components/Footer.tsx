import React from 'react';
import { Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-blue-950 text-stone-200 py-12 px-4 shadow-inner">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {/* Contact & Location */}
                <div className="text-center md:text-left">
                    <h3 className="font-serif font-bold text-xl mb-4 text-white">Contact & Location</h3>
                    <p className="leading-relaxed text-stone-300">
                        AIC KAPSERET FELLOWSHIP,<br />
                        Upper St. George, Emitik Road,<br />
                        Kapseret, Uasin Gishu County,<br />
                        Kenya
                    </p>
                </div>

                {/* Giving */}
                <div className="text-center flex flex-col items-center">
                    <h3 className="font-serif font-bold text-xl mb-4 text-white">Giving</h3>
                    <p className="mb-4 text-stone-300">Support our mission through M-Pesa:</p>
                    <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-red-600 w-full max-w-sm transform hover:scale-105 transition-transform">
                        <p className="font-black text-blue-950 text-2xl md:text-3xl tracking-tight mb-1">Paybill: 4060109</p>
                        <p className="text-stone-600 font-bold uppercase tracking-widest text-xs">Account: Offerings / Tithe</p>
                    </div>
                </div>

                {/* Connect With Us */}
                <div className="text-center md:text-right flex flex-col items-center md:items-end">
                    <h3 className="font-serif font-bold text-xl mb-4 text-white">Connect With Us</h3>
                    <div className="flex space-x-6">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-3 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <Facebook size={28} />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-3 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <Youtube size={28} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-stone-400 text-sm">
                    © {currentYear} AIC KAPSERET FELLOWSHIP. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
