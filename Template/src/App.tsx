import { useState, useEffect } from 'react'

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: '◈', title: 'Data Analysis & Visualization', desc: 'Power BI, DAX, Star Schema — dashboard interaktif yang mengubah data mentah menjadi insight bisnis.' },
  { icon: '◈', title: 'Data Extraction & Automation', desc: 'Python, Selenium, Web Scraping — otomasi pengambilan data dari berbagai sumber secara efisien.' },
  { icon: '◈', title: 'Geospatial & Quantitative Analysis', desc: 'WebGIS, Change Detection, Analisis Kuantitatif — visualisasi data spasial dan analisis pasar keuangan.' },
]

const PROJECTS = [
  {
    id: '001',
    title: 'Del_Drive_Tracker',
    tag: 'System Tracking · 2025',
    headline: 'Pelacakan & Analisis Utilitas Penyimpanan File',
    detail: 'Mengembangkan sistem pelacakan berbasis TypeScript untuk mencatat riwayat akses dan data kapasitas guna memprediksi tren pertumbuhan penyimpanan.',
    metrics: [['TypeScript', 'Language'], ['Analytics', 'Focus'], ['JSON', 'Data Format']],
    color: '#eef2ff',
    accent: '#4f46e5',
    img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=900&h=560&fit=crop&auto=format',
  },
  {
    id: '002',
    title: 'Dellmology',
    tag: 'FinTech · 2026',
    headline: 'Market Intelligence & Screener Saham BEI',
    detail: 'Menganalisis data transaksi saham IDX untuk mendeteksi aliran investor institusi (bandarmology) dan anomali pasar.',
    metrics: [['IDX', 'Data Source'], ['Python', 'Engine'], ['Next.js', 'Dashboard']],
    color: '#f0f4ff',
    accent: '#3b5bdb',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&h=560&fit=crop&auto=format',
  },
  {
    id: '003',
    title: 'Power BI Dashboard',
    tag: 'Business Intelligence · 2026',
    headline: 'Global Superstore Analytics (Star Schema & DAX)',
    detail: 'Merancang arsitektur Star Schema (1 fact table, 5 dimension tables) dan formula DAX tingkat lanjut untuk menghitung KPI bisnis kritis.',
    metrics: [['Star Schema', 'Model'], ['DAX', 'Calculation'], ['Power BI', 'Tool']],
    color: '#f0fdf4',
    accent: '#16a34a',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=560&fit=crop&auto=format',
  },
  {
    id: '004',
    title: 'IKN Change Detection',
    tag: 'Geospatial · 2026',
    headline: 'Deteksi Perubahan Area Terbangun di Nusantara',
    detail: 'Memproses citra satelit multi-temporal serta dataset spasial untuk menganalisis perkembangan tutupan lahan di IKN.',
    metrics: [['GIS', 'Spatial Data'], ['JS', 'Visualization'], ['Satellites', 'Analysis']],
    color: '#fefce8',
    accent: '#ca8a04',
    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&h=560&fit=crop&auto=format',
  },
  {
    id: '005',
    title: 'WebGIS Munich',
    tag: 'GIS · 2026',
    headline: 'Platform Pemetaan Regional Kota Munich',
    detail: 'Membangun layer peta interaktif dan visualisasi geospasial menggunakan Leaflet/Mapbox untuk menganalisis kepadatan perkotaan.',
    metrics: [['Leaflet', 'Map Engine'], ['POI', 'Data Points'], ['Mapbox', 'Tiles']],
    color: '#fdf2f8',
    accent: '#db2777',
    img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&h=560&fit=crop&auto=format',
  },
]

