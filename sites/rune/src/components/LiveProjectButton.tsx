export default function LiveProjectButton() {
  return (
    <button
      style={{
        border: '2px solid #D7E2EA',
        color: '#D7E2EA',
        background: 'transparent',
        borderRadius: '9999px',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}
      className="px-5 py-2 text-sm hover:bg-[#D7E2EA]/10 transition-colors"
    >
      Live Project
    </button>
  )
}
