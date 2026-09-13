import { useState, useEffect } from 'react'
import dellmologyImg from './assets/dellmology.png'
import webgisImg from './assets/webgis-munich.jpg'
import certKarirnex from './assets/certificate-karirnex.jpg'
import certDibimbing from './assets/certificate-dibimbing.jpg'
import certBytecamp from './assets/sertifikat-bytecamp.jpg'
import certGuestLecture from './assets/sertifikat-guest-lecture.jpg'
import certMindshare from './assets/sertifikat-mindshare.jpg'
import certIeee from './assets/sertifikat-ieee.jpg'
import certLeadership from './assets/sertifikat-leadership-problem-solving.jpg'
import certTeamwork from './assets/sertifikat-teamwork-conflict-resolution.jpg'
import certDesignThinking from './assets/sertifikat-design-thinking.jpg'

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: '◈', title: 'Full-Stack Web Development', desc: 'React, Next.js, TypeScript, Node.js — membangun aplikasi web modern dari frontend hingga backend dengan performa tinggi.' },
  { icon: '◈', title: 'Backend & API Engineering', desc: 'Python, Go, REST API, SQL/NoSQL — merancang sistem server-side yang skalabel, aman, dan mudah diintegrasikan.' },
  { icon: '◈', title: 'Data Engineering & Automation', desc: 'ETL Pipeline, Selenium, Power BI, Cloud Services — mengotomasi alur data dan membangun infrastruktur yang efisien.' },
]

