
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
    <section id="contact" className="section-padding bg-black">
      {/* Elegant silver gradient separator */}
      <div className="max-w-7xl mx-auto py-2">
        <Separator className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white">Get in Touch</h2>
            <p className="text-gray-300 max-w-xl mb-8">
              Have a project in mind? Let's discuss how I can help bring your ideas to life. 
              Feel free to reach out via the form or directly to my email.
            </p>
            
            <div className="mb-12">
              <p className="text-lg mb-2 font-medium text-white">Contact Info</p>
              <a href="mailto:hello@example.com" className="hover-underline text-gray-300 block mb-1">
                hello@example.com
              </a>
              <a href="tel:+11234567890" className="hover-underline text-gray-300">
                +1 (123) 456-7890
              </a>
            </div>
            
            <div>
              <p className="text-lg mb-4 font-medium text-white">Follow Me</p>
              <div className="flex space-x-8">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M22.003 9.031C22.003 9.031 21.772 7.057 20.316 6.056C18.53 4.759 16.51 4.756 15.5 4.636C12.004 4.356 8.504 4.356 8.504 4.356H8.496C8.496 4.356 4.996 4.356 1.5 4.636C0.49 4.756 -1.53 4.759 -3.316 6.056C-4.772 7.057 -5.003 9.031 -5.003 9.031C-5.003 9.031 -5.243 11.357 -5.243 13.681V15.86C-5.243 18.186 -5.003 20.511 -5.003 20.511C-5.003 20.511 -4.772 22.485 -3.316 23.486C-1.53 24.783 0.924 24.698 2.003 24.899C4.503 25.259 8.5 25.322 8.5 25.322C8.5 25.322 12.004 25.315 15.5 25.036C16.51 24.916 18.53 24.913 20.316 23.616C21.772 22.615 22.003 20.641 22.003 20.641C22.003 20.641 22.243 18.316 22.243 15.99V13.811C22.243 11.487 22.003 9.031 22.003 9.031ZM5.902 19.103V9.88L13.204 14.5L5.902 19.103Z" transform="translate(6 -3)" />
                  </svg>
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
              
              <Button type="submit" className="px-8 py-6 bg-transparent hover:bg-black text-white rounded-none w-full md:w-auto border border-white/30 hover:border-white/60 bg-gradient-to-r from-transparent via-gray-800 to-transparent">
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
