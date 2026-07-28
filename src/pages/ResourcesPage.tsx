import { useState, useEffect } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { SEED_RESOURCES } from '../lib/resources-data'
import type { Resource } from '../lib/resources-data'
import { FiExternalLink, FiSearch } from 'react-icons/fi'
import FadeIn from '../components/FadeIn'
import PageWrapper from '../components/PageWrapper'

const ALL = 'All'
const CATEGORIES = [ALL, 'Technology', 'Core Learning', 'Philosophy', 'Arts']

const categoryColors: Record<string, string> = {
  Technology: 'bg-brand-green text-brand-black',
  'Core Learning': 'bg-brand-blue text-brand-black',
  Philosophy: 'bg-brand-pink text-brand-black',
  Arts: 'bg-neutral-200 text-brand-black',
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="bg-white border border-neutral-200/70 rounded-3xl p-6 flex flex-col h-full hover:shadow-md transition-shadow group">
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[resource.category] ?? 'bg-neutral-100 text-neutral-700'}`}>
          {resource.category}
        </span>
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-brand-black hover:text-white transition-colors text-neutral-500"
          aria-label={`Visit ${resource.title}`}
        >
          <FiExternalLink size={15} />
        </a>
      </div>
      <h3 className="text-brand-black font-bold text-base mb-2">{resource.title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed flex-1 mb-4">{resource.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {resource.tags.map(tag => (
          <span key={tag} className="text-[11px] bg-neutral-100 text-neutral-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-white border border-neutral-200/70 rounded-3xl p-6 animate-pulse">
      <div className="flex justify-between mb-4">
        <div className="h-6 w-24 bg-neutral-100 rounded-full" />
        <div className="h-9 w-9 bg-neutral-100 rounded-full" />
      </div>
      <div className="h-4 w-3/4 bg-neutral-100 rounded mb-2" />
      <div className="h-3 w-full bg-neutral-100 rounded mb-1.5" />
      <div className="h-3 w-5/6 bg-neutral-100 rounded mb-1.5" />
      <div className="h-3 w-4/6 bg-neutral-100 rounded" />
    </div>
  )
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [search, setSearch] = useState('')

  const firebaseConfigured = Boolean(import.meta.env.VITE_FIREBASE_PROJECT_ID)

  useEffect(() => {
    if (!firebaseConfigured) {
      // Fall back to local seed data when Firebase isn't configured
      setResources(SEED_RESOURCES.map((r, i) => ({ ...r, id: String(i) })))
      setLoading(false)
      return
    }

    const fetchResources = async () => {
      try {
        const q = query(collection(db, 'resources'), orderBy('category'))
        const snap = await getDocs(q)
        const data = snap.docs.map(doc => ({ id: doc.id, ...(doc.data() as Omit<Resource, 'id'>) }))
        setResources(data.length > 0 ? data : SEED_RESOURCES.map((r, i) => ({ ...r, id: String(i) })))
      } catch {
        // If Firebase fails, show seed data
        setResources(SEED_RESOURCES.map((r, i) => ({ ...r, id: String(i) })))
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [firebaseConfigured])

  const filtered = resources.filter(r => {
    const matchCat = activeCategory === ALL || r.category === activeCategory
    const q = search.toLowerCase()
    const matchSearch = !q || r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.tags.some(t => t.toLowerCase().includes(q))
    return matchCat && matchSearch
  })

  return (
    <PageWrapper>
      {/* Hero */}
     <section className="relative pt-32 pb-24 lg:pb-32 bg-brand-black overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <FadeIn>
            <span className="section-label text-neutral-500">
                Exploring & learning</span>
            <h1
              className="font-black text-white leading-none tracking-tight mt-2"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
             Learning 
              <span style={{ color: '#cdeeb9' }}> Resources</span>
            </h1>
          </FadeIn>
        </div>
      </section>
      {/* Filters */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-brand-black text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <FiSearch size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search resources..."
                className="w-full pl-9 pr-4 py-2.5 bg-neutral-100 border border-neutral-200 rounded-full text-sm focus:outline-none focus:border-brand-black transition-colors"
              />
            </div>
          </div>
        </FadeIn>

        {error && (
          <p className="text-xs text-amber-600 bg-amber-50 px-4 py-2 rounded-xl mt-4 inline-block">
            Showing local data — Firebase connection unavailable.
          </p>
        )}
      </section>

      {/* Grid */}
      <section className="pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-neutral-400 text-lg">No resources found.</p>
            <button onClick={() => { setSearch(''); setActiveCategory(ALL) }} className="btn-secondary mt-4">Clear Filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((r, i) => (
              <FadeIn key={r.id} delay={Math.min(i * 0.04, 0.3)}>
                <ResourceCard resource={r} />
              </FadeIn>
            ))}
          </div>
        )}
      </section>
    </PageWrapper>
  )
}
