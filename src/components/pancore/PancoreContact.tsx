"use client";
import ContactData from "@/assets/jsonData/pancore/PancoreContactData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const PancoreContact = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const timer = requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.from(".pancore-contact-form > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-contact-area",
                        start: "top 75%",
                    },
                });

                gsap.from(".pancore-contact-sidebar > *", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".pancore-contact-sidebar",
                        start: "top 85%",
                    },
                });
            }, el);

            ScrollTrigger.refresh();

            return () => ctx.revert();
        });

        return () => cancelAnimationFrame(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        form.reset();
        toast.success("Thank you for your message. We will get back to you shortly.");
    };

    return (
        <div className="pancore-contact-area" ref={sectionRef}>
            <div className="container">
                <div className="pancore-contact-wrapper">
                    <div className="pancore-contact-form">
                        <h2>{ContactData.title}</h2>
                        <p>{ContactData.description}</p>
                        <form onSubmit={handleSubmit}>
                            {ContactData.formFields.map((field) => (
                                <div className="form-group" key={field.id}>
                                    <label htmlFor={field.name}>{field.label}</label>
                                    {field.type === "textarea" ? (
                                        <textarea
                                            id={field.name}
                                            name={field.name}
                                            required={field.required}
                                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                                        />
                                    ) : (
                                        <input
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            required={field.required}
                                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                                        />
                                    )}
                                </div>
                            ))}
                            <button type="submit" className="pancore-submit-btn">
                                Send Message <i className="fa fa-arrow-right" />
                            </button>
                        </form>
                    </div>
                    <div className="pancore-contact-sidebar">
                        <h3>Contact Information</h3>
                        {ContactData.emails.map((item) => (
                            <div className="pancore-contact-info-item" key={item.id}>
                                <div className="contact-icon">
                                    <i className={item.icon} />
                                </div>
                                <div className="contact-detail">
                                    <strong>{item.label}</strong>
                                    <a href={`mailto:${item.email}`}>{item.email}</a>
                                </div>
                            </div>
                        ))}
                        <div className="pancore-contact-info-item">
                            <div className="contact-icon">
                                <i className="fas fa-globe" />
                            </div>
                            <div className="contact-detail">
                                <strong>Website</strong>
                                <a href="#">{ContactData.website}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PancoreContact;
