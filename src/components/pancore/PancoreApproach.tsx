"use client";
import Image from "next/image";
import ApproachData from "@/assets/jsonData/pancore/PancoreApproachData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreApproach = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-approach-header > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-approach-area",
                        start: "top 75%",
                    },
                });

                gsap.utils.toArray<HTMLElement>(".pancore-pillar-block").forEach((block) => {
                    gsap.from(block, {
                        y: 50,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: block,
                            start: "top 85%",
                        },
                    });
                });
            }, el);

            ScrollTrigger.refresh();

            return () => ctx.revert();
        });

        return () => cancelAnimationFrame(timer);
    }, []);

    return (
        <div className="pancore-approach-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-approach-header">
                    <span className="pancore-approach-badge">{ApproachData.badge}</span>
                    <h2>{ApproachData.title}</h2>
                    <p>{ApproachData.description}</p>
                </div>
                {ApproachData.pillars.map((pillar) => (
                    <div className="pancore-pillar-block" key={pillar.id}>
                        <div className="pillar-image">
                            <Image
                                src={pillar.image}
                                alt={pillar.title}
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className="pillar-content">
                            <div className="pillar-number">{pillar.number}</div>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PancoreApproach;
