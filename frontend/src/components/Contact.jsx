import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('http://localhost:8080/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch (error) {
       setStatus('error');
       console.error("Error submitting inquiry:", error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold text-earth-dark mb-6">Plan Your <span className="text-primary-green">Next Adventure</span></h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Reach out to us to start planning your perfect getaway. We specialize in tailoring custom itineraries for families, couples, and corporate retreats across South India's most pristine destinations.
          </p>
          <div className="space-y-4 text-earth-dark">
             <div className="flex flex-col">
                <span className="font-bold">Email Us</span>
                <a href="mailto:info@bettadahuva.com" className="text-primary-green hover:underline">info@bettadahuva.com</a>
             </div>
             <div className="flex flex-col">
                <span className="font-bold">Call Us</span>
                <a href="tel:+910000000000" className="text-primary-green hover:underline">+91 00000 00000</a>
             </div>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex-1 bg-stone-light p-8 rounded-3xl shadow-lg border border-gray-100"
        >
           <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
             <div className="flex flex-col gap-2">
               <label className="font-semibold text-sm text-gray-700">Full Name</label>
               <input type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full bg-white px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green transition-all" required placeholder="John Doe" />
             </div>
             
             <div className="flex flex-col gap-2">
               <label className="font-semibold text-sm text-gray-700">Phone Number / WhatsApp</label>
               <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-white px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green transition-all" required placeholder="+91 98765 43210" />
             </div>

             <div className="flex flex-col gap-2">
               <label className="font-semibold text-sm text-gray-700">Destination & Message</label>
               <textarea rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green transition-all" required placeholder="Tell us where you want to go..." />
             </div>

             <button type="submit" disabled={status === 'submitting'} className="w-full bg-earth-dark hover:bg-primary-green text-white font-bold py-4 rounded-xl shadow-md transition-colors flex justify-center items-center gap-2">
                {status === 'success' ? (
                  <><CheckCircle2 className="w-5 h-5 text-green-400" /> Message Sent!</>
                ) : status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <><Send className="w-5 h-5" /> Send Inquiry</>
                )}
             </button>
           </form>
        </motion.div>

      </div>
    </section>
  );
}
