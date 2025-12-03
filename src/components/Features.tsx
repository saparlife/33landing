'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  BookOpen,
  Calendar,
  Heart,
  Moon,
  Sun,
  Target,
  Users,
  Sparkles,
  Smartphone
} from 'lucide-react';

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Счётчик зикров',
    description: 'Удобный счётчик с большой кнопкой для подсчёта. Каждое нажатие сохраняется в вашу статистику.',
    color: 'bg-primary-500',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Детальная статистика',
    description: 'Отслеживайте прогресс за день, неделю, месяц и год. Визуализация активности в календаре.',
    color: 'bg-blue-500',
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'Утренние азкары',
    description: 'Полный сборник утренних поминаний с арабским текстом, транскрипцией и переводом.',
    color: 'bg-amber-500',
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: 'Вечерние азкары',
    description: 'Вечерние зикры для чтения после заката. Отмечайте прочитанное и следите за регулярностью.',
    color: 'bg-indigo-500',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: '99 имён Аллаха',
    description: 'Изучайте прекрасные имена Аллаха с их значениями и транскрипцией.',
    color: 'bg-emerald-500',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Избранное',
    description: 'Сохраняйте любимые зикры для быстрого доступа. Создайте свой персональный сборник.',
    color: 'bg-rose-500',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Сообщество',
    description: 'Общая цель на месяц для всех пользователей. Вместе достигаем духовных высот.',
    color: 'bg-violet-500',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Календарь активности',
    description: 'Наглядный календарь вашей духовной активности. Поддерживайте streak регулярного чтения.',
    color: 'bg-cyan-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pattern-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 font-medium text-sm">Возможности приложения</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Всё для вашей
            <span className="gradient-text"> духовной практики</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Приложение 33 создано, чтобы помочь вам поддерживать регулярность
            в поминании Аллаха и отслеживать свой духовный прогресс
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-emerald-500 text-white px-8 py-4 rounded-2xl shadow-lg">
            <Smartphone className="w-5 h-5" />
            <span className="font-semibold">И многое другое в приложении</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
