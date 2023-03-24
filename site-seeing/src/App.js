import React, { useState, useEffect } from 'react'
import Load from './Load'
import SitesSeeing from './SitesSeeing'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [load, setLoad] = useState(true)
  const [sitesSeeing, setSitesSeeing] = useState([])

  const removeSiteSeeing = (id) => {
    const newSitesSeeing = sitesSeeing.filter((siteSeeing) => siteSeeing.id !== id)
    SitesSeeing(newSitesSeeing)
  }

  const fetchSitesSeeing = async () => {
    setLoad(true)
    try {
      const response = await fetch(url)
      const sitesSeeing = await response.json()
      setLoad(false)
      setSitesSeeing(sitesSeeing)
    } catch (error) {
      setLoad(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchSitesSeeing()
  }, [])
  if (load) {
    return (
      <main>
        <Load />
      </main>
    )
  }
  if (sitesSeeing.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' 
          onClick={() => fetchSitesSeeing()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <SitesSeeing sitesSeeing={sitesSeeing} removeSiteSeeing={removeSiteSeeing} />
    </main>
  )
}

export default App
