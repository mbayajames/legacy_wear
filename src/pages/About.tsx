import { Heart, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <style>
        {`
          @keyframes pulse-pink {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
          }
          @keyframes slide-up {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes fade-in-scale {
            0% { transform: scale(0.95); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pulse-pink {
            animation: pulse-pink 2s infinite ease-in-out;
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }
          .animate-fade-in-scale {
            animation: fade-in-scale 1s ease-out forwards;
          }
        `}
      </style>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-scale">
          <h1 className="text-5xl font-extrabold mb-4">
            About <span className="text-pink-500">Legacy Wear</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where style meets confidence. We're more than just a fashion brand - we're a lifestyle.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6 text-pink-500">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Legacy Wear was founded with a simple vision: to empower individuals through exceptional fashion. 
              What started as a passion project has grown into a beloved brand trusted by fashion enthusiasts worldwide.
            </p>
            <p className="text-gray-300 mb-4">
              We believe that what you wear is an expression of who you are. That's why we curate only the finest 
              pieces that combine style, quality, and comfort - helping you create your own legacy, one outfit at a time.
            </p>
            <p className="text-gray-300">
              Today, we're proud to serve thousands of customers who share our passion for timeless elegance 
              and contemporary fashion.
            </p>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-pink-500/20 to-black rounded-lg animate-fade-in-scale">
            <div className="absolute inset-0 bg-pink-500/10 animate-pulse-pink rounded-lg" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-pink-500">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-900 border border-pink-500/30 rounded-lg hover:border-pink-500 transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] animate-slide-up">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-pink">
                <Heart className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Quality First</h3>
              <p className="text-gray-300">
                Every piece is carefully selected for its superior craftsmanship
              </p>
            </div>

            <div className="text-center p-6 bg-gray-900 border border-pink-500/30 rounded-lg hover:border-pink-500 transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] animate-slide-up">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-pink">
                <Target className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Style Forward</h3>
              <p className="text-gray-300">
                We stay ahead of trends while honoring timeless classics
              </p>
            </div>

            <div className="text-center p-6 bg-gray-900 border border-pink-500/30 rounded-lg hover:border-pink-500 transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] animate-slide-up">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-pink">
                <Users className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Customer Focus</h3>
              <p className="text-gray-300">
                Your satisfaction and confidence are our top priorities
              </p>
            </div>

            <div className="text-center p-6 bg-gray-900 border border-pink-500/30 rounded-lg hover:border-pink-500 transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] animate-slide-up">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-pink">
                <Award className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Excellence</h3>
              <p className="text-gray-300">
                We strive for perfection in everything we do
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-pink-500/20 to-black rounded-lg p-12 text-center animate-fade-in-scale">
          <h2 className="text-3xl font-bold mb-6 text-pink-500">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To inspire confidence and self-expression through exceptional fashion. 
            We're committed to providing a curated selection of premium clothing, shoes, bags, 
            and accessories that help you look and feel your absolute best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
