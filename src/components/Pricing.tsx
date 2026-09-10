const YEARLY_LINK = 'https://buy.stripe.com/aFa14p63rbCUei2cVV9IQ0f'
const LIFETIME_LINK = 'https://buy.stripe.com/5kQcN71NbdL22zk5tt9IQ0g'

const YEARLY_FEATURES = [
  'Every site in the library, unlocked',
  'New drops added weekly, all year',
  'Full build spec on every entry — stack, classes, animation constants, asset requirements',
  'The Creative tab — design skills and UI prompts',
  'Priority on request threads',
]

const LIFETIME_FEATURES = [
  'Everything in Yearly',
  'One payment, no renewal, ever',
  'Every future drop included automatically',
  'First look at new library sections and tools',
  'Priority on request threads',
]

function Check() {
  return (
    <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

function PlanCard({
  name,
  price,
  cadence,
  features,
  href,
  highlight,
}: {
  name: string
  price: string
  cadence: string
  features: string[]
  href: string
  highlight?: boolean
}) {
  return (
    <div
      className={`relative flex flex-col gap-6 rounded-2xl p-6 sm:p-8 ${
        highlight
          ? 'bg-white text-black ring-1 ring-white/20'
          : 'bg-white/[0.03] text-white ring-1 ring-white/10'
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 right-6 rounded-full bg-black px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
          Best value
        </span>
      )}
      <div>
        <h3 className={`text-[15px] font-semibold ${highlight ? 'text-black' : 'text-white'}`}>{name}</h3>
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="text-[34px] font-bold tracking-[-0.02em]">{price}</span>
          <span className={`text-[13px] ${highlight ? 'text-black/50' : 'text-white/40'}`}>{cadence}</span>
        </div>
      </div>
      <ul className="flex flex-1 flex-col gap-3">
        {features.map(f => (
          <li key={f} className={`flex items-start gap-2.5 text-[13px] leading-snug ${highlight ? 'text-black/75' : 'text-white/65'}`}>
            <span className={highlight ? 'mt-0.5 h-3.5 w-3.5 shrink-0 text-black/50' : ''}>
              {highlight ? (
                <svg className="mt-0 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7" />
                </svg>
              ) : <Check />}
            </span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-lg py-2.5 text-center text-[13px] font-semibold transition-colors ${
          highlight
            ? 'bg-black text-white hover:bg-black/85'
            : 'bg-white text-black hover:bg-white/85'
        }`}
      >
        Get {name}
      </a>
    </div>
  )
}

export default function Pricing() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-[28px] font-bold tracking-[-0.02em] text-white sm:text-[36px]">
          Unlock the full library.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-white/50">
          Every site ships with its complete build spec. Pick the plan that fits how long you'll be shipping.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <PlanCard
          name="Yearly"
          price="$199"
          cadence="/ year"
          features={YEARLY_FEATURES}
          href={YEARLY_LINK}
        />
        <PlanCard
          name="Lifetime"
          price="$299"
          cadence="one time"
          features={LIFETIME_FEATURES}
          href={LIFETIME_LINK}
          highlight
        />
      </div>
      <p className="mt-8 text-center text-[11px] text-white/30">
        Secure checkout via Stripe. Cancel a yearly plan anytime.
      </p>
      <p className="mx-auto mt-3 max-w-md text-center text-[11px] leading-relaxed text-white/25">
        Right after checkout we email the address you paid with a link to set a password —
        log in with it up top and every locked card unlocks.
      </p>
    </div>
  )
}
