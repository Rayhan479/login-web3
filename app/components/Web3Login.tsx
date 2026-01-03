'use client';

import { useEffect, useRef, useState } from 'react';
import { Wallet, Shield, Sparkles } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import WalletButton from './WalletButton';
import ParticleField from './ParticleField';

function Web3Login() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [account, setAccount] = useState<string | null>(null);

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <ParticleField />

      <FloatingShapes mousePosition={mousePosition} />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div
          className="glass-card w-full max-w-md p-8 md:p-10"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-4 glow-effect">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 cyber-text">
              Welcome to Web3
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect your wallet to access the decentralized future'}
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <WalletButton
              icon={<MetaMaskIcon />}
              name="MetaMask"
              description="Connect with MetaMask"
              onClick={connectMetaMask}
            />
            <WalletButton
              icon={<WalletConnectIcon />}
              name="WalletConnect"
              description="Scan with WalletConnect"
            />
            <WalletButton
              icon={<Wallet className="w-6 h-6" />}
              name="Coinbase Wallet"
              description="Connect with Coinbase"
            />
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4" />
            <span>Secured by blockchain technology</span>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-center text-xs text-gray-600">
              By connecting, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
    </div>
  );
}

function MetaMaskIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5 4.5L13.5 9.5L14.8 6.2L20.5 4.5Z" fill="#E17726" stroke="#E17726" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.5 4.5L10.4 9.55L9.2 6.2L3.5 4.5Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.8 16.2L16 19L20 20L21.1 16.3L17.8 16.2Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.9 16.3L4 20L8 19L6.2 16.2L2.9 16.3Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.8 11.5L6.7 13.2L10.7 13.4L10.6 9.1L7.8 11.5Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.2 11.5L13.3 9L13.3 13.4L17.3 13.2L16.2 11.5Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 19L10.3 17.9L8.3 16.3L8 19Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.7 17.9L16 19L15.7 16.3L13.7 17.9Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function WalletConnectIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 9.5C10.3 5.7 16.3 5.7 20.1 9.5L20.7 10.1C20.9 10.3 20.9 10.6 20.7 10.8L19.2 12.3C19.1 12.4 18.9 12.4 18.8 12.3L18 11.5C15.3 8.8 11 8.8 8.3 11.5L7.4 12.4C7.3 12.5 7.1 12.5 7 12.4L5.5 10.9C5.3 10.7 5.3 10.4 5.5 10.2L6.5 9.5Z" fill="#3B99FC"/>
      <path d="M22.5 12.8L23.8 14.1C24 14.3 24 14.6 23.8 14.8L17.7 20.9C17.5 21.1 17.2 21.1 17 20.9L12.5 16.4C12.45 16.35 12.35 16.35 12.3 16.4L7.8 20.9C7.6 21.1 7.3 21.1 7.1 20.9L1 14.8C0.8 14.6 0.8 14.3 1 14.1L2.3 12.8C2.5 12.6 2.8 12.6 3 12.8L7.5 17.3C7.55 17.35 7.65 17.35 7.7 17.3L12.2 12.8C12.4 12.6 12.7 12.6 12.9 12.8L17.4 17.3C17.45 17.35 17.55 17.35 17.6 17.3L22.1 12.8C22.3 12.6 22.6 12.6 22.5 12.8Z" fill="#3B99FC"/>
    </svg>
  );
}

export default Web3Login;
