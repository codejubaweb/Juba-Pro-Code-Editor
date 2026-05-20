'use client';

import dynamic from 'next/dynamic';

const JubaEditorPro = dynamic(() => import('./Editor'), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen items-center justify-center bg-[#0d0f14] text-[#00e5ff] font-mono">
      <div className="animate-pulse">JUBA Editor Pro // Loading...</div>
    </div>
  ),
});

export default function Page() {
  return <JubaEditorPro />;
}
