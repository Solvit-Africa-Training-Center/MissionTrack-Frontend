import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-r from-primaryColor-10 to-[#11A677] pt-20">
      {/* Call-to-action box (floating) */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[90%] max-w-2xl">
        <div className="bg-primaryColor-300 text-center p-6 rounded-2xl shadow-lg">
          <p className="text-white leading-relaxed text-lg">
            Don’t let manual processes slow your team down.
            <br /> See how easy mission management can be.
          </p>
          <button className="bg-white text-primaryColor-900 px-4 py-2 rounded-md font-semibold text-sm mt-6 hover:bg-gray-100 transition">
            Request Demo
          </button>
        </div>
      </div>

      {/* Footer content */}
      <div className="w-[90%] max-w-6xl mx-auto flex flex-col gap-8 pb-10 mt-20">
        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Product</h2>
            <div className="flex flex-col gap-2 text-gray-800">
              <a href="#">How it works</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold">Resources</h2>
            <div className="flex flex-col gap-2 text-gray-800">
              <a href="#">FAQs</a>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold">Company</h2>
            <div className="flex flex-col gap-2 text-gray-800">
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-4">
          <p className="text-gray-700 text-sm text-center">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
