import React from 'react';

const FlowerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 9c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 15c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 12c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3z" stroke="currentColor" strokeWidth="2"/>
    <path d="M15 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3z" stroke="currentColor" strokeWidth="2"/>
    <path d="M9.879 14.121c1.172 1.172 1.172 3.071 0 4.243s-3.071 1.172-4.243 0-1.172-3.071 0-4.243 3.071-1.172 4.243 0z" stroke="currentColor" strokeWidth="2"/>
    <path d="M14.121 9.879c-1.172-1.172-3.071-1.172-4.243 0s-1.172 3.071 0 4.243 3.071 1.172 4.243 0 1.172-3.071 0-4.243z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default FlowerIcon;