const PROJECTS = [
  {
    id: '001',
    title: 'Dellmology',
    tag: 'Full-Stack FinTech App · 2026',
    headline: 'Platform Market Intelligence Saham BEI',
    problem: 'Investor retail Indonesia kesulitan membaca pola aliran dana institusi (bandar) di pasar saham BEI — data transaksi tersebar, sulit dianalisis, dan tools yang ada terlalu mahal atau tidak transparan.',
    research: 'Riset dimulai dari mempelajari pola transaksi broker summary IDX dan teknik bandarmologi. Dipilih Next.js + Python karena butuh SSR untuk SEO dan Python unggul di data processing. Arsitektur real-time pipeline dipilih agar data selalu fresh tanpa polling manual.',
    metrics: [['Next.js', 'Frontend'], ['Python', 'Backend'], ['IDX API', 'Data Source']],
    color: '#f0f4ff',
    accent: '#3b5bdb',
    img: dellmologyImg,
  },
  {
    id: '002',
    title: 'WebGIS Munich',
    tag: 'Web App · GIS · 2026',
    headline: 'Platform Pemetaan Interaktif Kota Munich',
    problem: 'Data geospasial kota Munich tersebar di berbagai sumber dan sulit divisualisasikan secara interaktif — urban planner butuh satu platform terpadu untuk analisis kepadatan dan POI.',
    research: 'Membandingkan Leaflet.js vs OpenLayers vs Mapbox GL — Leaflet dipilih karena ringan dan ekosistem plugin yang mature. Mapbox sebagai tile server karena kualitas rendering dan dukungan custom styling. Data spasial diproses menggunakan GeoJSON untuk interoperabilitas.',
    metrics: [['Leaflet.js', 'Map Engine'], ['JavaScript', 'Language'], ['Mapbox', 'Tile Server']],
    color: '#fdf2f8',
    accent: '#db2777',
    img: webgisImg,
  },
  {
    id: '003',
    title: 'Del_Drive_Tracker',
    tag: 'CLI Tool · TypeScript · 2025',
    headline: 'Sistem Monitoring & Analisis Penyimpanan File',
    problem: 'Tidak ada cara mudah untuk memantau pertumbuhan storage secara historis di lingkungan lokal — pengguna baru sadar disk penuh setelah terlambat, tanpa data tren untuk perencanaan kapasitas.',
    research: 'Riset terhadap tools monitoring yang ada (du, ncdu, WinDirStat) menunjukkan tidak ada yang menyimpan data historis. TypeScript dipilih agar type-safe dan mudah di-maintain. JSON dipilih sebagai format penyimpanan karena lightweight dan human-readable tanpa perlu database.',
    metrics: [['TypeScript', 'Language'], ['Node.js', 'Runtime'], ['JSON', 'Storage']],
    color: '#eef2ff',
    accent: '#4f46e5',
    img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=900&h=560&fit=crop&auto=format',
  },
  {
    id: '004',
    title: 'ERP-Data-Migration-Validation',
    tag: 'Backend · Python · 2026',
    headline: 'Sistem Validasi & Migrasi Data ERP Otomatis',
    problem: 'Migrasi data antar sistem ERP rawan kehilangan data dan inkonsistensi — proses validasi manual memakan waktu berhari-hari dan masih sering melewatkan anomali kritis.',
    research: 'Mempelajari pola kegagalan migrasi ERP dari case study industri — mayoritas masalah berasal dari data format mismatch dan missing references. Faker dipilih untuk generate test data realistis, Pandas untuk assertion engine karena kemampuan DataFrame comparison yang powerful.',
    metrics: [['Python', 'Core'], ['Faker', 'Data Gen'], ['Pandas', 'Validation']],
    color: '#fff4e6',
    accent: '#e67700',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=560&fit=crop&auto=format',
  },
  {
    id: '005',
    title: 'IKN Change Detection',
    tag: 'Geospatial Web App · 2026',
    headline: 'Aplikasi Deteksi Perubahan Lahan via Citra Satelit',
    problem: 'Monitoring progres pembangunan IKN membutuhkan analisis perubahan tutupan lahan yang akurat — metode survei lapangan terlalu lambat dan mahal untuk area seluas itu.',
    research: 'Riset teknik remote sensing change detection (NDVI differencing, image classification). JavaScript dipilih untuk aksesibilitas browser-based. Satelit data API dipilih karena menyediakan citra multi-temporal gratis dengan resolusi cukup untuk urban change monitoring.',
    metrics: [['JavaScript', 'Frontend'], ['GIS', 'Spatial Engine'], ['Satellite API', 'Data']],
    color: '#fefce8',
    accent: '#ca8a04',
    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&h=560&fit=crop&auto=format',
  },
  {
    id: '006',
    title: 'Power BI Dashboard',
    tag: 'BI Engineering · 2026',
    headline: 'Arsitektur Data Star Schema & DAX untuk Superstore',
    problem: 'Manajemen tidak memiliki visibilitas real-time terhadap performa penjualan lintas regional — laporan manual dibuat mingguan, terlalu lambat untuk pengambilan keputusan strategis.',
    research: 'Menganalisis kebutuhan KPI bisnis dan merancang Star Schema dari normalized data. DAX dipilih karena kemampuan kalkulasi kontekstual yang tidak bisa dilakukan SQL biasa. Power BI dipilih karena integrasi native dengan ekosistem Microsoft yang sudah dipakai stakeholder.',
    metrics: [['Power BI', 'Tool'], ['DAX', 'Language'], ['Star Schema', 'Architecture']],
    color: '#f0fdf4',
    accent: '#16a34a',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=560&fit=crop&auto=format',
    docs: [
      { name: 'DAX Report', desc: 'Implementasi formula DAX tingkat lanjut untuk kalkulasi KPI', file: 'bi/dax-report.pdf' },
      { name: 'BI Q&A', desc: 'Dokumentasi tanya jawab dan analisis Business Intelligence', file: 'bi/bi-qna.pdf' },
      { name: 'Star Schema', desc: 'Arsitektur data warehouse Star Schema design', file: 'bi/star-schema.pdf' },
    ],
  },
]

