import React, {  useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

  };


  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (!form.user_name || !form.user_email || !form.message) return;

    emailjs.send(serviceID, templateID, form, {
      publicKey: publicKey,
    })
      .then(() => {
        Swal.fire({
                title: 'Email sent!',
                text: 'Thanks for reaching out. I’ll get back to you soon.',
                icon: 'success',
                background: 'rgba(255, 255, 255, 0.75)',
                color: '#111827', // Tailwind's gray-900
                iconColor: '#10B981', // Tailwind's emerald-500
                showConfirmButton: true,
                confirmButtonColor: '#6366F1', // Tailwind's indigo-500
                confirmButtonText: 'Great!',
                customClass: {
                    popup: 'rounded-2xl backdrop-blur-md shadow-lg',
                    title: 'text-xl font-semibold',
                    confirmButton: 'px-6 py-2 rounded-full text-white',
                }
                });

        setForm({ user_name: '', user_email: '', message: '' });
        })
        .catch(() => {

            Swal.fire({
                title: 'Something went wrong!',
                text: 'Please try again later or contact support.',
                icon: 'error',
                confirmButtonText: 'OK',
                customClass: {
                    popup: 'rounded-2xl backdrop-blur-md shadow-xl bg-white/70 border border-gray-200',
                    title: 'text-lg font-semibold text-gray-800',
                    htmlContainer: 'text-sm text-gray-600',
                    confirmButton: 'mt-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-full transition-all',
                    icon: 'swal2-no-background'
                },
                background: 'transparent',
                showClass: {
                    popup: 'animate-fade-in'
                },
                hideClass: {
                    popup: 'animate-fade-out'
                }
                });

      });
    
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-4">
      <div className="backdrop-blur-md bg-white/40 border border-gray-200/40 rounded-3xl shadow-xl p-10 w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Let’s get in touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            id='user_name'
            name="user_name"
            placeholder="Your name"
            value={form.user_name}
            onChange={handleChange}
            required
            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white/70 placeholder-gray-500"
          />
          <input
            type="email"
            id='user_email'
            name="user_email"
            placeholder="Your email"
            value={form.user_email}
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
            maxLength={500} 
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
