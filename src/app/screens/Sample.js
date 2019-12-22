import React, { useEffect } from 'react';
import { isMobileOnly } from 'react-device-detect';

export default function SampleScreen() {
  const width = isMobileOnly ? window.innerWidth : window.innerWidth * 0.6;
  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Sample Screen</div>;
}
