import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Admin Panel</h1>
      <p>Please <Link href="/login">log in</Link> to continue.</p>
    </div>
  );
}
