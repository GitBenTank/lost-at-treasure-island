import { flightPatternAlbum } from '../data/albumArc';

interface AlbumDashboardProps {
  readonly onSelectSong: (songTitle: string) => void;
}

export default function AlbumDashboard({ onSelectSong }: AlbumDashboardProps) {
  return (
    <div className="min-h-screen bg-terminal-bg text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Album Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-mono uppercase tracking-wider text-gray-200 mb-4">
            {flightPatternAlbum.working_title}
          </h1>
          <p className="text-lg font-mono text-gray-400 mb-6 leading-relaxed max-w-3xl">
            {flightPatternAlbum.album_logline}
          </p>
          
          {/* Themes */}
          <div className="flex flex-wrap gap-2">
            {flightPatternAlbum.themes.map((theme, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-mono uppercase tracking-wide
                         bg-amber-900/20 border border-amber-700/30 text-amber-300
                         rounded"
              >
                {theme}
              </span>
            ))}
          </div>
        </header>

        {/* Album Sequence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {flightPatternAlbum.sequence.map((slot) => (
            slot.song_here ? (
              <button
                key={slot.track_slot}
                onClick={() => onSelectSong(slot.song_here!)}
                className="p-6 border rounded-lg transition-all duration-300 text-left w-full
                         border-amber-700/40 bg-amber-900/10 hover:bg-amber-900/20 hover:border-amber-600/60 
                         cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                    TRACK {slot.track_slot}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wide text-amber-400">
                    ✓
                  </span>
                </div>
                
                <h3 className="text-xl font-mono uppercase tracking-wide text-gray-200 mb-2">
                  {slot.role}
                </h3>
                
                <p className="text-sm text-gray-400 font-mono leading-relaxed mb-3">
                  {slot.focus}
                </p>
                
                <div className="mt-4 pt-3 border-t border-amber-800/30">
                  <span className="text-sm font-mono uppercase tracking-wide text-amber-400">
                    {slot.song_here} →
                  </span>
                </div>
              </button>
            ) : (
              <div
                key={slot.track_slot}
                className="p-6 border rounded-lg transition-all duration-300
                         border-gray-700 bg-gray-900/20 hover:bg-gray-900/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                    TRACK {slot.track_slot}
                  </span>
                </div>
                
                <h3 className="text-xl font-mono uppercase tracking-wide text-gray-200 mb-2">
                  {slot.role}
                </h3>
                
                <p className="text-sm text-gray-400 font-mono leading-relaxed">
                  {slot.focus}
                </p>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
