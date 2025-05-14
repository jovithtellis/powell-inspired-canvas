
import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-background">
      {/* Silver gradient separator at the top */}
      <div className="max-w-7xl mx-auto relative">
        <Separator className="bg-gradient-to-r from-gray-900 via-gray-400 to-gray-900 h-px opacity-60 mb-16" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Get in Touch</h2>
            <p className="text-gray-300 max-w-xl mb-8">
              Have a project in mind? Let's discuss how I can help bring your ideas to life. 
              Feel free to reach out via the form or directly to my email.
            </p>
            
            <div className="mb-12">
              <p className="text-lg mb-2 font-medium">Contact Info</p>
              <a href="mailto:hello@example.com" className="hover-underline text-gray-300 block mb-1">
                hello@example.com
              </a>
              <a href="tel:+11234567890" className="hover-underline text-gray-300">
                +1 (123) 456-7890
              </a>
            </div>
            
            <div>
              <p className="text-lg mb-4 font-medium">Follow Me</p>
              <div className="flex space-x-6">
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:border-gray-400 transition-colors">
                  <Instagram size={20} className="text-gray-300" />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:border-gray-400 transition-colors">
                  <Linkedin size={20} className="text-gray-300" />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:border-gray-400 transition-colors">
                  <Twitter size={20} className="text-gray-300" />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:border-gray-400 transition-colors">
                  <span className="text-gray-300 font-medium">B</span>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-b border-gray-700 focus:border-gray-300 focus:outline-none bg-transparent transition-colors text-gray-100"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-b border-gray-700 focus:border-gray-300 focus:outline-none bg-transparent transition-colors text-gray-100"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border-b border-gray-700 focus:border-gray-300 focus:outline-none bg-transparent transition-colors resize-none text-gray-100"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button type="submit" className="px-8 py-6 bg-transparent border border-gray-700 hover:border-gray-300 text-white hover:text-white rounded-none w-full md:w-auto bg-gradient-to-r from-transparent via-gray-800 to-transparent hover:via-gray-700 transition-all">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
