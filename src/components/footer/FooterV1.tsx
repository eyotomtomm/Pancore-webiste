"use client"
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const FooterV1 = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Subscribing")
    }

    return (
        <>
            <footer className="bg-dark text-light" style={{ backgroundImage: 'url(/assets/img/shape/8.png)' }}>
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">

                            <div className="col-lg-4 col-md-6 item">
                                <div className="footer-item about">
                                    <Link href="/">
                                        <Image className="logo w-auto" src="/assets/img/pancore-logo.png" alt="Pancore" width={790} height={240} />
                                    </Link>
                                    <p>
                                        Pancore is a pan-African agribusiness company transforming how food is grown, processed, and distributed across the continent and beyond.
                                    </p>
                                    <form onSubmit={handleForm}>
                                        <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete="off" required />
                                        <button type="submit"> Go</button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 item">
                                <div className="footer-item link">
                                    <h4 className="widget-title">Company</h4>
                                    <ul>
                                        <li>
                                            <Link href="/pancore-about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/our-business">Our Business</Link>
                                        </li>
                                        <li>
                                            <Link href="/our-commodities">Our Commodities</Link>
                                        </li>
                                        <li>
                                            <Link href="/sustainability">Sustainability</Link>
                                        </li>
                                        <li>
                                            <Link href="/partnerships">Investors</Link>
                                        </li>
                                        <li>
                                            <Link href="/partnerships">Partnerships</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 item">
                                <div className="footer-item link">
                                    <h4 className="widget-title">Quick Links</h4>
                                    <ul>
                                        <li>
                                            <Link href="/pancore-careers">Careers</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog-standard">News &amp; Insights</Link>
                                        </li>
                                        <li>
                                            <Link href="/pancore-contact">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/pancore-about">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link href="/pancore-about">Terms of Use</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 item">
                                <div className="footer-item contact">
                                    <h4 className="widget-title">Get in Touch</h4>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="content">
                                                <strong>General:</strong>
                                                <a href="mailto:info@pancoreltd.com">info@pancoreltd.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="content">
                                                <strong>Careers:</strong>
                                                <a href="mailto:jobs@pancoreltd.com">jobs@pancoreltd.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-globe" />
                                            </div>
                                            <div className="content">
                                                <strong>Website:</strong>
                                                <a href="#">www.pancoreltd.com</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="footer-bottom text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>&copy; {(new Date().getFullYear())} Pancore Ltd. Building Africa&apos;s Next-Generation Agribusiness Platform. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-right-bottom">
                    <Image src="/assets/img/shape/7.png" alt="Shape" width={1000} height={500} />
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
