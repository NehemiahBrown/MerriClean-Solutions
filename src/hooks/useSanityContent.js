import { useState, useEffect } from "react"

  export function useSanityContent(fetchFunction){
    const [sanityContent, setSanityContent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setError(null)
        setLoading(true)
        let ignore = false;

        async function fetchSanityContent() {
          try {
            const data = await fetchFunction()
            if(!ignore){
            setSanityContent(data)    
            }
          } catch (error) {
            if(!ignore){
            setError(error)
                
            }
          } finally {
            if(!ignore){
            setLoading(false)

            }
          }
        }
        fetchSanityContent()
        return () => {ignore = true}
       
      }, [fetchFunction])
      return {
        "sanityContent": sanityContent,
        "error": error,
        "loading": loading,
    }
  }
