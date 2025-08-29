"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import CyclopsHero from '@/components/sections/layouts/hero/CyclopsHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-gradient-to-br from-[rgba(0,229,255,0.12)] to-[rgba(99,102,241,0.12)] py-16">
        <CyclopsHero
          title="Welcome to My Portfolio"
          subtitle="Showcasing innovative projects"
          primaryButtonText="View Projects"
          secondaryButtonText="Contact Me"
          onPrimaryButtonClick={() => console.log('View Projects clicked')}
          onSecondaryButtonClick={() => console.log('Contact Me clicked')}
        />
      </section>
      <section id="about" className="bg-[#0A0A12] py-16">
        <MinimalAbout description="A passionate developer specializing in futuristic designs." />
      </section>
      <section id="portfolio" className="bg-soft-noise py-16">
        <GalleryBento
          items={[
            { title: 'Project 1', image: '/images/placeholder1.avif' },
            { title: 'Project 2', image: '/images/placeholder2.avif' },
            { title: 'Project 3', image: '/images/placeholder3.avif' },
            { title: 'Project 4', image: '/images/placeholder4.avif' },
            { title: 'Project 5', image: '/images/placeholder5.avif' },
            { title: 'Project 6', image: '/images/placeholder6.avif' }
          ]} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" />
      </section>
      <section id="skills" className="bg-gradient-to-tr from-[rgba(124,58,237,0.15)] to-transparent py-16">
        <SimpleKPIBento
          items={[
            { value: 'JavaScript', description: 'Expert in web development' },
            { value: 'React', description: 'Building dynamic UIs' },
            { value: 'Node.js', description: 'Backend development' },
            { value: 'CSS', description: 'Styling with flair' }
          ]} className="grid grid-cols-2 gap-4" />
      </section>
      <section id="testimonials" className="bg-[#0A0A12] py-16">
        <BentoFAQ items={[
          { title: 'John Doe', content: 'Absolutely fantastic work!' },
          { title: 'Jane Smith', content: 'A true innovator in this field.' }
        ]} />
      </section>
      <section id="contact" className="bg-gradient-to-br from-[rgba(0,229,255,0.15)] to-[rgba(255,77,255,0.15)] py-16">
        <form className="max-w-md mx-auto">
          <label className="block text-sm">Name</label>
          <input type="text" className="border rounded w-full p-2 mb-4" required />
          <label className="block text-sm">Email</label>
          <input type="email" className="border rounded w-full p-2 mb-4" required />
          <label className="block text-sm">Message</label>
          <textarea className="border rounded w-full p-2 mb-4" required></textarea>
          <button className="bg-blue-500 text-white rounded px-4 py-2">Send</button>
        </form>
      </section>
      <footer>
        <SimpleFooter columns={[{ title: 'Links', items: [{ label: 'Home', onClick: () => {} }] }]} copyrightText="2023 NovaForge Portfolio" onPrivacyClick={() => {}} />
      </footer>
    </SiteThemeProvider>
  );
}