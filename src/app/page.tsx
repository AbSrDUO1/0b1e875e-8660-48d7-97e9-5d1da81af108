"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import SimpleStepsBento from '@/components/bento/SimpleStepsBento';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import SimpleFloatingNavbar from '@/components/navigation/SimpleFloatingNavbar';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import Image from 'next/image';

const heroSection = () => (
  <SimpleHero
    title='Welcome to My Portfolio'
    description='Showcasing my work in AI and design'
    primaryButtonText='View Projects'
    secondaryButtonText='Contact Me'
  />
);

const aboutSection = () => (
  <MinimalAbout
    description='A passionate designer and developer with a flair for creating immersive experiences.'
  />
);

const portfolioSection = () => (
  <GalleryBento
    items={[
      { title: 'Project 1', image: '/images/placeholder1.avif' },
      { title: 'Project 2', image: '/images/placeholder2.avif' },
      { title: 'Project 3', image: '/images/placeholder3.avif' }
    ]}
    className='gap-4'
    gridClassName='grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  />
);

const skillsSection = () => (
  <SimpleStepsBento
    items={[
      { title: 'JavaScript', description: 'Proficient in ES6+' },
      { title: 'React', description: 'Building dynamic UIs' },
      { title: 'Design', description: 'Futuristic and user-centric designs' }
    ]}
    className='mb-16'
  />
);

const testimonialsSection = () => (
  <SimpleKPIBento
    items={[
      { value: 'Client A', description: 'Innovative designs that exceeded expectations.' },
      { value: 'Client B', description: 'Prompt communication and quality work.' }
    ]}
    className='mb-16'
  />
);

const contactSection = () => (
  <form className='flex flex-col gap-4'>
    <input type='text' placeholder='Name' required className='p-2 border border-secondary rounded' />
    <input type='email' placeholder='Email' required className='p-2 border border-secondary rounded' />
    <textarea placeholder='Message' required className='p-2 border border-secondary rounded'></textarea>
    <button type='submit' className='bg-primary text-white p-2 rounded'>Submit</button>
  </form>
);

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 1, textAnimation: 'slide' }}>
      <SimpleFloatingNavbar
        navItems={[
          { id: 'hero', name: 'Home' },
          { id: 'about', name: 'About' },
          { id: 'portfolio', name: 'Portfolio' },
          { id: 'skills', name: 'Skills' },
          { id: 'testimonials', name: 'Testimonials' },
          { id: 'contact', name: 'Contact' }
        ]}
        logoSrc='/images/logo-dot.svg'
        logoWidth={50}
        logoHeight={50}
        buttonText='Contact'
        onButtonClick={() => console.log('Contact Clicked')}
      />
      <section id='hero'>{heroSection()}</section>
      <section id='about'>{aboutSection()}</section>
      <section id='portfolio'>{portfolioSection()}</section>
      <section id='skills'>{skillsSection()}</section>
      <section id='testimonials'>{testimonialsSection()}</section>
      <section id='contact'>{contactSection()}</section>
      <SimpleFooter
        columns={[
          { title: 'Quick Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }]}
        ]}
        copyrightText='© 2023 Aurora Neon'
        onPrivacyClick={() => console.log('Privacy Policy Clicked')}
      />
    </SiteThemeProvider>
  );
}
