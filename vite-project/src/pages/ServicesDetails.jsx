import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";
const ServicesDetails = () => {


    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-[#1A3471] text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-6xl font-bold mb-4">Service Details</h1>
                    <div className="flex items-center justify-center text-lg">
                        <Link to="/" className="white hover:text-blue-600 text-sm">
                            Home
                        </Link>
                        <ChevronRight className="mx-2 w-4 h-4" />
                        <span className='text-sm'>Service Details</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Content */}
                    <div className="lg:w-2/3">
                        {/* Main Image */}
                        <div className="mb-8 -ml-40 ">
                            <img
                                src="/images/Personalized stress.jpg"
                                alt="Counseling session"
                                className="w-[1000px] h-[500px] object-cover rounded-lg"
                            />
                        </div>

                        {/* Title and Description */}
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 -ml-40">
                            Personalized Stress & Lifestyle Counseling
                        </h2>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed -ml-40">
                            Our Stress & Lifestyle Counseling service is designed to help you take control of your mental well-being and daily
                            habits. Whether you're dealing with anxiety, burnout, or life imbalance, we offer expert support that fits your
                            personal needs.
                        </p>

                        {/* Quote */}
                        <div className="bg-[#EDEDFF] border-b-3 border-blue-500 p-6 mb-12 italic text-black -ml-40">
                            <p className="text-xl">
                                This blog post hits the mark perfectly for our target audience — busy professionals who
                                care about their health but struggle with time. — <strong className="text-blue-600">John Doe</strong>
                            </p>
                        </div>


                        {/* What We Offer Section */}
                        <div className="mb-12">
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="lg:w-1/2 -ml-40">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer:</h3>

                                    <div className="space-y-4 text-xl font-bold">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <span className="text-gray-700">One-on-one virtual sessions with certified counselors</span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <span className="text-gray-700">Stress and anxiety management techniques</span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <span className="text-gray-700">Sleep improvement & energy-boosting strategies</span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <span className="text-gray-700">Personalized nutrition and wellness plans</span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <span className="text-gray-700">Habit-building for a healthier, more balanced life</span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <span className="text-gray-700">Confidential, judgment-free care</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-1/2">
                                    <img
                                        src="/images/offer.jpg"
                                        alt="Professional counselor"
                                        className="w-full h-100 object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="mb-12 -ml-40">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features:</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    {/* Icon */}
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-800 text-md">
                                        <span className="font-semibold text-gray-950 text-xl">
                                            Stress Reduction Coaching:
                                        </span>{" "}
                                        Learn to manage pressure burnout, and daily anxiety with proven techniques.
                                    </p>
                                </div>


                                <div className="flex items-start gap-3">
                                    {/* Icon */}
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-800 text-md">
                                        <span className="font-semibold text-gray-950 text-xl">
                                            Personalized Nutrition & Wellness Plans:
                                        </span>{" "}
                                        Build healthier routines that support productivity and rest.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    {/* Icon */}
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-800 text-md">
                                        <span className="font-semibold text-gray-950 text-xl">
                                            Lifestyle Planning:
                                        </span>{" "}
                                        Create sustainable habits for nutrition, exercise, and sleep.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    {/* Icon */}
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-800 text-md">
                                        <span className="font-semibold text-gray-950 text-xl">
                                            One-on-One Counseling:
                                        </span>{" "}
                                        Talk to licensed professionals in a private, secure online setting.
                                    </p>

                                </div>
                                <div className="flex items-start gap-3">
                                    {/* Icon */}
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-800 text-md">
                                        <span className="font-semibold text-gray-950 text-xl">
                                            Mental Wellness Support:
                                        </span>{" "}
                                        Gain tools to improve focus, mood, and overall life satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why It Matters */}
                        <div className="mb-12 -ml-40">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why It Matters:</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Improving your lifestyle isn't just about avoiding illness — it's about living better, feeling stronger, and thinking
                                clearer every day.
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div className="mb-12 -ml-40">
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg bg-[#F2F2F2]">
                                    <button
                                        onClick={() => toggleFaq(0)}
                                        className="w-full flex items-center justify-between p-6 text-left "
                                    >
                                        <span className="font-semibold text-gray-900 text-xl">
                                            Do I need a diagnosis to book a session?
                                        </span>
                                        {expandedFaq === 0 ? (
                                            <ChevronDown className="w-5 h-5 text-blue-500" />
                                        ) : (
                                            <ChevronRight className="w-5 h-5 text-gray-400" />
                                        )}
                                    </button>
                                    {expandedFaq === 0 && (
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-600">
                                                Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="border border-gray-200 rounded-lg bg-[#F2F2F2]">
                                    <button
                                        onClick={() => toggleFaq(1)}
                                        className="w-full flex items-center justify-between p-6 text-left "
                                    >
                                        <span className="font-semibold text-gray-900 text-xl">
                                            Why Join Us as a Volunteer?
                                        </span>
                                        {expandedFaq === 1 ? (
                                            <ChevronDown className="w-5 h-5 text-blue-500" />
                                        ) : (
                                            <ChevronRight className="w-5 h-5 text-gray-400" />
                                        )}
                                    </button>
                                    {expandedFaq === 1 && (
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-600">
                                                Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="border border-gray-200 rounded-lg bg-[#F2F2F2]">
                                    <button
                                        onClick={() => toggleFaq(2)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="font-semibold text-gray-900 text-xl">
                                            Be Part of a Community
                                        </span>
                                        {expandedFaq === 2 ? (
                                            <ChevronDown className="w-5 h-5 text-blue-500" />
                                        ) : (
                                            <ChevronRight className="w-5 h-5 text-gray-400" />
                                        )}
                                    </button>
                                    {expandedFaq === 2 && (
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-600">
                                                Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:w-1/3">
                        {/* Our Services */}
                        <div className="bg-[#F2F2F2] shadow-md p-6 mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-blue-500 text-white rounded text-lg">
                                    <span>General Health Consultation </span>
                                    <span>↗</span>
                                </div>

                                <div className="flex items-center justify-between p-3 hover:bg-blue-500  hover:text-white rounded cursor-pointer  text-black rounded text-lg">
                                    <span>Chronic Disease Management</span>
                                     <span>↗</span>
                                </div>

                                <div className="flex items-center justify-between p-3 hover:bg-blue-500  hover:text-white rounded cursor-pointer  text-black rounded text-lg">
                                    <span>Online Video Consultation</span>
                                     <span>↗</span>
                                </div>

                                <div className="flex items-center justify-between p-3 hover:bg-blue-500  hover:text-white rounded cursor-pointer  text-black rounded text-lg">
                                    <span >Preventive Health Checkups</span>
                                     <span>↗</span>
                                </div>

                                <div className="flex items-center justify-between p-3 hover:bg-blue-500 hover:text-white  rounded cursor-pointer  text-black rounded text-lg">
                                    <span >Women's & Men's Health</span>
                                     <span>↗</span>
                                </div>

                                <div className="flex items-center justify-between p-3 hover:bg-blue-500 hover:text-white rounded cursor-pointer text-lg">
  <span>Family Health Services</span>
       <span>↗</span>
</div>

                            </div>
                        </div>

                        {/* Contact Card */}
<div className="bg-[#2C509A] text-white rounded-lg p-8 w-full max-w-lg h-auto">
    <h3 className="text-3xl font-bold mb-4">Have Additional Questions?</h3>
    
    <div className="border-t border-white/30"></div>

    <div className="space-y-3 mb-6 mt-6">
        <p className="text-white text-lg">3rd Avenue, 83 Manhattan, London, UK</p>
        <p className="text-white font-bold text-2xl">+1890 123 456</p>
        <p className="text-white">support@example.com</p>
    </div>

    <button className="bg-[#DBE9A1] text-gray-900 px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2">
        CONTACT US
        <ChevronRight className="w-4 h-4" />
    </button>
</div>

                    </div>
                </div>
            </div>
        </div>
    );
};




export default ServicesDetails
