import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';

import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';
import hero4 from '../assets/images/hero4.png';
import theme from '../assets/images/theme.png';

const heroImages = [hero1, hero2, hero3, hero4];

interface BibleVerse {
    verse: string;
    reference: string;
}

const Home: React.FC = () => {
    const [verseData, setVerseData] = useState<BibleVerse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

    // Hero carousel rotation
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const fetchVerse = async () => {
            try {
                setLoading(true);
                // Mocking the Gemini API call as specified
                // In a real scenario, this would be: 
                // fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY', ...)

                // Simulating API delay
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Simulating a response
                const mockResponse: BibleVerse = {
                    verse: "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.",
                    reference: "Jeremiah 29:11"
                };

                setVerseData(mockResponse);
                setError(false);
            } catch (err) {
                console.error("Error fetching verse:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchVerse();
    }, []);

    const fallbackVerse: BibleVerse = {
        verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        reference: "John 3:16"
    };

    const displayedVerse = error ? fallbackVerse : (verseData || fallbackVerse);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[80vh] overflow-hidden bg-stone-900">
                {heroImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Hero ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'
                            } ${index === 0 ? 'object-top' : 'object-center'}`}
                    />
                ))}

                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 h-full py-10 flex flex-col justify-end">
                    <div className="text-center text-white px-4 max-w-4xl mx-auto pb-4">
                        <div className="pt-6 border-t border-white/20">
                            <p className="text-xl md:text-2xl font-light text-stone-200 mb-8">
                                A place to grow in faith, find community, and serve with love.
                            </p>
                            <p className="text-lg italic mb-2">
                                “Therefore go and make disciples of all nations...”
                            </p>
                            <p className="text-red-500 font-bold uppercase tracking-widest text-sm">
                                Matthew 28:19
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Theme Image Section */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src={theme}
                            alt="AIC Church Theme"
                            className="w-full h-auto object-cover max-h-[600px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                </div>
            </section>

            {/* Service Times Section */}
            <section className="py-12 bg-stone-50 px-4">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-blue-950 mb-4 text-center">Join Our Services</h2>
                    <div className="w-24 h-1 bg-red-500 mx-auto" />
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Main Service", time: "9:30 AM – 11:30 AM" },
                        { title: "Sunday School", time: "10:00 AM – 11:30 AM" }
                    ].map((service, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-500 flex flex-col items-center hover:transform hover:scale-105 transition-all duration-300">
                            <Clock className="text-red-600 mb-4" size={40} />
                            <h3 className="text-xl font-serif font-bold text-blue-950 mb-2">{service.title}</h3>
                            <p className="text-stone-600 font-semibold">{service.time}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Verse of the Day Section */}
            <section className="py-20 bg-red-50 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-white p-3 rounded-full shadow-sm mb-6">
                        <BookOpen className="text-red-600" size={24} />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-blue-950 mb-8">Verse of the Day</h2>

                    <div className="relative">
                        {loading ? (
                            <div className="flex flex-col items-center space-y-4">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
                                <p className="text-stone-500 italic">Loading verse...</p>
                            </div>
                        ) : (
                            <blockquote className="bg-white p-8 md:p-12 rounded-lg shadow-md border-l-4 border-red-500 text-left">
                                <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-light mb-6">
                                    "{displayedVerse.verse}"
                                </p>
                                <footer className="text-red-600 font-bold uppercase tracking-widest text-sm">
                                    — {displayedVerse.reference}
                                </footer>
                            </blockquote>
                        )}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-950 py-20 px-4 text-center overflow-hidden relative">
                <div className="max-w-4xl mx-auto text-white">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Come Worship With Us</h2>
                    <p className="text-xl text-stone-300 mb-10">
                        Join us every Sunday at 9:30 AM for a transformative experience of worship, teaching, and fellowship.
                    </p>
                    <a
                        href="#/events"
                        className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
                    >
                        <span>See Upcoming Events</span>
                        <ArrowRight size={20} />
                    </a>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
            </section>
        </div>
    );
};

export default Home;
