import { Layers, Lock, BarChart3 } from 'lucide-react';
import type { ReactNode } from 'react';
import Logo from './Logo';

type Card = {
  icon: ReactNode;
  text: string;
  gradientFrom: string;
  gradientTo: string;
};

const CARDS: Card[] = [
  {
    icon: <Logo size={24} />,
    text: 'Your All-in-One Content Studio',
    gradientFrom: '#F59E0B',
    gradientTo: '#3B82F6',
  },
  {
    icon: <Layers className="w-6 h-6 text-emerald-600 flex-shrink-0" />,
    text: 'Multi-Channel Publishing Hub',
    gradientFrom: '#10B981',
    gradientTo: '#06B6D4',
  },
  {
    icon: <Lock className="w-6 h-6 text-blue-600 flex-shrink-0" />,
    text: 'Role-Based Access & Approvals',
    gradientFrom: '#3B82F6',
    gradientTo: '#0EA5E9',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-amber-600 flex-shrink-0" />,
    text: 'Advanced Content Analytics',
    gradientFrom: '#F59E0B',
    gradientTo: '#EF4444',
  },
];

function SpinRing({ id, from, to }: { id: string; from: string; to: string }) {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" className="spin-ring flex-shrink-0">
      <defs>
        <linearGradient id={id} x1="14" y1="3" x2="25" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="14" cy="14" r="11" fill="none" stroke="#E5E7EB" strokeWidth="3" />
      <path
        d="M 14 3 A 11 11 0 0 1 25 14"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PopupCard() {
  return (
    <div className="flex flex-col items-center gap-3 mt-10 sm:mt-16 w-full px-4 sm:px-0">
      {CARDS.map((card, i) => (
        <div
          key={card.text}
          className="popup-card-animate flex items-center gap-3 sm:gap-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/60 px-4 sm:px-6 py-3 sm:py-4 w-full max-w-[380px]"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          {card.icon}
          <span className="text-xs sm:text-sm font-medium text-gray-700 flex-1 whitespace-nowrap">
            {card.text}
          </span>
          <SpinRing id={`spin-grad-${i}`} from={card.gradientFrom} to={card.gradientTo} />
        </div>
      ))}
    </div>
  );
}
