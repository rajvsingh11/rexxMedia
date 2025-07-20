"use client";

import { useState, useEffect } from 'react';

export function useTypewriter(text: string, startDelay = 0, speed = 50): [string, boolean] {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsDone(false);
    let timeoutId: NodeJS.Timeout;

    const startTyping = () => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prev => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsDone(true);
        }
      }, speed);
    };

    if (startDelay > 0) {
      timeoutId = setTimeout(startTyping, startDelay);
    } else {
      startTyping();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, startDelay]);
  
  return [displayText, !isDone];
}
