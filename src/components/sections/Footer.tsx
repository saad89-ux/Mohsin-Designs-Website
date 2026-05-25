export function Footer() {
  const LOCATIONS = [
    { name: 'United States',  address: '16 Cove Road\nMount Arlington, NJ 07856' },
    { name: 'Australia',      address: '155 Bennett Rd, St Clair\nNSW 2759' },
    { name: 'South Africa',   address: '55 Mons Rd, Bellevue East,\nJohannesburg, 2198' },
    { name: 'Singapore',      address: '6 Raffles Blvd, Marina\nSquare' },
    { name: 'Italy',          address: 'Via Bari, 9, 03043 Cassino,\nFR' },
    { name: 'Dubai',          address: 'AlFattan Downtown - 32d St -\nAl Satwa' },
    { name: 'Cyprus',         address: 'Estias 5, Strovolos\n2001' },
    { name: 'Bangladesh',     address: 'Ventura Iconia, Plot 37 Road\nNo. 11, Banani, Dhaka 1213' },
  ];

  const FOOTER_LINKS = [
    {
      title: 'Important Links',
      links: ['Contact Us', 'About Us', 'Projects', 'Pricing'],
    },
    {
      title: 'Services',
      links: ['UI/UX Design', 'Web Design', 'Logo & Branding', 'Webflow Design', 'Framer Design'],
    },
    {
      title: 'Specialized Industry',
      links: ['Fintech Industry', 'Healthcare & Fitness Industry', 'Edtech Industry', 'Cybersecurity Industry', 'Company Deck'],
      hasIcon: true,
    },
    {
      title: 'Others',
      links: ['Case Study', 'Products', 'Industry', 'Blogs'],
    },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#050505', fontFamily: "'Manrope', sans-serif" }}
    >

      {/* ═══ TOP: GLOBE + LOCATION CARDS ═══ */}
      <div
        className="relative w-full flex flex-col items-center overflow-hidden"
        style={{ paddingTop: 96, paddingBottom: 160, borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >

        {/* Starry background */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            opacity: 0.45,
            backgroundImage: [
              'radial-gradient(1.2px 1.2px at 15px 25px, #fff, transparent)',
              'radial-gradient(1px 1px at 55px 65px, #fff, transparent)',
              'radial-gradient(1.2px 1.2px at 95px 15px, #fff, transparent)',
              'radial-gradient(1px 1px at 135px 80px, #fff, transparent)',
              'radial-gradient(1.5px 1.5px at 175px 40px, #fff, transparent)',
              'radial-gradient(1px 1px at 45px 120px, #fff, transparent)',
              'radial-gradient(1.2px 1.2px at 85px 155px, #fff, transparent)',
              'radial-gradient(1px 1px at 165px 130px, #fff, transparent)',
              'radial-gradient(1.5px 1.5px at 205px 75px, #fff, transparent)',
              'radial-gradient(1px 1px at 250px 30px, #fff, transparent)',
              'radial-gradient(1.2px 1.2px at 290px 100px, #fff, transparent)',
              'radial-gradient(1px 1px at 330px 50px, #fff, transparent)',
              'radial-gradient(1.5px 1.5px at 370px 145px, #fff, transparent)',
              'radial-gradient(1px 1px at 410px 20px, #fff, transparent)',
              'radial-gradient(1.2px 1.2px at 450px 90px, #fff, transparent)',
              'radial-gradient(1px 1px at 490px 60px, #fff, transparent)',
              'radial-gradient(1.5px 1.5px at 530px 135px, #fff, transparent)',
              'radial-gradient(1px 1px at 570px 10px, #fff, transparent)',
              'radial-gradient(1.2px 1.2px at 10px 190px, #fff, transparent)',
              'radial-gradient(1px 1px at 220px 175px, #fff, transparent)',
              'radial-gradient(1.5px 1.5px at 350px 5px, #fff, transparent)',
              'radial-gradient(1px 1px at 470px 185px, #fff, transparent)',
              'radial-gradient(1.2px 1.2px at 100px 200px, #fff, transparent)',
              'radial-gradient(1px 1px at 600px 170px, #fff, transparent)',
            ].join(', '),
            backgroundSize: '620px 220px',
          }}
        />

        {/* CSS Glowing Earth Arc */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            bottom: -10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '130vw',
            height: 600,
            borderRadius: '50%',
            background: 'linear-gradient(to bottom, rgba(14,165,233,0.22) 0%, rgba(5,5,5,1) 32%)',
            borderTop: '2.5px solid rgba(14,165,233,0.85)',
            boxShadow: '0 -18px 120px rgba(14,165,233,0.45), inset 0 24px 80px rgba(14,165,233,0.22)',
          }}
        />

        {/* Location Cards Grid */}
        <div
          className="relative z-10 grid grid-cols-2 lg:grid-cols-4 w-full"
          style={{ gap: 14, maxWidth: 960, padding: '0 24px' }}
        >
          {LOCATIONS.map((loc, i) => (
            <div
              key={i}
              className="text-center cursor-default"
              style={{
                background: 'rgba(6,20,40,0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 16,
                padding: '22px 18px',
                transition: 'transform 0.2s, border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(14,165,233,0.4)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(6,20,40,0.85)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = '';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.09)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(6,20,40,0.65)';
              }}
            >
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em', marginBottom: 8 }}>
                {loc.name}
              </h4>
              <p style={{ color: '#9CA3AF', fontSize: 11.5, fontWeight: 500, lineHeight: 1.65, whiteSpace: 'pre-line' }}>
                {loc.address}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
          style={{ height: 160, background: 'linear-gradient(to top, #050505, transparent)' }}
        />
      </div>

      {/* ═══ BOTTOM: LINKS + BAR ═══ */}
      <div className="relative z-20" style={{ background: '#050505', paddingTop: 48, paddingBottom: 56 }}>

        {/* Links grid */}
        <div
          className="mx-auto grid grid-cols-2 lg:grid-cols-4"
          style={{ maxWidth: 1060, padding: '0 40px', gap: 36 }}
        >
          {FOOTER_LINKS.map((col, idx) => (
            <div key={idx}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em', marginBottom: 26 }}>
                {col.title}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {col.links.map((link, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <a
                      href="#"
                      style={{ color: '#9CA3AF', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
                    >
                      {link}
                    </a>
                    {col.hasIcon && link === 'Company Deck' && (
                      <span
                        style={{
                          width: 17, height: 17, borderRadius: '50%',
                          background: '#7C3AED',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 10, color: '#fff', fontWeight: 700, flexShrink: 0,
                        }}
                      >
                        ↓
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mx-auto flex items-center justify-between flex-wrap gap-4"
          style={{
            maxWidth: 1060,
            padding: '20px 40px 0',
            marginTop: 40,
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 32, height: 32,
                background: '#111',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px',
              }}
            >
              CA
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>Catalyst</p>
              <p style={{ fontSize: 11, fontWeight: 400, color: 'rgba(255,255,255,0.45)', lineHeight: 1 }}>Analytics</p>
            </div>
          </div>

          {/* Copyright */}
          <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Catalyst Analytics. All rights reserved.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 10 }}>
            {['in', 'tw', 'gh'].map((s) => (
              <div
                key={s}
                style={{
                  width: 32, height: 32,
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 12, fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s',
                  userSelect: 'none',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(14,165,233,0.5)';
                  (e.currentTarget as HTMLDivElement).style.color = '#0EA5E9';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLDivElement).style.color = 'rgba(255,255,255,0.5)';
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}