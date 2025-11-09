'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: '🔧',
      title: 'تعمیرات موتور',
      description: 'تعمیر و بازسازی کامل موتور با تجهیزات پیشرفته و متخصصین مجرب',
      features: ['تعویض قطعات', 'بازسازی موتور', 'تنظیمات دقیق'],
    },
    {
      icon: '⚙️',
      title: 'تعمیر گیربکس',
      description: 'سرویس و تعمیر انواع گیربکس دستی و اتوماتیک',
      features: ['تعویض روغن', 'تعمیر کلاچ', 'بازسازی گیربکس'],
    },
    {
      icon: '🛢️',
      title: 'تعویض روغن',
      description: 'تعویض روغن موتور، گیربکس و دیفرانسیل با بهترین برندها',
      features: ['روغن اصل', 'فیلتر اصلی', 'بازرسی کامل'],
    },
    {
      icon: '🔩',
      title: 'سرویس دوره‌ای',
      description: 'سرویس‌های دوره‌ای مطابق با استانداردهای شرکت سازنده',
      features: ['۱۰ هزار کیلومتر', '۲۰ هزار کیلومتر', '۳۰ هزار کیلومتر'],
    },
    {
      icon: '🛡️',
      title: 'تعمیر سیستم ترمز',
      description: 'بازرسی و تعمیر کامل سیستم ترمز برای امنیت شما',
      features: ['تعویض لنت', 'تعویض دیسک', 'سرویس ABS'],
    },
    {
      icon: '⚡',
      title: 'برق خودرو',
      description: 'تعمیر و عیب‌یابی سیستم برق و الکتریک خودرو',
      features: ['عیب‌یابی', 'تعمیر دینام', 'باتری'],
    },
    {
      icon: '❄️',
      title: 'تعمیر کولر',
      description: 'سرویس و شارژ کولر، تعمیر سیستم تهویه مطبوع',
      features: ['شارژ گاز', 'تعمیر کمپرسور', 'سرویس کامل'],
    },
    {
      icon: '🎨',
      title: 'صافکاری و نقاشی',
      description: 'صافکاری بدنه و نقاشی با تجهیزات مدرن',
      features: ['صافکاری', 'رنگ‌آمیزی', 'پولیش'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl xs:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            خدمات{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              تخصصی ما
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ارائه کامل‌ترین خدمات تعمیرات و نگهداری خودرو با بهترین کیفیت
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-secondary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <button className="text-primary hover:text-primary-dark font-bold text-sm transition-colors flex items-center gap-2">
                    اطلاعات بیشتر
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
