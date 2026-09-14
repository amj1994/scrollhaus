import FadeIn from './FadeIn'

const SERVICES = [
  {
    num: '01',
    name: '3D Modeling',
    desc: 'Detailed objects, characters and environments for games, products and visualisations.',
  },
  {
    num: '02',
    name: 'Rendering',
    desc: 'Photorealistic renders with custom lighting, textures and materials.',
  },
  {
    num: '03',
    name: 'Motion Design',
    desc: 'Dynamic animation and motion graphics for brands, products and digital experiences.',
  },
  {
    num: '04',
    name: 'Branding',
    desc: 'Cohesive visual identities from logos to full brand systems.',
  },
  {
    num: '05',
    name: 'Web Design',
    desc: 'Clean, modern, conversion-focused websites.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF', borderRadius: '40px 40px 0 0' }}
    >
      <FadeIn>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderTop: '1px solid rgba(12,12,12,0.15)' }}
            >
              <span
                className="font-black leading-none flex-shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
              >
                {s.num}
              </span>
              <div className="flex flex-col gap-2 pt-2">
                <span
                  className="font-medium uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </span>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
        <div style={{ borderTop: '1px solid rgba(12,12,12,0.15)' }} />
      </div>
    </section>
  )
}
