import React, { useEffect, useState } from 'react';

export const FeatureContext = React.createContext()

function FeatureProvider(props) {
  const [currentFeature, setCurrentFeature] = useState()
  // { name, startPrice, description, image(url) }
  const [featureQue, setFeatureQue] = useState([])
  const [auctionTime, setAuctionTime] = useState({'hours': 2, 'minutes': 30, 'seconds': 30})
  const [auctionTimer, setAuctionTimer] = useState('2hrs 30min 30sec')

  useEffect(() => {
    ( async () => {
      const response = await fetch('/api/features');
      if (response.ok) {
        const data = await response.json();
        setCurrentFeature(data[0])
        setFeatureQue(data.splice(1))
      }
    })()
  }, [])

  useEffect(() => {
    let isMounted = true;

    setTimeout(() => {
      let hrs = auctionTime['hours'],
          min = auctionTime['minutes'],
          sec = auctionTime['seconds']

      if (sec === 0) {
        if (min === 0) {
          hrs -= 1;
          min = 60;
          sec = 60
        } else {
          min -= 1;
          sec = 60;
        }
      }else {
        sec -= 1;
      }
      if (isMounted) setAuctionTime({'hours': hrs, 'minutes': min, 'seconds': sec})
      if (isMounted) setAuctionTimer(`${auctionTime['hours']}hrs ${auctionTime['minutes']}min ${auctionTime['seconds']}sec`)
    }, 1000)

    return () => { isMounted = false }
  }, [auctionTime])
  
  async function purchseFeature() {
    const purchase = currentFeature;
    const response = await fetch('/api/features/purchaseout/',
    {
      method:'DELETE',
      body:JSON.stringify({_id: currentFeature._id}),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
      setCurrentFeature(featureQue[0])
      setFeatureQue(prev => {return featureQue.splice(1)})
      return purchase
    }
  }

  async function submitFeature(newFeature) {
    const response = await fetch('/api/features/',
    {
      method:'POST',
      body:JSON.stringify(newFeature),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
      setFeatureQue(prev => {return [...featureQue, newFeature]})
    }
  }

  return (
    <FeatureContext.Provider value={{currentFeature, featureQue, purchseFeature, submitFeature, auctionTimer}} {...props}/>
  )
}

export default FeatureProvider;
