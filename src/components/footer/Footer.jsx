import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="text-gray-100 body-font bg-gradient-to-r from-pink-600 to-pink-700">
            {/* Top section with multiple columns */}
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap md:text-left text-center -mb-10 md:mb-0">
                    {/* Company Info Column */}
                    <div className="w-full md:w-1/4 px-4 mb-10">
                        <h2 className="title-font font-bold text-xl mb-3">E-Bharat</h2>
                        <p className="mb-4 text-sm">Your premier destination for quality products at competitive prices, delivering satisfaction since 2020.</p>
                        {/* Social Media Icons */}
                        <div className="flex mt-4 justify-center md:justify-start space-x-3">
                            <a className="hover:text-white transition-colors" aria-label="Facebook">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="hover:text-white transition-colors" aria-label="Twitter">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="hover:text-white transition-colors" aria-label="Instagram">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                            <a className="hover:text-white transition-colors" aria-label="LinkedIn">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx={4} cy={4} r={2} stroke="none" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Links Column */}
                    <div className="w-full md:w-1/4 px-4 mb-10">
                        <h2 className="title-font font-bold text-lg mb-3 tracking-wider">QUICK LINKS</h2>
                        <nav className="list-none mb-10 flex flex-col space-y-2">
                            <li>
                                <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
                            </li>
                            <li>
                                <Link to="/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link>
                            </li>
                            <li>
                                <Link to="/featured" className="hover:text-white transition-colors">Featured Products</Link>
                            </li>
                            <li>
                                <Link to="/deals" className="hover:text-white transition-colors">Special Deals</Link>
                            </li>
                        </nav>
                    </div>
                    
                    {/* Customer Service Column */}
                    <div className="w-full md:w-1/4 px-4 mb-10">
                        <h2 className="title-font font-bold text-lg mb-3 tracking-wider">CUSTOMER SERVICE</h2>
                        <nav className="list-none mb-10 flex flex-col space-y-2">
                            <li>
                                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link>
                            </li>
                            <li>
                                <Link to="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link>
                            </li>
                        </nav>
                    </div>
                    
                    {/* Newsletter Column */}
                    <div className="w-full md:w-1/4 px-4 mb-10">
                        <h2 className="title-font font-bold text-lg mb-3 tracking-wider">NEWSLETTER</h2>
                        <p className="text-sm mb-4">Stay updated with our latest offers and products</p>
                        <div className="flex flex-col md:flex-row w-full">
                            <input 
                                className="bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-2 md:mb-0 md:mr-2"
                                placeholder="Your Email"
                                type="email"
                                aria-label="Enter your email"
                            />
                            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-1 px-4 rounded transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom copyright section with divider */}
            <div className="border-t border-pink-700">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-sm text-center sm:text-left">
                        © {currentYear} E-Bharat — All Rights Reserved
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Link to="/privacy" className="text-sm mr-4 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-sm mr-4 hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/sitemap" className="text-sm hover:text-white transition-colors">Sitemap</Link>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;