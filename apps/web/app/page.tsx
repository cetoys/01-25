'use client';

import { Button, Tokens } from '@kalorisayar/ui';

const heroStyle: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${Tokens.colors.primary}, ${Tokens.colors.accent})`,
  color: '#FFFFFF',
  textAlign: 'center',
  padding: Tokens.spacing.xl,
  gap: Tokens.spacing.lg,
};

export default function HomePage() {
  return (
    <main style={heroStyle}>
      <h1 style={{ fontSize: '3rem', maxWidth: 640 }}>Hit your macros. Keep your life.</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: 720 }}>
        KaloriSayar (CalorieForge) provides bilingual nutrition coaching, macro targets, and frictionless logging tools designed
        for busy people across Türkiye and beyond.
      </p>
      <div style={{ display: 'flex', gap: Tokens.spacing.md }}>
        <Button onClick={() => alert('Beta waitlist coming soon!')} aria-label="Join the KaloriSayar beta">
          Join the beta
        </Button>
        <Button
          variant="ghost"
          onClick={() => alert('Feature overview will live here.')}
          aria-label="View KaloriSayar features"
        >
          Learn more
        </Button>
      </div>
    </main>
  );
}
