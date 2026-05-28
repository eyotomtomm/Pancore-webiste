"use client";
import Image from "next/image";
import AboutData from "@/assets/jsonData/pancore/PancoreAboutData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreValues = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-values-header > *", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-values-area",
                        start: "top 75%",
                    },
                });

                gsap.from(".pancore-values-card", {
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-values-grid",
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
        <div className="pancore-values-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-values-header">
                    <h2>Our Values</h2>
                    <p>The principles that guide everything we do at Pancore.</p>
                </div>
                <div className="pancore-values-grid">
                    {AboutData.values.map((value) => (
                        <div className="pancore-values-card" key={value.id}>
                            <div className="values-icon">
                                <Image
                                    src={`/assets/img/icon/${value.icon}`}
                                    alt={value.title}
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h4>{value.title}</h4>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PancoreValues;
