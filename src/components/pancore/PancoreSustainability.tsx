"use client";
import Image from "next/image";
import SustainabilityData from "@/assets/jsonData/pancore/PancoreSustainabilityData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreSustainability = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-sustainability-header > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-sustainability-area",
                        start: "top 75%",
                    },
                });

                gsap.from(".pancore-focus-card", {
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-focus-grid",
                        start: "top 85%",
                    },
                });

                gsap.from(".pancore-impact-banner", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-impact-banner",
                        start: "top 90%",
                    },
                });
            }, el);

            ScrollTrigger.refresh();

            return () => ctx.revert();
        });

        return () => cancelAnimationFrame(timer);
    }, []);

    return (
        <div className="pancore-sustainability-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-sustainability-header">
                    <span className="pancore-sust-badge">{SustainabilityData.badge}</span>
                    <h2>{SustainabilityData.title}</h2>
                    <p>{SustainabilityData.description}</p>
                </div>
                <div className="pancore-focus-grid">
                    {SustainabilityData.focusAreas.map((area) => (
                        <div className="pancore-focus-card" key={area.id}>
                            <div className="focus-image">
                                <Image
                                    src={area.image}
                                    alt={area.title}
                                    width={800}
                                    height={600}
                                />
                            </div>
                            <div className="focus-content">
                                <h4>{area.title}</h4>
                                <p>{area.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pancore-impact-banner">
                    <h3>{SustainabilityData.impactVision.title}</h3>
                    <p>{SustainabilityData.impactVision.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PancoreSustainability;
