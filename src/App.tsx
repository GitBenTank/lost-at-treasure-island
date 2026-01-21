import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FilterBar from './components/FilterBar';
import MoodCardComponent from './components/MoodCard';
import Sidebar from './components/Sidebar';
import AlbumDashboard from './components/AlbumDashboard';
import SongDetail from './components/SongDetail';
import AlbumMap from './components/AlbumMap';
import EPPage from './components/EPPage';
import SongPage from './components/SongPage';
import WantsAndNeedsPage from './components/WantsAndNeedsPage';
import { soHighSong, soHighMeta } from './data/soHighSong';
import { cards } from './data/cards';
import { Filter } from './types';
import { useState, useMemo } from 'react';
import './App.css';

// Legacy Moodboard View Component
function MoodboardView() {
  const [currentFilter, setCurrentFilter] = useState<Filter>('All');

  const filteredCards = useMemo(() => {
    if (currentFilter === 'All') {
      return cards;
    }

    const categoryMap: Record<string, string> = {
      'Sound': 'SOUND',
      'Visual': 'VISUAL',
      'Lyric': 'LYRIC',
      'Vibe': 'VIBE',
    };

    const categoryFilter = categoryMap[currentFilter];
    if (categoryFilter) {
      return cards.filter((card) => card.category === categoryFilter);
    }

    return cards.filter((card) =>
      card.tags.some((tag) => tag.toLowerCase() === currentFilter.toLowerCase())
    );
  }, [currentFilter]);

  return (
    <div className="min-h-screen relative crt-flicker">
      <div className="scanlines fixed inset-0 pointer-events-none z-10" />
      <div className="grid-overlay fixed inset-0 pointer-events-none z-0" />
      
      <Sidebar />
      
      <div className="relative z-20">
        <header className="sticky top-0 z-30 bg-terminal-bg/95 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-mono uppercase tracking-wider text-gray-200 mb-1">
                  SO HIGH : BATTLEBOARD
                </h1>
                <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-gray-500">
                  Sakari x Ben • Last Woman on Earth, Still Dancing in the Warzone
                </p>
              </div>
              <div className="flex items-center gap-4">
                <nav className="flex items-center gap-2">
                  <a
                    href="/"
                    className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider
                             border border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300 transition-all"
                  >
                    ALBUM MAP
                  </a>
                </nav>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neon-cyan">
                  <span className="pulse-dot inline-block w-2 h-2 bg-neon-cyan rounded-full" />
                  <span>ONLINE</span>
                  <span className="text-gray-600">▓▒░</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <FilterBar currentFilter={currentFilter} onFilterChange={setCurrentFilter} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCards.map((card) => (
              <MoodCardComponent key={card.id} card={card} />
            ))}
          </div>

          {filteredCards.length === 0 && (
            <div className="text-center py-12 text-gray-500 font-mono uppercase tracking-wider">
              No cards match this filter
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Legacy Album Dashboard Route Handler
function LegacyAlbumDashboard() {
  const handleSelectSong = (songTitle: string) => {
    if (songTitle === 'So High') {
      window.location.href = '/song/so-high';
    }
  };

  return (
    <div className="min-h-screen relative crt-flicker">
      <div className="scanlines fixed inset-0 pointer-events-none z-10" />
      <div className="grid-overlay fixed inset-0 pointer-events-none z-0" />
      <main>
        <AlbumDashboard onSelectSong={handleSelectSong} />
      </main>
    </div>
  );
}

// Legacy Song Detail Route Handler
function LegacySongDetail() {
  return (
    <div className="min-h-screen relative crt-flicker">
      <div className="scanlines fixed inset-0 pointer-events-none z-10" />
      <div className="grid-overlay fixed inset-0 pointer-events-none z-0" />
      <main>
        <SongDetail song={soHighSong} meta={soHighMeta} onBack={() => window.location.href = '/'} />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* New Treasure Island Routes */}
        <Route path="/" element={<AlbumMap />} />
        <Route path="/ep/:epId" element={<EPPage />} />
        <Route path="/song/:songId" element={<SongPage />} />
        
        {/* Legacy Storyboard Route */}
        <Route path="/so-high/storyboard" element={<WantsAndNeedsPage onBack={() => window.location.href = '/song/so-high'} />} />
        
        {/* Legacy Routes (preserved for backward compatibility) */}
        <Route path="/moodboard" element={<MoodboardView />} />
        <Route path="/album" element={<LegacyAlbumDashboard />} />
        <Route path="/so-high" element={<LegacySongDetail />} />
        
        {/* Redirect root to new map */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
