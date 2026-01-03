import { ReactNode } from 'react';

interface WalletButtonProps {
  icon: ReactNode;
  name: string;
  description: string;
  onClick?: () => void;
}

function WalletButton({ icon, name, description, onClick }: WalletButtonProps) {
  return (
    <button className="wallet-button w-full group" onClick={onClick}>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
          <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-white font-semibold text-base group-hover:text-cyan-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-all duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}

export default WalletButton;
