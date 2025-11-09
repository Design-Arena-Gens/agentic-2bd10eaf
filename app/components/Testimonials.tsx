'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'محمد احمدی',
      role: 'مالک پژو ۲۰۶',
      text: 'واقعاً از کیفیت خدمات و رفتار کارکنان راضی هستم. کارشناسان بسیار حرفه‌ای و با تجربه هستند. قطعاً برای سرویس‌های بعدی هم به این مجموعه مراجعه می‌کنم.',
      rating: 5,
    },
    {
      name: 'علی رضایی',
      role: 'مالک سمند',
      text: 'قیمت‌ها بسیار مناسب و منصفانه است. کارهای انجام شده با دقت و سرعت بالا بود. تعمیرگاهی که می‌توان به آن اعتماد کرد.',
      rating: 5,
    },
    {
      name: 'حسین کریمی',
      role: 'مالک هیوندای',
      text: 'تشخیص عیب و نقص خودرو بسیار دقیق بود. از همان ابتدا مشکل را تشخیص دادند و با سرعت برطرف کردند. خدمات عالی!',
      rating: 5,
    },
    {
      name: 'رضا محمدی',
      role: 'مالک پراید',
      text: 'بهترین تعمیرگاه مشهد! کارکنان بسیار مودب و حرفه‌ای. قطعات استفاده شده همه اصل و با کیفیت بود. بسیار راضی هستم.',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent dark:via-secondary/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            نظرات{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              مشتریان
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            آنچه مشتریان ما درباره خدمات ما می‌گویند
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="h-full bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                "{testimonials[activeIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`نظر ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
