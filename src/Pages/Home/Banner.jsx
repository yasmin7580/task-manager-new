import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full overflow-hidden bg-slate-900 border-y border-slate-800 shadow-2xl">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=2000"
                    alt="Desk Workspace Background"
                    className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40"></div>
            </div>

            {/* Content Grid */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 sm:px-10 lg:px-12 py-12 sm:py-16">

                {/* Left Text Content */}
                <div className="lg:col-span-7 flex flex-col items-start space-y-5 text-left">

                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs sm:text-sm font-semibold tracking-wide uppercase backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                        <span>Smart Productivity Suite</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Master Your Day, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            Achieve More.
                        </span>
                    </h1>

                    {/* Subtitle / Description */}
                    <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                        Streamline your workflow, organize daily schedules effortlessly, and keep track of your notes and goals all in one intuitive workspace.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 cursor-pointer">
                            <span>Get Started Free</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        <button className="px-6 py-3.5 rounded-xl bg-slate-800/85 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-200 cursor-pointer">
                            Explore Features
                        </button>
                    </div>

                    {/* Quick Stats / Trust Indicators */}
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 w-full max-w-lg">
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-white">99%</p>
                            <p className="text-xs sm:text-sm text-slate-400">Task Clarity</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-white">10x</p>
                            <p className="text-xs sm:text-sm text-slate-400">Productivity</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-white">24/7</p>
                            <p className="text-xs sm:text-sm text-slate-400">Organization</p>
                        </div>
                    </div>

                </div>

                {/* Right Visual Graphic (Calendar, Pens, Notebooks) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-sm">

                        {/* Glow Effect */}
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-2xl"></div>

                        {/* Visual Container Card */}
                        <div className="relative rounded-2xl bg-slate-900/80 border border-slate-700/60 p-5 sm:p-6 backdrop-blur-xl shadow-2xl space-y-4">

                            {/* Header inside card */}
                            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                </div>
                                <span className="text-xs font-medium text-slate-400">Planner & Agenda</span>
                            </div>

                            {/* Calendar Image Mockup */}
                            <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-700/50 group">
                                <img
                                    src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800"
                                    alt="Calendar Planner"
                                    className="w-full h-44 sm:h-52 object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
                                    <span className="bg-indigo-600/90 px-2.5 py-1 rounded-md backdrop-blur-md">October Agenda</span>
                                    <span className="bg-slate-900/80 px-2 py-1 rounded-md backdrop-blur-md">3 Active Tasks</span>
                                </div>
                            </div>

                            {/* Notebooks & Pens Image Mockup */}
                            <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-700/50 group">
                                <img
                                    src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800"
                                    alt="Notebooks and Pens"
                                    className="w-full h-32 sm:h-36 object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-3 left-3 text-xs text-slate-200 font-medium">
                                    📝 Daily Notes & Stationery
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;