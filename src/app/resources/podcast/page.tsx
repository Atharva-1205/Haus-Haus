'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Play, Pause, Headphones, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { PODCAST_EPISODES } from '@/data/mockData';

export default function PodcastPage() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId(prev => prev === id ? null : id);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/resources" className="hover:text-brand-primary">Resources</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Podcast</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Audio & Video Broadcast
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          The Dubai Property Podcast with haus & haus
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          Unfiltered, data-backed conversations with Dubai&apos;s leading real estate figures, developers, private wealth advisors, and founders James Perry, Luke Remington, and Simon Baker.
        </p>
      </div>

      {/* Episodes Grid */}
      <div className="space-y-6">
        {PODCAST_EPISODES.map((ep) => {
          const isPlaying = playingId === ep.id;
          return (
            <div key={ep.id} className="card-luxury p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-brand-charcoal overflow-hidden shadow-subtle">
                  <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover" />
                  <button
                    onClick={() => togglePlay(ep.id)}
                    className="absolute inset-0 bg-brand-charcoal/50 flex items-center justify-center text-white hover:bg-brand-primary/80 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white ml-0.5" />}
                  </button>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-3 text-[11px] text-brand-charcoal/60">
                    <span className="font-bold text-brand-primary">Episode {ep.episodeNumber}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {ep.publishedDate}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {ep.duration}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal">
                    {ep.title}
                  </h3>

                  <p className="text-xs text-brand-secondary font-semibold">
                    Guest: {ep.guest} &bull; {ep.guestRole}
                  </p>

                  <p className="text-xs text-brand-charcoal/70 max-w-2xl leading-relaxed">
                    {ep.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {ep.topics.map((t) => (
                      <span key={t} className="text-[10px] bg-brand-ivory border border-brand-stone/60 px-2 py-0.5 text-brand-charcoal/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto justify-end">
                <button
                  onClick={() => togglePlay(ep.id)}
                  className="btn-primary text-xs py-2.5 px-4 flex items-center gap-2"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-white" />
                      <span>Pause Audio</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Play Episode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

