'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    emoji: '💚',
    title: 'Избранные',
    description: 'Ваши сохранённые зикры',
    count: '∞',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    emoji: '🌙',
    title: 'Ситуационные',
    description: 'Дуа на разные случаи жизни',
    count: '50+',
    gradient: 'from-purple-400 to-indigo-500',
  },
  {
    emoji: '🕋',
    title: '99 имён Аллаха',
    description: 'Асма уль-Хусна',
    count: '99',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    emoji: '🤲',
    title: 'После молитвы',
    description: 'Азкары после намаза',
    count: '15+',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    emoji: '🏞',
    title: 'Утренние',
    description: 'Азкары утра',
    count: '20+',
    gradient: 'from-yellow-400 to-amber-500',
  },
  {
    emoji: '🌄',
    title: 'Вечерние',
    description: 'Азкары вечера',
    count: '20+',
    gradient: 'from-orange-400 to-rose-500',
  },
  {
    emoji: '👨‍👩‍👦',
    title: 'Дуа за родителей',
    description: 'Молитвы за близких',
    count: '10+',
    gradient: 'from-pink-400 to-rose-500',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gold-200 rounded-full filter blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Категории
            <span className="gradient-text"> зикров</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Зикры организованы по категориям для удобного поиска и чтения.
            Выберите нужную категорию и начните поминание.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white rounded-3xl p-6 h-full shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {category.emoji}
                    </span>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${category.gradient} text-white`}>
                      {category.count}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-gray-500">
                    {category.description}
                  </p>
                </div>

                {/* Arrow on Hover */}
                <div className="absolute bottom-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sample Zikrs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Примеры зикров в приложении
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                arabic: 'سُبْحَانَ ٱللَّٰهِ',
                transcription: 'Субха́н-Алла́х',
                translation: 'Пречист Аллах',
                recommended: '33 раза',
              },
              {
                arabic: 'ٱلْحَمْدُ لِلَّٰهِ',
                transcription: 'Аль-ха́мду ли-Лля́х',
                translation: 'Вся хвала Аллаху',
                recommended: '33 раза',
              },
              {
                arabic: 'الله أكبر',
                transcription: 'Алла́ху А́кбар',
                translation: 'Аллах Велик',
                recommended: '34 раза',
              },
            ].map((zikr, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-emerald-50 rounded-3xl p-8 text-center border border-primary-100"
              >
                <p className="arabic-text text-4xl text-gray-900 mb-4">
                  {zikr.arabic}
                </p>
                <p className="text-lg font-medium text-gray-700 mb-2">
                  {zikr.transcription}
                </p>
                <p className="text-gray-500 mb-4">
                  {zikr.translation}
                </p>
                <span className="inline-block bg-primary-500 text-white text-sm font-medium px-4 py-2 rounded-full">
                  {zikr.recommended}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
