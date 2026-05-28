"use client";
import Image from "next/image";
import OverviewData from "@/assets/jsonData/pancore/PancoreOverviewData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreOverview = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-overview-header > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-overview-area",
                        start: "top 75%",
                    },
                });

                gsap.from(".pancore-overview-card", {
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-overview-grid",
                        start: "top 80%",
                    },
                });
            }, el);

            ScrollTrigger.refresh();

            return () => ctx.revert();
        });

        return () => cancelAnimationFrame(timer);
    }, []);

    return (
        <div className="pancore-overview-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-overview-header">
                    <span className="pancore-overview-badge">{OverviewData.badge}</span>
                    <h2>{OverviewData.title}</h2>
                    <p>{OverviewData.description}</p>
                </div>
                <div className="pancore-overview-grid">
                    {OverviewData.highlights.map((item) => (
                        <div className="pancore-overview-card" key={item.id}>
                            <div className="overview-icon">
                                <Image
                                    src={`/assets/img/icon/${item.icon}`}
                                    alt={item.title}
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PancoreOverview;
