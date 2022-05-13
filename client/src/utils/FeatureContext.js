import React, { useEffect, useState } from 'react';

export const FeatureContext = React.createContext()

function FeatureProvider(props) {
  const [currentFeature, setCurrentFeature] = useState()
  // { name, startPrice, description, image(url) }
  const [featureQue, setFeatureQue] = useState([])

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
    <FeatureContext.Provider value={{currentFeature, featureQue, purchseFeature, submitFeature}} {...props}/>
  )
}

export default FeatureProvider;
