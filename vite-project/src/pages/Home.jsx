
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import {
  UserPlus,
  Stethoscope,
  Activity,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Heart,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
      : "text-gray-700 hover:text-blue-500";
  return (
    <>

     {/* 🔹 Top Info Bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-300">📞</span>
              <span>Help Line: +208-6666-0112</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-300">🕒</span>
              <span>Open Hours: Mon - Fri 8.00 am - 6.00 pm</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <span className="text-green-300">📧</span>
            <span>info@example.com</span>
          </div>
        </div>
      </div>

       {/* 🔹 Main Navbar */}
      <nav className="bg-white shadow-sm px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-800">Medilics</span>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={linkClass}>HOME</NavLink>
            <NavLink to="/about" className={linkClass}>ABOUT</NavLink>

            {/* 🔹 Services Dropdown */}
            <div className="relative group">
              <NavLink to="/services" className={linkClass}>
                SERVICES
              </NavLink>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded mt-2 w-48">
                <NavLink to="/services/layout2" className="block px-4 py-2 text-gray-700 hover:text-blue-500">Services Layout 2</NavLink>
                <NavLink to="/services/details" className="block px-4 py-2 text-gray-700 hover:text-blue-500">Services Details</NavLink>
              </div>
            </div>

            {/* 🔹 Pages Dropdown */}
            <div className="relative group">
              <NavLink to="/pages" className={linkClass}>
                PAGES
              </NavLink>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded mt-2 w-48">
                <NavLink to="/pages/team" className="block px-4 py-2 text-gray-700 hover:text-blue-500">Team</NavLink>
                <NavLink to="/pages/team-details" className="block px-4 py-2 text-gray-700 hover:text-blue-500">Team Details</NavLink>
              </div>
            </div>

            <NavLink to="/blog" className={linkClass}>BLOG</NavLink>
            <NavLink to="/contact" className={linkClass}>CONTACT</NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-gray-600" />
              </div>
            </div>
            <button className="bg-[#DBE9A1] hover:bg-[#c9d98a] text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </nav>

      
      {/* Hero Section */}
      <div className="bg-gradient-to-br bg-[#091C33] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div className="space-y-6">
              <div className="bg-green-500 text-white px-2 py-1 rounded text-xs inline-block">
                HI I AM
              </div>


              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Meet Dr. Tushar Raja <br />
                — Your Trusted <br />
                Healthcare Partner
              </h1>

              <p className="text-blue-100 text-sm leading-relaxed">
                Dr. Tushar is a highly experienced and compassionate [Specialization, e.g., General Physician / Cardiologist / Dermatologist] dedicated.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center">
                  BOOK APPOINTMENT <span className="ml-2">→</span>
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition-colors">
                  VIEW SCHEDULE <span className="ml-2">▶</span>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative">
              <div className="w-80 h-96 bg-[#091C33] rounded-lg mx-auto flex items-center justify-center">
                <img src="/images/Hero Sec img.png" alt="" />
              </div>

              {/* Floating card */}
              <div className="absolute top-4 -right-40 bg-[#26374C] text-white p-4 rounded-lg text-sm max-w-xs">
                <p className="text-xs text-blue-200 mb-1">
                  We Combine the finest conventional with new
                </p>
                <p className="text-xs text-blue-200 mb-1">
                  therapies and the highest standard of medical
                </p>
                <p className="text-xs text-blue-200 mb-2">knowledge</p>
                <p className="text-[#D7E59F] text-xs">— Robin Ray, 2017</p>

        </div>
{/* Social Icons - Right side of doctor image */}
<div className=" absolute top-1/2 -right-105 -translate-y-1/2 flex flex-col space-y-4 text-xl text-white bg-[#3B6DFD]">
  <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
  <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
  <a href="#" className="hover:text-blue-400"><i className="fab fa-youtube"></i></a>
  <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
</div>

      


            </div>
          </div>
        </div>
      </div>

      {/* Schedule and Journey Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Schedule Card */}
          <div className="bg-[#173168] text-white rounded-xl p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold">Time For Meet</h3>
            </div>

            <div className="space-y-4">
              <div className="border-b border-blue-600 pb-3">
                <p className="font-semibold">Monday - Friday</p>
                <p className="text-blue-200 text-sm">9:00 PM - 10:00 PM</p>
              </div>

              <div className="border-b border-blue-600 pb-3">
                <p className="font-semibold">Saturday</p>
                <p className="text-blue-200 text-sm">9:00 PM - 10:00 PM</p>
              </div>
            </div>

            {/* Keep same bg for emergency care box */}
            <div className="mt-6 bg-blue-500 rounded-lg p-4 text-center">
              <h4 className="font-bold mb-2">For Emergency Care</h4>
              <p className="text-sm text-blue-100">Call us 24/7 at</p>
              <p className="text-lg font-bold">+91 98765 43210</p>
            </div>
          </div>

          {/* Journey Section */}
<div className="space-y-6">
  <div className="flex items-center space-x-2">
    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
      ABOUT US
    </div>
  </div>



  {/* Heading */}
  <h2 className="text-2xl font-bold text-gray-900">
    My Journey in Medicine
  </h2>


            <p className="text-gray-600 text-xs leading-relaxed">
              I'm Dr. Tushar Raja a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care. With over 12 years of experience, I’ve had the privilege of treating thousands <br></br>of  patients with empathy, accuracy, and dedication.
            </p>

            <p className="text-gray-600 text-xs leading-relaxed">
              I strongly believe that medicine is not just about treating diseases, but about understanding people, <br></br> building trust, and guiding them toward long-term wellness.
            </p>

            <div className="flex items-center text-sm text-blue-600 mb-4">
              <Stethoscope className="h-4 w-4 mr-2" />
              <span className="text-black ">
                Doctor's Motto or Belief:  <span className="text-xs text-black">Healing begins with listening.</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
                VIEW RESUME
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md font-medium hover:bg-gray-50">
                VIDEO CALL <span className="ml-2">📞</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Medical Services Section */}
      <section className="relative py-16 bg-[#F2F2F2]">
        {/* Left Side Illustration */}
        <div className="absolute left-0 top-10 w-40 opacity-80">
          <img src="/images/service-inject.svg" alt="Left Decoration" className="w-full" />
        </div>

        {/* Right Side Illustration */}
        <div className="absolute right-0 top-10 w-40 opacity-80">
          <img src="/images/service-inject-right.svg" alt="Right Decoration" className="w-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              SERVICES I PROVIDE
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Medical Services I Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* General Health Check-Ups */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                General Health Check-Ups
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regular comprehensive health assessments to maintain optimal
                wellness and early detection of potential health issues.
              </p>
            </div>

            {/* Stress & Lifestyle Counseling */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Stress & Lifestyle Counseling
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional guidance to help manage stress, improve lifestyle
                choices, and enhance overall mental well-being.
              </p>
            </div>

            {/* Referral to Specialists */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Referral to Specialists
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Coordinated care through our network of trusted specialists to
                ensure you receive the most appropriate treatment.
              </p>
            </div>
          </div>
        </div>
      </section>


      <div className="w-full">
        {/* HEALTH PROBLEMS SECTION */}
        <section className="relative w-full text-white overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">

            <div className="absolute inset-0 bg-[#0E2138]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
            {/* Badge */}
            <div className="inline-block bg-green-600 text-white text-xs px-4 py-1 rounded-full mb-4">
              Do You Need Emergency Care
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Do You Have Health Problems
            </h2>

            {/* Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md mb-10">
              I NEED HELP →
            </button>

            {/* Swiper Slider */}
            <div className="max-w-4xl mx-auto">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="pb-10"
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <SwiperSlide key={i}>
                    <div className="w-full h-24 bg-[#0E2138] rounded-lg flex items-center justify-center">
                      <img
                        src={`/images/envato.svg`} // Same image for all slides
                        alt="Envato Logo"
                        className="h-6 object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* QUALIFICATION & AWARDS */}
        <section className="relative py-20 bg-white text-center overflow-hidden">
          {/* Left Side Illustration */}
          <div className="absolute left-0 top-10 w-40">
            <img
              src="/images/qualification-vector-1.svg"
              alt="Left Decoration"
              className="w-full" // sirf original image, fully visible
            />
          </div>

          {/* Right Side Illustration */}
          <div className="absolute right-0 top-10 w-40 opacity-80">
            <img
              src="/images/service-inject-right.svg"
              alt="Right Decoration"
              className="w-full "
            />
          </div>

          {/* Badge */}
          <div className="inline-block bg-blue-100 text-blue-600 text-xs px-4 py-1 rounded-full mb-4 relative z-10">
            My Qualification
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-12 relative z-10">
            My Qualification & Awards
          </h2>

          {/* Qualification Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 relative z-10 ">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-[#F2F2F2] rounded-lg shadow-sm p-4 text-left"
              >
                <p className="font-semibold text-gray-800">Oxford University</p>
                <p className="text-gray-600 text-sm">
                  Bachelor of Medicine & Bachelor of Surgery (MBBS)
                </p>
                <p className="text-gray-400 text-xs">Jan 2014 – Dec 2018</p>
              </div>
            ))}
          </div>


          <div className="inline-flex items-center gap-6 p-4 bg-[#F2F2F2] rounded-md">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/images/award-${i}.svg`}
                alt={`Award ${i}`}
                className="h-16 object-contain"
              />
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
              VIEW ALL AWARDS →
            </button>
          </div>


        </section>


      </div>



      {/* Client Feedbacks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Client's Testimonials
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Clients Feedbacks
          </h2>

          {/* Navigation arrows */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
              ←
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
              →
            </button>
          </div>

          {/* Testimonial Slider - Add your slider logic here */}
          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              className="pb-12"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white p-8 rounded-xl shadow-sm border text-center max-w-2xl mx-auto">
                    {/* Profile Image */}
                   <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
  <img 
    src="/images/reviewer-1.jpg"  // ek hi image use karni hai
    alt="Client" 
    className="w-full h-full rounded-full object-cover" 
  />
</div>


                    {/* Name and Role */}
                    <div className="mb-4">
                      <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm inline-block mb-2">
                        Cedric Martinez
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Consectetur adipiscing elit. Integer nunc viverra laoreet est, quis dapibus massa vestibulum eget. Proin sit amet tellus rutrum, feugiat nibh quis, accumsan magna.
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Consult Your Doctor Online Section */}
      <section className="relative py-20 bg-[#0E2138] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                ONLINE HEALTH & YOUR CONVENIENCE
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Consult Your Doctor Online<br />
                — Anytime, Anywhere
              </h2>

              {/* Description */}
              <p className="text-blue-100 text-sm leading-relaxed">
                Skip the waiting room! With our secure telemedicine platform and convenient service, you can now talk to experienced doctors from the comfort of your home.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Speak with certified specialists in real time</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Easy appointment booking system</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Private, secure, and confidential video calls</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Affordable rates | Quality healthcare services</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
                Book a Video Call →
              </button>
            </div>

            {/* Right Image - Two Mobile Screens Side by Side */}
            <div className="relative flex items-center justify-center">
              {/* First Mobile Screen - Left side, positioned higher */}
              <div className="relative z-20 -mr-8">
                <div className="w-56 h-[28rem] bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img src="/images/video-call-1.png" alt="Dr. Thanhy Rizka Video Call" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Second Mobile Screen - Right side, positioned lower */}
              <div className="relative z-10 mt-12">
                <div className="w-56 h-[28rem] bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img src="/images/video-call-2.png" alt="Doctor Video Call" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Health, My Words Blog Section */}
      <section className="py-20 bg-[#F9FDFD]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Doctor's Blog
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Your Health, My Words
            </h2>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img src="/images/Health1.jpg" alt="Medical Tips" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  The Medical Minute Quick Tips for Better Living
                </h3>

                {/* Date and Event Info */}
                <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
                    <span>11 March 2025</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <span>Event</span>
                  </div>
                </div>

                <button className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors">
                  READ MORE
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img src="/images/Health2.jpg" alt="Healthy Habits" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  Healthy Habits for Busy Professionals
                </h3>

                {/* Date and Event Info */}
                <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
                    <span>11 March 2025</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <span>Event</span>
                  </div>
                </div>

                <button className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors">
                  READ MORE
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img src="/images/Health3.jpg" alt="Doctor Answers" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  Ask the Doctor: Real Answers, Real Care
                </h3>

                {/* Date and Event Info */}
                <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
                    <span>11 March 2025</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <span>Event</span>
                  </div>
                </div>

                <button className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors">
                  READ MORE
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Appointment
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Apply for Appointment
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Map */}
            <div className="w-full">
              <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src="/images/Map.PNG"
                  alt="Clinic Location Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Form Card */}
            <div className="w-full">
              <div className=" p-8 -mt -20 ">
                <form className="space-y-4">
                 {/* Row 1 */}
<div className="grid grid-cols-2 gap-6"> {/* gap-4 → gap-6 for more space */}
  <input
    type="text"
    placeholder="Full Name"
    className="w-full px-6 py-6 bg-[#FFFFFF] border-0 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="email"
    placeholder="Email Address"
    className="w-full px-6 py-4 bg-[#FFFFFF] border-0 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


                 {/* Row 2 */}
<div className="grid grid-cols-2 gap-6 mt-10"> {/* gap-4 → gap-6 */}
  <input
    type="tel"
    placeholder="Your Number"
    className="w-full px-6 py-6 bg-[#FFFFFF] border-0 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="date"
    placeholder="mm/dd/yyyy"
    className="w-full px-6 py-6 bg-[#FFFFFF] border-0 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* Row 3 */}
<div className="grid grid-cols-2 gap-6 mt-10"> {/* thoda gap aur top margin */}
  <select className="w-full px-6 py-6 bg-[#FFFFFF] border-0 rounded-lg text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
    <option>Select Doctor</option>
    <option>Doctor 1</option>
    <option>Doctor 2</option>
    <option>Doctor 3</option>
  </select>
  <select className="w-full px-6 py-6 bg-[#FFFFFF] border-0 rounded-lg text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
    <option>Select Treatment</option>
    <option>Treatment 1</option>
    <option>Treatment 2</option>
    <option>Treatment 3</option>
  </select>
</div>


                  {/* Checkbox */}
                  <div className="flex items-center pt-2">
                    <input
                      type="checkbox"
                      className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label className="text-sm text-gray-700">I agree terms and conditions.</label>
                  </div>

                  {/* Submit Button */}
                  <button className="w-50 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-sm mt-6">
                    Appointment Now →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Footer */}


    <footer className="bg-[#0D1F35] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* footer top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <a href="index.html" className="block mb-4">
              <img src="/images/Meditics heart logo.svg" alt="logo" className="w-36" />
            </a>
            
            <p className="text-sm leading-relaxed mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            {/* Newsletter Form */}
            <form className="flex items-center bg-white rounded-lg overflow-hidden mb-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-4 py-2 text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 font-semibold text-sm hover:bg-blue-700"
              >
                SUBSCRIBE
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex space-x-4 ">
              <a
                href="#"
                className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-[#27384C] rounded-full text-white hover:bg-blue-600 hover:text-white transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="service-details.html" className="hover:text-blue-300">
                  General Health Check-Ups
                </a>
              </li>
              <li>
                <a href="service-details.html" className="hover:text-blue-300">
                  Stress & Lifestyle Counseling
                </a>
              </li>
              <li>
                <a href="service-details.html" className="hover:text-blue-300">
                  Vaccinations & Immunizations
                </a>
              </li>
              <li>
                <a href="service-details.html" className="hover:text-blue-300">
                  Referral to Specialists
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="index.html" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html" className="hover:text-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Pages
                </a>
              </li>
              <li>
                <a href="blog.html" className="hover:text-blue-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">
              102/ B Street, New Elephant Road, Sandigo, USA
            </p>
            <div className="text-sm mb-2">
              <span className="font-semibold">Email Us: </span>
              <a href="mailto:info@example.com" className="hover:text-blue-300">
                info@example.com
              </a>
            </div>
            <div className="text-sm">
              <span className="font-semibold">Call Now: </span>
              <a href="tel:20866660112" className="hover:text-blue-300">
                +208-6666-0112
              </a>
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="mt-12 border-t border-white/20 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm">
          <div className="text-center md:text-left">
            © <span className="font-bold">Meditics</span>{" "}
            {new Date().getFullYear()}. All Rights Reserved.
          </div>

          <div className="flex justify-center space-x-3">
            <img src="/images/payment-method-1.png" alt="Payment Method" className="h-6" />
            <img src="/images/payment-method-2.png" alt="Payment Method" className="h-6" />
            <img src="/images/payment-method-3.png" alt="Payment Method" className="h-6" />
            <img src="/images/payment-method-4.png" alt="Payment Method" className="h-6" />
            <img src="/images/payment-method-5.png" alt="Payment Method" className="h-6" />
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-blue-300">
              Terms of Use
            </a>
            <a href="#" className="hover:text-blue-300">
              Privacy Environmental Policy
            </a>
          </div>
        </div>
      </div>
    </footer>


    </>
  );
}
