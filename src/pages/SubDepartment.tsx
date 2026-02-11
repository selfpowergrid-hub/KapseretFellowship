import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Calendar, Users, MapPin, Mail, Image as ImageIcon } from 'lucide-react';

import sunday1 from '../assets/images/sunday1.png';
import sunday2 from '../assets/images/sunday2.png';
import sunday3 from '../assets/images/sunday3.png';
import sunday4 from '../assets/images/sunday4.png';
import choir1 from '../assets/images/choir1.png';
import choir2 from '../assets/images/choir2.png';
import hero2 from '../assets/images/hero2.png';
import hero4 from '../assets/images/hero4.png';
import welfare1 from '../assets/images/welfare1.png';
import welfare2 from '../assets/images/welfare2.png';
import welfare3 from '../assets/images/welfare3.png';
import men1 from '../assets/images/men1.png';
import men2 from '../assets/images/men2.png';
import keter from '../assets/images/keter.png';
import stanly from '../assets/images/stanly.png';

interface DeptDetails {
    name: string;
    description: string;
    vision: string;
    leader: string;
    leaderImage: string;
    meetingTime: string;
    location: string;
    activities: string[];
    bannerImage: string;
    gallery?: string[];
}

const SubDepartment: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const deptData: Record<string, DeptDetails> = {
        'youth': {
            name: "Youth Department",
            description: "Our Youth Department is a vibrant community of young believers (ages 13–25) dedicated to pursuing God, building authentic relationships, and making a difference in the world.",
            vision: "To see every young person rooted in Christ, growing in character, and influential in their generation.",
            leader: "Wilbone",
            leaderImage: "https://i.imgur.com/vHq494h.jpeg",
            meetingTime: "Saturdays at 2:00 PM",
            location: "Youth Hall",
            activities: ["Youth Seminar: Food as Medicine (April)", "C.Y.A Rallies (April & October)", "Annual Youth Retreat (August)", "Regional Senior Youth Rally", "Crossover Kesha Participation"],
            bannerImage: hero4,
            gallery: [hero4]
        },
        'women': {
            name: "Women's Fellowship",
            description: "The Women's Fellowship at AIC Kapseret provides a supportive environment for women to grow spiritually, develop friendships, and serve the church and community.",
            vision: "Developing godly women who are pillars of strength in their homes and the church.",
            leader: "Mrs Emmah Talam",
            leaderImage: "https://i.imgur.com/z03Bq8u.jpeg",
            meetingTime: "Thursdays at 4:00 PM",
            location: "Main Sanctuary",
            activities: ["Annual Regional Women Rally (Feb)", "DCC Annual Women Conference (April)", "CWF Rallies & Activities", "Widows Conference & Support", "Thanksgiving Rallies"],
            bannerImage: hero2,
            gallery: [hero2]
        },
        'men': {
            name: "Men's Fellowship",
            description: "Uniting men in Christ through fellowship, accountability, and service.",
            vision: "Men of integrity leading by example.",
            leader: "Mr. Keter",
            leaderImage: keter,
            meetingTime: "First Sunday of the Month at 4:00 PM",
            location: "Church Annex",
            activities: ["Men's Retreats & Seminars", "C.M.F & CHF Rallies", "Annual Men's Conference (August)", "Ushirika Rallies", "Men's Fellowship Sundays"],
            bannerImage: men1,
            gallery: [men1, men2]
        },
        'sunday-school': {
            name: "Sunday School",
            description: "Nurturing children in the Word of God through fun and engaging lessons designed for their age group.",
            vision: "Teaching children to know, love, and follow Jesus Christ.",
            leader: "Mrs Dinah Bitok",
            leaderImage: "https://images.unsplash.com/photo-1544717297-fa95b3ee51f8?auto=format&fit=crop&q=80&w=400",
            meetingTime: "Sundays at 9:00 AM",
            location: "Kids Zone",
            activities: ["Sunday School Rallies", "Annual VBS Week (December)", "Teachers Seminars & Retreats", "Junior Conference (November)", "Programme Graduation (August)"],
            bannerImage: sunday2,
            gallery: [sunday1, sunday2, sunday3, sunday4]
        },
        'choir': {
            name: "Choir/Praise & Worship",
            description: "A team of dedicated vocalists and musicians leading the congregation into meaningful worship and praise.",
            vision: "Creating an atmosphere where God's presence is celebrated through excellence in music.",
            leader: "Mrs Eunice Rutto",
            leaderImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400",
            meetingTime: "Saturdays at 3:00 PM",
            location: "Choir Room",
            activities: ["Choir Rallies & Motivations", "Studio Recording Sessions", "Worship Experience Events", "Open Air Crusades", "Annual Choir Day (October)"],
            bannerImage: choir1,
            gallery: [choir1, choir2]
        },
        'ushering': {
            name: "Welfare/Hospitality & Ushering",
            description: "Ensuring every person who walks through our doors feels expected, welcomed, and cared for.",
            vision: "Demonstrating Christ's love through exceptional service and hospitality.",
            leader: "Mr. Stanly Tiony",
            leaderImage: stanly,
            meetingTime: "Sundays at 8:00 AM",
            location: "Main Entrance",
            activities: ["Annual Welfare Day (May)", "Youth Welfare Support", "Greeters Certification", "Visitor Hospitality", "Event Ushering Services"],
            bannerImage: welfare1,
            gallery: [welfare1, welfare2, welfare3]
        }
    };

    const details = deptData[id || ''] || deptData['youth'];

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Banner Section */}
            <section
                className="relative h-64 md:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url('${details.bannerImage}')` }}
            >
                <div className="absolute inset-0 bg-blue-950/60" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                    <Link
                        to="/departments"
                        className="absolute top-8 left-4 md:left-12 flex items-center text-stone-300 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Departments
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">{details.name}</h1>
                    <div className="w-20 h-1 bg-red-500 mt-6" />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-blue-950 mb-6 border-b-2 border-stone-200 pb-2 flex items-center">
                                <ChevronRight className="text-red-500 mr-2" />
                                About Us
                            </h2>
                            <p className="text-stone-700 text-lg leading-relaxed">
                                {details.description}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                            <h2 className="text-2xl font-serif font-bold text-blue-950 mb-4 text-red-600 italic">Our Vision</h2>
                            <p className="text-xl text-stone-600 font-light italic">
                                "{details.vision}"
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-serif font-bold text-blue-950 mb-8 border-b-2 border-stone-200 pb-2 flex items-center">
                                <ChevronRight className="text-red-500 mr-2" />
                                Key Activities
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {details.activities.map((activity, index) => (
                                    <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                                        <div className="w-2 h-2 rounded-full bg-red-500 mr-4" />
                                        <span className="text-stone-700 font-medium">{activity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gallery Section */}
                        {details.gallery && details.gallery.length > 0 && (
                            <div className="pt-8">
                                <h2 className="text-3xl font-serif font-bold text-blue-950 mb-8 border-b-2 border-stone-200 pb-2 flex items-center">
                                    <ImageIcon className="text-red-500 mr-2" />
                                    Ministry Moments
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {details.gallery.map((img, index) => (
                                        <div key={index} className="group relative h-64 overflow-hidden rounded-2xl shadow-md border-4 border-white">
                                            <img
                                                src={img}
                                                alt={`${details.name} Gallery ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors duration-300" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Sidebar */}
                    <div className="space-y-8">
                        {/* Leader Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden">
                            <div className="bg-red-500 p-4 text-white font-bold text-center">
                                Department Leader
                            </div>
                            <div className="p-8 text-center">
                                <img
                                    src={details.leaderImage}
                                    alt={details.leader}
                                    className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md mb-4 object-cover"
                                />
                                <h3 className="text-xl font-serif font-bold text-blue-950">{details.leader}</h3>
                                <p className="text-red-600 font-bold text-xs uppercase tracking-widest mt-1">Chairperson</p>
                                <button className="mt-6 flex items-center justify-center space-x-2 bg-blue-950 text-white w-full py-3 rounded-xl hover:bg-blue-900 transition-colors">
                                    <Mail size={16} />
                                    <span>Get in Touch</span>
                                </button>
                            </div>
                        </div>

                        {/* Schedule Card */}
                        <div className="bg-blue-950 rounded-2xl shadow-lg p-8 text-white">
                            <h3 className="text-xl font-serif font-bold mb-6 border-b border-white/20 pb-2">Gathering Details</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Calendar className="text-red-500 mr-4 mt-1" size={20} />
                                    <div>
                                        <p className="text-stone-400 text-xs uppercase font-bold tracking-widest mb-1">When</p>
                                        <p className="text-lg">{details.meetingTime}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="text-red-500 mr-4 mt-1" size={20} />
                                    <div>
                                        <p className="text-stone-400 text-xs uppercase font-bold tracking-widest mb-1">Where</p>
                                        <p className="text-lg">{details.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Users className="text-red-500 mr-4 mt-1" size={20} />
                                    <div>
                                        <p className="text-stone-400 text-xs uppercase font-bold tracking-widest mb-1">Open To</p>
                                        <p className="text-lg">Everyone Welcome</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SubDepartment;
