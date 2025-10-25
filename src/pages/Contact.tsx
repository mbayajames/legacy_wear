import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Coordinates for Nairobi, Kenya
  const nairobiPosition = { lat: -1.2921, lng: 36.8219 };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-scale">
          <h1 className="text-5xl font-extrabold mb-4">
            Get in <span className="text-pink-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-900 border border-pink-500/30 rounded-lg p-6 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-slide-up">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 animate-pulse-pink">
                <Mail className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
              <p className="text-gray-300">tamarairungu@gmail.com</p>
              <p className="text-gray-300">tamarairungu@gmail.com</p>
            </div>

            <div className="bg-gray-900 border border-pink-500/30 rounded-lg p-6 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-slide-up">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 animate-pulse-pink">
                <Phone className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
              <p className="text-gray-300">+254 780 983 590</p>
              <p className="text-sm text-gray-300 mt-2">Mon-Fri: 9AM - 6PM</p>
            </div>

            <div className="bg-gray-900 border border-pink-500/30 rounded-lg p-6 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-slide-up">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 animate-pulse-pink">
                <MapPin className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Visit Us</h3>
              <p className="text-gray-300">123 Fashion Street</p>
              <p className="text-gray-300">Nairobi, Kenya</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-900 border border-pink-500/30 rounded-lg p-8 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-fade-in-scale">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-pink-500 text-black hover:bg-pink-600 rounded-md font-semibold transition-colors animate-pulse-pink">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 h-96 rounded-lg animate-fade-in-scale overflow-hidden">
          <MapContainer
            center={[nairobiPosition.lat, nairobiPosition.lng]}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
            className="map-container"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[nairobiPosition.lat, nairobiPosition.lng]}>
              <Popup>
                123 Fashion Street<br />
                Nairobi, Kenya
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;