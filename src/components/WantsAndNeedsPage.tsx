import { storyboardSections, spotifyPlaylistId } from '../data/wantsAndNeeds';

interface WantsAndNeedsPageProps {
  readonly onBack?: () => void;
}

export default function WantsAndNeedsPage({ onBack }: WantsAndNeedsPageProps) {

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl sm:text-4xl font-mono uppercase tracking-wider text-gray-200">
              WANTS & NEEDS
            </h1>
            <button
              onClick={onBack}
              className="px-4 py-2 font-mono text-xs uppercase tracking-wider
                         border border-cyan-400/30 bg-[#0a0c0f]/90 backdrop-blur-sm
                         text-cyan-400 hover:bg-[#0a0c0f] hover:border-cyan-400/50
                         transition-all duration-200"
            >
              BACK TO BOARD
            </button>
          </div>
          <p className="text-sm font-mono uppercase tracking-widest text-gray-500">
            SO HIGH • STORYBOARD & DEFINITION
          </p>
        </header>

        {/* Spotify Playlist */}
        <section className="mb-12 relative dusty-overlay rounded-lg p-6 bg-[#0a0c0f]/50 border border-amber-800/30">
          <h2 className="font-mono text-lg uppercase tracking-widest text-amber-400 mb-4 text-western-shadow">
            INSPIRATION PLAYLIST
          </h2>
          <div className="rounded-lg overflow-hidden">
                  <iframe
                    title="So High Inspiration Playlist"
                    src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="352"
                    style={{ border: 0 }}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="w-full"
                  />
          </div>
        </section>

        {/* Storyboard Sections with Image Placeholders */}
        <div className="space-y-12">
          {storyboardSections.map((section, sectionIndex) => (
            <section
              key={section.id}
              className="relative dusty-overlay rounded-lg p-6 bg-[#0a0c0f]/50 border border-amber-800/30"
            >
              <h2 className="font-mono text-xl uppercase tracking-widest text-amber-400 mb-4 text-western-shadow flex items-center gap-3">
                <span className="text-amber-600 text-2xl">▸</span>
                {section.title}
              </h2>
              
              {section.description && (
                <div className="mb-4 p-3 bg-amber-900/10 border-l-2 border-amber-700/40 rounded">
                  <p className="text-sm text-amber-200/80 font-mono italic leading-relaxed">
                    {section.description}
                  </p>
                </div>
              )}
              
              {section.notes && (
                <div className="mb-4 p-3 bg-slate-900/20 border-l-2 border-slate-700/40 rounded">
                  <p className="text-xs text-gray-300 font-mono leading-relaxed">
                    {section.notes}
                  </p>
                </div>
              )}

              {/* Images Section */}
              {section.images && section.images.length > 0 && (
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.images.map((imageUrl, imgIndex) => (
                    <div
                      key={`${section.id}-img-${imgIndex}`}
                      className="aspect-video bg-black/50 border border-amber-800/30 rounded-lg overflow-hidden group relative"
                    >
                      <img
                        src={imageUrl}
                        alt={`${section.title} reference ${imgIndex + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center text-center text-gray-500 font-mono text-xs uppercase">
                                <div>
                                  <div class="mb-2 text-2xl">🖼️</div>
                                  <div>IMAGE ${sectionIndex * 2 + imgIndex + 1}</div>
                                  <div class="text-xs mt-1 opacity-60">Image not found</div>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              )}

              {/* Items List */}
              <ul className="space-y-3">
                {section.items.map((item, index) => (
                  <li
                    key={`${section.id}-item-${index}`}
                    className="flex items-start gap-3 text-base text-gray-300 font-mono leading-relaxed"
                  >
                    <span className="text-amber-600 mt-1 flex-shrink-0 text-lg">•</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
