'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ParallaxScrollFeatureSection = () => {
    // Array of section data mapped to user skills
    const sections = [
        {
            id: 1,
            title: "PHP Development & IT Support",
            subtitle: "CORE COMPETENCY",
            description: "Developing reliable web applications using PHP, CodeIgniter, and MySQL while delivering technical support, hardware diagnostics, and system administration solutions.",
            imageUrl: '/feature/feature1.jpg',
            reverse: false,
            skills: ["PHP", "CodeIgniter", "MySQL", "Technical Support", "Windows Server", "Linux"]
        },
        {
            id: 2,
            title: "System Administration",
            subtitle: "IT INFRASTRUCTURE",
            description: "Managing and maintaining IT infrastructure, operating systems, server environments, and network resources to ensure stability, security, and performance.",
            imageUrl: '/feature/feature2.jpg',
            reverse: true,
            skills: ["Windows Server", "Linux", "Networking", "System Maintenance", "Hardware Support", "Infrastructure"]
        },
        {
            id: 3,
            title: "Technical Expertise",
            subtitle: "SKILLS & SERVICES",
            description: "Delivering reliable software solutions, technical support, hardware diagnostics, and system administration services with a focus on performance, stability, and business efficiency.",
            imageUrl: '/feature/feature3.jpg',
            reverse: false,
            skills: ["Problem Solving", "Technical Support", "System Administration", "PHP Development", "Hardware Diagnostics", "Team Collaboration"]
        }
    ]

    // Create refs and animations for each section exactly as per the provided format
    const sectionRefs = [useRef(null), useRef(null), useRef(null)];

    // Using individual hooks because mapping hooks inside a component can be tricky with React's Rules of Hooks
    // But since the count is static (3), we can do it safely or just define them.

    const scroll1 = useScroll({ target: sectionRefs[0], offset: ["start 85%", "end 15%"] }).scrollYProgress;
    const scroll2 = useScroll({ target: sectionRefs[1], offset: ["start 85%", "end 15%"] }).scrollYProgress;
    const scroll3 = useScroll({ target: sectionRefs[2], offset: ["start 85%", "end 15%"] }).scrollYProgress;

    const rawScrolls = [scroll1, scroll2, scroll3];

    // Lighter, GPU-accelerated animations to eliminate delay
    const opacityContents = rawScrolls.map(progress =>
        useTransform(progress, [0.05, 0.3, 0.7, 0.95], [0, 1, 1, 0])
    );

    const translateContents = rawScrolls.map(progress =>
        useTransform(progress, [0, 1], [80, -80])
    );

    const imageY = rawScrolls.map(progress =>
        useTransform(progress, [0, 1], [-40, 40])
    );

    const scales = rawScrolls.map(progress =>
        useTransform(progress, [0.05, 0.3, 0.7, 0.95], [0.9, 1, 1, 0.9])
    );

    return (
        <div className="relative z-20 bg-background dark:bg-black transition-colors duration-500 overflow-visible isolate">
            <div className="flex flex-col">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        ref={sectionRefs[index]}
                        className={cn(
                            "relative min-h-screen flex items-center justify-center py-40 px-6 md:px-12 lg:px-24",
                            "overflow-hidden"
                        )}
                    >
                        <div className={cn(
                            "w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-40 items-center",
                            section.reverse ? "lg:flex-row-reverse" : ""
                        )}>
                            {/* Text Content Side */}
                            <motion.div
                                style={{
                                    opacity: opacityContents[index],
                                    y: translateContents[index],
                                    willChange: "transform, opacity"
                                }}
                                className={cn(
                                    "flex flex-col space-y-10 z-20",
                                    section.reverse ? "lg:order-2" : "lg:order-1"
                                )}
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-px bg-primary/40" />
                                        <span className="text-xs md:text-sm font-mono font-bold tracking-[0.4em] text-primary uppercase">
                                            {section.subtitle}
                                        </span>
                                    </div>
                                    <h2 className={cn(
                                        "text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-tight text-zinc-900 dark:text-white uppercase",
                                        "break-words max-w-full"
                                    )}>
                                        {section.id === 1 ? "Intelligence Systems" : section.title}
                                    </h2>
                                </div>

                                <p className="text-lg md:text-xl text-zinc-500 dark:text-white/60 max-w-xl font-normal leading-relaxed">
                                    {section.description}
                                </p>

                                <div className="flex flex-wrap gap-3 md:gap-4">
                                    {section.skills.map((skill, i) => {
                                        const colors = [
                                            'hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400',
                                            'hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400',
                                            'hover:bg-violet-500/20 hover:border-violet-500/50 hover:text-violet-400',
                                            'hover:bg-rose-500/20 hover:border-rose-500/50 hover:text-rose-400',
                                            'hover:bg-amber-500/20 hover:border-amber-500/50 hover:text-amber-400'
                                        ];
                                        return (
                                            <span
                                                key={skill}
                                                className={cn(
                                                    "text-[11px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-5 py-2.5 rounded-full transition-all duration-300 cursor-default bg-transparent",
                                                    colors[i % colors.length]
                                                )}
                                            >
                                                {skill}
                                            </span>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                style={{
                                    opacity: opacityContents[index],
                                    scale: scales[index],
                                    y: imageY[index],
                                    willChange: "transform, opacity"
                                }}
                                className={cn(
                                    "relative aspect-square w-full max-w-[600px] mx-auto z-10",
                                    section.reverse ? "lg:order-1" : "lg:order-2"
                                )}
                            >
                                <div
                                    className="relative w-full h-full group overflow-hidden bg-transparent"
                                    style={{
                                        maskImage: 'radial-gradient(circle at center, black 30%, transparent 100%)',
                                        WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 100%)'
                                    }}
                                >
                                    <Image
                                        src={section.imageUrl}
                                        alt={section.title}
                                        fill
                                        priority={true}
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                        sizes="(max-width: 1024px) 100vw, 600px"
                                    />
                                    {/* Seamless blending gradients */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none opacity-60" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none opacity-40" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

