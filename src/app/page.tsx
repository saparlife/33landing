import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Categories from '@/components/Categories';
import Community from '@/components/Community';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Categories />
      <Community />
      <Download />
      <Footer />
    </main>
  );
}
