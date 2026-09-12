import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Search,
  Baby,
  Activity,
  HeartPulse,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../types';
import { CONDITIONS_DATA } from '../data/clinicData';

interface ConditionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (conditionName?: string) => void;
}

export const ConditionsPage: React.FC<ConditionsPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleExpand = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'pediatric-developmental':
        return <Baby className="w-5 h-5 text-[#C5B27A]" />;
      case 'musculoskeletal-pain':
        return <Activity className="w-5 h-5 text-[#C5B27A]" />;
      case 'neurological-rehabilitation':
        return <HeartPulse className="w-5 h-5 text-[#C5B27A]" />;
      case 'sports-injury':
        return <ShieldAlert className="w-5 h-5 text-[#C5B27A]" />;
      default:
        return <Activity className="w-5 h-5 text-[#C5B27A]" />;
    }
  };

  const filteredCategories = CONDITIONS_DATA.map((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return null;
    }

    const filteredItems = cat.items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.physioRole.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery.trim() !== '' && filteredItems.length === 0) {
      return null;
    }

    return {
      ...cat,
      items: filteredItems,
    };
  }).filter(Boolean);

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section
        id="conditions-header"
        className="pt-6 md:pt-12 border-b border-[#243442]/8 pb-12 text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5B27A] font-semibold">
            Clinical Scope
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#243442] tracking-tight">
            Conditions We Treat
          </h1>
          <div className="w-12 h-[2px] bg-[#C5B27A] mx-auto my-2" />
          <p className="text-sm md:text-base text-[#344452] leading-relaxed max-w-2xl mx-auto">
            Physiotherapy can support recovery, mobility and physical function across a wide range of conditions.
          </p>

          {/* Search bar & quick category filter */}
          <div className="pt-6 max-w-md mx-auto relative">
            <div className="relative">
              <Search className="w-4 h-4 text-[#A7A9AA] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search condition (e.g. Sciatica, Toe Walking, Knee)..."
                className="w-full text-xs pl-10 pr-4 py-2.5 rounded-full border border-[#243442]/15 bg-white text-[#20262B] placeholder:text-[#A7A9AA] focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A]"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#243442] text-[#FAF9F5]'
                  : 'bg-white border border-[#243442]/10 text-[#344452] hover:border-[#C5B27A]'
              }`}
            >
              All Categories
            </button>
            {CONDITIONS_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#243442] text-[#FAF9F5]'
                    : 'bg-white border border-[#243442]/10 text-[#344452] hover:border-[#C5B27A]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Categories */}
      <section id="conditions-list-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredCategories.map((category) => {
          if (!category) return null;
          return (
            <div
              key={category.id}
              id={`category-${category.id}`}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-[#243442]/10 pb-3">
                <div className="w-8 h-8 rounded-lg bg-[#243442]/5 flex items-center justify-center">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#243442]">
                    {category.title}
                  </h2>
                  <p className="text-xs text-[#344452] font-normal">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => {
                  const isExpanded = expandedItem === item.name;
                  return (
                    <div
                      key={item.name}
                      className={`p-4 bg-white rounded-xl border transition-all ${
                        isExpanded
                          ? 'border-[#C5B27A] shadow-xs'
                          : 'border-[#243442]/10 hover:border-[#243442]/30'
                      }`}
                    >
                      <div
                        onClick={() => toggleExpand(item.name)}
                        className="flex items-start justify-between gap-3 cursor-pointer select-none"
                      >
                        <div>
                          <h3 className="text-sm font-semibold text-[#243442]">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#344452] mt-1 leading-snug">
                            {item.details}
                          </p>
                        </div>
                        <button
                          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                          className="text-[#A7A9AA] hover:text-[#243442] shrink-0 pt-0.5"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[#C5B27A]" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Expandable Clinical Role Section */}
                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-[#243442]/8 text-xs text-[#344452] space-y-2 animate-in fade-in duration-200">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#C5B27A] font-semibold block mb-0.5">
                              Physiotherapy Approach:
                            </span>
                            <p className="leading-relaxed font-normal text-[#20262B]">
                              {item.physioRole}
                            </p>
                          </div>

                          <div className="pt-1 flex items-center justify-between">
                            <button
                              onClick={() => onOpenBooking(`Consultation for ${item.name}`)}
                              className="text-[11px] font-semibold text-[#243442] hover:text-[#C5B27A] inline-flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <span>Discuss This Condition</span>
                              <ArrowRight className="w-3 h-3 text-[#C5B27A]" />
                            </button>
                            <span className="text-[10px] text-[#A7A9AA]">
                              Sialkot Clinic
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-[#243442]/10 p-6">
            <p className="text-sm text-[#344452]">
              No conditions found matching "{searchQuery}".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-[#C5B27A] font-semibold underline cursor-pointer"
            >
              Clear search filter
            </button>
          </div>
        )}
      </section>

      {/* Clinical Disclaimer & Care Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-6 rounded-xl bg-white border border-[#243442]/10 text-xs text-[#344452] space-y-1.5">
          <p className="font-semibold text-[#243442]">
            Evidence-Based Assessment Notice
          </p>
          <p className="leading-relaxed text-[#344452]">
            Physiotherapy management is tailored to individual diagnostic evaluation and functional findings. Dr. Rana Fida Hussain conducts comprehensive assessments before instituting personalized exercise therapies or manual protocols.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ConditionsPage;
