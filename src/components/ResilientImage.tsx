import { useState } from 'react';
import { Compass } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1D1C1A] via-[#26231F] to-[#141413] text-[#FAF8F4] p-6 text-center ${className}`}
      >
        <Compass className="w-7 h-7 text-[#C5A059] mb-3" strokeWidth={1.25} />
        <p className="font-display text-lg tracking-wide text-[#FAF8F4]">
          {fallbackTitle || 'ALPHA HOMES INTERIORS'}
        </p>
        <p className="text-xs text-[#DFD5C5]/75 mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
