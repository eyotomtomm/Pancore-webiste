"use client";
import Image from "next/image";
import CommoditiesData from "@/assets/jsonData/pancore/PancoreCommoditiesData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreCommodities = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-commodities-header > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-commodities-area",
                        start: "top 75%",
                    },
                });

                gsap.from(".pancore-commodity-card", {
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-commodities-grid",
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
        <div className="pancore-commodities-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-commodities-header">
                    <span className="pancore-comm-badge">{CommoditiesData.badge}</span>
                    <h2>{CommoditiesData.title}</h2>
                    <p>{CommoditiesData.description}</p>
                </div>
                <div className="pancore-commodities-grid">
                    {CommoditiesData.categories.map((category) => (
                        <div className="pancore-commodity-card" key={category.id}>
                            <div className="commodity-image">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    width={800}
                                    height={600}
                                />
                            </div>
                            <div className="commodity-content">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <ul className="commodity-items">
                                    {category.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PancoreCommodities;
