'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import axios from 'axios'

interface AnimeResult {
    id: string;
    name: string;
    jname: string;
    poster: string;
    duration: number;
    type: string;
    rating: string;
}

function SearchContent() {
    const [results, setResults] = useState<AnimeResult[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const searchParams = useSearchParams()
    const router = useRouter()

    const q = searchParams.get('q') || ''
    const page = Number(searchParams.get('page')) || 1

    const fetchSearchResults = async () => {
        if (!q) return // If search query is empty, do nothing
        setLoading(true)
        setError(null) // Reset error before fetching

        try {
            const response = await axios.get(`https://api.hi-anime.site/api/search?q=${q}&page=${page}`)
            setResults(response.data.data.animes || [])
        } catch (error) {
            setError(error instanceof Error ? error.message : 'CANNOT FETCH DATA')
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchSearchResults()
    }, [q, page])

    const handlePageChange = (newPage: number) => {
        router.push(`/Search?q=${q}&page=${newPage}`) // FIXED: Correctly update URL
    }

    return (
        <div>
            {loading && <p className='text-xl font-serif'>Loading...</p>}
            {error && <p className='text-red-500'>{error}</p>}
            {results.length === 0 && !loading && <p className='text-2xl text-purple-600 font-sans'>No Results Found!</p>}

            {/* Next Page Button */}
            {results.length > 0 && (
                <button 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" 
                    onClick={() => handlePageChange(page + 1)}
                >
                    Next Page
                </button>
            )}
        </div>
    )
}

export default SearchContent
