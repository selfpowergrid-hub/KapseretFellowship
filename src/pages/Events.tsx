import React, { useRef } from 'react';
import { Calendar, MapPin, AlertCircle, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import calendarData from '../data/calendar_events.json';

interface ExcelEvent {
    date: string;
    activity: string;
    venue: string;
    isHighlight: boolean;
}

const months = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const Events: React.FC = () => {
    const [selectedMonth, setSelectedMonth] = React.useState<string>(months[new Date().getMonth()]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - 200 : scrollLeft + 200;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    // Filter excel events for the selected month
    const monthData = (calendarData as any)[selectedMonth] || { events: [], notes: [] };
    const excelEvents: ExcelEvent[] = monthData.events;
    const monthlyNotes: string[] = monthData.notes;

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Page Header */}
            <section className="bg-blue-950 py-8 px-4 text-center relative overflow-hidden">
                <h1 className="text-3xl font-serif font-bold text-white mb-2">Church Calendar & Events</h1>
                <div className="w-16 h-1 bg-red-500 mx-auto mb-4" />

                <p className="text-stone-300 max-w-2xl mx-auto text-base">
                    Explore our year-long activities. Stay connected and grow with us.
                </p>

                {/* Decorative icons */}
                <Calendar className="absolute -top-10 -left-10 text-white/5" size={200} />
            </section>

            {/* Month Selector */}
            <div className="sticky top-16 z-40 bg-white border-b border-stone-200 py-2 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 flex items-center">
                    <button onClick={() => scroll('left')} className="p-1 hover:bg-stone-100 rounded-full transition-colors">
                        <ChevronLeft size={20} className="text-blue-950" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto scrollbar-hide space-x-2 px-2 flex-grow mask-fade-edges"
                    >
                        {months.map((month) => (
                            <button
                                key={month}
                                onClick={() => setSelectedMonth(month)}
                                className={`whitespace-nowrap px-4 py-1.5 rounded-full font-bold text-sm transition-all duration-300 ${selectedMonth === month
                                    ? 'bg-red-600 text-white shadow-md'
                                    : 'text-stone-500 hover:bg-stone-100'
                                    }`}
                            >
                                {month}
                            </button>
                        ))}
                    </div>

                    <button onClick={() => scroll('right')} className="p-1 hover:bg-stone-100 rounded-full transition-colors">
                        <ChevronRight size={20} className="text-blue-950" />
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Events Column */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-serif font-bold text-blue-950">
                                {selectedMonth} Activities
                            </h2>
                            <div className="flex items-center space-x-2 text-stone-500 text-sm">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span>High Priority</span>
                            </div>
                        </div>

                        {excelEvents.length > 0 ? (
                            <div className="space-y-4">
                                {excelEvents.map((event, idx) => (
                                    <div
                                        key={idx}
                                        className={`bg-white rounded-xl p-3 shadow-sm border transition-all hover:shadow-md flex items-center gap-4 group ${event.isHighlight ? 'border-red-200 bg-red-50/30' : 'border-stone-100'
                                            }`}
                                    >
                                        <div className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center shrink-0 transition-colors ${event.isHighlight ? 'bg-red-600 text-white' : 'bg-stone-100 text-stone-600'
                                            }`}>
                                            <span className="text-[10px] font-bold uppercase">{selectedMonth.substring(0, 3)}</span>
                                            <span className="text-base font-bold">{event.date.split('/')[1] || event.date}</span>
                                        </div>

                                        <div className="flex-grow">
                                            <h3 className="text-base font-bold text-blue-950 group-hover:text-red-600 transition-colors">
                                                {event.activity}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-3 text-stone-500 text-xs">
                                                {event.venue && (
                                                    <div className="flex items-center space-x-1">
                                                        <MapPin size={12} className="text-red-500" />
                                                        <span>{event.venue}</span>
                                                    </div>
                                                )}
                                                <div className="flex items-center space-x-1">
                                                    <Calendar size={12} className="text-red-500" />
                                                    <span>{event.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-stone-200">
                                <AlertCircle size={48} className="mx-auto text-stone-300 mb-4" />
                                <p className="text-stone-500 text-lg">No specific dates scheduled for this month yet.</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Notes Column */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-40 space-y-8">
                            <div className="bg-blue-950 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                                <h3 className="text-xl font-serif font-bold mb-4">
                                    Monthly Highlights
                                </h3>

                                {monthlyNotes.length > 0 ? (
                                    <ul className="space-y-3">
                                        {monthlyNotes.map((note, idx) => (
                                            <li key={idx} className="flex items-start space-x-2 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                                                <p className="text-stone-200 text-sm leading-snug">{note}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-stone-400 text-sm italic">No extra activities or notes.</p>
                                )}

                                {/* Decorative flare */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"></div>
                            </div>

                            {/* Internal Church Links */}
                            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                                <h4 className="font-bold text-blue-950 mb-3 uppercase tracking-wider text-xs">Need More Info?</h4>
                                <p className="text-stone-500 text-xs mb-4">
                                    Contact the DCC office for specific details regarding regional events.
                                </p>
                                <button className="w-full py-2 bg-stone-100 text-blue-950 rounded-lg text-sm font-bold hover:bg-red-500 hover:text-white transition-all">
                                    Contact Office
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter CTA */}
            <section className="bg-red-50 py-20 px-4 mt-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold text-blue-950 mb-6">Stay Updated</h2>
                    <p className="text-stone-600 mb-10 text-lg">
                        Don't miss out on any of our upcoming events and special services. Get our cell group booklets.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-blue-950 text-white font-bold px-10 py-4 rounded-2xl hover:bg-red-600 transition-all duration-300 shadow-xl flex items-center space-x-3 transform hover:scale-105">
                            <Download size={24} />
                            <span className="text-lg">Download Booklets</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
