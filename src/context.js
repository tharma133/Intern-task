import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('naruto')

  const fetchDate = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${value}`
      )
      const data = await res.json()
      setAnime(data.results)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchDate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <AppContext.Provider
      value={{ anime, loading, value, setValue, setLoading }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
