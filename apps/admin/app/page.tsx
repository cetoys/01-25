'use client';

import { useMemo } from 'react';
import { Button } from '@kalorisayar/ui';

interface QueueItem {
  id: string;
  type: string;
  status: 'pending' | 'approved' | 'rejected';
}

const sampleQueue: QueueItem[] = [
  { id: 'food_001', type: 'food_submission', status: 'pending' },
  { id: 'barcode_213', type: 'barcode_conflict', status: 'pending' },
];

export default function AdminDashboard() {
  const pendingCount = useMemo(
    () => sampleQueue.filter((item) => item.status === 'pending').length,
    [],
  );

  return (
    <main style={{ padding: 32 }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1>KaloriSayar Admin</h1>
          <p>Moderate community contributions and monitor the health of the platform.</p>
        </div>
        <Button>Review queue ({pendingCount})</Button>
      </header>

      <section style={{ marginTop: 32 }}>
        <h2>Queues</h2>
        <ul>
          {sampleQueue.map((item) => (
            <li key={item.id}>
              <strong>{item.type}</strong> — {item.status}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
