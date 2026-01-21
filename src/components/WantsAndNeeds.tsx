import { storyboardSections, spotifyPlaylistId } from '../data/wantsAndNeeds';

export default function WantsAndNeeds() {
  return (
    <div className="space-y-6">
      {/* Spotify Playlist */}
      <section className="relative dusty-overlay rounded-lg p-4 bg-[#0a0c0f]/50 border border-amber-800/30">
        <h3 className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-3 text-western-shadow">
          INSPIRATION PLAYLIST
        </h3>
        <div className="rounded-lg overflow-hidden">
          <iframe
            src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full"
          />
        </div>
      </section>

      {/* Storyboard Sections */}
      {storyboardSections.map((section) => (
        <section
          key={section.id}
          className="relative dusty-overlay rounded-lg p-4 bg-[#0a0c0f]/50 border border-amber-800/30"
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-3 text-western-shadow flex items-center gap-2">
            <span className="text-amber-600">▸</span>
            {section.title}
          </h3>
          
          {section.notes && (
            <div className="mb-3 p-2 bg-amber-900/10 border-l-2 border-amber-700/40 rounded">
              <p className="text-xs text-amber-200/80 font-mono italic leading-relaxed">
                {section.notes}
              </p>
            </div>
          )}

          <ul className="space-y-2">
            {section.items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-300 font-mono leading-relaxed"
              >
                <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
