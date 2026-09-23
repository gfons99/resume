import { useEffect, useState, memo } from 'react';

interface StarProps {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'static' | 'twinkle' | 'pulsate';
  duration?: number;
}

interface ShootingStarProps {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

// 4-pointed star SVG path
const StarSVG = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 512 512" className={className} style={style} fill="currentColor">
    <path d="M256 0C256 141.385 370.615 256 512 256C370.615 256 256 370.615 256 512C256 370.615 141.385 256 0 256C141.385 256 256 141.385 256 0Z" />
  </svg>
);

export const StarryBackground = memo(() => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStarProps[]>([]);

  useEffect(() => {
    // Generate background elements only on client-side to avoid hydration mismatches
    const generateBackground = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      
      // We want enough stars to form a pattern, but not too crowded.
      // Scaling with screen size makes it responsive.
      const numStars = Math.floor((vw * vh) / 8000); 
      
      const newStars: StarProps[] = [];
      for (let i = 0; i < numStars; i++) {
        const rand = Math.random();
        let type: 'static' | 'twinkle' | 'pulsate' = 'static';
        if (rand > 0.85) type = 'pulsate';
        else if (rand > 0.5) type = 'twinkle';

        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4, // 4px to 12px
          type,
          duration: type !== 'static' ? Math.random() * 4 + 3 : undefined,
        });
      }
      setStars(newStars);

      // Generate shooting stars
      const newShootingStars: ShootingStarProps[] = [];
      for (let i = 0; i < 20; i++) {
        newShootingStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 50, // Start higher up
          delay: Math.random() * 15, // Staggered delays
          duration: Math.random() * 2 + 1, // 1-3 seconds fast motion
        });
      }
      setShootingStars(newShootingStars);
    };

    generateBackground();
    
    // Optional: regenerate on resize, debounced. For now, static generation is fine.
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Background stars */}
      {stars.map((star) => {
        let animationClass = '';
        const style: Record<string, string | number> = {
          left: `${star.x}vw`,
          top: `${star.y}vh`,
          width: `${star.size}px`,
          height: `${star.size}px`,
        };

        if (star.type === 'twinkle') {
          animationClass = 'star-twinkle';
          style['--twinkle-duration'] = `${star.duration}s`;
        } else if (star.type === 'pulsate') {
          animationClass = 'star-pulsate';
          style['--pulsate-duration'] = `${star.duration}s`;
        }

        return (
          <div
            key={`star-${star.id}`}
            className={`absolute text-blue-900 dark:text-white ${animationClass}`}
            style={style as React.CSSProperties}
          >
            <StarSVG className="w-full h-full opacity-60 dark:opacity-80" />
          </div>
        );
      })}

      {/* Shooting stars */}
      {shootingStars.map((shooting) => (
        <div
          key={`shooting-${shooting.id}`}
          className="absolute w-[2px] h-[50px] bg-gradient-to-b from-transparent via-blue-800 dark:via-white to-transparent shooting-star"
          style={{
            left: `${shooting.x}vw`,
            top: `${shooting.y}vh`,
            '--shooting-duration': `${shooting.duration + 3}s`, // Reduced buffer for higher frequency
            '--shooting-delay': `${shooting.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
});
