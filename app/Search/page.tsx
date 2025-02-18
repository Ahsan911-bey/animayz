"use client"
import {useState,useEffect} from 'react'
import { useSearchParams,usePathname,useRouter } from 'next/navigation'
import axios from 'axios'

interface AnimeResult {
    id:string;
    name:string;
    jname:string;
    poster:string;
    duration:number;
    type:string;
    rating:string;
}

function SearchContent() {
    const [results,setResults] = useState<AnimeResult[]>([])
    const [error,setError] = useState<string | null>(null)
    const [loading,setLoading] = useState(false)

    const searchParams= useSearchParams()
    const Pathname= usePathname()
    const router= useRouter()

    const q= searchParams.get('q') || ''
    const page = Number(searchParams.get('page') || 1)

    const fetchSearchResults = async() =>{
        if(!q) return
        setLoading(true)

        try{
            const response =await axios.get(`http://127.0.0.1:3001/api/search?q=${q}&page=${page}`)
            setResults(response.data.data.animes || [])
        }
        catch(error){
            setError('CANNOT FETCH DATA')
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchSearchResults()
    },[q,page])

    const handlePageChange = (newPage:number) =>{
        router.push(`${Pathname}?q=${q}&page=${newPage}`)
    }

    return(
        <div>
            {loading && <p className='text-xl font-serif text-white'>Loading...</p>}
            {results.length===0 && (!loading) && <p className='text-2xl text-purple-600 font-sans'>No Results Found!</p>}
            {error && <p>{error}</p>}
            <p className='text-white'>dafa hoja</p>

        </div>
    )
}
export default SearchContent;