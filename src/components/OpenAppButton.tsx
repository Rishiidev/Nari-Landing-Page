import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import PWAGuide from './PWAGuide';

interface OpenAppButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function OpenAppButton({ className, children }: OpenAppButtonProps) {
  const { isInstallable, promptInstall } = usePWAInstall();
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInstallable) {
      await promptInstall();
      window.open('https://nariself.vercel.app/', '_blank', 'noopener,noreferrer');
    } else {
      setIsGuideOpen(true);
    }
  };

  const handleGuideClose = () => {
    setIsGuideOpen(false);
    window.open('https://nariself.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children}
      </button>
      <PWAGuide isOpen={isGuideOpen} onClose={handleGuideClose} />
    </>
  );
}
