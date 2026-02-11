import React from 'react';
import { BookOpen, Calendar, User, Construction, Info } from 'lucide-react';

const Sermons: React.FC = () => {
    const writtenMessages = [
        {
            title: "The Foundation of Faith",
            speaker: "Pst. Rael Meli",
            date: "February 1, 2026",
            content: "What does it mean to build our lives on a solid foundation? In a world of shifting values and constant change, the Bible calls us to build our lives on the unshakeable rock of Jesus Christ. In Matthew 7, Jesus tells the parable of two builders: one wise, who built his house on the rock, and one foolish, who built his on the sand.\n\nThe storms came and beat against both houses. The house on the sand fell with a great crash, but the one on the rock stood firm. The storms of life—challenges, uncertainty, loss—are inevitable. The question is not if the storms will come, but whether our foundation will hold when they do.\n\nA foundation of faith is built on hearing and doing the will of God. It's about more than just belief; it's about obedience. It's about trusting in God's word, even when it doesn't make sense to us. It's a daily commitment to align our lives with His truth, finding our security not in our own strength, but in His unfailing promises."
        },
        {
            title: "The Power of Forgiveness",
            speaker: "Pst. Joshua Maiyo",
            date: "January 25, 2026",
            content: "Forgiveness is one of the most difficult commands in Scripture, yet it is also one of the most liberating. When we hold onto bitterness and resentment, we are the ones who remain in chains. Jesus taught us to pray, 'Forgive us our debts, as we also have forgiven our debtors.'\n\nThis message explores how letting go of offenses can heal our deepest wounds and restore our relationships, both with God and with others. It's not about condoning the wrong that was done; it's about releasing the person from the debt they owe us and entrusting them to God's justice. Forgiveness is a gift we give ourselves—the gift of freedom."
        },
        {
            title: "Living a Life of Purpose",
            speaker: "Pst. Rael Meli",
            date: "January 11, 2026",
            content: "What is your God-given purpose? In a world that often measures success by wealth or status, the Bible offers a different perspective. We were created for a reason: to glorify God and enjoy Him forever. This doesn't mean we all have to become pastors or missionaries.\n\nGod has given each of us unique gifts, talents, and passions. Our purpose is found in using those gifts for His glory, right where we are. Whether you're a teacher, a parent, a student, or a business owner, your life has a divine purpose. This sermon dives into how we can discover and live out the unique calling God has for each of our lives."
        }
    ];

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Page Header */}
            <section className="bg-blue-950 py-20 px-4 text-center">
                <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full mb-6 animate-pulse">
                    <Construction size={20} />
                    <span className="text-sm font-bold uppercase tracking-widest">Video Archive Under Construction</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">Sermon Messages</h1>
                <p className="text-stone-300 max-w-2xl mx-auto text-lg leading-relaxed">
                    Be encouraged and challenged by the timeless truth of God's Word in written form as we prepare our media archive.
                </p>
                <div className="w-24 h-1.5 bg-red-500 mx-auto mt-12 mb-4" />
            </section>

            {/* Notice Block */}
            <section className="max-w-4xl mx-auto -mt-10 px-4 mb-16 px-4">
                <div className="bg-white p-6 rounded-2xl shadow-xl flex items-start space-x-4 border-l-8 border-red-500">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600 shrink-0">
                        <Info size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-blue-950 text-lg">Note to Our Viewers</h4>
                        <p className="text-stone-600 text-sm leading-relaxed">
                            Our multimedia team is currently working on digitizing our sermon archives. For now, please enjoy these written summaries of our most recent messages. Videos and audio recordings will be available soon.
                        </p>
                    </div>
                </div>
            </section>

            {/* Written Sermons Grid */}
            <section className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                {writtenMessages.map((msg, idx) => (
                    <article key={idx} className="bg-white rounded-3xl shadow-lg border border-stone-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 group">
                        <div className="p-8 flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <div className="bg-red-50 p-3 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                    <BookOpen size={24} />
                                </div>
                                <span className="bg-stone-100 text-stone-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Written Sermon</span>
                            </div>

                            <h2 className="text-2xl font-serif font-bold text-blue-950 mb-4 group-hover:text-red-600 transition-colors">{msg.title}</h2>

                            <div className="flex flex-col space-y-2 mb-8 text-sm">
                                <div className="flex items-center text-stone-600">
                                    <User size={16} className="text-red-500 mr-2" />
                                    <span className="font-semibold">{msg.speaker}</span>
                                </div>
                                <div className="flex items-center text-stone-400">
                                    <Calendar size={16} className="mr-2" />
                                    <span>{msg.date}</span>
                                </div>
                            </div>

                            <div className="text-stone-600 leading-relaxed space-y-4">
                                {msg.content.split('\n\n').map((para, pIdx) => (
                                    <p key={pIdx}>{para}</p>
                                ))}
                            </div>
                        </div>
                        <div className="px-8 py-6 bg-stone-50 border-t border-stone-100 italic text-stone-400 text-sm">
                            "Thy Word is a lamp unto my feet, and a light unto my path." — Psalm 119:105
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Sermons;
