import { useState } from 'react';
import { useNotesStore } from '../hooks/useNotesStore';
import WantsAndNeeds from './WantsAndNeeds';

export default function Sidebar() {
  const {
    isOpen,
    setIsOpen,
    audioLinks,
    setAudioLinks,
    arrangementNotes,
    setArrangementNotes,
    lyricNotes,
    setLyricNotes,
    actionItems,
    addActionItem,
    removeActionItem,
  } = useNotesStore();

  const [newActionItem, setNewActionItem] = useState('');

  const handleAddActionItem = () => {
    if (newActionItem.trim()) {
      addActionItem(newActionItem);
      setNewActionItem('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddActionItem();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-4 z-40 px-3 py-2 font-mono text-xs uppercase tracking-wider
                   border border-cyan-400/30 bg-[#0a0c0f]/90 backdrop-blur-sm
                   text-cyan-400 hover:bg-[#0a0c0f] hover:border-cyan-400/50
                   transition-all duration-200 flex items-center gap-2"
      >
        <span>NOTES</span>
        <span>{isOpen ? '◂' : '▸'}</span>
      </button>

      {/* Sidebar */}
      {isOpen && (
        <aside className="fixed top-0 right-0 h-full w-64 sm:w-80 z-30
                          bg-[#0a0c0f] border-l border-cyan-400/30
                          overflow-y-auto overflow-x-hidden
                          flex flex-col">
          <div className="p-6 space-y-8">
            {/* AUDIO LINKS */}
            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
                AUDIO LINKS
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-gray-400 mb-1">
                    Full Mix URL
                  </label>
                  <input
                    type="url"
                    value={audioLinks.fullMix}
                    onChange={(e) => setAudioLinks({ ...audioLinks, fullMix: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 text-sm font-mono
                             bg-black text-cyan-200 border border-cyan-500/30
                             placeholder:text-gray-500
                             focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400
                             transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-gray-400 mb-1">
                    No Guitars URL
                  </label>
                  <input
                    type="url"
                    value={audioLinks.noGuitars}
                    onChange={(e) => setAudioLinks({ ...audioLinks, noGuitars: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 text-sm font-mono
                             bg-black text-cyan-200 border border-cyan-500/30
                             placeholder:text-gray-500
                             focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400
                             transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-gray-400 mb-1">
                    Stripped Mix URL
                  </label>
                  <input
                    type="url"
                    value={audioLinks.strippedMix}
                    onChange={(e) => setAudioLinks({ ...audioLinks, strippedMix: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 text-sm font-mono
                             bg-black text-cyan-200 border border-cyan-500/30
                             placeholder:text-gray-500
                             focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400
                             transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-gray-400 mb-1">
                    Instrumental URL
                  </label>
                  <input
                    type="url"
                    value={audioLinks.instrumental}
                    onChange={(e) => setAudioLinks({ ...audioLinks, instrumental: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 text-sm font-mono
                             bg-black text-cyan-200 border border-cyan-500/30
                             placeholder:text-gray-500
                             focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400
                             transition-all"
                  />
                </div>
              </div>
            </section>

            {/* ARRANGEMENT NOTES */}
            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
                ARRANGEMENT NOTES
              </h2>
              <textarea
                value={arrangementNotes}
                onChange={(e) => setArrangementNotes(e.target.value)}
                placeholder="Guitar, drums, synth, structural ideas..."
                rows={6}
                className="w-full px-3 py-2 text-sm font-mono
                         bg-black text-cyan-200 border border-cyan-500/30
                         placeholder:text-gray-500
                         focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400
                         transition-all resize-none"
              />
            </section>

            {/* LYRIC / NARRATIVE NOTES */}
            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
                LYRIC / NARRATIVE NOTES
              </h2>
              <textarea
                value={lyricNotes}
                onChange={(e) => setLyricNotes(e.target.value)}
                placeholder="Themes, metaphors, emotional arc..."
                rows={6}
                className="w-full px-3 py-2 text-sm font-mono
                         bg-black text-cyan-200 border border-cyan-500/30
                         placeholder:text-gray-500
                         focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400
                         transition-all resize-none"
              />
            </section>

            {/* ACTION ITEMS */}
            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
                ACTION ITEMS
              </h2>
              <div className="space-y-3">
                {actionItems.length > 0 && (
                  <ul className="space-y-2">
                    {actionItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-300 font-mono"
                      >
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span className="flex-1">{item}</span>
                        <button
                          onClick={() => removeActionItem(index)}
                          className="text-gray-500 hover:text-red-400 transition-colors text-xs"
                          aria-label="Remove item"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newActionItem}
                    onChange={(e) => setNewActionItem(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add action"
                    className="flex-1 px-3 py-2 text-sm font-mono
                             bg-black text-cyan-200 border border-cyan-500/30
                             placeholder:text-gray-500
                             focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400
                             transition-all"
                  />
                  <button
                    onClick={handleAddActionItem}
                    className="px-3 py-2 font-mono text-xs uppercase tracking-wider
                             border border-cyan-400/30 bg-black text-cyan-400
                             hover:bg-cyan-400/10 hover:border-cyan-400/50
                             transition-all"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </section>

            {/* WANTS & NEEDS - STORYBOARD */}
            <section>
              <h2 className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-4 
                              text-western-shadow">
                WANTS & NEEDS
              </h2>
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                <WantsAndNeeds />
              </div>
            </section>
          </div>
        </aside>
      )}
    </>
  );
}

