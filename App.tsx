import React from 'react';
import FloatingHearts from './components/FloatingHearts';
import Hero from './components/Hero';

import Reasons from './components/Reasons';
import LoveLetter from './components/LoveLetter';
import Proposal from './components/Proposal';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-rose-50 text-rose-900 selection:bg-rose-200 selection:text-rose-900">
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FloatingHearts />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />

        <Reasons />
        <LoveLetter />
        <Proposal />
      </main>
    </div>
  );
}

export default App;