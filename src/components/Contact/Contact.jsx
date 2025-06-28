import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    emailjs.send('service_dpp6k8q', 'template_anuninu', form,{
         publicKey:'0zhJ5vUlkIoh_dvLD',
    })
      .then((response) => {
        console.log('Email sent successfully:', response);
        setForm({ name: '', email: '', message: '' });
        })
        .catch((error) => {
        console.error('Error sending email:', error);
      });
    console.log('Form submitted:', form);
    
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-4">
      <div className="backdrop-blur-md bg-white/40 border border-gray-200/40 rounded-3xl shadow-xl p-10 w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Let’s get in touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white/70 placeholder-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white/70 placeholder-gray-500"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white/70 placeholder-gray-500 resize-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
