import Image from "next/image";
import { Link, Mail, X, Globe, ExternalLink } from "lucide-react";

export default function Home() {
  const socialLinks = [
    { name: "GitHub", icon: <Globe size={20} />, url: "https://github.com", color: "hover:text-white" },
    { name: "Instagram", icon: <Globe size={20} />, url: "https://instagram.com", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: <Link size={20} />, url: "https://linkedin.com", color: "hover:text-blue-400" },
    { name: "X", icon: <X size={20} />, url: "https://x.com", color: "hover:text-zinc-200" },
    { name: "Email", icon: <Mail size={20} />, url: "mailto:hello@example.com", color: "hover:text-emerald-400" },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 animate-fade-in">
      <main className="w-full max-w-lg mt-20">
        {/* Profile Header */}
        <section className="flex flex-col items-center text-center space-y-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-32 h-32 rounded-full border-2 border-white/10 overflow-hidden bg-zinc-900">
              <Image
                src="/avatar.png"
                alt="Profile Avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              이가영
            </h1>
            <p className="text-lg text-zinc-400 font-medium">
              Creative Developer & Product Designer
            </p>
          </div>

          <p className="max-w-md text-zinc-500 leading-relaxed">
            안녕하세요! 끊임없이 성장하며 가치를 전달하는 개발자 이가영입니다. 
            더 나은 사용자 경험을 고민하고 아름다운 결과물을 만드는 것을 즐깁니다.
          </p>
        </section>

        {/* Links Section */}
        <section className="mt-12 space-y-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center justify-between p-5 group"
            >
              <div className="flex items-center gap-4">
                <span className={`text-zinc-400 transition-colors duration-300 ${link.color}`}>
                  {link.icon}
                </span>
                <span className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </div>
              <ExternalLink size={18} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </a>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-20 pb-10 text-center">
          <p className="text-zinc-600 text-sm">
            © 2026 Lee Ga-young. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
