"use client";
import Image from "next/image";
import Link from "next/link";
import PurposeData from "@/assets/jsonData/pancore/PancorePurposeData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancorePurpose = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-purpose-left > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-purpose-area",
                        start: "top 70%",
                    },
                });

                gsap.from(".pancore-value-card", {
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-purpose-right",
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
        <div className="pancore-purpose-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-purpose-wrapper">
                    <div className="pancore-purpose-left">
                        <div className="pancore-purpose-badge">{PurposeData.badge}</div>
                        <h2>{PurposeData.title}</h2>
                        <p>{PurposeData.description}</p>
                        <Link href={PurposeData.linkUrl} className="pancore-purpose-link">
                            {PurposeData.linkText} <i className="fa fa-arrow-right" />
                        </Link>
                    </div>
                    <div className="pancore-purpose-right">
                        {PurposeData.values.map((value) => (
                            <div className="pancore-value-card" key={value.id}>
                                <div className="value-icon">
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
        </div>
    );
};

export default PancorePurpose;
