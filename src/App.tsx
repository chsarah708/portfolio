import { Suspense, lazy } from 'react';
import NeuralBackground from '@/components/NeuralBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FloatingElements from '@/components/FloatingElements';
import CursorTrail from '@/components/CursorTrail';

const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

function LoadingFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-plasma border-t-transparent animate-spin" />
    </div>
  );
}

export function App() {
  return (
    <div className="relative min-h-screen bg-void text-white overflow-x-hidden">
      <div className="noise-overlay" />
      <NeuralBackground />
      <FloatingElements />
      <CursorTrail />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
