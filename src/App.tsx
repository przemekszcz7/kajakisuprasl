import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Flame,
  Clock,
  ShieldCheck,
  Truck,
  Tag,
  Compass,
  CheckCircle2,
  ExternalLink,
  Menu,
  X,
  Waves,
  Sun,
  ChevronDown,
  Sparkles,
  Heart,
  HelpCircle
} from 'lucide-react';

// Lekkie, zoptymalizowane wersje obrazów
const LOGO_URL = "https://i.postimg.cc/9X80svDL/509362850-750281194004990-9201592945816660086-n.jpg";
const HERO_BG_URL = "https://i.postimg.cc/CKSwRNRW/508531732-750280007338442-491750166334958096-n.jpg";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const linkHero = document.createElement('link');
    linkHero.rel = 'preload';
    linkHero.as = 'image';
    linkHero.href = HERO_BG_URL;
    document.head.appendChild(linkHero);

    const linkLogo = document.createElement('link');
    linkLogo.rel = 'preload';
    linkLogo.as = 'image';
    linkLogo.href = LOGO_URL;
    document.head.appendChild(linkLogo);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const offerCards = [
    {
      id: "trip-short",
      badge: "2 - 4 Godziny",
      title: "Spływy kilkugodzinne",
      subtitle: "Krótki relaks na wodzie",
      desc: "Świetna opcja na aktywne popołudnie, pierwszy kontakt z kajakiem lub szybki reset po pracy pośród natury rzeki Supraśl.",
      icon: Clock,
      highlight: "Idealne dla początkujących i rodzin"
    },
    {
      id: "trip-day",
      badge: "Całodniowa przygoda",
      title: "Spływy jednodniowe",
      subtitle: "Klasyk podlaskich szlaków",
      desc: "Najchętniej wybierana trasa. Czas na wiosłowanie, postoje na dzikich brzegach, kąpiel w czystej rzece i wspólny piknik.",
      icon: Compass,
      highlight: "Najpopularniejszy wybór"
    },
    {
      id: "trip-multi",
      badge: "Weekend & Więcej",
      title: "Wyprawy kilkudniowe",
      subtitle: "Przygoda z biwakiem i ogniskiem",
      desc: "Wieloetapowe spływy rzekami i jeziorami z nocowaniem pod gwiazdami, klimatycznymi ogniskami i pełnym wsparciem logistycznym.",
      icon: Flame,
      highlight: "Niezapomniane wspomnienia"
    },
    {
      id: "trip-pontoon",
      badge: "Spokój i stabilność",
      title: "Spływy pontonami",
      subtitle: "Wypoczynek dla każdego",
      desc: "Wygodne, wyjątkowo stabilne i bezpieczne pontony rekreacyjne, w których komfortowo popłyną nawet najmłodsi uczestnicy.",
      icon: Waves,
      highlight: "Super bezpieczne dla dzieci"
    }
  ];

  const keyFeatures = [
    {
      id: "feat-rental",
      title: "Wypożyczalnia kajaków i pontonów",
      desc: "Nowoczesny, czysty i zadbany sprzęt — kajaki 1- i 2-osobowe oraz bezpieczne pontony.",
      icon: Waves
    },
    {
      id: "feat-routes",
      title: "Piękne, malownicze trasy",
      desc: "Meandrująca rzeka Supraśl, Puszcza Knyszyńska, krystaliczne powietrze uzdrowiska.",
      icon: Compass
    },
    {
      id: "feat-allin",
      title: "Sprzęt w cenie — zero ukrytych opłat",
      desc: "Lekkie wiosła, certyfikowane kamizelki dla dorosłych i dzieci wliczone w cenę.",
      icon: ShieldCheck
    },
    {
      id: "feat-transport",
      title: "Dowóz i odbiór na trasie",
      desc: "Dowieziemy sprzęt i uczestników na start oraz odbierzemy po skończonym spływie.",
      icon: Truck
    },
    {
      id: "feat-bonfire",
      title: "Ogniska z klimatem",
      desc: "Możliwość zorganizowania biesiady przy ognisku po dopłynięciu do celu.",
      icon: Flame
    },
    {
      id: "feat-prices",
      title: "Atrakcyjne, uczciwe ceny",
      desc: "Przejrzysty cennik i elastyczne pakiety dla rodzin, grup znajomych oraz firm.",
      icon: Tag
    }
  ];

  const targetGroups = [
    {
      id: "target-families",
      title: "Rodziny z dziećmi",
      desc: "Bezpieczne akweny, dopasowane kamizelki dla maluchów i stabilny sprzęt gwarantują wspaniały dzień dla małych i dużych.",
      emoji: "👨‍👩‍👧‍👦"
    },
    {
      id: "target-friends",
      title: "Grupy znajomych",
      desc: "Zorganizujcie niezapomniany wypad za miasto, rywalizację na wodzie, a na koniec relaks przy wspólnym ognisku z kiełbaskami.",
      emoji: "🛶"
    },
    {
      id: "target-companies",
      title: "Firmy i integracje",
      desc: "Świeże powietrze, team building na rzece i wieczorny relaks. Przygotowujemy kompleksową obsługę dla małych i dużych zespołów.",
      emoji: "🤝"
    }
  ];

  const faqs = [
    {
      q: "Czy poradzę sobie na spływie bez wcześniejszego doświadczenia?",
      a: "Oczywiście! Rzeka Supraśl na proponowanych trasach rekreacyjnych jest spokojna i bezpieczna. Przed zwodowaniem każdego kajaka przeprowadzamy krótki instruktaż i tłumaczymy technikę wiosłowania."
    },
    {
      q: "Co jest wliczone w cenę wypożyczenia?",
      a: "W cenie otrzymujesz czysty kajak lub ponton, lekkie wiosła oraz certyfikowane kamizelki asekuracyjne (posiadamy również rozmiary dla dzieci). Brak jakichkolwiek ukrytych opłat!"
    },
    {
      q: "Co warto ze sobą zabrać na spływ?",
      a: "Zalecamy wygodny strój sportowy dostosowany do pogody, nakrycie głowy, krem z filtrem UV, okulary przeciwsłoneczne, wodę do picia, przekąski oraz nieprzemakalne etui lub worek na telefon i dokumenty."
    },
    {
      q: "Czy na spływ mogą płynąć małe dzieci?",
      a: "Tak! Kajakarstwo to wspaniała forma rodzinnego spędzania czasu. Dzieci mogą płynąć w kajakach dwuosobowych z rodzicem lub w wyjątkowo stabilnych pontonach. Każde dziecko obowiązkowo płynie w dobrze dopasowanej kamizelce asekuracyjnej."
    },
    {
      q: "Czy zapewniacie transport sprzętu i osób?",
      a: "Tak, zajmujemy się kompletną logistyką — dowozimy sprzęt na wybrane miejsce startu oraz odbieramy uczestników po zakończonym spływie z mety."
    },
    {
      q: "Jak najlepiej dokonać rezerwacji?",
      a: "Najszybszym i najwygodniejszym sposobem jest bezpośredni kontakt telefoniczny pod numerem 664 786 404 lub 664 706 625. Odpowiemy na wszystkie pytania i zarezerwujemy sprzęt."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F2E6] text-[#221A10] flex flex-col selection:bg-[#D97A2E] selection:text-white w-full overflow-x-hidden">
      
      {/* STICKY NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#F5F2E6]/95 border-b border-[#E4DAC4] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            <a href="#top" className="flex items-center gap-3 group text-left focus:outline-none" id="nav-brand-logo">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D97A2E] flex-shrink-0 bg-[#F5F2E6] flex items-center justify-center shadow-xs">
                <img
                  src={LOGO_URL}
                  alt="Kajaki Supraśl logo"
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-fredoka font-semibold text-xl sm:text-2xl text-[#221A10] leading-none tracking-tight">
                  Kajaki Supraśl
                </span>
                <span className="font-caveat text-lg sm:text-xl text-[#D97A2E] leading-none mt-1 font-bold">
                  u Jerzyka
                </span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-7 font-medium text-base text-[#221A10]">
              <a href="#o-nas" className="hover:text-[#D97A2E] transition-colors py-1 relative">O Nas</a>
              <a href="#oferta" className="hover:text-[#D97A2E] transition-colors py-1 relative">Oferta</a>
              <a href="#faq" className="hover:text-[#D97A2E] transition-colors py-1 relative">FAQ</a>
              <a href="#kontakt" className="hover:text-[#D97A2E] transition-colors py-1 relative">Kontakt</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:664786404"
                className="inline-flex items-center justify-center gap-2 bg-[#D97A2E] hover:bg-[#B4611E] text-white font-fredoka font-medium px-4 sm:px-5 py-2.5 rounded-full shadow-xs transition-colors duration-150 text-sm sm:text-base active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>Zadzwoń</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-[#221A10] hover:bg-[#E4DAC4]/60 focus:outline-none"
                aria-label="Menu nawigacji"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F5F2E6] border-b border-[#E4DAC4] px-4 pt-2 pb-6 space-y-2 shadow-md">
            <a href="#o-nas" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg font-medium text-lg text-[#221A10]">O Nas</a>
            <a href="#oferta" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg font-medium text-lg text-[#221A10]">Oferta & Trasy</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg font-medium text-lg text-[#221A10]">Częste Pytania (FAQ)</a>
            <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg font-medium text-lg text-[#221A10]">Kontakt</a>
            <div className="pt-3 border-t border-[#E4DAC4]">
              <a href="tel:664786404" className="w-full flex items-center justify-center gap-2 bg-[#D97A2E] text-white font-fredoka py-3 rounded-xl font-medium">
                <Phone className="w-5 h-5 flex-shrink-0" />
                Rezerwacja: 664 786 404
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="top" className="relative min-h-[540px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-white overflow-hidden bg-[#221A10]">
        <img
          src={HERO_BG_URL}
          alt="Kajaki na rzece o zachodzie słońca"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-block mb-2">
            <span className="font-caveat text-2xl sm:text-3xl lg:text-4xl text-[#FFDEB5] font-bold drop-shadow-md block mb-1">
              Kajakowe weekendy u Jerzyka
            </span>
            <h1 className="font-fredoka font-semibold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight drop-shadow-lg">
              Kajaki Supraśl
            </h1>
          </div>

          <p className="mt-3 sm:mt-5 text-base sm:text-xl lg:text-2xl text-[#F5F2E6] max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
            Aktywny wypoczynek blisko natury — zachody słońca na wodzie, spływy rzekami i jeziorami, ognisko, relaks i dobra atmosfera.
          </p>

          <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="tel:664786404"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D97A2E] hover:bg-[#B4611E] text-white font-fredoka font-semibold text-base sm:text-lg px-7 py-3.5 sm:py-4 rounded-full shadow-md transition-all active:scale-95"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>REZERWACJA: 664 786 404</span>
            </a>
            <a
              href="#oferta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-medium px-6 py-3.5 sm:py-4 rounded-full border border-white/25 transition-colors text-base"
            >
              <span>Poznaj ofertę</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEKCJA: O NAS */}
      <section id="o-nas" className="py-14 sm:py-20 scroll-mt-20 border-b border-[#E4DAC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D97A2E]/10 border border-[#D97A2E]/20 text-[#B4611E] text-xs sm:text-sm font-medium">
                <Heart className="w-3.5 h-3.5 text-[#D97A2E]" />
                <span>Poznaj naszą historię & pasję</span>
              </div>
              
              <div>
                <h2 className="font-fredoka font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#221A10] tracking-tight leading-tight">
                  Kajakowe Weekendy u Jerzyka
                </h2>
                <p className="font-caveat text-2xl sm:text-3xl text-[#2E5E7A] font-bold mt-1">
                  Aktywny wypoczynek z sercem i podlaską gościnnością
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#221A10]/80 leading-relaxed">
                Supraśl to serce Puszczy Knyszyńskiej, urokliwe uzdrowisko o niezwykłym mikroklimacie i czystej, malowniczo meandrującej rzece. Nasza wypożyczalnia powstała z miłości do wody, natury i dzielenia się tą pasją z innymi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-[#E4DAC4]">
                  <div className="text-[#D97A2E] font-fredoka font-semibold text-lg mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Bezpieczeństwo</span>
                  </div>
                  <p className="text-xs text-[#8A8074]">Sprawdzony, stabilny sprzęt oraz atestowane kamizelki.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E4DAC4]">
                  <div className="text-[#2E5E7A] font-fredoka font-semibold text-lg mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Elastyczność</span>
                  </div>
                  <p className="text-xs text-[#8A8074]">Trasy dopasowane do umiejętności, czasu i wieku.</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E4DAC4]">
                  <div className="text-[#D97A2E] font-fredoka font-semibold text-lg mb-1 flex items-center gap-1.5">
                    <Flame className="w-4 h-4" />
                    <span>Klimat</span>
                  </div>
                  <p className="text-xs text-[#8A8074]">Niezapomniane zachody słońca i tradycyjne ogniska.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E4DAC4] shadow-sm relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#D97A2E]/10 flex items-center justify-center text-[#D97A2E] mb-5">
                  <MapPin className="w-6 h-6" />
                </div>

                <h3 className="font-fredoka font-semibold text-2xl text-[#221A10] mb-2">
                  Nasza Baza: Plaża Miejska w Supraślu
                </h3>
                
                <p className="text-sm text-[#8A8074] leading-relaxed mb-6">
                  Stacjonujemy bezpośrednio przy plaży miejskiej w Supraślu. To doskonałe miejsce startowe z dogodnym dojazdem, parkingiem i łagodnym zejściem do wody.
                </p>

                <div className="space-y-3.5 border-t border-[#E4DAC4] pt-5 text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D97A2E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#221A10] font-medium">Brak ukrytych opłat — wiosła i kamizelki w cenie</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D97A2E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#221A10] font-medium">Spływy dla osób indywidualnych, grup i firm</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D97A2E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#221A10] font-medium">Odbiór kajaków i uczestników ze szlaku</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA: OFERTA */}
      <section id="oferta" className="py-14 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2E5E7A]/10 border border-[#2E5E7A]/20 text-[#2E5E7A] text-xs sm:text-sm font-medium mb-3">
              <Sun className="w-3.5 h-3.5 text-[#2E5E7A]" />
              <span>Dopasowane warianty spływów</span>
            </div>
            <h2 className="font-fredoka font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#221A10] tracking-tight">
              Nasza Oferta & Trasy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {offerCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div key={card.id} className="bg-white rounded-2xl p-6 border border-[#E4DAC4] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F5F2E6] text-[#2E5E7A] border border-[#E4DAC4]">
                        {card.badge}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#D97A2E]/10 text-[#D97A2E] flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-fredoka font-semibold text-xl text-[#221A10] leading-snug">
                      {card.title}
                    </h3>
                    <p className="font-caveat text-lg text-[#D97A2E] font-bold mb-3">
                      {card.subtitle}
                    </p>
                    <p className="text-sm text-[#8A8074] leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E4DAC4]">
                    <span className="text-xs font-medium text-[#2E5E7A] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D97A2E]" />
                      {card.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEKCJA: FAQ */}
      <section id="faq" className="py-14 sm:py-20 bg-[#EBE7D8]/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-fredoka font-semibold text-3xl sm:text-4xl text-[#221A10]">
              Najczęściej Zadawane Pytania
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-[#E4DAC4] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-fredoka font-semibold text-base sm:text-lg text-[#221A10]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#D97A2E] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#8A8074] border-t border-[#E4DAC4]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEKCJA: KONTAKT */}
      <section id="kontakt" className="py-14 sm:py-20 scroll-mt-20 border-t border-[#E4DAC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-fredoka font-semibold text-3xl sm:text-4xl text-[#221A10]">
              Skontaktuj się z nami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-6 border border-[#E4DAC4]">
              <Phone className="w-8 h-8 text-[#D97A2E] mx-auto mb-3" />
              <h3 className="font-fredoka font-semibold text-xl mb-2">Telefony</h3>
              <a href="tel:664786404" className="font-bold text-lg block text-[#221A10]">664 786 404</a>
              <a href="tel:664706625" className="text-base block text-[#8A8074]">664 706 625</a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E4DAC4]">
              <MapPin className="w-8 h-8 text-[#2E5E7A] mx-auto mb-3" />
              <h3 className="font-fredoka font-semibold text-xl mb-2">Lokalizacja</h3>
              <p className="text-base font-medium">Plaża miejska Supraśl</p>
              <p className="text-sm text-[#8A8074]">gmina Supraśl 16-030</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E4DAC4]">
              <Mail className="w-8 h-8 text-[#D97A2E] mx-auto mb-3" />
              <h3 className="font-fredoka font-semibold text-xl mb-2">E-mail</h3>
              <a href="mailto:pim8@o2.pl" className="text-base font-medium text-[#221A10]">pim8@o2.pl</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#221A10] text-[#8A8074] border-t border-[#362A1B] py-8 text-center text-xs">
        <p>© {new Date().getFullYear()} Kajaki Supraśl – Kajakowe Weekendy u Jerzyka. Wszelkie prawa zastrzeżone.</p>
      </footer>

    </div>
  );
}
