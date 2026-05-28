"use client";
import Image from "next/image";
import Link from "next/link";
import DivisionsData from "@/assets/jsonData/pancore/PancoreDivisionsData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreBusinessDivisions = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-divisions-left", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-divisions-area",
                        start: "top 80%",
                    },
                });

                gsap.from(".pancore-division-card", {
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-divisions-right",
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
        <div className="pancore-divisions-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-divisions-wrapper">
                    <div className="pancore-divisions-left">
                        <h2>{DivisionsData.title}</h2>
                        <p>{DivisionsData.description}</p>
                        <Link href={DivisionsData.linkUrl} className="pancore-explore-link">
                            {DivisionsData.linkText} <i className="fa fa-arrow-right" />
                        </Link>
                    </div>
                    <div className="pancore-divisions-right">
                        {DivisionsData.divisions.map((division) => (
                            <div className="pancore-division-card" key={division.id}>
                                <div className="division-icon">
                                    <Image
                                        src={`/assets/img/icon/${division.icon}`}
                                        alt={division.title}
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <h5>{division.title}</h5>
                                <p>{division.description}</p>
                                <Link href={division.link} className="division-arrow">
                                    <i className="fa fa-arrow-right" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PancoreBusinessDivisions;
