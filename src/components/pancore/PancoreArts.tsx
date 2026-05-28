"use client";
import Image from "next/image";
import Link from "next/link";
import ArtsData from "@/assets/jsonData/pancore/PancoreArtsData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreArts = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-arts-header > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-arts-area",
                        start: "top 75%",
                    },
                });

                gsap.from(".pancore-arts-feature > *", {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-arts-feature",
                        start: "top 85%",
                    },
                });

                gsap.from(".pancore-arts-opencall", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-arts-opencall",
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
        <div className="pancore-arts-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-arts-header">
                    <span className="pancore-arts-badge">{ArtsData.badge}</span>
                    <h2>{ArtsData.title}</h2>
                    <p>{ArtsData.description}</p>
                </div>
                <div className="pancore-arts-feature">
                    <div className="arts-feature-image">
                        <Image
                            src={ArtsData.featureImage}
                            alt="African Arts Initiative"
                            width={800}
                            height={600}
                        />
                    </div>
                    <div className="arts-gallery-image">
                        <Image
                            src={ArtsData.galleryImage}
                            alt="African Art Gallery"
                            width={800}
                            height={600}
                        />
                    </div>
                </div>
                <div className="pancore-arts-opencall">
                    <h3>{ArtsData.openCall.title}</h3>
                    <p>{ArtsData.openCall.description}</p>
                    <div className="pancore-arts-ctas">
                        {ArtsData.ctas.map((cta) => (
                            <Link
                                key={cta.id}
                                href={cta.link}
                                className={cta.style === "primary" ? "pancore-btn-primary" : "pancore-btn-secondary"}
                            >
                                {cta.text} <i className="fa fa-arrow-right" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PancoreArts;
