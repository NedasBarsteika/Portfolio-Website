import React, { useState } from 'react';

export default function ContactForm() {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') {
      alert('Message cannot be empty!');
      return;
    }

    // Replace this alert with an actual backend email service
    alert(`Message sent: ${message}`);
    setMessage('');
  };

  return (
    <section id="contact-me" className="py-20">
      <h2 className="text-4xl font-bold text-center underline decoration-red-500 mb-8">
        Contact Me
      </h2>
      <div className="max-w-4xl mx-auto">
        {/* Contact Links */}
        <div className="flex flex-col items-center mb-10">
          <p className="text-lg mb-4">
            Email: <a href="mailto:nedas.barsteika@gmail.com" className="text-blue-500">nedas.barsteika@gmail.com</a>
          </p>
          <p className="text-lg">
            LinkedIn: <a href="https://www.linkedin.com/in/nedas-barsteika/" className="text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/nedas-barsteika/</a>
          </p>
        </div>

        {/* Message Box */}
        <form onSubmit={handleSendMessage} className="flex flex-col gap-4">
          <textarea
            className="w-full h-40 p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};