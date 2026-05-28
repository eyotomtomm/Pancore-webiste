"use client";
import Image from "next/image";
import Link from "next/link";
import PartnershipsData from "@/assets/jsonData/pancore/PancorePartnershipsData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancorePartnerships = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-partnerships-header > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-partnerships-area",
                        start: "top 75%",
                    },
                });

                gsap.from(".pancore-partner-card", {
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-partner-grid",
                        start: "top 85%",
                    },
                });

                gsap.from(".pancore-partner-cta", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-partner-cta",
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
        <div className="pancore-partnerships-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-partnerships-header">
                    <span className="pancore-partner-badge">{PartnershipsData.badge}</span>
                    <h2>{PartnershipsData.title}</h2>
                    <p>{PartnershipsData.description}</p>
                </div>
                <div className="pancore-partner-grid">
                    {PartnershipsData.partnerTypes.map((partner) => (
                        <div className="pancore-partner-card" key={partner.id}>
                            <div className="partner-icon">
                                <Image
                                    src={`/assets/img/icon/${partner.icon}`}
                                    alt={partner.title}
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <h4>{partner.title}</h4>
                            <p>{partner.description}</p>
                        </div>
                    ))}
                </div>
                <div className="pancore-partner-cta">
                    <h3>{PartnershipsData.cta.title}</h3>
                    <p>{PartnershipsData.cta.description}</p>
                    <Link href={PartnershipsData.cta.buttonLink} className="pancore-cta-btn-white">
                        {PartnershipsData.cta.buttonText} <i className="fa fa-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PancorePartnerships;
