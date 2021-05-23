import { useGlobalContext } from './context'
import { data } from './anime'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Chart from './Chart'
import { Link } from 'react-router-dom'
import Loading from './Loading'

function Home() {
  const { anime, loading, setValue, value } = useGlobalContext()

  let type = anime.reduce((total, data) => {
    const { type } = data
    if (!total[type]) {
      total[type] = { label: data.type, value: 1 }
    } else {
      total[type] = { ...total[type], value: total[type].value + 1 }
    }
    return total
  }, {})

  type = Object.values(type).sort((a, b) => {
    return b.value - a.value
  })

  console.log(loading)

  if (loading) {
    return <Loading />
  }

  return (
    <main>
      <h1 className='title'>anime maze</h1>
      <div className='home-container'>
        <div className='anime-section'>
          <div className='select'>
            <label htmlFor='anime'>Select Anime</label>
            <div className='select-option'>
              <select
                name='anime'
                id='anime'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                {data.map((option, index) => {
                  return (
                    <option key={index} value={option.title}>
                      {option.title}
                    </option>
                  )
                })}
              </select>
              <span className='icon'>
                <ArrowDownwardIcon />{' '}
              </span>
            </div>
          </div>
          <div className='images-container'>
            {anime.map((img, index) => {
              const { image_url, type, title } = img
              return (
                <div key={index} className='image'>
                  <Link to={`/detail/${title}`}>
                    <img src={image_url} alt={title} />
                    <h4 className='image-type'>{type}</h4>
                    <h4 className='image-title'>{title}</h4>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className='pie-chart'>
          <Chart type={type} />
        </div>
      </div>
    </main>
  )
}

export default Home