const STACK = ['Python', 'Power BI', 'DAX', 'SQL', 'JavaScript', 'TypeScript', 'Selenium', 'Next.js', 'Leaflet', 'Mapbox', 'Golang', 'Git']

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
          {['Keahlian', 'Proyek', 'Tentang', 'Kontak'].map((l) => (
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
            Data
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
          Analyst
        </h1>
        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#b0aca4', fontSize: 'clamp(56px, 9vw, 112px)' }}>
          & Developer.
        </h1>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end' }}>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: '#666', maxWidth: 420 }}>
          Mahasiswa Sistem Informasi dengan spesialisasi analisis data dan visualisasi interaktif
          menggunakan Power BI. Berpengalaman mengekstrak data otomatis via Python & Selenium.
          serta mengolah dataset kompleks dari data pasar keuangan hingga data spasial.
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
        {[['5+', 'Proyek Analisis'], ['Power BI', 'Dashboard Expert'], ['Python', 'Data Automation'], ['GIS', 'Spatial Analysis']].map(([v, l]) => (
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
            Data analyst yang percaya bahwa <em>setiap angka punya cerita.</em>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: '#666', marginBottom: 16 }}>
            Mahasiswa Sistem Informasi di Universitas Bakrie (Angkatan 2023) dengan fokus
            pada analisis data, business intelligence, dan pengembangan web. Berpengalaman
            membangun dashboard Power BI, platform analisis pasar keuangan, dan sistem
            deteksi perubahan spasial.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: '#666', marginBottom: 40 }}>
            Menguasai pemodelan data Star Schema, formula DAX tingkat lanjut, otomasi
            data extraction dengan Python & Selenium, serta visualisasi data geospasial
            menggunakan WebGIS. Percaya bahwa data yang tepat menghasilkan keputusan yang tepat.
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
            Menggabungkan kemampuan teknis analisis data dengan pemahaman bisnis — mengubah data mentah menjadi keputusan strategis.
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

function Projects() {
  return (
    <section id="proyek" style={{ padding: '120px 32px', maxWidth: 1200, margin: '0 auto', borderTop: '1px solid #f0eeeb' }}>
      <div style={{ marginBottom: 60 }}>
        <p style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', marginBottom: 16 }}>Portfolio</p>
        <h2 style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 'clamp(32px, 3vw, 44px)', lineHeight: 1.2, color: '#0a0a0a' }}>Proyek Terpilih</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
        {PROJECTS.map((p) => {
          const cardStyle: React.CSSProperties = {
            textDecoration: 'none',
            background: '#0d0d12',
            borderRadius: 16,
            border: '1px solid #1f1f26',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }

          return (
            <a
              key={p.id}
              href={`https://github.com/FadelSearr/${p.title === 'Power BI Dashboard' ? 'Portofolio' : p.title.replace(/ /g, '_')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = p.accent;
                e.currentTarget.style.boxShadow = `0 12px 30px ${p.accent}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#1f1f26';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}
            >
              {/* Preview Image Container */}
              <div style={{ height: 210, overflow: 'hidden', position: 'relative', background: '#13131a', borderBottom: '1px solid #1f1f26' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Card Content */}
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                {/* Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    background: 'rgba(59, 91, 219, 0.1)',
                    color: '#748ffc',
                    padding: '4px 10px',
                    borderRadius: 4,
                    textTransform: 'uppercase'
                  }}>
                    GitHub Repo
                  </span>
                  <span style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: 9,
                    color: '#4e4e5e'
                  }}>
                    {p.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                  fontSize: 22,
                  color: '#ffffff',
                  marginBottom: 10,
                  lineHeight: 1.25
                }}>
                  {p.title}
                </h3>

                {/* Headline / Description */}
                <p style={{
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: '#8e8e9f',
                  marginBottom: 20,
                  flexGrow: 1
                }}>
                  {p.headline}
                </p>

                {/* Metrics / Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, borderTop: '1px solid #1f1f26', paddingTop: 16 }}>
                  {p.metrics.map(([v]) => (
                    <span key={v} style={{
                      fontFamily: 'JetBrains Mono',
                      fontSize: 10,
                      color: '#8e8e9f',
                      border: '1px solid #1f1f26',
                      padding: '3px 8px',
                      borderRadius: 4,
                      background: '#13131a'
                    }}>
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
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
            Punya proyek data?<br />Mari berdiskusi.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#888', maxWidth: 380, marginBottom: 48 }}>
            Terbuka untuk posisi Data Analyst, BI Developer, magang, dan kolaborasi proyek data. Balas dalam 24 jam.
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
                  <option>Data Analyst Position</option>
                  <option>BI Dashboard Project</option>
                  <option>Internship / Magang</option>
                  <option>Freelance Data Project</option>
                  <option>Collaboration</option>
                </select>
              </div>
              <div>
                <label style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Pesan</label>
                <textarea rows={6} required placeholder="Ceritakan kebutuhan data Anda..." value={form.message}
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
        <Contact />
      </main>
      <Footer />
    </>
  )
}