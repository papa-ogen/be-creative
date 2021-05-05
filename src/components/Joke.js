import React from 'react'
import {formatDistance} from 'date-fns'

const Joke = ({ joke }) => {
  if(!joke) return null
  const {value, created_at} = joke
  
  const createdAt = created_at.substring(0,10)
  const formattedDate = formatDistance(new Date(), new Date(createdAt), { addSuffix: true })
  return (
    <div>
      <p>{value}</p>
      <p>Created {formattedDate}</p>
    </div>
  )
}

export default Joke
