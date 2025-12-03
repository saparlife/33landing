'use client';

import { motion } from 'framer-motion';
import { Apple, Play, Sparkles, Heart, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-emerald-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-30" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400 rounded-full filter blur-3xl opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-white/90 text-sm font-medium">Более 10,000 пользователей</span>
            </motion.div>

            {/* Arabic Quote */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="arabic-text text-3xl md:text-4xl text-gold-300 mb-4"
            >
              يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Поминайте Аллаха
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                многократно
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/80 mb-4"
            >
              Сура Аль-Ахзаб, аят 41
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-white/70 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Приложение для подсчёта зикров с отслеживанием статистики,
              утренними и вечерними азкарами, 99 именами Аллаха и многим другим.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://apps.apple.com/kz/app/33/id1609251676"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold transition-all hover:shadow-2xl hover:scale-105"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Скачать в</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
              </a>

              <button
                disabled
                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold cursor-not-allowed opacity-70"
              >
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-white/70">Скоро в</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-sm text-white/60">Пользователей</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">1M+</div>
                  <div className="text-sm text-white/60">Зикров прочитано</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-emerald-400 rounded-[3rem] blur-3xl opacity-30 animate-pulse-slow" />

              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-[2.5rem] overflow-hidden w-[280px] md:w-[320px]">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-3 flex justify-between items-center">
                    <span className="text-xs font-medium">9:41</span>
                    <div className="w-20 h-6 bg-black rounded-full" />
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 text-xs">📶</div>
                      <div className="w-4 h-4 text-xs">🔋</div>
                    </div>
                  </div>

                  {/* App Content Preview */}
                  <div className="bg-gray-50 p-4 min-h-[500px]">
                    {/* Header */}
                    <div className="bg-primary-500 rounded-2xl p-4 mb-4 text-white text-center shadow-lg">
                      <div className="text-sm mb-1">Общая цель сообщества</div>
                      <div className="text-3xl font-bold">847,293</div>
                      <div className="text-sm opacity-80">из 1,000,000 зикров</div>
                      <div className="w-full bg-white/30 rounded-full h-2 mt-3">
                        <div className="bg-white rounded-full h-2 w-[85%]" />
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                        <div className="text-xl font-bold text-gray-900">127</div>
                        <div className="text-xs text-gray-500">Сегодня</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                        <div className="text-xl font-bold text-gray-900">2.4K</div>
                        <div className="text-xs text-gray-500">Месяц</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                        <div className="text-xl font-bold text-gray-900">18K</div>
                        <div className="text-xs text-gray-500">Год</div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">🕋 99 имён Аллаха</span>
                      <span className="text-primary-500 text-sm">Все →</span>
                    </div>

                    {/* Zikr Card */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <p className="arabic-text text-2xl text-center text-gray-900 mb-2">
                        الرَّحْمَنُ
                      </p>
                      <p className="text-center text-gray-600 text-sm mb-1">Ар-Рахман</p>
                      <p className="text-center text-gray-500 text-xs">Всемилостивый</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-8 top-20 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🤲</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">+33</div>
                    <div className="text-xs text-gray-500">Субханаллах</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 bottom-32 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">7 дней</div>
                    <div className="text-xs text-gray-500">подряд</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
