"use client";
import Image from "next/image";
import Link from "next/link";
import CareersData from "@/assets/jsonData/pancore/PancoreCareersData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreCareers = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-careers-header > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-careers-area",
                        start: "top 75%",
                    },
                });

                gsap.from(".pancore-career-card", {
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-careers-grid",
                        start: "top 85%",
                    },
                });

                gsap.from(".pancore-careers-cta", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-careers-cta",
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
        <div className="pancore-careers-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-careers-header">
                    <span className="pancore-careers-badge">{CareersData.badge}</span>
                    <h2>{CareersData.title}</h2>
                    <p>{CareersData.description}</p>
                </div>
                <div className="pancore-careers-grid">
                    {CareersData.offerings.map((offering) => (
                        <div className="pancore-career-card" key={offering.id}>
                            <div className="career-icon">
                                <Image
                                    src={`/assets/img/icon/${offering.icon}`}
                                    alt={offering.title}
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <h4>{offering.title}</h4>
                            <p>{offering.description}</p>
                        </div>
                    ))}
                </div>
                <div className="pancore-careers-cta">
                    <h3>{CareersData.cta.title}</h3>
                    <p>{CareersData.cta.description}</p>
                    <a href={`mailto:${CareersData.contactEmail}`} className="email-link">
                        {CareersData.contactEmail}
                    </a>
                    <br />
                    <Link href={CareersData.cta.buttonLink} className="pancore-cta-btn-white">
                        {CareersData.cta.buttonText} <i className="fa fa-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PancoreCareers;
