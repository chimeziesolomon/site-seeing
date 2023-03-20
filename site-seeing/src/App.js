import React, { useState, useEffect } from 'react';
import Load from './Load';
import SitesSeeing from './SitesSeeing';


const url = 'https://course-api.com/react-tours-project'

function App() {
  const [load, setLoad] = useState(true)
  const [sitesSeeing, setSitesSeeing] = useState([])

  const removeSite = (id) => {
    const newSites = sitesSeeing.filter((SiteSeeing) => SiteSeeing.id !== id)
    setSitesSeeing(newSites)
  }

  const fetchSites = async () => {
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
    fetchSites()
  }, [])
  if (load) {
    return (
      <main>
        <Load />
      </main>
    );
  }
  if (sitesSeeing.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no sites left</h2>
          <button className='btn' onClick={() => fetchSites()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <SitesSeeing sitesSeeing={sitesSeeing} removeSite={removeSite} />
    </main>
  )
  
}

export default App;
