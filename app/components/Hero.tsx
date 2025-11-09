'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 dark:from-primary/20 dark:via-secondary/20 dark:to-primary/20"
        style={{ y }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="inline-block p-4 bg-gradient-to-br from-primary to-secondary rounded-3xl shadow-2xl">
              <svg
                className="w-24 h-24 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-900 dark:text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ویزیت خودرو
            </span>
          </motion.h1>

          <motion.p
            className="text-xl xs:text-2xl md:text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            تعمیرات و خدمات تخصصی خودرو در مشهد
          </motion.p>

          <motion.p
            className="text-base xs:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            با بیش از ۱۵ سال تجربه، ارائه‌دهنده خدمات حرفه‌ای تعمیرات، سرویس
            دوره‌ای، تعویض روغن و قطعات با بهترین کیفیت و قیمت مناسب
          </motion.p>

          <motion.div
            className="flex flex-col xs:flex-row gap-4 justify-center items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              دریافت مشاوره رایگان
            </motion.a>

            <motion.a
              href="#services"
              className="px-8 py-4 bg-white dark:bg-dark-card border-2 border-primary text-primary rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              مشاهده خدمات
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-16 grid grid-cols-2 xs:grid-cols-4 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { icon: '✓', text: 'ضمانت کیفیت' },
              { icon: '⚡', text: 'سرویس سریع' },
              { icon: '★', text: 'متخصصین مجرب' },
              { icon: '💎', text: 'قطعات اصل' },
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                className="bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="text-sm font-bold text-gray-800 dark:text-white">
                  {badge.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-8 h-8 text-gray-600 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
