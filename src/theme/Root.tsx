import React, { useEffect } from 'react';
import type { Props } from '@theme/Root';
import mediumZoom from 'medium-zoom';

export default function Root({ children }: Props) {
  useEffect(() => {
    mediumZoom('img:not(.navbar__logo):not(.navbar__brand)', {
      margin: 24,
  background: '#f8fafc',
      scrollOffset: 40,
    });
  }, []);
  return <>{children}</>;
}
