import React from 'react';
import { Quote } from 'lucide-react';

const Pastors: React.FC = () => {
    const pastors = [
        {
            name: "Rael Meli",
            title: "Senior Pastor",
            image: "/src/assets/images/meli.png",
            bio: "Pastor Rael has been leading our fellowship with wisdom and grace since she joined our church. Her heart is for the spiritual growth of every member of our community."
        },
        {
            name: "Joshua Maiyo",
            title: "Associate Pastor",
            image: "/src/assets/images/joshuo.png",
            bio: "Pastor Joshua brings dynamic energy to our youth and teens departments. He is passionate about seeing the next generation rooted in the Word."
        }
    ];

    const testimonials = [
        {
            title: "Finding Peace",
            content: "When I first came to AIC Kapseret, I was searching for meaning. Through the teachings and the warm welcome of the congregation, I found the peace only Christ can provide.",
            author: "Sarah J."
        },
        {
            title: "Strength in Community",
            content: "The support system here is incredible. During my family's most difficult times, the church stood by us, not just in prayer but in tangible, loving ways.",
            author: "David K."
        },
        {
            title: "Growing in Faith",
            content: "My spiritual journey has been transformed. The Bible studies and sermons are deep, practical, and have helped me build a solid foundation for my life.",
            author: "Grace M."
        }
    ];

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Page Header */}
            <section className="bg-blue-950 py-16 px-4 text-center">
                <h1 className="text-4xl font-serif font-bold text-white mb-4">Our Shepherds</h1>
                <div className="w-20 h-1 bg-red-500 mx-auto" />
            </section>

            {/* Pastor Profiles */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {pastors.map((pastor, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center space-y-6">
                            <div className="relative">
                                <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-red-500 shadow-xl">
                                    <img
                                        src={pastor.image}
                                        alt={pastor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-blue-950 text-white p-3 rounded-full shadow-lg">
                                    <Quote size={20} className="text-red-500" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-blue-950 capitalize">{pastor.name}</h2>
                                <p className="text-red-600 font-bold tracking-widest text-sm uppercase mt-1">
                                    {pastor.title}
                                </p>
                            </div>
                            <p className="text-stone-600 max-w-md leading-relaxed">
                                {pastor.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Message Block */}
            <section className="bg-red-50 py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-red-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-red-500" />
                        <Quote className="text-red-200 absolute top-4 right-4" size={80} />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif font-bold text-blue-950 mb-6 italic">Message From Our Pastors</h3>
                            <p className="text-xl text-stone-700 italic leading-relaxed font-light">
                                "Welcome to 2026, our 'YEAR OF PURPOSE'. Our mandate this year is to discover and live out the divine intent of God for our lives. As a fellowship, we are committed to laying a firm foundation in Christ (Jan-Apr), pursuing the ultimate goal of making a visible impact (May-Aug), and walking confidently anchored in His faithfulness (Sept-Dec). We are created in Christ Jesus for good works, which God prepared beforehand (Ephesians 2:10). Let us pursue His purpose together."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faith Stories */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-blue-950 mb-4">Faith Stories</h2>
                    <p className="text-stone-500">How God is moving in our community</p>
                    <div className="w-16 h-1 bg-red-500 mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((story, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-l-8 border-red-500 hover:shadow-xl transition-shadow">
                            <h4 className="text-xl font-serif font-bold text-blue-950 mb-4">{story.title}</h4>
                            <p className="text-stone-600 italic mb-6 leading-relaxed">
                                "{story.content}"
                            </p>
                            <p className="text-red-600 font-bold text-sm tracking-wider uppercase">— {story.author}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Pastors;
