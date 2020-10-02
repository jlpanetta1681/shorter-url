import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
// import colors from 'colors'




const Short = () => {
  const { handleSubmit, register, errors } = useForm()
  const [ shortUrl, setShortUrl ] = useState([])
  const onSub = (input) => {
    const url = input.urlShort
      console.log(typeof url)
    
     axios
     .Post()
     .Then()
     .catch((err) => console.log(`Error: ${err}`))
     .finally()
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSub)}>
        <input
          type="text"
          name="urlShort"
          placeholder="Enter your URL"
          ref={register({
            required: 'Required',
            pattern: {
              // value: '',
              message: 'please enter a URL',
            },
          })}
        />
        {errors.urlShort && errors.urlShort.message}
        <button type="submit">Shorten It!</button>
      </form>
      {  
        shortUrl.map(data => (
          <div>
            <p>{data.url}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Short