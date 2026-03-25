import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/packages')
      .then(res => res.json())
      .then(data => {
        setPackages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching packages:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="packages" className="py-24 bg-stone-light px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-earth-dark mb-4"
          >
            Popular <span className="text-primary-green">Packages</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Handpicked destinations tailored for the perfect weekend getaway.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green"></div></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.imageUrl} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur pb-1 pt-1.5 px-3 rounded-full text-sm font-bold text-earth-dark shadow-sm">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-earth-dark mb-2 group-hover:text-primary-green transition-colors">{pkg.title}</h3>
                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <span className="text-sm text-gray-500 font-medium tracking-wide">STARTING FROM</span>
                      <div className="text-2xl font-black text-accent-sun">{pkg.price}</div>
                    </div>
                    <button className="bg-earth-dark hover:bg-primary-green text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-md">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
