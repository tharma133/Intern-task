import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from './context'
import Loading from './Loading'

function DetailPage() {
  const { name } = useParams()
  const { setLoading, loading } = useGlobalContext()
  const [detail, setDetail] = useState([])

  const fetchDetails = async () => {
    try {
      setLoading(true)
      const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${name}`)
      const data = await res.json()
      setDetail(data.results[0])
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  if (loading) {
    return <Loading />
  }

  const {
    end_date,
    start_date,
    image_url,
    episodes,
    title,
    synopsis,
    score,
    type,
  } = detail

  return (
    <main className='detail-page'>
      <div className='detail-container'>
        <div className='image-container'>
          <img src={image_url} alt={title} className='img' />
        </div>
        <div className='detail'>
          <div className='detail_top'>
            <h1>{title}</h1>
            <h3>
              synopsis : <span>{synopsis}</span>
            </h3>
          </div>
          <div className='detail_bottom'>
            <div className='detail_value_top'>
              <h2>Total episodes : {episodes}</h2>
              <h2>Score : {score}</h2>
              <h2>Type : {type}</h2>
            </div>
            <div className='detail_value_bottom'>
              <h2>Start Date : {start_date ? start_date.slice(0, 10) : '-'}</h2>
              <h2>End Date : {end_date ? end_date.slice(0, 10) : '-'}</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DetailPage
