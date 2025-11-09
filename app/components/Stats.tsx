'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: 15, suffix: '+', label: 'سال تجربه', duration: 2 },
    { number: 5000, suffix: '+', label: 'مشتری راضی', duration: 2.5 },
    { number: 8, suffix: '', label: 'متخصص مجرب', duration: 2 },
    { number: 98, suffix: '%', label: 'رضایت مشتری', duration: 2 },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Animated Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-black mb-4 text-white">
            آمار و ارقام
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            اعداد و ارقامی که نشان‌دهنده کیفیت خدمات ماست
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CountUpAnimation
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={stat.duration}
                  isInView={isInView}
                />
                <motion.p
                  className="text-white/90 font-bold text-base md:text-lg mt-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {stat.label}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpAnimation({
  end,
  suffix,
  duration,
  isInView,
}: {
  end: number;
  suffix: string;
  duration: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
      {count.toLocaleString('fa-IR')}
      {suffix}
    </div>
  );
}
