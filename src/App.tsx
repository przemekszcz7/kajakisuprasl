import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Flame,
  Clock,
  ShieldCheck,
  Truck,
  Tag,
  Users,
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

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      
      {/* ----------------- STICKY NAVIGATION ----------------- */}
      <header className="sticky top-0 z-50 bg-[#F5F2E6]/95 border-b border-[#E4DAC4] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo / Brand */}
            <a 
              href="#top" 
              className="flex items-center gap-3 group text-left focus:outline-none"
              id="nav-brand-logo"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D97A2E] flex-shrink-0 bg-[#F5F2E6] flex items-center justify-center shadow-xs">
                <img
                  src="https://i.postimg.cc/9X80svDL/509362850-750281194004990-9201592945816660086-n.jpg"
                  alt="Kajaki Supraśl logo"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  referrerPolicy="no-referrer"
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

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 font-medium text-base text-[#221A10]">
              <a
                href="#o-nas"
                className="hover:text-[#D97A2E] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D97A2E] hover:after:w-full after:transition-all"
                id="nav-link-about"
              >
                O Nas
              </a>
              <a
                href="#oferta"
                className="hover:text-[#D97A2E] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D97A2E] hover:after:w-full after:transition-all"
                id="nav-link-offer"
              >
                Oferta
              </a>
              <a
                href="#faq"
                className="hover:text-[#D97A2E] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D97A2E] hover:after:w-full after:transition-all"
                id="nav-link-faq"
              >
                FAQ
              </a>
              <a
                href="#kontakt"
                className="hover:text-[#D97A2E] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D97A2E] hover:after:w-full after:transition-all"
                id="nav-link-contact"
              >
                Kontakt
              </a>
            </nav>

            {/* Right Action Button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:664786404"
                className="inline-flex items-center justify-center gap-2 bg-[#D97A2E] hover:bg-[#B4611E] text-white font-fredoka font-medium px-4 sm:px-5 py-2.5 rounded-full shadow-xs transition-colors duration-150 text-sm sm:text-base active:scale-95 whitespace-nowrap"
                id="nav-call-btn"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>Zadzwoń</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-[#221A10] hover:bg-[#E4DAC4]/60 focus:outline-none"
                aria-label="Menu nawigacji"
                id="nav-mobile-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F5F2E6] border-b border-[#E4DAC4] px-4 pt-2 pb-6 space-y-2 shadow-md">
            <a
              href="#o-nas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-medium text-lg text-[#221A10] hover:bg-[#E4DAC4]/60 hover:text-[#D97A2E] transition-colors"
            >
              O Nas
            </a>
            <a
              href="#oferta"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-medium text-lg text-[#221A10] hover:bg-[#E4DAC4]/60 hover:text-[#D97A2E] transition-colors"
            >
              Oferta & Trasy
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-medium text-lg text-[#221A10] hover:bg-[#E4DAC4]/60 hover:text-[#D97A2E] transition-colors"
            >
              Częste Pytania (FAQ)
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-medium text-lg text-[#221A10] hover:bg-[#E4DAC4]/60 hover:text-[#D97A2E] transition-colors"
            >
              Kontakt
            </a>
            <div className="pt-3 border-t border-[#E4DAC4]">
              <a
                href="tel:664786404"
                className="w-full flex items-center justify-center gap-2 bg-[#D97A2E] hover:bg-[#B4611E] text-white font-fredoka py-3 rounded-xl text-center font-medium shadow-sm"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Rezerwacja: 664 786 404
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ----------------- HERO SECTION ----------------- */}
      <section 
        id="top"
        className="relative min-h-[540px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-white overflow-hidden bg-[#221A10]"
      >
        {/* Background Image - optimized without heavy filters */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.postimg.cc/CKSwRNRW/508531732-750280007338442-491750166334958096-n.jpg')`
          }}
          role="img"
          aria-label="Kajaki na rzece o zachodzie słońca"
        />

        {/* Warm Sunset Gradient Overlay */}
        <div className="absolute inset-0 sunset-overlay" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          
          {/* Main Title & Personal Accent */}
          <div className="inline-block mb-2">
            <span className="font-caveat text-2xl sm:text-3xl lg:text-4xl text-[#FFDEB5] font-bold drop-shadow-md block mb-1">
              Kajakowe weekendy u Jerzyka
            </span>
            <h1 className="font-fredoka font-semibold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight drop-shadow-lg">
              Kajaki Supraśl
            </h1>
          </div>

          {/* Description */}
          <p className="mt-3 sm:mt-5 text-base sm:text-xl lg:text-2xl text-[#F5F2E6] max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
            Aktywny wypoczynek blisko natury — zachody słońca na wodzie, spływy rzekami i jeziorami, ognisko, relaks i dobra atmosfera.
          </p>

          {/* Feature Chips */}
          <div className="mt-7 flex flex-wrap justify-center items-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#221A10]/60 border border-white/20 text-xs sm:text-sm font-medium text-white shadow-xs">
              🛶 Wypożyczalnia kajaków
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#221A10]/60 border border-white/20 text-xs sm:text-sm font-medium text-white shadow-xs">
              ⛺ Pontony
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#221A10]/60 border border-white/20 text-xs sm:text-sm font-medium text-white shadow-xs">
              🔥 Ogniska
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#221A10]/60 border border-white/20 text-xs sm:text-sm font-medium text-white shadow-xs">
              👨‍👩‍👧‍👦 Rodziny, znajomi, firmy
            </span>
          </div>

          {/* Primary Call to Action */}
          <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="tel:664786404"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D97A2E] hover:bg-[#B4611E] text-white font-fredoka font-semibold text-base sm:text-lg px-7 py-3.5 sm:py-4 rounded-full shadow-md transition-all active:scale-95 border border-[#FFDEB5]/30"
              id="hero-booking-cta"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>REZERWACJA: 664 786 404</span>
            </a>
            <a
              href="#oferta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-medium px-6 py-3.5 sm:py-4 rounded-full border border-white/25 transition-colors text-base"
              id="hero-explore-btn"
            >
              <span>Poznaj ofertę</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

        </div>
      </section>

      {/* ----------------- ORNAMENTAL DIVIDER 🌅 ----------------- */}
      <div className="py-6 overflow-hidden flex items-center justify-center bg-[#F5F2E6]">
        <div className="w-full max-w-4xl mx-auto px-4 flex items-center justify-center gap-3 sm:gap-4">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#E4DAC4] to-[#D97A2E]/40" />
          <div className="flex items-center gap-2 text-[#D97A2E] bg-white px-4 py-1.5 rounded-full border border-[#E4DAC4] shadow-xs text-xs sm:text-sm font-medium">
            <span className="text-lg" role="img" aria-label="Zachód słońca">🌅</span>
            <span className="font-caveat text-base sm:text-lg font-bold text-[#2E5E7A]">Rzeka Supraśl & Puszcza Knyszyńska</span>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#E4DAC4] to-[#D97A2E]/40" />
        </div>
      </div>

      {/* ----------------- SEKCJA 1: O NAS ----------------- */}
      <section id="o-nas" className="py-14 sm:py-20 scroll-mt-20 border-b border-[#E4DAC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Story Content */}
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

              <p className="text-base text-[#8A8074] leading-relaxed">
                U nas nie jesteś anonimowym numerem zamówienia. Dbamy o to, by każda wyprawa — czy to 2-godzinny relaks po pracy, czy całodniowy spływ ze znajomymi — przebiegała w bezpiecznej, przyjacielskiej atmosferze. Doradzamy najlepsze odcinki rzeki, pomagamy dobrać sprzęt i dbamy o pełną logistykę od startu do mety.
              </p>

              {/* Three Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-[#E4DAC4]">
                  <div className="text-[#D97A2E] font-fredoka font-semibold text-lg mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Bezpieczeństwo</span>
                  </div>
                  <p className="text-xs text-[#8A8074]">
                    Sprawdzony, stabilny sprzęt oraz atestowane kamizelki dla każdego.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E4DAC4]">
                  <div className="text-[#2E5E7A] font-fredoka font-semibold text-lg mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Elastyczność</span>
                  </div>
                  <p className="text-xs text-[#8A8074]">
                    Trasy dopasowane do umiejętności, czasu i wieku uczestników.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E4DAC4]">
                  <div className="text-[#D97A2E] font-fredoka font-semibold text-lg mb-1 flex items-center gap-1.5">
                    <Flame className="w-4 h-4" />
                    <span>Klimat</span>
                  </div>
                  <p className="text-xs text-[#8A8074]">
                    Niezapomniane zachody słońca i tradycyjne ogniska po spływie.
                  </p>
                </div>
              </div>

              {/* Direct call badge */}
              <div className="pt-2">
                <a
                  href="tel:664786404"
                  className="inline-flex items-center gap-3 bg-[#221A10] hover:bg-[#362A1B] text-white px-6 py-3 rounded-full transition-colors text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-[#D97A2E]" />
                  <span>Porozmawiaj z nami: <strong>664 786 404</strong></span>
                </a>
              </div>
            </div>

            {/* Right Card / Visual Feature Box */}
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
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D97A2E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#221A10] font-medium">Organizacja ognisk po dopłynięciu</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E4DAC4] bg-[#F5F2E6]/60 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-5 rounded-b-3xl flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#8A8074] uppercase block font-semibold">Główny telefon</span>
                    <span className="font-fredoka font-semibold text-lg text-[#221A10]">664 786 404</span>
                  </div>
                  <a
                    href="tel:664786404"
                    className="bg-[#D97A2E] hover:bg-[#B4611E] text-white px-4 py-2 rounded-full text-xs font-fredoka font-medium transition-colors"
                  >
                    Zadzwoń
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- SEKCJA 2: OFERTA & TRASY ----------------- */}
      <section id="oferta" className="py-14 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2E5E7A]/10 border border-[#2E5E7A]/20 text-[#2E5E7A] text-xs sm:text-sm font-medium mb-3">
              <Sun className="w-3.5 h-3.5 text-[#2E5E7A]" />
              <span>Dopasowane warianty spływów</span>
            </div>
            <h2 className="font-fredoka font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#221A10] tracking-tight">
              Nasza Oferta & Trasy
            </h2>
            <p className="font-caveat text-2xl sm:text-3xl text-[#D97A2E] font-bold mt-1">
              Wybierz idealny wariant dla siebie i swoich bliskich
            </p>
            <p className="mt-3 text-base sm:text-lg text-[#8A8074] leading-relaxed">
              Oferujemy elastyczny czas spływów na rzece Supraśl oraz okolicznych jeziorach, z pełnym wyposażeniem i opcją ogniska.
            </p>
          </div>

          {/* 4 Trip Variant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {offerCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.id}
                  id={card.id}
                  className="bg-white rounded-2xl p-6 border border-[#E4DAC4] hover:border-[#D97A2E]/40 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F5F2E6] text-[#2E5E7A] border border-[#E4DAC4]">
                        {card.badge}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#D97A2E]/10 text-[#D97A2E] flex items-center justify-center flex-shrink-0">
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

          {/* 7 Standard Inclusions Checklist & Dark Booking Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 6 Key Features */}
            <div className="lg:col-span-8">
              <div className="mb-6">
                <h3 className="font-fredoka font-semibold text-2xl text-[#221A10]">
                  Wszystko w cenie — pełna wygoda i brak ukrytych opłat
                </h3>
                <p className="text-sm text-[#8A8074] mt-1">
                  Dbamy o każdy detal, abyś mógł skupić się wyłącznie na relaksie na wodzie.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyFeatures.map((feat) => {
                  const IconComp = feat.icon;
                  return (
                    <div
                      key={feat.id}
                      id={feat.id}
                      className="bg-white rounded-2xl p-5 border border-[#E4DAC4] flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#D97A2E]/10 text-[#D97A2E] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-fredoka font-semibold text-base sm:text-lg text-[#221A10] leading-snug mb-1">
                          {feat.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#8A8074] leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dark Direct Action Card */}
            <div className="lg:col-span-4">
              <div 
                className="bg-[#221A10] text-white rounded-3xl p-6 sm:p-7 border border-[#3A2E20] shadow-md relative overflow-hidden"
                id="offer-contact-summary"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFDEB5] text-xs font-medium uppercase tracking-wider mb-4 border border-white/10">
                  <Flame className="w-3.5 h-3.5 text-[#D97A2E]" />
                  <span>Szybka rezerwacja</span>
                </div>

                <h3 className="font-fredoka font-semibold text-2xl text-white">
                  Zarezerwuj kajak
                </h3>
                <p className="font-caveat text-xl text-[#D97A2E] font-bold mt-1 mb-5">
                  Wystarczy jeden telefon!
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:664786404"
                    className="block p-4 rounded-2xl bg-[#D97A2E] hover:bg-[#B4611E] transition-colors text-white text-center"
                    id="offer-card-tel-primary"
                  >
                    <div className="text-xs uppercase tracking-wider text-white/80 font-medium mb-0.5">
                      Główna linia rezerwacji
                    </div>
                    <div className="font-fredoka font-semibold text-2xl text-white flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      664 786 404
                    </div>
                  </a>

                  <a
                    href="tel:664706625"
                    className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-center text-white"
                    id="offer-card-tel-secondary"
                  >
                    <div className="text-xs text-[#8A8074]">Drugi numer kontaktowy</div>
                    <div className="font-fredoka font-medium text-lg text-white">
                      664 706 625
                    </div>
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 text-xs text-[#8A8074] space-y-1.5">
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#D97A2E]">✓</span> Wypożyczalnia na plaży miejskiej w Supraślu
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#D97A2E]">✓</span> Ogniska i dowóz na trasę
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#D97A2E]">✓</span> Spływy 7 dni w tygodniu
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- SEKCJA 3: DLA KOGO? ----------------- */}
      <section className="py-14 sm:py-16 bg-[#EBE7D8]/60 border-y border-[#E4DAC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-fredoka font-semibold text-3xl sm:text-4xl text-[#221A10]">
              Dla kogo organizujemy spływy?
            </h2>
            <p className="font-caveat text-2xl text-[#2E5E7A] font-bold mt-1">
              Przygoda na wodzie dla małych i dużych ekip
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetGroups.map((grp) => (
              <div 
                key={grp.id}
                id={grp.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E4DAC4] text-center flex flex-col items-center"
              >
                <div className="text-4xl mb-3" role="img" aria-label={grp.title}>
                  {grp.emoji}
                </div>
                <h3 className="font-fredoka font-semibold text-xl text-[#221A10] mb-2">
                  {grp.title}
                </h3>
                <p className="text-sm text-[#8A8074] leading-relaxed">
                  {grp.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- SEKCJA 4: FAQ (NAJCZĘSTSZE PYTANIA) ----------------- */}
      <section id="faq" className="py-14 sm:py-20 bg-[#EBE7D8]/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E4DAC4] text-[#2E5E7A] text-xs sm:text-sm font-medium mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#D97A2E]" />
              <span>Odpowiedzi na Twoje pytania</span>
            </div>
            <h2 className="font-fredoka font-semibold text-3xl sm:text-4xl text-[#221A10]">
              Najczęściej Zadawane Pytania
            </h2>
            <p className="font-caveat text-2xl text-[#D97A2E] font-bold mt-1">
              Wszystko, co warto wiedzieć przed wyruszeniem na rzekę
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E4DAC4] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-fredoka font-semibold text-base sm:text-lg text-[#221A10]">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-[#F5F2E6] flex items-center justify-center flex-shrink-0 text-[#D97A2E] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#D97A2E] text-white' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#8A8074] leading-relaxed border-t border-[#E4DAC4]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ----------------- SEKCJA 6: KONTAKT ----------------- */}
      <section id="kontakt" className="py-14 sm:py-20 scroll-mt-20 border-t border-[#E4DAC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-fredoka font-semibold text-3xl sm:text-4xl text-[#221A10]">
              Skontaktuj się z nami
            </h2>
            <p className="font-caveat text-2xl text-[#D97A2E] font-bold mt-1">
              Zaplanuj swój kajakowy weekend
            </p>
            <p className="text-[#8A8074] text-base mt-2">
              Jesteśmy do Twojej dyspozycji. Zadzwoń, napisz lub odwiedź naszą przystań na plaży miejskiej w Supraślu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Box 1: Telefony */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E4DAC4] shadow-xs flex flex-col justify-between text-center items-center">
              <div className="w-12 h-12 rounded-full bg-[#D97A2E]/10 text-[#D97A2E] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <div className="mb-4 w-full">
                <h3 className="font-fredoka font-semibold text-xl text-[#221A10] mb-1">
                  Telefony
                </h3>
                <p className="text-xs text-[#8A8074] mb-4">Rezerwacje i informacje o spływach</p>
                
                <div className="space-y-3 bg-[#F5F2E6]/60 p-3.5 rounded-xl border border-[#E4DAC4]">
                  <div>
                    <span className="text-[11px] font-semibold text-[#D97A2E] uppercase block tracking-wider">Rezerwacja główna</span>
                    <a href="tel:664786404" className="font-fredoka font-bold text-xl text-[#221A10] hover:text-[#D97A2E] transition-colors">
                      664 786 404
                    </a>
                  </div>
                  <div className="pt-2 border-t border-[#E4DAC4]">
                    <span className="text-[11px] font-semibold text-[#2E5E7A] uppercase block tracking-wider">Informacje dodatkowe</span>
                    <a href="tel:664706625" className="font-fredoka font-medium text-lg text-[#221A10] hover:text-[#2E5E7A] transition-colors">
                      664 706 625
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="tel:664786404"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D97A2E] hover:text-[#B4611E] mt-1"
              >
                Zadzwoń teraz →
              </a>
            </div>

            {/* Box 2: Lokalizacja */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E4DAC4] shadow-xs flex flex-col justify-between text-center items-center">
              <div className="w-12 h-12 rounded-full bg-[#2E5E7A]/10 text-[#2E5E7A] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="mb-4">
                <h3 className="font-fredoka font-semibold text-xl text-[#221A10] mb-1">
                  Lokalizacja
                </h3>
                <p className="text-xs text-[#8A8074] mb-3">Punkt startowy i wypożyczalnia</p>
                <p className="font-medium text-base text-[#221A10]">
                  Plaża miejska Supraśl
                </p>
                <p className="text-sm text-[#8A8074]">
                  gmina Supraśl 16-030
                </p>
                <p className="text-xs text-[#2E5E7A] mt-2 font-medium">
                  Rzeka Supraśl • woj. podlaskie
                </p>
              </div>
              <div className="text-xs text-[#8A8074] bg-[#F5F2E6] px-3 py-1.5 rounded-full border border-[#E4DAC4]">
                Dogodny dojazd i parking
              </div>
            </div>

            {/* Box 3: Email & Social */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E4DAC4] shadow-xs flex flex-col justify-between text-center items-center">
              <div className="w-12 h-12 rounded-full bg-[#D97A2E]/10 text-[#D97A2E] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <div className="mb-4">
                <h3 className="font-fredoka font-semibold text-xl text-[#221A10] mb-1">
                  E-mail & Facebook
                </h3>
                <p className="text-xs text-[#8A8074] mb-3">Zapytania ofertowe dla grup i firm</p>
                
                <a 
                  href="mailto:pim8@o2.pl"
                  className="font-medium text-lg text-[#221A10] hover:text-[#D97A2E] transition-colors block mb-3 font-fredoka"
                >
                  pim8@o2.pl
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#2E5E7A]/10 text-[#2E5E7A] hover:bg-[#2E5E7A] hover:text-white transition-colors text-sm font-medium"
                >
                  <span>Facebook Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <a
                href="mailto:pim8@o2.pl"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D97A2E] hover:text-[#B4611E] mt-1"
              >
                Napisz wiadomość →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- FOOTER ----------------- */}
      <footer className="bg-[#221A10] text-[#8A8074] border-t border-[#362A1B] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#362A1B]">
            
            {/* Wordmark & Bio */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D97A2E] flex-shrink-0 bg-[#362A1B] flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/9X80svDL/509362850-750281194004990-9201592945816660086-n.jpg"
                    alt="Logo Kajaki Supraśl"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-fredoka font-semibold text-2xl text-white leading-none">
                    Kajaki Supraśl
                  </div>
                  <div className="font-caveat text-lg text-[#D97A2E] font-bold">
                    Kajakowe Weekendy u Jerzyka
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#8A8074] max-w-sm leading-relaxed">
                Wypożyczalnia kajaków i pontonów w Supraślu. Spływy rzeczne i jeziorne, organizacja ognisk, sprzęt asekuracyjny w cenie, dowóz na trasę.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-2">
              <h4 className="font-fredoka font-semibold text-white text-base uppercase tracking-wider mb-3">
                Na skróty
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#top" className="hover:text-[#D97A2E] transition-colors">
                    Strona główna
                  </a>
                </li>
                <li>
                  <a href="#o-nas" className="hover:text-[#D97A2E] transition-colors">
                    O nas
                  </a>
                </li>
                <li>
                  <a href="#oferta" className="hover:text-[#D97A2E] transition-colors">
                    Oferta & Trasy
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#D97A2E] transition-colors">
                    Częste pytania
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="hover:text-[#D97A2E] transition-colors">
                    Kontakt & Rezerwacje
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact Info */}
            <div className="md:col-span-4 space-y-2">
              <h4 className="font-fredoka font-semibold text-white text-base uppercase tracking-wider mb-3">
                Kontakt & Adres
              </h4>
              <p className="text-sm text-white flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D97A2E] flex-shrink-0 mt-0.5" />
                <span>Plaża miejska Supraśl, gmina Supraśl 16-030</span>
              </p>
              <p className="text-sm text-white flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D97A2E] flex-shrink-0" />
                <span>Rezerwacje: <a href="tel:664786404" className="hover:text-[#D97A2E] font-medium">664 786 404</a></span>
              </p>
              <p className="text-sm text-[#8A8074] flex items-center gap-2 pl-6">
                <span>Kontakt: <a href="tel:664706625" className="hover:text-white">664 706 625</a></span>
              </p>
              <p className="text-sm text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D97A2E] flex-shrink-0" />
                <a href="mailto:pim8@o2.pl" className="hover:text-[#D97A2E]">pim8@o2.pl</a>
              </p>
            </div>

          </div>

          {/* Bottom Copyright & FB */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div>
              © {new Date().getFullYear()} Kajaki Supraśl – Kajakowe Weekendy u Jerzyka. Wszelkie prawa zastrzeżone.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D97A2E] transition-colors flex items-center gap-1.5"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <span>Plaża Miejska w Supraślu</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
