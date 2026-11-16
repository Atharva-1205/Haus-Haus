'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Mail, Award, ArrowUpRight } from 'lucide-react';
import { Consultant } from '@/types';

interface ConsultantCardProps {
  consultant: Consultant;
}

export const ConsultantCard: React.FC<ConsultantCardProps> = ({ consultant }) => {
  return (
    <div className="card-luxury flex flex-col group overflow-hidden">
      {/* Portrait */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-stone/20">
        <img
          src={consultant.image}
          alt={consultant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-brand-primary/95 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1">
            {consultant.department}
          </span>
        </div>
        {consultant.awards && consultant.awards.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 bg-brand-charcoal/80 backdrop-blur-sm p-2 text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-brand-sage flex-shrink-0" />
            <span className="text-[10px] truncate">{consultant.awards[0]}</span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/team/${consultant.slug}`}>
            <h3 className="font-serif text-xl font-bold text-brand-charcoal hover:text-brand-primary transition-colors flex items-center justify-between">
              <span>{consultant.name}</span>
              <ArrowUpRight className="w-4 h-4 text-brand-sage" />
            </h3>
          </Link>
          <p className="text-xs text-brand-secondary font-medium mt-0.5">
            {consultant.title}
          </p>

          <p className="text-xs text-brand-charcoal/70 line-clamp-2 mt-2.5 leading-relaxed">
            {consultant.bio}
          </p>

          <div className="mt-4 pt-3 border-t border-brand-stone/40 space-y-1.5 text-[11px] text-brand-charcoal/80">
            <p>
              <span className="font-semibold text-brand-charcoal">Specialties:</span>{' '}
              {consultant.communities.slice(0, 2).join(', ')}
            </p>
            <p>
              <span className="font-semibold text-brand-charcoal">Languages:</span>{' '}
              {consultant.languages.join(', ')}
            </p>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-5 pt-3 border-t border-brand-stone/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${consultant.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hi ${consultant.name}, I would like to consult with you regarding Dubai properties.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-brand-stone/60 hover:bg-emerald-50 text-emerald-700 transition-colors"
              title="WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </a>
            <a
              href={`tel:${consultant.phone}`}
              className="p-2 border border-brand-stone/60 hover:bg-brand-stone/20 text-brand-primary transition-colors"
              title="Call Consultant"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${consultant.email}`}
              className="p-2 border border-brand-stone/60 hover:bg-brand-stone/20 text-brand-primary transition-colors"
              title="Email Consultant"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

          <Link
            href={`/team/${consultant.slug}`}
            className="text-xs font-semibold text-brand-primary hover:text-brand-secondary uppercase tracking-wider"
          >
            Profile &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

