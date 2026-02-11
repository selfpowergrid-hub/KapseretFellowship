import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Music, BookOpen, Shield, Coffee, Users2, Star } from 'lucide-react';
import sunday1 from '../assets/images/sunday1.png';
import choir1 from '../assets/images/choir1.png';
import hero2 from '../assets/images/hero2.png';
import hero4 from '../assets/images/hero4.png';
import welfare1 from '../assets/images/welfare1.png';
import men1 from '../assets/images/men1.png';

interface Department {
    id: string;
    name: string;
    icon: React.ElementType;
    description: string;
    image: string;
    color: string;
}

const Departments: React.FC = () => {
    const departments: Department[] = [
        {
            id: 'youth',
            name: "Youth Department",
            icon: Users,
            description: "Empowering the next generation to lead and serve with passion and purpose.",
            image: hero4,
            color: "bg-red-500"
        },
        {
            id: 'women',
            name: "Women's Fellowship",
            icon: Heart,
            description: "A community of women growing together in faith, supporting one another in love.",
            image: hero2,
            color: "bg-blue-600"
        },
        {
            id: 'men',
            name: "Men's Fellowship",
            icon: Shield,
            description: "Building strong, godly men who lead their families and community with integrity.",
            image: men1,
            color: "bg-blue-950"
        },
        {
            id: 'sunday-school',
            name: "Sunday School",
            icon: BookOpen,
            description: "Nurturing children in the Word of God through fun and engaging lessons.",
            image: sunday1,
            color: "bg-red-600"
        },
        {
            id: 'choir',
            name: "Choir/Praise & Worship",
            icon: Music,
            description: "Leading the congregation into the presence of God through music and song.",
            image: choir1,
            color: "bg-stone-800"
        },
        {
            id: 'ushering',
            name: "Welfare/Hospitality & Ushering",
            icon: Coffee,
            description: "Greeting every visitor with a warm smile and ensuring a welcoming atmosphere.",
            image: welfare1,
            color: "bg-red-600"
        }
    ];

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Page Header */}
            <section className="bg-blue-950 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Departments</h1>
                <div className="w-24 h-1 bg-red-500 mx-auto mb-8" />
                <p className="text-stone-300 max-w-2xl mx-auto text-lg">
                    There is a place for everyone at AIC Kapseret. Discover how you can grow and use your gifts to serve others.
                </p>
            </section>

            {/* Departments Grid */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {departments.map((dept) => (
                        <div key={dept.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full border border-stone-100">
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={dept.image}
                                    alt={dept.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className={`absolute top-4 left-4 p-3 rounded-xl text-white ${dept.color} shadow-lg`}>
                                    <dept.icon size={24} />
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-serif font-bold text-blue-950 mb-4">{dept.name}</h3>
                                <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                                    {dept.description}
                                </p>
                                <Link
                                    to={`/departments/${dept.id}`}
                                    className="inline-flex items-center text-red-600 font-bold hover:text-red-700 transition-colors group"
                                >
                                    <span>Learn More</span>
                                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Get Involved Section */}
            <section className="bg-blue-950 py-20 px-4 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block bg-red-500/20 p-4 rounded-full mb-6">
                        <Star className="text-red-500" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Not Sure Where to Start?</h2>
                    <p className="text-xl text-stone-300 mb-10">
                        We would love to help you find the right community and department that matches your heart and talents.
                    </p>
                    <button className="bg-white text-blue-950 hover:bg-stone-100 px-8 py-4 rounded-full font-bold transition-colors flex items-center mx-auto space-x-2">
                        <Users2 size={20} />
                        <span>Connect With Us</span>
                    </button>
                </div>

                {/* Decorative Shapes */}
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
            </section>
        </div>
    );
};

export default Departments;
