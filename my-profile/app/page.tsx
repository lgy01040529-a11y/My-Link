import { Globe, Link, Mail, X, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Home() {
  const socialLinks = [
    { name: "GitHub", icon: <Globe size={24} />, url: "https://github.com", color: "bg-neo-cyan" },
    { name: "Instagram", icon: <Globe size={24} />, url: "https://instagram.com", color: "bg-neo-pink" },
    { name: "LinkedIn", icon: <Link size={24} />, url: "https://linkedin.com", color: "bg-neo-yellow" },
    { name: "X", icon: <X size={24} />, url: "https://x.com", color: "bg-neo-green" },
    { name: "Email", icon: <Mail size={24} />, url: "mailto:hello@example.com", color: "bg-white" },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto animate-fade-in font-sans selection:bg-neo-yellow selection:text-black">
      {/* Header / Hero Section */}
      <header className="mb-12 md:mb-20">
        <div className="neo-box bg-neo-yellow p-6 md:p-10 inline-block mb-6">
          <h1 className="text-5xl md:text-8xl font-black neo-heading leading-none">
            LEE <br /> GA YOUNG
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:items-end gap-4 mt-4">
          <p className="text-xl md:text-3xl font-bold bg-white neo-box px-4 py-2 inline-block">
            Creative Developer & Product Designer
          </p>
          <p className="text-lg font-medium text-zinc-600 md:mb-2">
            📍 Seoul, South Korea
          </p>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
        {/* About Section */}
        <section className="lg:col-span-7 space-y-6">
          <div className="neo-box bg-white p-8 space-y-4">
            <h2 className="text-3xl font-black uppercase flex items-center gap-2">
              <span className="w-8 h-8 bg-neo-cyan neo-box flex items-center justify-center text-sm">01</span>
              About Me
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-zinc-800 font-medium">
              안녕하세요! 끊임없이 성장하며 가치를 전달하는 개발자 이가영입니다. 
              사용자 경험을 최우선으로 생각하며, 코드로 예술적인 결과물을 만드는 과정을 즐깁니다. 
              단순한 기능 구현을 넘어, 사용자에게 즐거움을 줄 수 있는 인터랙티브한 웹 환경을 구축하는 것에 열정을 가지고 있습니다.
            </p>
          </div>

          <div className="neo-box bg-neo-green p-8">
            <h2 className="text-3xl font-black uppercase mb-4">Values</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg font-bold">
              <li className="flex items-center gap-2">✨ Detail Oriented</li>
              <li className="flex items-center gap-2">🚀 Faster Execution</li>
              <li className="flex items-center gap-2">🎨 Visual Excellence</li>
              <li className="flex items-center gap-2">🤝 Collaborative Mindset</li>
            </ul>
          </div>
        </section>

        {/* Links Section */}
        <section className="lg:col-span-5 space-y-6">
          <div className="neo-box bg-white p-6">
            <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-2">
               <span className="w-8 h-8 bg-neo-pink neo-box flex items-center justify-center text-sm">02</span>
               Connect
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`neo-box ${link.color} p-4 flex items-center justify-between group neo-box-hover neo-box-active transition-all`}
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-white neo-box p-2 group-hover:bg-neo-black group-hover:text-white transition-colors">
                      {link.icon}
                    </span>
                    <span className="text-xl font-black uppercase">
                      {link.name}
                    </span>
                  </div>
                  <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="neo-box bg-neo-cyan p-6 flex items-center justify-between group neo-box-hover cursor-pointer">
            <span className="text-xl font-black uppercase tracking-tighter">Download Resume</span>
            <ExternalLink size={24} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-10 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-black uppercase tracking-widest text-lg">
          © 2026 Lee Ga-young
        </p>
        <div className="flex gap-6 font-bold uppercase italic">
          <span>Built with Next.js</span>
          <span>Designed in Seoul</span>
        </div>
      </footer>
    </div>
  );
}
