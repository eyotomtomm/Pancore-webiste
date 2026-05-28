"use client";
import Image from "next/image";
import Link from "next/link";
import Counter from "../counter/Counter";
import HeroData from "@/assets/jsonData/pancore/PancoreHeroData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreHero = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.from(".pancore-hero-content > *", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });

            gsap.from(".pancore-hero-circle-image", {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.3,
            });

            gsap.from(".pancore-hero-stat-item", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.8,
            });

            gsap.to(".pancore-hero-circle-image", {
                yPercent: -15,
                ease: "none",
                scrollTrigger: {
                    trigger: ".pancore-hero-area",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <div className="pancore-hero-area" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="pancore-hero-content">
                            <span className="pancore-subtitle">{HeroData.subtitle}</span>
                            <h1>{HeroData.title}</h1>
                            <p className="pancore-hero-italic">{HeroData.italic}</p>
                            <p className="pancore-hero-desc">{HeroData.description}</p>
                            <div className="pancore-hero-buttons">
                                <Link href={HeroData.buttonLink} className="pancore-hero-btn">
                                    {HeroData.buttonText} <i className="fa fa-arrow-right" />
                                </Link>
                                <Link href={HeroData.secondButtonLink} className="pancore-hero-btn-secondary">
                                    {HeroData.secondButtonText} <i className="fa fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="pancore-hero-right">
                            <div className="pancore-hero-circle-image">
                                <Image
                                    src={HeroData.image}
                                    alt="Pancore Agribusiness"
                                    width={800}
                                    height={800}
                                    priority
                                />
                            </div>
                            <div className="pancore-hero-stats">
                                {HeroData.stats.map((stat) => (
                                    <div className="pancore-hero-stat-item" key={stat.id}>
                                        <div className="stat-label-top">{stat.label_top}</div>
                                        <div className="stat-number">
                                            <div className="timer">
                                                <Counter end={stat.end} />
                                            </div>
                                            <div className="operator">{stat.operator}</div>
                                        </div>
                                        <div className="stat-label-bottom">{stat.label_bottom}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PancoreHero;
