'use client';

import { motion } from 'framer-motion';
import { Apple, Play, Star, Shield, Zap } from 'lucide-react';

export default function Download() {
  return (
    <section id="download" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-bg opacity-30" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-100 rounded-full filter blur-3xl opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Начните свой путь
              <span className="gradient-text"> уже сегодня</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Скачайте приложение 33 и присоединяйтесь к тысячам мусульман,
              которые регулярно поминают Аллаха. Бесплатно и без рекламы.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {[
                { icon: <Star className="w-5 h-5" />, text: 'Бесплатное приложение' },
                { icon: <Shield className="w-5 h-5" />, text: 'Без рекламы' },
                { icon: <Zap className="w-5 h-5" />, text: 'Работает офлайн' },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://apps.apple.com/kz/app/33/id1609251676"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="group flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:shadow-xl hover:scale-105"
              >
                <Apple className="w-7 h-7" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Скачать в</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </motion.a>

              <motion.button
                disabled
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="group flex items-center justify-center gap-3 bg-gray-100 text-gray-400 px-8 py-4 rounded-2xl font-semibold cursor-not-allowed"
              >
                <Play className="w-7 h-7" />
                <div className="text-left">
                  <div className="text-xs">Скоро в</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </motion.button>
            </div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-gray-600">
                <span className="font-semibold text-gray-900">4.9</span> в App Store
              </span>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-emerald-400 rounded-full filter blur-3xl opacity-20" />

            <div className="relative">
              {/* Phone */}
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-b from-primary-600 to-emerald-700 rounded-[2.5rem] overflow-hidden w-[260px] md:w-[300px]">
                  {/* Status Bar */}
                  <div className="bg-primary-700 px-6 py-3 flex justify-between items-center">
                    <span className="text-xs text-white/80">9:41</span>
                    <div className="w-16 h-5 bg-black rounded-full" />
                    <div className="text-xs text-white/80">100%</div>
                  </div>

                  {/* Content */}
                  <div className="p-6 min-h-[450px] flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-4xl font-bold text-white">33</span>
                    </div>

                    <p className="arabic-text text-3xl text-white/90 mb-4">
                      بِسْمِ اللَّهِ
                    </p>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      Зикр
                    </h3>

                    <p className="text-white/70 mb-8">
                      Поминание Аллаха
                    </p>

                    {/* Counter Button */}
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 shadow-xl">
                      <span className="text-5xl font-bold text-white">33</span>
                    </div>

                    <p className="text-white/60 text-sm mt-6">
                      Нажмите для подсчёта
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-8 bottom-20 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">Цель достигнута!</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
