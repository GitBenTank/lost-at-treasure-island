import { LegacySong, SongMeta } from '../data/types';
import WantsAndNeedsPage from './WantsAndNeedsPage';

interface SongDetailProps {
  readonly song: LegacySong;
  readonly meta: SongMeta;
  readonly onBack?: () => void;
}

export default function SongDetail({ song, meta, onBack }: SongDetailProps) {
  return (
    <div className="min-h-screen bg-terminal-bg text-gray-200">
      {/* Song Header */}
      <div className="border-b border-gray-800 bg-terminal-bg/95 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-mono uppercase tracking-wider text-gray-200 mb-2">
                {song.song_title}
              </h1>
              <p className="text-sm font-mono uppercase tracking-widest text-gray-500">
                {song.artist} • {song.position_in_album}
              </p>
            </div>
            {onBack && (
              <button
                onClick={onBack}
                className="px-4 py-2 font-mono text-xs uppercase tracking-wider
                         border border-cyan-400/30 bg-[#0a0c0f]/90 backdrop-blur-sm
                         text-cyan-400 hover:bg-[#0a0c0f] hover:border-cyan-400/50
                         transition-all duration-200"
              >
                ← ALBUM
              </button>
            )}
          </div>
          
          <p className="text-base font-mono text-gray-300 leading-relaxed max-w-3xl italic">
            {song.one_sentence_arc}
          </p>
        </div>
      </div>

      {/* Song Arc - 3 Acts */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Act 1 */}
          <div className="relative dusty-overlay rounded-lg p-6 bg-[#0a0c0f]/50 border border-amber-800/30">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              ACT I
            </div>
            <h3 className="text-xl font-mono uppercase tracking-wide text-gray-200 mb-3">
              {song.arc.act_1.name}
            </h3>
            <div className="text-xs font-mono text-gray-400 mb-3">
              {song.arc.act_1.section}
            </div>
            <p className="text-sm text-gray-300 font-mono mb-4 leading-relaxed">
              <strong className="text-amber-300">Theme:</strong> {song.arc.act_1.theme}
            </p>
            <p className="text-sm text-gray-300 font-mono mb-4 leading-relaxed">
              {song.arc.act_1.narrative}
            </p>
            <div className="mt-4 pt-3 border-t border-amber-800/30">
              <p className="text-xs text-amber-200/80 font-mono italic">
                "{song.arc.act_1.listener_takeaway}"
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              {song.arc.act_1.mood.map((m, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-amber-900/20 text-amber-300 rounded">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Act 2 */}
          <div className="relative dusty-overlay rounded-lg p-6 bg-[#0a0c0f]/50 border border-amber-800/30">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              ACT II
            </div>
            <h3 className="text-xl font-mono uppercase tracking-wide text-gray-200 mb-3">
              {song.arc.act_2.name}
            </h3>
            <div className="text-xs font-mono text-gray-400 mb-3">
              {song.arc.act_2.section}
            </div>
            <p className="text-sm text-gray-300 font-mono mb-4 leading-relaxed">
              <strong className="text-amber-300">Theme:</strong> {song.arc.act_2.theme}
            </p>
            <p className="text-sm text-gray-300 font-mono mb-4 leading-relaxed">
              {song.arc.act_2.narrative}
            </p>
            <div className="mt-4 pt-3 border-t border-amber-800/30">
              <p className="text-xs text-amber-200/80 font-mono italic">
                "{song.arc.act_2.listener_takeaway}"
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              {song.arc.act_2.mood.map((m, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-amber-900/20 text-amber-300 rounded">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Act 3 */}
          <div className="relative dusty-overlay rounded-lg p-6 bg-[#0a0c0f]/50 border border-amber-800/30">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              ACT III
            </div>
            <h3 className="text-xl font-mono uppercase tracking-wide text-gray-200 mb-3">
              {song.arc.act_3.name}
            </h3>
            <div className="text-xs font-mono text-gray-400 mb-3">
              {song.arc.act_3.section}
            </div>
            <p className="text-sm text-gray-300 font-mono mb-4 leading-relaxed">
              <strong className="text-amber-300">Theme:</strong> {song.arc.act_3.theme}
            </p>
            <p className="text-sm text-gray-300 font-mono mb-4 leading-relaxed">
              {song.arc.act_3.narrative}
            </p>
            <div className="mt-4 pt-3 border-t border-amber-800/30">
              <p className="text-xs text-amber-200/80 font-mono italic">
                "{song.arc.act_3.listener_takeaway}"
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              {song.arc.act_3.mood.map((m, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-amber-900/20 text-amber-300 rounded">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Metadata Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Moods & Motifs */}
          <div className="relative dusty-overlay rounded-lg p-6 bg-[#0a0c0f]/50 border border-amber-800/30">
            <h3 className="font-mono text-lg uppercase tracking-widest text-amber-400 mb-4 text-western-shadow">
              MOODS & MOTIFS
            </h3>
            <div className="mb-4">
              <div className="text-xs font-mono uppercase tracking-wide text-gray-400 mb-2">
                PRIMARY MOODS
              </div>
              <div className="flex flex-wrap gap-2">
                {meta.moods.primary.map((mood, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-amber-900/30 text-amber-200 rounded border border-amber-700/40">
                    {mood}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <div className="text-xs font-mono uppercase tracking-wide text-gray-400 mb-2">
                SECONDARY MOODS
              </div>
              <div className="flex flex-wrap gap-2">
                {meta.moods.secondary.map((mood, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-slate-800/40 text-slate-300 rounded border border-slate-600/40">
                    {mood}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wide text-gray-400 mb-2">
                MOTIFS
              </div>
              <ul className="space-y-1">
                {meta.motifs.map((motif, i) => (
                  <li key={i} className="text-sm text-gray-300 font-mono flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>{motif}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual & Sonic Language */}
          <div className="relative dusty-overlay rounded-lg p-6 bg-[#0a0c0f]/50 border border-amber-800/30">
            <h3 className="font-mono text-lg uppercase tracking-widest text-amber-400 mb-4 text-western-shadow">
              VISUAL & SONIC LANGUAGE
            </h3>
            <div className="mb-4">
              <div className="text-xs font-mono uppercase tracking-wide text-gray-400 mb-2">
                GENRE FAMILY
              </div>
              <div className="flex flex-wrap gap-2">
                {meta.sonic_language.genre_family.map((genre, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-cyan-900/30 text-cyan-200 rounded border border-cyan-700/40">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <div className="text-xs font-mono uppercase tracking-wide text-gray-400 mb-2">
                COLORS
              </div>
              <div className="flex flex-wrap gap-2">
                {meta.visual_language.colors.map((color, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-slate-800/40 text-slate-300 rounded border border-slate-600/40">
                    {color}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wide text-gray-400 mb-2">
                PRODUCTION NOTES
              </div>
              <ul className="space-y-1">
                {meta.sonic_language.production_notes.map((note, i) => (
                  <li key={i} className="text-sm text-gray-300 font-mono flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Storyboard Section - Reuse WantsAndNeedsPage */}
      <div className="border-t border-gray-800">
        <WantsAndNeedsPage onBack={onBack} />
      </div>
    </div>
  );
}
