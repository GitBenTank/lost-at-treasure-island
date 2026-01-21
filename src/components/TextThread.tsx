import { Message } from '../hooks/useNotesStore';

interface TextThreadProps {
  messages: Message[];
}

export default function TextThread({ messages }: TextThreadProps) {
  if (messages.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 font-mono text-xs">
        No messages yet
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'ben' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[85%] rounded-lg px-4 py-2 relative
              ${message.sender === 'ben'
                ? 'bg-amber-900/30 border border-amber-700/40 text-amber-100'
                : 'bg-slate-800/40 border border-slate-600/40 text-slate-200'
              }
              shadow-lg
              backdrop-blur-sm
              before:absolute before:inset-0 before:rounded-lg
              before:bg-gradient-to-br before:from-transparent before:via-amber-900/5 before:to-transparent
              before:pointer-events-none
            `}
          >
            {/* Western-style decorative corner */}
            <div className={`absolute ${message.sender === 'ben' ? '-right-1 top-2' : '-left-1 top-2'} 
              w-3 h-3 border-t-2 border-r-2 ${message.sender === 'ben' ? 'border-amber-700/60' : 'border-slate-600/60'} 
              ${message.sender === 'ben' ? 'rotate-45' : '-rotate-45'} bg-[#0a0c0f]`} />
            
            <p className="text-sm leading-relaxed font-mono whitespace-pre-wrap">
              {message.text}
            </p>
            
            {/* Timestamp */}
            <div className="text-xs mt-1 opacity-60 font-mono">
              {message.timestamp}
            </div>
            
            {/* Attachments */}
            {message.attachments && message.attachments.length > 0 && (
              <div className="mt-2 space-y-1">
                {message.attachments.map((att, idx) => (
                  <div key={idx} className="text-xs opacity-70 border-t border-amber-800/30 pt-1">
                    📎 {att.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
