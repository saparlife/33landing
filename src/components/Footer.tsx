'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Top Decorative Border */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-emerald-500 to-primary-500" />

      {/* Pattern Background */}
      <div className="absolute inset-0 islamic-pattern opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">33</span>
                </div>
                <span className="font-bold text-2xl">Зикр</span>
              </div>

              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Приложение для поминания Аллаха. Отслеживайте свою духовную активность,
                читайте азкары и достигайте целей вместе с сообществом.
              </p>

              <p className="arabic-text text-xl text-primary-400 mb-2">
                وَاذْكُرْ رَبَّكَ كَثِيرًا
              </p>
              <p className="text-gray-500 text-sm">
                «И поминай Господа твоего много» — Сура Аль-Имран, 41
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold text-lg mb-6">Навигация</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Возможности', href: '#features' },
                  { name: 'Категории', href: '#categories' },
                  { name: 'Сообщество', href: '#community' },
                  { name: 'Скачать', href: '#download' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-lg mb-6">Связаться</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:support@33app.kz"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    support@33app.kz
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/app33support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Telegram
                  </a>
                </li>
              </ul>

              {/* App Store Badge */}
              <div className="mt-8">
                <a
                  href="https://apps.apple.com/kz/app/33/id1609251676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-3 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Скачать в</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} 33 Зикр. Все права защищены.
            </p>

            <p className="flex items-center gap-2 text-gray-500 text-sm">
              Сделано с <Heart className="w-4 h-4 text-red-500 fill-red-500" /> для уммы
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
