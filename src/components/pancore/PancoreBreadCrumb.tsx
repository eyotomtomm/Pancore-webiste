"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface PancoreBreadCrumbProps {
    title: string;
    subtitle: string;
    bgImage: string;
}

const PancoreBreadCrumb = ({ title, subtitle, bgImage }: PancoreBreadCrumbProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.from(el.querySelector("h1")!, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.2,
            });
            gsap.from(el.querySelector("p")!, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.4,
            });
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <div
            className="pancore-breadcrumb-area"
            style={{ backgroundImage: `url(${bgImage})` }}
            ref={sectionRef}
        >
            <div className="container">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default PancoreBreadCrumb;
