'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface EnquiryFormProps {
  defaultDepartment?: string;
  propertyReference?: string;
  propertyTitle?: string;
  agentName?: string;
  title?: string;
  compact?: boolean;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultDepartment = 'Residential Sales',
  propertyReference,
  propertyTitle,
  agentName,
  title = 'Enquire with our Team',
  compact = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: defaultDepartment,
    enquiryType: propertyReference ? 'Property Viewing' : 'General Enquiry',
    message: propertyReference ? `I would like to enquire about ${propertyTitle || 'this property'} (Ref: ${propertyReference}).` : '',
    consent: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-brand-stone p-6 sm:p-8 text-center space-y-4 shadow-subtle">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="font-serif text-2xl font-bold text-brand-primary">Enquiry Received</h4>
        <p className="text-xs sm:text-sm text-brand-charcoal/70 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold">{formData.name}</span>. Your enquiry has been routed directly to our {formData.department} specialist {agentName ? `(${agentName})` : ''}. A licensed consultant will contact you via phone or WhatsApp shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData(prev => ({ ...prev, name: '', email: '', phone: '', message: '' }));
          }}
          className="text-xs font-semibold uppercase tracking-wider text-brand-primary underline hover:text-brand-secondary"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white border border-brand-stone/60 ${compact ? 'p-5' : 'p-6 sm:p-8'} shadow-subtle space-y-4`}>
      {title && (
        <div className="border-b border-brand-stone/40 pb-3">
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">{title}</h4>
          {propertyReference && (
            <p className="text-xs text-brand-secondary font-medium mt-1">
              Ref: {propertyReference} {agentName ? `&bull; Assigned Consultant: ${agentName}` : ''}
            </p>
          )}
        </div>
      )}

      <div>
        <label className="block text-[11px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Eleanor Vance"
          className="w-full bg-brand-ivory/50 border border-brand-stone/60 px-3.5 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. eleanor@example.com"
            className="w-full bg-brand-ivory/50 border border-brand-stone/60 px-3.5 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+971 50 123 4567"
            className="w-full bg-brand-ivory/50 border border-brand-stone/60 px-3.5 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
          />
        </div>
      </div>

      {!propertyReference && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
              Department
            </label>
            <select
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full bg-brand-ivory/50 border border-brand-stone/60 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
            >
              <option value="Residential Sales">Residential Sales</option>
              <option value="Residential Leasing">Residential Leasing</option>
              <option value="Off Plan">Off Plan & Developments</option>
              <option value="Commercial">Commercial Real Estate</option>
              <option value="Holiday Rentals">Holiday Rentals & Short Term</option>
              <option value="Property Management">Property Management</option>
              <option value="Mortgages">Mortgages & Finance</option>
              <option value="Home Maintenance">Home Maintenance</option>
              <option value="Conveyancing">Conveyancing & Transfers</option>
              <option value="Currency Services">Currency Exchange</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
              Enquiry Purpose
            </label>
            <select
              value={formData.enquiryType}
              onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
              className="w-full bg-brand-ivory/50 border border-brand-stone/60 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
            >
              <option value="Buying a Property">Buying a Property</option>
              <option value="Renting a Property">Renting a Property</option>
              <option value="Listing my Property">Listing my Property</option>
              <option value="Off-Plan Investment">Off-Plan Investment</option>
              <option value="Free Valuation">Request Property Valuation</option>
              <option value="General Consultation">General Consultation</option>
            </select>
          </div>
        </div>
      )}

      <div>
        <label className="block text-[11px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
          Message / Requirement
        </label>
        <textarea
          rows={compact ? 3 : 4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please tell us about your budget, preferred community, or specific questions..."
          className="w-full bg-brand-ivory/50 border border-brand-stone/60 p-3 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary focus:bg-white transition-colors resize-none"
        />
      </div>

      <div className="flex items-start gap-2 pt-1">
        <input
          type="checkbox"
          id="consent-check"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          required
          className="mt-0.5 rounded text-brand-primary focus:ring-brand-primary"
        />
        <label htmlFor="consent-check" className="text-[11px] text-brand-charcoal/70">
          I agree to haus & haus contacting me regarding my property enquiry and consent to the data policy.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary text-xs py-3.5 tracking-wider uppercase font-bold flex items-center justify-center gap-2"
      >
        {loading ? (
          <span>Submitting Enquiry...</span>
        ) : (
          <>
            <span>Send Enquiry</span>
            <Send className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </form>
  );
};

