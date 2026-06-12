"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Bolt, Cog, Crosshair, Flag, Hammer, Palette, Play, Shield, Sparkles, Trophy, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="blurBottom"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Features",          id: "#features"},
        {
          name: "Arsenal",          id: "#products"},
        {
          name: "Stats",          id: "#metrics"},
        {
          name: "Reviews",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      button={{
        text: "Play Now",        href: "#"}}
      brandName="CyberForge Arena"
    />
  </div>

  <div id="home" data-section="home">
      <HeroCentered
      background={{
        variant: "animated-grid"}}
      title="CyberForge Arena: Craft Your Arsenal. Dominate the Battle."
      description="Dive into an unparalleled multiplayer experience where tactical shooting meets limitless crafting. Forge unique weapons, outsmart your opponents, and etch your legend in the digital arena."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/fantastic-aliens-with-glowing-neon-colours_23-2151648357.jpg",          alt: "Player Avatar 1"},
        {
          src: "http://img.b2bpic.net/free-photo/view-futuristic-person-listening-music-headphones_23-2151072902.jpg",          alt: "Player Avatar 2"},
        {
          src: "http://img.b2bpic.net/free-photo/doctor-from-future-concept_23-2151111243.jpg",          alt: "Player Avatar 3"},
        {
          src: "http://img.b2bpic.net/free-photo/dark-style-ninja-naruto_23-2151140092.jpg",          alt: "Player Avatar 4"},
        {
          src: "http://img.b2bpic.net/free-photo/futuristic-fantasy-portrait-with-costume_23-2151159087.jpg",          alt: "Futuristic fantasy portrait with costume"},
      ]}
      avatarText="Join over 100,000 active players!"
      buttons={[
        {
          text: "Play Now",          href: "#"},
        {
          text: "Learn More",          href: "#about"},
      ]}
      buttonAnimation="opacity"
      marqueeItems={[
        {
          type: "text",          text: "Next-Gen Graphics"},
        {
          type: "text",          text: "Real-time Multiplayer"},
        {
          type: "text-icon",          text: "Deep Crafting System",          icon: Cog,
        },
        {
          type: "text-icon",          text: "Customizable Loadouts",          icon: Cog,
        },
        {
          type: "text",          text: "Dynamic Combat"},
        {
          type: "text-icon",          text: "Global Leaderboards",          icon: Trophy,
        },
        {
          type: "text",          text: "Seasonal Events"},
      ]}
      marqueeSpeed={30}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About the Game"
      title="Unleash Your Creativity, Master Your Combat Skills"
      description="CyberForge Arena redefines the multiplayer shooter genre by integrating a robust crafting system directly into the heart of gameplay. Scavenge resources, blueprint devastating weapons, and engineer tactical gear that adapts to any battlefield."
      subdescription="Our dynamic combat system rewards precision, strategy, and quick reflexes. Engage in fast-paced skirmishes or large-scale team battles across diverse, ever-evolving arenas. Every match is a new opportunity to showcase your skill and unique arsenal."
      icon={Play}
      imageSrc="http://img.b2bpic.net/free-photo/flower-robot-environment-cute-concept_53876-31814.jpg"
      imageAlt="Gameplay overview of shooting and crafting"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Dynamic Combat System",          description: "Engage in fast-paced, fluid gunfights across expansive arenas. Master movement, utilize cover, and outmaneuver your foes with skill-based mechanics.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-portrait-flying-men-outside_23-2150006866.jpg",            imageAlt: "Dynamic Combat System"},
          items: [
            {
              icon: Crosshair,
              text: "Precision Aiming"},
            {
              icon: Bolt,
              text: "Quick Reflexes"},
            {
              icon: Shield,
              text: "Tactical Cover"},
          ],
          reverse: false
        },
        {
          title: "Limitless Crafting & Customization",          description: "Gather resources during battle and at your base to craft thousands of unique weapons, armor pieces, and utility items. Tailor your loadout to your playstyle.",          media: {
            imageSrc: "http://img.b2bpic.net/free-vector/video-game-health-bar-element-collection_23-2150256893.jpg",            imageAlt: "Limitless Crafting & Customization"},
          items: [
            {
              icon: Hammer,
              text: "Resource Gathering"},
            {
              icon: Sparkles,
              text: "Blueprint Discovery"},
            {
              icon: Palette,
              text: "Visual Customization"},
          ],
          reverse: true
        },
        {
          title: "Engaging Multiplayer Modes",          description: "From intense deathmatches to objective-based team battles and cooperative survival, CyberForge Arena offers a variety of game modes to keep the action fresh.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/team-professional-architects-brainstorming-ideeas-pointing-real-estate-construction-model-architectural-office-mixed-group-engineers-working-residential-project-desk_482257-37814.jpg",            imageAlt: "Engaging Multiplayer Modes"},
          items: [
            {
              icon: Users,
              text: "Team Deathmatch"},
            {
              icon: Flag,
              text: "Objective Control"},
            {
              icon: Zap,
              text: "Co-op Survival"},
          ],
          reverse: false
        }
      ]}
      title="Core Features That Set Us Apart"
      description="Experience a game built for endless replayability and strategic depth."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      animationType="slide-up"
      products={[
        {
          id: "p-1",          name: "Plasma Rifle X-9",          price: "Crafted",          imageSrc: "http://img.b2bpic.net/free-photo/view-powerful-3d-gun_23-2150888751.jpg",          imageAlt: "Plasma Rifle X-9"},
        {
          id: "p-2",          name: "Vortex Pistol",          price: "Crafted",          imageSrc: "http://img.b2bpic.net/free-photo/3d-view-powerful-weapon_23-2150888883.jpg",          imageAlt: "Vortex Pistol"},
        {
          id: "p-3",          name: "Modular Sentinel Armor",          price: "Crafted",          imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-concept-human_23-2150688443.jpg",          imageAlt: "Modular Sentinel Armor"},
        {
          id: "p-4",          name: "Graviton Blade",          price: "Crafted",          imageSrc: "http://img.b2bpic.net/free-vector/weapon-icons-axe-mace-sword-dagger-hammer_107791-14677.jpg",          imageAlt: "Graviton Blade"},
        {
          id: "p-5",          name: "Cluster Grenade",          price: "Crafted",          imageSrc: "http://img.b2bpic.net/free-photo/dark-style-lamp-indoors_23-2151105919.jpg",          imageAlt: "Cluster Grenade"},
        {
          id: "p-6",          name: "Scout Drone MK-II",          price: "Crafted",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-futuristic-female-humanoid-with-advanced-technology_23-2151666298.jpg",          imageAlt: "Scout Drone MK-II"},
      ]}
      title="Forge Your Perfect Arsenal"
      description="Explore a glimpse of the vast array of weapons and gear you can craft and wield in CyberForge Arena. From precision rifles to explosive devices, the possibilities are endless."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="slide-up"
      metrics={[
        {
          id: "m-1",          value: "100K+",          title: "Active Players",          items: [
            "Engaged in daily battles",            "Building their arsenals",            "Competing globally"],
        },
        {
          id: "m-2",          value: "5M+",          title: "Crafted Items",          items: [
            "Unique weapons forged",            "Custom armor pieces",            "Innovative gadgets"],
        },
        {
          id: "m-3",          value: "20+",          title: "Game Modes",          items: [
            "Diverse combat scenarios",            "Co-op challenges",            "Seasonal events"],
        },
      ]}
      title="The Arena Awaits: Our Growing Community"
      description="Join thousands of players worldwide and become part of a thriving community. See why CyberForge Arena is rapidly becoming the next big thing in online multiplayer gaming."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t-1",          title: "\"Revolutionary Gameplay!\"",          quote: "CyberForge Arena is a breath of fresh air. The crafting system adds so much depth, and the gunplay is incredibly satisfying. I've never played anything like it!",          name: "Alex 'Storm' Vance",          role: "Pro Gamer",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-rgb-lit-studio-streaming-multiplayer-game_482257-103579.jpg",          imageAlt: "Player Alex Vance"},
        {
          id: "t-2",          title: "\"Endless Customization!\"",          quote: "The ability to craft and customize my loadout on the fly is a game-changer. Every match feels new and I'm constantly experimenting with different builds. 10/10!",          name: "Maya 'Gearhead' Singh",          role: "Crafting Enthusiast",          imageSrc: "http://img.b2bpic.net/free-photo/surprised-young-sporty-man-with-wrist-bandage-wearing-headphones-with-phone-arm-band-points-isolated-pink-wall_141793-78524.jpg",          imageAlt: "Player Maya Singh"},
        {
          id: "t-3",          title: "\"Best Multiplayer Experience\"",          quote: "Finally, a multiplayer shooter that feels fair and rewarding. The community is great, and the developers are constantly adding new content. Highly recommended!",          name: "Liam 'Phantom' Chen",          role: "Competitive Player",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-sitting-grandstands_23-2149743684.jpg",          imageAlt: "Player Liam Chen"},
        {
          id: "t-4",          title: "\"Incredibly Addictive!\"",          quote: "I started playing last week and I can't stop. The shooting is tight, the crafting is deep, and the matches are always intense. See you in the arena!",          name: "Zoe 'Catalyst' Rodriguez",          role: "Casual Gamer",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-friends-playing-videogames_23-2150571950.jpg",          imageAlt: "Player Zoe Rodriguez"},
        {
          id: "t-5",          title: "\"A True Innovation\"",          quote: "CyberForge Arena isn't just another shooter; it's a new standard. The blend of genres creates a unique strategic layer that rewards both combat prowess and creative thinking.",          name: "Sam 'Architect' Davies",          role: "Game Reviewer",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-blonde-guy-wearing-green-t-shirt-vr-headset-showing-you-gesture_141793-89674.jpg",          imageAlt: "Player Sam Davies"},
      ]}
      title="What Players Are Saying"
      description="Don't just take our word for it. Hear directly from the community that makes CyberForge Arena come alive."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "Is CyberForge Arena free to play?",          content: "Yes! CyberForge Arena is free to download and play on all supported platforms. We offer optional cosmetic purchases and battle passes, but gameplay is never pay-to-win."},
        {
          id: "faq-2",          title: "What platforms are supported?",          content: "CyberForge Arena is currently available on PC (Windows/Mac) and will be launching on major consoles soon. Stay tuned for announcements regarding PlayStation, Xbox, and Nintendo Switch."},
        {
          id: "faq-3",          title: "How deep is the crafting system?",          content: "Our crafting system allows for thousands of unique weapon and armor combinations. You can modify components, apply blueprints, and even create entirely new weapon types, influencing everything from fire rate to elemental damage."},
        {
          id: "faq-4",          title: "Are there competitive ranked modes?",          content: "Absolutely! CyberForge Arena features a robust ranked matchmaking system with seasonal ladders, divisions, and exclusive rewards for top players. Prove your skill and climb to the top!"},
        {
          id: "faq-5",          title: "How often is new content released?",          content: "We are committed to regular content updates, including new maps, game modes, weapons, armor sets, and seasonal events. Our development roadmap ensures a constant flow of fresh experiences."},
        {
          id: "faq-6",          title: "Can I play with friends across different platforms?",          content: "Yes, CyberForge Arena supports full cross-platform play! Team up with your friends regardless of their preferred gaming system and dominate the arena together."},
      ]}
      title="Frequently Asked Questions"
      description="Got questions about CyberForge Arena? We've got answers. Check out our most common inquiries below."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Connect with the CyberForge Team"
      description="Have questions, feedback, or need support? Reach out to us through the form below. We're always here to help you get the most out of CyberForge Arena."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "subject",          type: "text",          placeholder: "Subject",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Your Message",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252421.jpg"
      imageAlt="Futuristic communication hub"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Game",          items: [
            {
              label: "Play Now",              href: "#"},
            {
              label: "Features",              href: "#features"},
            {
              label: "Arsenal",              href: "#products"},
            {
              label: "Stats",              href: "#metrics"},
          ],
        },
        {
          title: "Community",          items: [
            {
              label: "Discord",              href: "https://discord.com"},
            {
              label: "Forums",              href: "#"},
            {
              label: "Leaderboards",              href: "#metrics"},
            {
              label: "Testimonials",              href: "#testimonials"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "Bug Report",              href: "#"},
            {
              label: "System Requirements",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
            {
              label: "EULA",              href: "#"},
          ],
        },
      ]}
      logoText="CyberForge Arena"
      copyrightText="© 2025 CyberForge Arena. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
