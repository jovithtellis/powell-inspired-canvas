
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-xl mb-8">
              Have a project in mind? Let's discuss how I can help bring your ideas to life. 
              Feel free to reach out via the form or directly to my email.
            </p>
            
            <div className="mb-12">
              <p className="text-lg mb-2 font-medium">Contact Info</p>
              <a href="mailto:hello@example.com" className="hover-underline text-gray-600 block mb-1">
                hello@example.com
              </a>
              <a href="tel:+11234567890" className="hover-underline text-gray-600">
                +1 (123) 456-7890
              </a>
            </div>
            
            <div>
              <p className="text-lg mb-2 font-medium">Follow Me</p>
              <div className="flex space-x-6">
                <a href="#" className="hover-underline text-gray-600">Twitter</a>
                <a href="#" className="hover-underline text-gray-600">Instagram</a>
                <a href="#" className="hover-underline text-gray-600">LinkedIn</a>
                <a href="#" className="hover-underline text-gray-600">Dribbble</a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-black focus:outline-none bg-transparent transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-black focus:outline-none bg-transparent transition-colors"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-black focus:outline-none bg-transparent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button type="submit" className="px-8 py-6 bg-black text-white hover:bg-gray-800 rounded-none w-full md:w-auto">
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
