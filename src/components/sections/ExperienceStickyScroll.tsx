"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { GraduationCap, BookOpen, Star, Binary, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExperienceStickyScroll({ isLowPowerMode = false }: { isLowPowerMode?: boolean }) {
    const journeyContent = [
        {
            label: "Higher Education • 2022–2025",
            title: "Calicut University",
            description: "BSc. Computer Science — Studied core computer science concepts including programming, databases, algorithms, networking, and web technologies. Built a strong theoretical foundation to complement hands-on development experience.",
            content: (
                <div className="h-full w-full flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 relative group overflow-hidden border border-white/10">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-black/50 to-black/80" />
                    </div>

                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative mb-6">
                            <GraduationCap className={cn("w-20 h-20 text-white drop-shadow-lg", !isLowPowerMode && "animate-pulse")} />
                            <Binary className={cn("w-8 h-8 text-blue-400 absolute -top-2 -right-2 opacity-80", !isLowPowerMode && "animate-bounce")} />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {["BSc. CS", "Programming", "Databases"].map(s => (
                                <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-white/10 text-white border border-white/20 font-mono font-bold backdrop-blur-md shadow-lg">
                                    {s}
                                </span>
                            ))}
                        </div>
                        <p className="text-[10px] font-mono text-white/60 uppercase tracking-widest bg-black/20 px-2 py-1 rounded">Computer Science</p>
                    </div>

                    {!isLowPowerMode && (
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-scan z-20" />
                    )}
                </div>
            ),
        },
        {
            label: "Foundation • 2020–2022",
            title: "GVHSS Kondotty",
            description: "Plus Two — Science stream. Built analytical and problem-solving skills that form the foundation of my engineering mindset through Mathematics and Physics.",
            content: (
                <div className="h-full w-full flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 relative group overflow-hidden border border-white/10">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 via-rose-900/30 to-black/80 mix-blend-multiply" />
                    </div>

                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative mb-6">
                            <BookOpen className="w-20 h-20 text-white drop-shadow-lg hover:rotate-6 transition-transform duration-500" />
                            <Sparkles className={cn("w-6 h-6 text-yellow-400 absolute -bottom-2 -left-2", !isLowPowerMode && "animate-pulse")} />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {["Science", "Kerala", "Foundation"].map(s => (
                                <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-white/10 text-white border border-white/20 font-mono font-bold backdrop-blur-md shadow-lg">
                                    {s}
                                </span>
                            ))}
                        </div>
                        <p className="text-[10px] font-mono text-white/60 uppercase tracking-widest bg-black/20 px-2 py-1 rounded">Logical Foundation</p>
                    </div>
                </div>
            ),
        }
    ];

    return (
        <div className="w-full">
            <StickyScroll content={journeyContent} isLowPowerMode={isLowPowerMode} />
        </div>
    );
}
