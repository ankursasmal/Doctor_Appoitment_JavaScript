'use client' // Error components must be Client Components
 
import { useContext, useEffect } from 'react'
import { contextdatas } from './contextData/ContextApiData';

export default function Error({ error, reset }) {
    let {fetchAuthData}=useContext(contextdatas);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    fetchAuthData();
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}