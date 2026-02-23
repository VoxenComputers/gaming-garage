import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { MapPin, Phone, Star, Gamepad2, Monitor, Trophy, Users, Sparkles, Clock, Instagram, Zap, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsHeaderVisible(false);
          } else {
            setIsHeaderVisible(true);
          }

          lastScrollY.current = currentScrollY;
          setScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const shopImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_gaming-garage/artifacts/h5m7bopw_image.png',
      title: 'Shop Entrance',
      description: 'Premium gaming posters and wooden aesthetic'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_gaming-garage/artifacts/b8et9moi_image.png',
      title: 'Comfortable Seating',
      description: 'Plush bean bags and spacious couches for long gaming sessions'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_gaming-garage/artifacts/rlith8l7_image.png',
      title: 'PS5 Game Collection',
      description: 'Extensive library of latest PlayStation titles'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_gaming-garage/artifacts/3d0hvwhu_image.png',
      title: 'Racing Station',
      description: 'High-end racing simulator with realistic controls'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_gaming-garage/artifacts/usgnpn51_image.png',
      title: 'PC Gaming Setup',
      description: 'Dual monitors with RGB gaming PCs'
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Spacious Lounge Setup',
      description: 'Plenty of room to relax and enjoy long gaming sessions comfortably.'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: '4 PS5 Setups',
      description: 'Play the latest and most popular PlayStation titles smoothly.'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'High-Spec Gaming PCs',
      description: 'Optimized for esports and competitive gaming.'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Racing Simulator Experience',
      description: 'Feel the thrill with immersive racing controls.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: '4.9★ Google Rating',
      description: 'Trusted by 80+ gamers in Chandkheda and nearby areas.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Modern Ambience & Lighting',
      description: 'Clean, premium vibe for a great gaming atmosphere.'
    }
  ];

  const pricing = [
    {
      title: 'PS5 Gaming',
      price: '₹80',
      period: 'per hour',
      description: 'Enjoy all popular PS5 titles.',
      icon: <Gamepad2 className="w-12 h-12" />
    },
    {
      title: 'PC Gaming',
      price: '₹50',
      period: 'per hour',
      description: 'Play competitive esports games smoothly.',
      icon: <Monitor className="w-12 h-12" />
    },
    {
      title: 'Racing Simulator',
      price: '₹100',
      period: 'per hour',
      description: 'Immersive and realistic racing experience.',
      icon: <Trophy className="w-12 h-12" />
    }
  ];

  const ps5Games = [
    'GTA V', 'WWE 2K', 'FIFA Series', 'Spider-Man',
    'Mortal Kombat', 'NBA 2K', 'Racing Games', 'And more popular PlayStation games'
  ];

  const pcGames = [
    'Valorant', 'Marvel Rivals', 'Other competitive multiplayer games'
  ];

  const reviews = [
    {
      text: 'The ambience is amazing, cozy yet exciting.',
      author: 'Gaming Enthusiast',
      rating: 5
    },
    {
      text: 'Variety of games and cool experience.',
      author: 'Local Gamer',
      rating: 5
    },
    {
      text: 'Amazing environment and supportive staff.',
      author: 'Regular Visitor',
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Gaming Zone in Chandkheda Ahmedabad | THE GAMING GARAGE</title>
        <meta name="description" content="Premium PS5 Gaming Lounge in Ahmedabad with Racing Simulator and High-End Esports PCs. The best gaming zone near Motera and Chandkheda." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="gaming-garage">
        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-xl border-b border-ps-blue/10 transition-transform duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <div className="container-custom py-4 flex items-center justify-between">
            <div className="logo-text">
              <div className="text-2xl font-black tracking-tight text-white">
                THE GAMING <span className="text-ps-blue">GARAGE</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Chandkheda, Ahmedabad</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={scrollToPricing}
                variant="outline"
                className="hidden md:flex bg-gradient-to-r from-[#0e0e12]/80 to-ps-blue/10 border border-ps-blue/20 hover:border-ps-blue hover:from-ps-blue/20 text-white backdrop-blur-sm shadow-lg shadow-ps-blue/5"
              >
                View Pricing
              </Button>
              <a href="https://wa.me/916353381455" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#0070CC] hover:bg-[#0087FF] text-white font-semibold border-none">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop)',
              transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/90 via-[#0B0B0F]/80 to-[#0B0B0F]"></div>
          </div>

          <div className="container-custom relative z-10 w-full mb-12">
            <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in-up">

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ps-blue/30 bg-ps-blue/10 backdrop-blur-md text-xs font-bold text-ps-blue mb-4 tracking-widest uppercase shadow-[0_0_15px_rgba(0,112,204,0.3)]">
                <Zap className="w-4 h-4 text-ps-blue" /> CHANDKHEDA'S #1 GAMING ZONE
              </div>

              <h1 className="hero-title text-white">
                <div className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-2">Play. Compete.<br />Dominate.</div>
                <div className="text-ps-blue glow-text block mt-4 text-5xl md:text-7xl lg:text-8xl font-black" style={{ textShadow: '0 0 40px rgba(0, 112, 204, 0.6)' }}>The Ultimate Gaming<br />Arena</div>
              </h1>

              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 text-white font-bold text-sm md:text-lg mb-8 pt-6">
                <span className="flex items-center">🎮 <span className="ml-2">PS5</span></span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center">💻 <span className="ml-2">High-End PCs</span></span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center">🏎️ <span className="ml-2">Racing Cockpit</span></span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center">🏆 <span className="ml-2">Esports Ready</span></span>
              </div>

              <p className="text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
                Gear up for the ultimate gaming battle! Whether you're grinding ranks, racing for glory, or dominating in FIFA - we've got your back.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 max-w-2xl mx-auto">
                <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToPricing(); }} className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:opacity-90 text-white text-base md:text-lg px-8 py-7 rounded-lg font-bold border-none transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  >
                    <Zap className="w-5 h-5 mr-3" />
                    Book Your Slot Now
                  </Button>
                </a>
                <Button
                  onClick={scrollToPricing}
                  size="lg"
                  variant="outline"
                  className="flex-1 w-full sm:w-auto border border-ps-blue/40 hover:border-ps-blue hover:bg-ps-blue/10 text-white text-base md:text-lg px-8 py-7 rounded-lg font-semibold bg-[#11111A]/60 backdrop-blur-md transition-all shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
                >
                  <Gift className="w-5 h-5 mr-3" />
                  View Packages
                </Button>
              </div>

              <div className="flex justify-center gap-6 mt-8 text-sm text-gray-400 font-medium pt-8">
                <span className="flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>Walk-ins Welcome</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2" />Flexible Hours</span>
                <span className="flex items-center text-yellow-400"><Star className="w-4 h-4 mr-1 fill-current" />4.9★ Rated</span>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-32 bg-dark-secondary border-t border-white/5">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ps-blue/30 bg-ps-blue/10 backdrop-blur-sm text-xs font-bold text-ps-blue mb-6 tracking-widest uppercase">
                <span className="text-ps-blue">⚙</span> ELITE GAMING FEATURES
              </div>
              <h2 className="section-title text-4xl md:text-5xl font-black mb-4">
                Why Gamers Choose <span className="text-ps-blue glow-text" style={{ color: '#8B5CF6', textShadow: '0 0 20px rgba(139, 92, 246, 0.4)' }}>THE GAMING GARAGE</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl">
                Not just a gaming cafe — This is your battleground, your arena, your victory zone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="feature-card group hover-lift border-white/5 bg-[#0e0e12]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="icon-wrapper mb-6 text-ps-blue group-hover:text-white transition-colors">
                      {React.cloneElement(feature.icon, { className: 'w-10 h-10', strokeWidth: 1.5 })}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section - Gallery */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-ps-blue/5 to-transparent"></div>
          <div className="container-custom relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="section-title">
                Step Inside <span className="text-ps-blue">The Experience</span>
              </h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                Clean ambience, premium lighting, and comfortable seating designed for an uninterrupted gaming experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shopImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item group overflow-hidden rounded-xl hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-square overflow-hidden bg-dark-secondary">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32 bg-[#0a0a0f]">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-black mb-4 hidden">
                Choose Your <span className="text-ps-blue glow-text">Gaming Package</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'PS5 Gaming',
                  price: '₹150',
                  packagePrice: '₹1200',
                  packageOriginal: '₹1500',
                  icon: <Gamepad2 className="w-12 h-12" />,
                  features: ['Latest PS5 Games', 'Premium Controllers', 'HD Gaming']
                },
                {
                  title: 'PC Gaming',
                  price: '₹120',
                  packagePrice: '₹1000',
                  packageOriginal: '₹1200',
                  icon: <Monitor className="w-12 h-12" />,
                  features: ['High-End PCs', 'Esports Ready', 'Low Latency']
                },
                {
                  title: 'Racing Simulator',
                  price: '₹150',
                  packagePrice: '₹1,100',
                  packageOriginal: '₹1,500',
                  icon: <Trophy className="w-12 h-12" />,
                  features: ['Real Racing Wheel', 'Cockpit Setup', 'Force Feedback']
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className="pricing-card rounded-2xl border border-white/5 bg-[#0e0e12] overflow-hidden hover-lift flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-8 flex-grow flex flex-col items-center">
                    <div className="icon-wrapper mb-6 text-ps-blue">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white text-center">{plan.title}</h3>
                    <div className="text-gray-500 text-sm mb-4">Pay Per Hour</div>
                    <div className="mb-8 flex items-baseline justify-center">
                      <span className="text-5xl font-black text-ps-blue">{plan.price}</span>
                      <span className="text-gray-500 ml-2 text-sm">per hour</span>
                    </div>

                    <div className="w-full bg-[#15151e] rounded-xl p-6 border border-white/5 mb-8 text-center flex-grow flex flex-col justify-center">
                      <div className="text-xs font-bold text-ps-blue uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
                        <span>💰</span> PACKAGE DEAL
                      </div>
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-3xl font-black text-white">{plan.packagePrice}</span>
                        <span className="text-xl text-gray-500 line-through">{plan.packageOriginal}</span>
                      </div>
                      <div className="text-white font-bold mb-2">10 Hours Gaming</div>
                      <div className="text-[#10B981] text-xs font-medium">✓ Lifetime Valid • Use Anytime</div>
                    </div>

                    <ul className="space-y-3 w-full mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-gray-400 text-sm flex items-center">
                          <svg className="w-4 h-4 text-ps-blue mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a href="https://wa.me/916353381455" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                      <Button className="w-full bg-gradient-to-r from-ps-blue to-[#8B5CF6] hover:opacity-90 text-white font-bold py-6 rounded-lg">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        Book Now on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section className="py-20 md:py-32">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="section-title">
                Popular <span className="text-ps-blue">Games Available</span>
              </h2>
              <p className="section-subtitle">
                Play trending and fan-favorite titles at our gaming lounge in Chandkheda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="games-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="icon-wrapper text-ps-blue">
                      <Gamepad2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">PS5 Titles</h3>
                  </div>
                  <ul className="space-y-3">
                    {ps5Games.map((game, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-ps-blue rounded-full mr-3"></span>
                        {game}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="games-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="icon-wrapper text-ps-blue">
                      <Monitor className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">PC Esports Titles</h3>
                  </div>
                  <ul className="space-y-3">
                    {pcGames.map((game, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-ps-blue rounded-full mr-3"></span>
                        {game}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 md:py-32 bg-dark-secondary border-t border-white/5">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-6xl font-black text-ps-blue">4.9</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-current" />
                  ))}
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                Rated by Gamers in <span className="text-ps-blue glow-text">Ahmedabad</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <Card
                  key={index}
                  className="review-card hover-lift border-white/5 bg-[#0e0e12]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex text-yellow-400 mb-6 gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed italic">
                      "{review.text}"
                    </p>
                    <p className="text-gray-500 text-sm flex items-center before:content-['—'] before:mr-2">
                      {review.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 md:py-32 bg-[#0B0B0F]">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Visit <span className="text-ps-blue glow-text">THE GAMING GARAGE</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
              <div className="space-y-6 flex flex-col justify-between">
                <div>
                  <Card className="location-card hover-lift border-white/5 bg-[#0e0e12] mb-6">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-6">
                        <div className="icon-wrapper text-ps-blue p-4 rounded-full bg-ps-blue/10">
                          <MapPin className="w-6 h-6 text-ps-blue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                          <p className="text-gray-400 leading-relaxed">
                            Shop 120, Kalash Square, near Dev Paradise,<br />
                            Chandkheda, Ahmedabad – 382470
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="location-card hover-lift border-white/5 bg-[#0e0e12]">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-6">
                        <div className="icon-wrapper text-ps-blue p-4 rounded-full bg-ps-blue/10">
                          <Phone className="w-6 h-6 text-ps-blue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
                          <p className="text-gray-400">
                            <a href="tel:+916353381455" className="hover:text-white transition-colors">
                              +91 63533 81455
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+916353381455" className="flex-1">
                    <Button className="w-full bg-[#0070CC] hover:bg-[#0087FF] text-white py-6 rounded-lg text-base font-semibold border-none">
                      <Phone className="w-5 h-5 mr-3" />
                      Call Now
                    </Button>
                  </a>
                  <a href="https://wa.me/916353381455" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-6 rounded-lg text-base font-semibold border-none">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WhatsApp
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/the_gaminggarage20/" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full border-white/10 hover:border-white/20 hover:bg-white/5 text-white py-6 rounded-lg text-base font-semibold bg-transparent">
                      <Instagram className="w-5 h-5 mr-3" />
                      Instagram
                    </Button>
                  </a>
                </div>

                <a href="https://www.google.com/maps?client=ms-android-motorola-rvo3&sca_esv=2b054a1e223f05b2&hl=en-IN&cs=1&sxsrf=ADLYWIIT3kcE2dsQawL7vdoe4VPXIpDvwQ:1734268985934&kgmid=/g/11y98w0cxv&shndl=30&shem=sbpo2&kgs=a06e36b4d4ab6202&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kb-uhuBPg145MSDT-pblolHs&daddr=Shop+120,+KALASH+SQUARE,+near+DEV+PARADISE,+New,+Chandkheda,+Ahmedabad,+Gujarat+382470" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-white/10 hover:border-white/20 hover:bg-white/5 text-white py-6 rounded-lg text-base font-semibold bg-transparent">
                    <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                    Open in Google Maps
                  </Button>
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden hover-lift h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0236574890834!2d72.61636!3d23.07955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e873f4f618ebf%3A0x6ce2a1e6e5faeacd!2sTHE%20GAMING%20GARAGE!5e0!3m2!1sen!2sin!4v1734269000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="THE GAMING GARAGE Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark-secondary border-t border-ps-blue/10 py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-black mb-4 text-white">
                  THE GAMING <span className="text-ps-blue">GARAGE</span>
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-xl">
                  THE GAMING GARAGE is a premium gaming zone in Chandkheda, Ahmedabad offering PS5 gaming, esports PC gaming, and racing simulator experience at affordable hourly pricing. If you are searching for a gaming cafe near Motera, Godrej Garden City, Bhat, or nearby areas in Ahmedabad, visit us and level up your gaming experience.
                </p>
                <div className="mt-4 p-4 rounded-lg bg-dark-primary/50 text-xs text-gray-500 max-w-xl">
                  <strong>Looking for a gaming zone near you?</strong> The Gaming Garage is the premier gaming lounge in Chandkheda offering top-tier PS5 and PC setups. Conveniently located for players searching for a gaming cafe near Motera or affordable PS5 gaming in Ahmedabad. Experience the ultimate gaming sessions today.
                </div>
              </div>
              <div className="md:ml-auto">
                <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#pricing" className="block text-gray-400 hover:text-ps-blue transition-colors">Pricing</a>
                  <a href="tel:+916353381455" className="block text-gray-400 hover:text-ps-blue transition-colors">Contact: +91 63533 81455</a>
                  <a href="https://wa.me/916353381455" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-ps-blue transition-colors">WhatsApp</a>
                  <a href="https://www.instagram.com/the_gaminggarage20/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-ps-blue transition-colors">Instagram</a>
                </div>
              </div>
            </div>
            <div className="border-t border-ps-blue/10 pt-8 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} THE GAMING GARAGE. All rights reserved. | Gaming Zone in Chandkheda, Ahmedabad</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
