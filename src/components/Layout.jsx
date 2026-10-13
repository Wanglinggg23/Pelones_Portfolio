import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Code2, Github, Facebook, Mail } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/resume', 'Resume'], ['/contact', 'Contact']
];
export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-ink text-slate-100">
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 font-bold tracking-tight"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/15 text-violet-300 ring-1 ring-violet-300/20"><Code2 size={21}/></span><span>JTP<span className="text-violet-300">.</span></span></Link>
        <nav className="hidden items-center gap-1 md:flex">{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={({isActive}) => `rounded-xl px-4 py-2 text-sm transition ${isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>{label}</NavLink>)}</nav>
        <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 md:hidden">{open ? <X size={20}/> : <Menu size={20}/>}</button>
      </div>
      {open && <nav className="grid gap-1 border-t border-white/10 px-5 py-3 md:hidden">{links.map(([to,label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} className={({isActive}) => `rounded-xl px-4 py-3 ${isActive ? 'bg-white/10 text-white' : 'text-slate-400'}`}>{label}</NavLink>)}</nav>}
    </header>
    <main className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">{children}</main>
    <footer className="border-t border-white/10"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-8"><p>© {new Date().getFullYear()} Jove Tristan Pelones. Built with React & Tailwind CSS.</p><div className="flex gap-4"><a aria-label="GitHub" href="https://github.com/Wanglinggg23" target="_blank" rel="noreferrer" className="hover:text-violet-300"><Github size={18}/></a><a aria-label="Facebook" href="https://www.facebook.com/jtpelones.23" target="_blank" rel="noreferrer" className="hover:text-violet-300"><Facebook size={18}/></a><a aria-label="Email" href="mailto:jtpelones23@gmail.com" className="hover:text-violet-300"><Mail size={18}/></a></div></div></footer>
  </div>
}
