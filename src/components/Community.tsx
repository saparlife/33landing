'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Flame, Trophy, TrendingUp, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: '10,000+',
    label: 'Пользователей',
    color: 'text-primary-500',
    bgColor: 'bg-primary-100',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    value: '1,000,000+',
    label: 'Зикров прочитано',
    color: 'text-rose-500',
    bgColor: 'bg-rose-100',
  },
  {
    icon: <Flame className="w-8 h-8" />,
    value: '500+',
    label: 'Активных сегодня',
    color: 'text-orange-500',
    bgColor: 'bg-orange-100',
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    value: '50+',
    label: 'Стран мира',
    color: 'text-amber-500',
    bgColor: 'bg-amber-100',
  },
];

export default function Community() {
  return (
    <section id="community" className="py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-emerald-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20" />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-emerald-400 rounded-full filter blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-primary-300" />
            <span className="text-white/90 font-medium text-sm">Глобальное сообщество</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Вместе мы
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500"> сильнее</span>
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам мусульман по всему миру,
            которые вместе поминают Аллаха и поддерживают друг друга на пути духовного развития.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className={`${stat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Monthly Goal Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-primary-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Общая цель на декабрь
              </h3>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">
                847,293
              </div>
              <div className="text-gray-500 text-lg">
                из 1,000,000 зикров
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden mb-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-700">85%</span>
              </div>
            </div>

            <p className="text-center text-gray-600">
              Каждый ваш зикр приближает нас к общей цели.
              <span className="block font-semibold text-primary-600 mt-2">
                Осталось: 152,707 зикров
              </span>
            </p>
          </div>
        </motion.div>

        {/* Live Users Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white font-medium">
              127 человек читают зикр прямо сейчас
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