const CERTIFICATES = [
  {
    title: 'Karirnex Certificate',
    issuer: 'Karirnex',
    desc: 'Sertifikat pelatihan profesional dari Karirnex untuk pengembangan kompetensi di bidang teknologi informasi.',
    img: certKarirnex,
  },
  {
    title: 'Dibimbing Certificate',
    issuer: 'Dibimbing.id',
    desc: 'Sertifikat penyelesaian program pelatihan intensif dari Dibimbing.id untuk meningkatkan skill digital dan profesional.',
    img: certDibimbing,
  },
  {
    title: 'Bytecamp Certificate',
    issuer: 'Bytecamp',
    desc: 'Sertifikat kepesertaan dan pencapaian pada program pelatihan teknologi dari Bytecamp.',
    img: certBytecamp,
  },
  {
    title: 'Guest Lecture: Dari Data ke Solusi Bisnis',
    issuer: 'Guest Lecture Series',
    desc: 'Sertifikat mengenai Peran Informasi Bisnis, Analisis Perancangan, dan AI di Dunia Kerja.',
    img: certGuestLecture,
  },
  {
    title: 'Mindshare Certificate',
    issuer: 'Mindshare',
    desc: 'Sertifikat partisipasi pelatihan dan sesi pengetahuan industri dari Mindshare.',
    img: certMindshare,
  },
  {
    title: 'Step Into The Future Tech With IEEE',
    issuer: 'IEEE',
    desc: 'Sertifikat partisipasi workshop & seminar mengenai tren teknologi masa depan bersama IEEE.',
    img: certIeee,
  },
  {
    title: 'Leadership & Problem Solving',
    issuer: 'Soft Skill Workshop',
    desc: 'Sertifikat pengembangan kepemimpinan dan metodologi pemecahan masalah secara terstruktur.',
    img: certLeadership,
  },
  {
    title: 'Teamwork, Conflict Resolution, & Negotiation',
    issuer: 'Soft Skill Workshop',
    desc: 'Sertifikat pelatihan kolaborasi tim, resolusi konflik, dan kemampuan negosiasi efektif.',
    img: certTeamwork,
  },
  {
    title: 'Design Thinking',
    issuer: 'Innovation & UX Workshop',
    desc: 'Sertifikat pemahaman metodologi Design Thinking dalam pemecahan masalah berorientasi pengguna.',
    img: certDesignThinking,
  },
]

