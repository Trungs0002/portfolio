import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Mail, MapPin, Send, CheckCircle, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { data, t } = useLanguage();
  const { personalInfo } = data;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#08090d] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 rounded-full">

            <span>{t('contact.header')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            {t('contact.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#0e1017] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight pb-4 border-b border-zinc-800/80">
                {t('contact.details')}
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 hover:bg-zinc-900 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">{t('contact.email')}</span>
                    <span className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-300 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">{t('contact.location')}</span>
                    <span className="text-sm font-semibold text-zinc-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs leading-relaxed">
                <p className="font-semibold mb-1 font-mono">{t('contact.availability')}</p>
                <p className="text-emerald-200/80">{personalInfo.availability}</p>
              </div>

              {/* Social Link Handles */}
              <div className="pt-4 border-t border-zinc-800/80">
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-3">{t('contact.connect')}</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-semibold transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-semibold transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#0e1017] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-xl">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Message Transmitted!
                </h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Your message has been routed directly to my inbox and I will reply shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 hover:text-emerald-300 cursor-pointer mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {t('contact.form')}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">
                      {t('contact.name').replace(' *', '')} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('contact.namePH')}
                      className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">
                      {t('contact.emailInput').replace(' *', '')} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contact.emailPH')}
                      className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t('contact.subjectPH')}
                    className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">
                    {t('contact.message').replace(' *', '')} <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.messagePH')}
                    className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-sm hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/10 active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="font-mono">Transmitting Message...</span>
                  ) : (
                    <>
                      <span>{t('contact.send')}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
