import React from 'react';

export interface SectionTitleProps {
  title: string;
  eyebrow?: string;
  accentColor?: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  eyebrow,
  accentColor = '#10b981',
  as = 'h2',
  className = 'text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight'
}) => {
  const Component = as;

  // Parse title for trailing punctuation
  let textToParse = title.trim();
  let punctuation = '';
  
  const match = textToParse.match(/^(.*)([.?!,;:])$/);
  if (match) {
    textToParse = match[1];
    punctuation = match[2];
  }

  // Parse for [brackets] to highlight specific words
  let parts: { text: string; variant: 'solid' | 'outline' }[] = [];
  
  if (textToParse.includes('[')) {
    const splitRegex = /(\[.*?\])/g;
    const tokens = textToParse.split(splitRegex);
    parts = tokens.map(token => {
      if (token.startsWith('[') && token.endsWith(']')) {
        return { text: token.slice(1, -1), variant: 'outline' as const };
      }
      return { text: token, variant: 'solid' as const };
    }).filter(t => t.text.length > 0);
  } else {
    // Fallback: outline the last word if no brackets are found
    const words = textToParse.split(/\s+/);
    const lastWord = words.pop() || '';
    const solidText = words.join(' ');
    if (solidText) {
      parts.push({ text: solidText + ' ', variant: 'solid' as const });
    }
    if (lastWord) {
      parts.push({ text: lastWord, variant: 'outline' as const });
    }
  }

  return (
    <div className="flex flex-col items-start w-full">
      <style>
        {`
          .outline-txt {
            color: #08090d;
            text-shadow: 
              -1px -1px 0 ${accentColor},
               1px -1px 0 ${accentColor},
              -1px  1px 0 ${accentColor},
               1px  1px 0 ${accentColor},
              -1px  0   0 ${accentColor},
               1px  0   0 ${accentColor},
               0   -1px 0 ${accentColor},
               0    1px 0 ${accentColor};
            -webkit-text-stroke: 0;
          }
          @supports not (-webkit-text-stroke: 1px black) {
            .outline-txt {
              color: ${accentColor};
              text-shadow: none;
            }
          }
        `}
      </style>

      {eyebrow && (
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 rounded-full w-fit">
          <span>{eyebrow}</span>
        </div>
      )}

      <div className="w-full">
        <Component className={className}>
          {parts.map((p, i) => (
            <span key={i} className={p.variant === 'outline' ? 'outline-txt' : ''}>
              {p.text}
            </span>
          ))}
          {punctuation && <span style={{ color: accentColor }}>{punctuation}</span>}
        </Component>
      </div>
    </div>
  );
};
