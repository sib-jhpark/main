import type { ImgHTMLAttributes } from 'react';

export interface ProtectedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  watermarkText?: string;
  watermarkVariant?: 'tiled' | 'corner' | 'none';
}

export function ProtectedImage({
  wrapperClassName = '',
  className = '',
  watermarkText = '© Jaehyun Park',
  watermarkVariant = 'tiled',
  alt = '',
  ...imgProps
}: ProtectedImageProps) {
  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{ WebkitTouchCallout: 'none', WebkitUserSelect: 'none' }}
      className={`relative overflow-hidden select-none ${wrapperClassName}`}
    >
      <img
        {...imgProps}
        alt={alt}
        draggable={false}
        className={`pointer-events-none select-none ${className}`}
      />

      {/* Transparent shield + watermark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 select-none overflow-hidden"
      >
        {watermarkVariant === 'tiled' && (
          <div className="w-[150%] h-[150%] -translate-x-[16%] -translate-y-[16%] -rotate-[24deg] grid grid-cols-3 gap-y-16 gap-x-10 items-center justify-items-center opacity-[0.16] dark:opacity-[0.2] pointer-events-none">
            {Array.from({ length: 12 }).map((_, idx) => (
              <span
                key={idx}
                className="text-[11px] sm:text-[13px] font-semibold tracking-wider text-black dark:text-white whitespace-nowrap drop-shadow-[0_1px_1px_rgba(255,255,255,0.65)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.65)]"
              >
                {watermarkText}
              </span>
            ))}
          </div>
        )}

        {watermarkVariant === 'corner' && (
          <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/35 text-white/85 text-[9px] font-medium tracking-wide backdrop-blur-[2px] pointer-events-none">
            {watermarkText}
          </span>
        )}
      </div>
    </div>
  );
}
