"use client";
import Image from "next/image";
import AboutData from "@/assets/jsonData/pancore/PancoreAboutData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreAbout = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-about-text > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-about-area",
                        start: "top 75%",
                    },
                });

                gsap.from(".pancore-about-image", {
                    x: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-about-area",
                        start: "top 75%",
                    },
                });

                gsap.from(".pancore-vision-card, .pancore-mission-card", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-vision-mission",
                        start: "top 85%",
                    },
                });
            }, el);

            ScrollTrigger.refresh();

            return () => ctx.revert();
        });

        return () => cancelAnimationFrame(timer);
    }, []);

    return (
        <div className="pancore-about-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-about-content">
                    <div className="pancore-about-text">
                        <span className="pancore-about-badge">{AboutData.badge}</span>
                        <h2>{AboutData.title}</h2>
                        <p>{AboutData.description}</p>
                    </div>
                    <div className="pancore-about-image">
                        <Image
                            src={AboutData.image}
                            alt="About Pancore"
                            width={800}
                            height={600}
                        />
                    </div>
                </div>
                <div className="pancore-vision-mission">
                    <div className="pancore-vision-card">
                        <h3>{AboutData.vision.title}</h3>
                        <p>{AboutData.vision.text}</p>
                    </div>
                    <div className="pancore-mission-card">
                        <h3>{AboutData.mission.title}</h3>
                        <p>{AboutData.mission.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PancoreAbout;
