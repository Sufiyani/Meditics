// // import { Heart, Users } from "lucide-react";

// // export default function Navbar() {
// //   return (
// //     <div>
   
// //       {/* 🔹 Main Navbar */}
// //       <nav className="bg-white shadow-sm px-4 py-3">
// //         <div className="max-w-7xl mx-auto flex items-center justify-between">
// //           {/* Logo */}
// //           <div className="flex items-center space-x-2">
// //             <Heart className="h-8 w-8 text-blue-500" />
// //             <span className="text-xl font-bold text-gray-800">Medilics</span>
// //           </div>

// //           {/* Menu Links */}
// //           <div className="hidden md:flex items-center space-x-8">
// //             <a href="/" className="text-gray-700 hover:text-blue-600">HOME</a>
// //             <a href="/about" className="text-gray-700 hover:text-blue-600">ABOUT</a>
// //             <a href="/services" className="text-gray-700 hover:text-blue-600">SERVICES</a>
// //             <a href="/blog" className="text-gray-700 hover:text-blue-600">BLOG</a>
// //             <a href="/contact" className="text-gray-700 hover:text-blue-600">CONTACT</a>
// //           </div>

// //           {/* Right Section */}
// //           <div className="flex items-center space-x-4">
// //             <div className="hidden md:block">
// //               <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
// //                 <Users className="h-4 w-4 text-gray-600" />
// //               </div>
// //             </div>
// //            <button className="bg-[#DBE9A1] hover:bg-[#c9d98a] text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
// //   BOOK APPOINTMENT
// // </button>

// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }



// import { NavLink } from "react-router-dom";
// import { Heart, Users } from "lucide-react";

// export default function Navbar() {
//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
//       : "text-gray-700 hover:text-blue-500";

//   return (
//     <div>
//       {/* 🔹 Main Navbar */}
//       <nav className="bg-white shadow-sm px-4 py-3">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <Heart className="h-8 w-8 text-blue-500" />
//             <span className="text-xl font-bold text-gray-800">Medilics</span>
//           </div>

//           {/* Menu Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <NavLink to="/" className={linkClass}>HOME</NavLink>
//             <NavLink to="/about" className={linkClass}>ABOUT</NavLink>

//             {/* 🔹 Services Dropdown */}
//             <div className="relative group">
//               <NavLink to="/services" className={linkClass}>
//                 SERVICES
//               </NavLink>
//               <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded mt-2 w-48">
//                 <NavLink to="/services/layout2" className="block px-4 py-2 text-gray-700 hover:text-blue-500">Services Layout 2</NavLink>
//                 <NavLink to="/services/details" className="block px-4 py-2 text-gray-700 hover:text-blue-500">Services Details</NavLink>
//               </div>
//             </div>

//             {/* 🔹 Pages Dropdown */}
//             <div className="relative group">
//               <NavLink to="/pages" className={linkClass}>
//                 PAGES
//               </NavLink>
//               <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded mt-2 w-48">
//                 <NavLink to="/pages/team" className="block px-4 py-2 text-gray-700 hover:text-blue-500">Team</NavLink>
//                 <NavLink to="/pages/team-details" className="block px-4 py-2 text-gray-700 hover:text-blue-500">Team Details</NavLink>
//               </div>
//             </div>

//             <NavLink to="/blog" className={linkClass}>BLOG</NavLink>
//             <NavLink to="/contact" className={linkClass}>CONTACT</NavLink>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center space-x-4">
//             <div className="hidden md:block">
//               <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                 <Users className="h-4 w-4 text-gray-600" />
//               </div>
//             </div>
//             <button className="bg-[#DBE9A1] hover:bg-[#c9d98a] text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
//               BOOK APPOINTMENT
//             </button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }



import { NavLink } from "react-router-dom";
import { Heart, Users, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
      : "text-gray-700 hover:text-blue-500";

  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div>
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
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
              >
                <span>SERVICES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 bg-white shadow-md rounded mt-2 w-48 z-50">
                  <NavLink
                    to="/serviceslayout2"
                    className="block px-4 py-2 text-gray-700 hover:text-blue-500"
                    onClick={() => setServicesOpen(false)}
                  >
                    Services Layout 2
                  </NavLink>
                  <NavLink
                    to="/services/details"
                    className="block px-4 py-2 text-gray-700 hover:text-blue-500"
                    onClick={() => setServicesOpen(false)}
                  >
                    Services Details
                  </NavLink>
                </div>
              )}
            </div>

            {/* 🔹 Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPagesOpen(!pagesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
              >
                <span>PAGES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    pagesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {pagesOpen && (
                <div className="absolute left-0 bg-white shadow-md rounded mt-2 w-48 z-50">
                  <NavLink
                    to="/pages/team"
                    className="block px-4 py-2 text-gray-700 hover:text-blue-500"
                    onClick={() => setPagesOpen(false)}
                  >
                    Team
                  </NavLink>
                  <NavLink
                    to="/pages/team-details"
                    className="block px-4 py-2 text-gray-700 hover:text-blue-500"
                    onClick={() => setPagesOpen(false)}
                  >
                    Team Details
                  </NavLink>
                </div>
              )}
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
    </div>
  );
}