const STACK = ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'SQL', 'REST API', 'Git', 'Docker', 'Leaflet.js', 'Selenium', 'Power BI']

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #f0eeeb' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', background: 'none', border: 'none' }}>
          <div style={{ width: 32, height: 32, background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontFamily: 'Lora, serif', fontSize: 14, fontStyle: 'italic' }}>F</span>
          </div>
          <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.02em', color: '#0a0a0a' }}>Fadel Setiawan Arifin</span>
        </button>

        {/* Desktop links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
          {['Keahlian', 'Proyek', 'Sertifikat', 'Tentang', 'Kontak'].map((l) => (
            <button key={l} onClick={() => go(l.toLowerCase())}
              style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0a0a0a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}>
              {l}
            </button>
          ))}
          <button onClick={() => go('kontak')}
            style={{ padding: '9px 20px', background: '#0a0a0a', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em', transition: 'background 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#3b5bdb')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0a0a0a')}>
            Hire Me
          </button>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }} className="show-mobile">
          <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ display: 'block', height: 1.5, background: '#0a0a0a', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(2px, 3px)' : '' }} />
            <span style={{ display: 'block', height: 1.5, background: '#0a0a0a', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', height: 1.5, background: '#0a0a0a', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(2px, -3px)' : '' }} />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{ overflow: 'hidden', maxHeight: open ? 220 : 0, transition: 'max-height 0.3s ease', background: '#fff', borderTop: '1px solid #f0eeeb' }}>
        <div style={{ padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {['Keahlian', 'Proyek', 'Tentang', 'Kontak'].map((l) => (
            <button key={l} onClick={() => go(l.toLowerCase())}
              style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
              {l}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 32px 0px', maxWidth: 1200, margin: '0 auto', paddingTop: 50 }}>
      {/* Main headline */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0, marginBottom: 64, paddingTop: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', flexWrap: 'wrap', gap: 20 }}>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#0a0a0a', fontSize: 'clamp(56px, 9vw, 112px)', marginBottom: 0 }}>
            Full-Stack
          </h1>
          {/* Top strip */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: 15, alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#000000ff', letterSpacing: '0.08em' }}>OPEN FOR OPPORTUNITIES</span>
            </div>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#000000ff', letterSpacing: '0.08em' }}>Jakarta · Indonesia</span>
          </div>
        </div>
        <h1 style={{ fontFamily: 'Lora, serif', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 0.95, color: '#0a0a0a', fontStyle: 'italic', fontSize: 'clamp(56px, 9vw, 112px)', marginBottom: 8, marginTop: 8 }}>
          Developer
        </h1>
        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#b0aca4', fontSize: 'clamp(56px, 9vw, 112px)' }}>
          & Engineer.
        </h1>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end' }}>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: '#666', maxWidth: 420 }}>
          Mahasiswa Sistem Informasi yang membangun aplikasi web full-stack dari nol —
          dari backend API hingga antarmuka yang intuitif. Berpengalaman menggunakan
          TypeScript, React, Python, dan Go untuk memecahkan masalah nyata dengan kode.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
          <button onClick={() => document.getElementById('proyek')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ padding: '14px 32px', background: '#0a0a0a', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em', width: 'fit-content', transition: 'background 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#3b5bdb')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0a0a0a')}>
            Lihat Proyek →
          </button>
          <button onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ padding: '14px 32px', background: 'transparent', color: '#0a0a0a', border: '1px solid #e0ddd8', cursor: 'pointer', fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em', width: 'fit-content', transition: 'border-color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#0a0a0a')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e0ddd8')}>
            Hubungi Saya
          </button>
        </div>
      </div>

      {/* Divider with stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, marginTop: 80, background: '#f0eeeb' }}>
        {[['6+', 'Proyek Aktif'], ['Full-Stack', 'Web Developer'], ['TypeScript', 'Primary Language'], ['API', 'Backend Engineering']].map(([v, l]) => (
          <div key={l} style={{ padding: '24px 20px', background: '#fff' }}>
            <div style={{ fontFamily: 'Lora', fontSize: 28, fontStyle: 'italic', color: '#0a0a0a', marginBottom: 4 }}>{v}</div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="tentang" style={{ padding: '120px 32px', maxWidth: 1200, margin: '0 auto', borderTop: '1px solid #f0eeeb' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        {/* Photo */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: -16, left: -16, right: 16, bottom: 16, border: '1px solid #f0eeeb', zIndex: 0 }} />
          <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden', background: '#f5f3ef' }}>
            <img
              src="https://drive.google.com/thumbnail?id=1qd6uRXAIJum_Zp1ccPzzpCbU39anEF0f&sz=w800"
              alt="Fadel Setiawan Arifin"
              style={{ width: '100%', display: 'block', filter: 'grayscale(15%)' }} />
          </div>
          {/* Caption */}
          <div style={{ position: 'absolute', bottom: -20, right: -20, background: '#fff', border: '1px solid #f0eeeb', padding: '12px 20px', zIndex: 2 }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', marginBottom: 4 }}>Berbasis di</div>
            <div style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, color: '#0a0a0a' }}>Jakarta, Indonesia</div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', marginBottom: 16 }}>Tentang Saya</p>
          <h2 style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 'clamp(32px, 2.5vw, 40px)', lineHeight: 1.25, color: '#0a0a0a', marginBottom: 24 }}>
            Developer yang percaya bahwa <em>kode terbaik memecahkan masalah nyata.</em>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: '#666', marginBottom: 16 }}>
            Mahasiswa Sistem Informasi di Universitas Bakrie (Angkatan 2023) yang passionate
            membangun produk digital — dari web app full-stack, CLI tool, hingga platform
            geospasial interaktif. Menulis kode bukan hanya untuk menyelesaikan tugas,
            tapi untuk menciptakan sesuatu yang benar-benar berjalan di dunia nyata.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: '#666', marginBottom: 40 }}>
            Menguasai TypeScript/React untuk frontend, Python & Go untuk backend dan
            otomasi, serta SQL/PostgreSQL untuk manajemen data. Setiap proyek dimulai
            dengan memahami masalah, bukan langsung menulis kode.
          </p>

          {/* Stack badges */}
          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {STACK.map((s) => (
              <span key={s} style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.05em', padding: '5px 10px', border: '1px solid #e0ddd8', color: '#888' }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="keahlian" style={{ padding: '120px 32px', maxWidth: 1200, margin: '0 auto', borderTop: '1px solid #f0eeeb' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', marginBottom: 16 }}>Key Competencies</p>
          <h2 style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 'clamp(32px, 3vw, 44px)', lineHeight: 1.2, color: '#0a0a0a', marginBottom: 20 }}>Keahlian &amp; Spesialisasi</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#888' }}>
            Menggabungkan kemampuan engineering software dengan pemahaman sistem — membangun produk yang bukan hanya berjalan, tetapi berskala dan mudah dikelola.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 1, background: '#f0eeeb' }}>
          {SERVICES.map(({ icon, title, desc }) => (
            <ServiceRow key={title} icon={icon} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ padding: '32px 36px', background: hovered ? '#fafaf8' : '#fff', display: 'flex', gap: 24, alignItems: 'flex-start', cursor: 'default', transition: 'background 0.2s' }}>
      <span style={{ fontSize: 20, color: hovered ? '#3b5bdb' : '#ccc', transition: 'color 0.2s', marginTop: 2 }}>{icon}</span>
      <div>
        <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: '#0a0a0a', marginBottom: 8 }}>{title}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.75, color: '#888' }}>{desc}</p>
      </div>
    </div>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function ProjectCard({ p }: { p: typeof PROJECTS[number] }) {
  const [hovered, setHovered] = useState(false)
  const [showDocs, setShowDocs] = useState(false)

  const hasDocs = 'docs' in p && Array.isArray((p as any).docs)
  const docs = hasDocs ? (p as any).docs as { name: string; desc: string; file: string }[] : []
  const basePath = import.meta.env.BASE_URL

  const cardContent = (
    <>
      {/* Preview Image */}
      <div style={{ height: 210, overflow: 'hidden', position: 'relative', background: '#13131a', borderBottom: '1px solid #1f1f26' }}>
        <img
          src={p.img}
          alt={p.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            opacity: 0.85, transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />
      </div>

      {/* Card Content */}
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <span style={{
            fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 600,
            letterSpacing: '0.05em',
            background: hasDocs ? 'rgba(34,197,94,0.1)' : 'rgba(59, 91, 219, 0.1)',
            color: hasDocs ? '#4ade80' : '#748ffc',
            padding: '4px 10px', borderRadius: 4, textTransform: 'uppercase',
          }}>
            {hasDocs ? '📄 Dokumentasi' : 'GitHub Repo'}
          </span>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#4e4e5e' }}>
            {p.tag}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 22,
          color: '#ffffff', marginBottom: 6, lineHeight: 1.25,
        }}>
          {p.title}
        </h3>

        {/* Headline */}
        <p style={{
          fontFamily: 'JetBrains Mono', fontSize: 10, color: '#6e6e7e',
          letterSpacing: '0.02em', marginBottom: 16,
        }}>
          {p.headline}
        </p>

        {/* Content area with smooth transition */}
        <div style={{ position: 'relative', flexGrow: 1, minHeight: 100 }}>
          {/* Problem (default) */}
          <div style={{
            opacity: hovered ? 0 : 1,
            transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
            transition: 'all 0.35s ease',
            position: hovered ? 'absolute' : 'relative',
            inset: hovered ? 0 : undefined,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <span style={{
                fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 600,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: '#f87171', background: 'rgba(248,113,113,0.1)',
                padding: '3px 8px', borderRadius: 4,
              }}>
                ⚡ Masalah
              </span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.65, color: '#9e9eaf' }}>
              {p.problem}
            </p>
          </div>

          {/* Research (on hover) */}
          <div style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.35s ease',
            position: hovered ? 'relative' : 'absolute',
            inset: hovered ? undefined : 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <span style={{
                fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 600,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: '#a78bfa', background: 'rgba(167,139,250,0.1)',
                padding: '3px 8px', borderRadius: 4,
              }}>
                🔬 Riset & Alasan
              </span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.65, color: '#9e9eaf' }}>
              {p.research}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, borderTop: '1px solid #1f1f26', paddingTop: 16, marginTop: 16 }}>
          {p.metrics.map(([v]) => (
            <span key={v} style={{
              fontFamily: 'JetBrains Mono', fontSize: 10, color: '#8e8e9f',
              border: '1px solid #1f1f26', padding: '3px 8px',
              borderRadius: 4, background: '#13131a',
            }}>
              {v}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  const cardStyle: React.CSSProperties = {
    textDecoration: 'none',
    background: '#0d0d12',
    borderRadius: 16,
    border: `1px solid ${hovered ? p.accent : '#1f1f26'}`,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.35s ease',
    boxShadow: hovered ? `0 12px 30px ${p.accent}20` : '0 4px 20px rgba(0,0,0,0.1)',
    transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
    cursor: 'pointer',
    color: 'inherit',
  }

  return (
    <>
      {hasDocs ? (
        <div
          className="project-card"
          style={cardStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setShowDocs(true)}
        >
          {cardContent}
        </div>
      ) : (
        <a
          href={`https://github.com/FadelSearr/${p.title.replace(/ /g, '_')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          style={cardStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {cardContent}
        </a>
      )}

      {/* Docs Modal */}
      {showDocs && (
        <div
          onClick={() => setShowDocs(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 32, animation: 'fadeIn 0.25s ease',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#0d0d12', border: '1px solid #1f1f26',
              borderRadius: 20, maxWidth: 560, width: '100%',
              padding: 0, overflow: 'hidden',
              boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 40px ${p.accent}15`,
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: '28px 32px 20px', borderBottom: '1px solid #1f1f26',
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            }}>
              <div>
                <p style={{
                  fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: p.accent, marginBottom: 8,
                }}>
                  📄 Dokumentasi Proyek
                </p>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 22,
                  color: '#fff', lineHeight: 1.3,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: 'JetBrains Mono', fontSize: 10, color: '#6e6e7e',
                  marginTop: 4,
                }}>
                  {p.headline}
                </p>
              </div>
              <button
                onClick={() => setShowDocs(false)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)', border: '1px solid #1f1f26',
                  color: '#888', fontSize: 16, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s', flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#888' }}
              >
                ✕
              </button>
            </div>

            {/* Doc List */}
            <div style={{ padding: '8px 16px 16px' }}>
              {docs.map((doc, i) => (
                <a
                  key={i}
                  href={`${basePath}${doc.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '18px 16px', borderRadius: 12,
                    textDecoration: 'none', transition: 'background 0.2s',
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  {/* PDF Icon */}
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: `${p.accent}15`, border: `1px solid ${p.accent}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, flexShrink: 0,
                  }}>
                    📑
                  </div>
                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <p style={{
                      fontFamily: 'Outfit, sans-serif', fontWeight: 600,
                      fontSize: 14, color: '#fff', marginBottom: 3,
                    }}>
                      {doc.name}
                    </p>
                    <p style={{
                      fontFamily: 'JetBrains Mono', fontSize: 10,
                      color: '#6e6e7e', lineHeight: 1.4,
                    }}>
                      {doc.desc}
                    </p>
                  </div>
                  {/* Arrow */}
                  <span style={{
                    fontFamily: 'JetBrains Mono', fontSize: 11,
                    color: p.accent, flexShrink: 0,
                  }}>
                    Lihat →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Projects() {
  return (
    <section id="proyek" style={{ padding: '120px 32px', maxWidth: 1200, margin: '0 auto', borderTop: '1px solid #f0eeeb' }}>
      <div style={{ marginBottom: 60 }}>
        <p style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', marginBottom: 16 }}>Portfolio</p>
        <h2 style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 'clamp(32px, 3vw, 44px)', lineHeight: 1.2, color: '#0a0a0a' }}>Proyek Terpilih</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  )
}

// ─── Certifications ───────────────────────────────────────────────────────────

function Certifications() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <section id="sertifikat" style={{ padding: '120px 32px', maxWidth: 1200, margin: '0 auto', borderTop: '1px solid #f0eeeb' }}>
        <div style={{ marginBottom: 60 }}>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', marginBottom: 16 }}>Training & Certificates</p>
          <h2 style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 'clamp(32px, 3vw, 44px)', lineHeight: 1.2, color: '#0a0a0a' }}>Pelatihan &amp; Sertifikat</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
          {CERTIFICATES.map((c) => (
            <div
              key={c.title}
              className="cert-card"
              style={{
                background: '#0d0d12',
                borderRadius: 16,
                border: '1px solid #1f1f26',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                cursor: 'pointer',
              }}
              onClick={() => setLightbox(c.img)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#3b5bdb';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(59,91,219,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#1f1f26';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}
            >
              {/* Certificate Image */}
              <div style={{ height: 240, overflow: 'hidden', position: 'relative', background: '#13131a', borderBottom: '1px solid #1f1f26' }}>
                <img
                  src={c.img}
                  alt={c.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {/* Overlay icon */}
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  width: 32, height: 32, borderRadius: 8,
                  background: 'rgba(59,91,219,0.15)', backdropFilter: 'blur(8px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, color: '#748ffc',
                }}>
                  🔍
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 600,
                    letterSpacing: '0.05em', background: 'rgba(34,197,94,0.1)',
                    color: '#4ade80', padding: '4px 10px', borderRadius: 4,
                    textTransform: 'uppercase',
                  }}>
                    Verified
                  </span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#4e4e5e' }}>
                    {c.issuer}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 20,
                  color: '#ffffff', marginBottom: 10, lineHeight: 1.3,
                }}>
                  {c.title}
                </h3>

                <p style={{ fontSize: 13, lineHeight: 1.6, color: '#8e8e9f', flexGrow: 1 }}>
                  {c.desc}
                </p>

                <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #1f1f26', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#748ffc', letterSpacing: '0.04em' }}>
                    Klik untuk melihat sertifikat →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out', padding: 32,
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <img
            src={lightbox}
            alt="Certificate"
            style={{ maxWidth: '90%', maxHeight: '90vh', objectFit: 'contain', borderRadius: 8, boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: 24, right: 24,
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', fontSize: 18, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [statusMsg, setStatusMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatusMsg('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'f34edb62-bc49-4b69-bb12-fe4a98bb17f5',
          name: form.name,
          email: form.email,
          subject: `Portfolio Contact: ${form.type}`,
          message: `Jenis Kolaborasi: ${form.type}\n\n${form.message}`,
        })
      })

      const result = await response.json()
      if (result.success) {
        setSent(true)
      } else {
        setStatusMsg(result.message || 'Gagal mengirim pesan. Silakan coba lagi.')
      }
    } catch (err) {
      setStatusMsg('Terjadi kesalahan koneksi. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  const inp: React.CSSProperties = {
    width: '100%', padding: '13px 16px', fontSize: 14,
    fontFamily: 'Outfit, sans-serif', background: '#fff',
    border: '1px solid #e0ddd8', color: '#0a0a0a', outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="kontak" style={{ padding: '120px 32px', maxWidth: 1200, margin: '0 auto', borderTop: '1px solid #f0eeeb' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        {/* Left */}
        <div>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', marginBottom: 16 }}>Hubungi Saya</p>
          <h2 style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 'clamp(32px, 3vw, 48px)', lineHeight: 1.15, color: '#0a0a0a', marginBottom: 24 }}>
            Punya ide produk?<br />Mari bangun bersama.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#888', maxWidth: 380, marginBottom: 48 }}>
            Terbuka untuk posisi IT Developer, Full-Stack Engineer, magang, dan kolaborasi pengembangan produk digital. Balas dalam 24 jam.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { icon: '✉', label: 'Email', val: 'fadelsetiawanarifin@email.com', href: 'mailto:fadelsetiawanarifin@email.com' },
              { icon: '⟐', label: 'LinkedIn', val: 'linkedin.com/in/fadelsetiawanarifin', href: 'https://linkedin.com/in/fadel-setiawan-arifin-289672424' },
              { icon: '◎', label: 'GitHub', val: 'github.com/FadelSearr', href: 'https://github.com/FadelSearr' },
            ].map(({ icon, label, val, href }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16, paddingBottom: 24, borderBottom: '1px solid #f0eeeb' }}>
                <div style={{ width: 36, height: 36, border: '1px solid #e0ddd8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#888', flexShrink: 0 }}>{icon}</div>
                <div>
                  <p style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#bbb', marginBottom: 2 }}>{label}</p>
                  <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: '#0a0a0a', textDecoration: 'none', fontWeight: 500 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#3b5bdb')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#0a0a0a')}>{val}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, border: '1px solid #f0eeeb', padding: 48, textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9l5 5 7-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 28, color: '#0a0a0a' }}>Terima kasih!</h3>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>Pesan Anda sudah saya terima.<br />Akan saya balas dalam 1–2 hari kerja.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Nama</label>
                  <input type="text" required placeholder="Nama Anda" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inp}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#0a0a0a')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#e0ddd8')} />
                </div>
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Email</label>
                  <input type="email" required placeholder="email@contoh.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inp}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#0a0a0a')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#e0ddd8')} />
                </div>
              </div>
              <div>
                <label style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Jenis Kolaborasi</label>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                  style={{ ...inp, appearance: 'none' as const, cursor: 'pointer' }}>
                  <option value="">Pilih kategori...</option>
                  <option>IT Developer / Software Engineer Position</option>
                  <option>Full-Stack Web Development</option>
                  <option>Backend API Development</option>
                  <option>Internship / Magang IT</option>
                  <option>Freelance Project</option>
                  <option>Collaboration / Open Source</option>
                </select>
              </div>
              <div>
                <label style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Pesan</label>
                <textarea rows={6} required placeholder="Ceritakan proyek atau kebutuhan pengembangan Anda..." value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inp, resize: 'vertical' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#0a0a0a')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#e0ddd8')} />
              </div>
              {statusMsg && <p style={{ color: '#d93838', fontSize: 13 }}>{statusMsg}</p>}
              <button type="submit" disabled={loading}
                style={{ padding: '15px 32px', background: '#0a0a0a', color: '#fff', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em', transition: 'background 0.2s', marginTop: 8 }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#3b5bdb' }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = '#0a0a0a' }}>
                {loading ? 'Mengirim...' : 'Kirim Pesan →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #f0eeeb', padding: '32px', background: '#fafaf8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 24, height: 24, background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontFamily: 'Lora', fontSize: 11, fontStyle: 'italic' }}>F</span>
          </div>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#bbb', letterSpacing: '0.08em' }}>© 2026 FADEL SETIAWAN ARIFIN</span>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            { label: 'GitHub', href: 'https://github.com/FadelSearr' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fadel-setiawan-arifin-289672424/' },
            { label: 'Instagram', href: 'https://instagram.com/fadel.sear' },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#bbb', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0a0a0a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#bbb')}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 72 }}>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}