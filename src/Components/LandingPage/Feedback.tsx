import React from "react";
import { FaStar } from "react-icons/fa6";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-start gap-4 w-[320px] mx-auto">
      <div className="flex flex-col items-start">
        {/* Stars Row */}
        <div className="flex space-x-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-sm mt-5 text-start text-gray-800">{testimonial.text}</p>
      </div>

      {/* User Info */}
      <div className="flex justify-between gap-5 mt-7">
        <img src={testimonial.image} alt={testimonial.name} />
        <div className="mt-2">
          <h1 className="text-sm">{testimonial.name}</h1>
          <p className="text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Feedback: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Kimberly Mast",
      role: "CEO, Cute RITE",
      image: "src/assets/Ellipse 41.png",
      rating: 5,
      text: "MissionFlow has transformed how we handle business trips. What used to take days now takes minutes, and the expense tracking is phenomenal.",
    },
    {
      name: "John Doe",
      role: "CTO, Tech Solutions",
      image: "src/assets/Ellipse 41.png",
      rating: 5,
      text: "MissionFlow makes trip management incredibly easy and efficient. Highly recommended!",
    },
    {
      name: "Alice Smith",
      role: "Manager, Global Corp",
      image: "src/assets/Ellipse 41.png",
      rating: 5,
      text: "Our team's productivity has soared thanks to MissionFlow's streamlined process.",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full bg-primaryColor-600 p-[120px] max-sm:p-10">
        {/* Header */}
        <div className="flex justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold">What Our Users Say</h1>
            <p className="mt-5">
              Trusted by companies of all sizes to streamline their mission management
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
