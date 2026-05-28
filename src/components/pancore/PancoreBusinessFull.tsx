"use client";
import Image from "next/image";
import BusinessData from "@/assets/jsonData/pancore/PancoreBusinessData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreBusinessFull = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-business-full-header > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-business-full-area",
                        start: "top 75%",
                    },
                });

                gsap.utils.toArray<HTMLElement>(".pancore-division-row").forEach((row) => {
                    gsap.from(row, {
                        y: 50,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: row,
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
        <div className="pancore-business-full-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-business-full-header">
                    <span className="pancore-biz-badge">{BusinessData.badge}</span>
                    <h2>{BusinessData.title}</h2>
                    <p>{BusinessData.description}</p>
                </div>
                {BusinessData.divisions.map((division, index) => (
                    <div
                        className={`pancore-division-row ${index % 2 !== 0 ? "reverse" : ""}`}
                        key={division.id}
                    >
                        <div className="division-image">
                            <Image
                                src={division.image}
                                alt={division.title}
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className="division-content">
                            <h3>{division.title}</h3>
                            <p>{division.description}</p>
                            <ul className="division-highlights">
                                {division.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PancoreBusinessFull;
