"use client";
import Image from "next/image";
import Link from "next/link";
import NewsData from "@/assets/jsonData/pancore/PancoreNewsData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PancoreNews = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-news-card", {
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-news-grid",
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
        <div className="pancore-news-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-news-header">
                    <h2>News &amp; Insights</h2>
                    <Link href="/blog-standard" className="pancore-view-all">
                        View all news <i className="fa fa-arrow-right" />
                    </Link>
                </div>
                <div className="pancore-news-grid">
                    {NewsData.map((news) => (
                        <div className="pancore-news-card" key={news.id}>
                            <div className="news-image">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    width={600}
                                    height={400}
                                />
                            </div>
                            <div className="news-meta">
                                <span className="news-category">{news.category}</span>
                                <span className="news-date">{news.date}</span>
                            </div>
                            <h5 className="news-title">
                                <Link href={news.link}>{news.title}</Link>
                            </h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PancoreNews;
