import React from 'react'
import { useForm } from 'react-hook-form'

const Short = () => {
    const [handleSubmit, register, errors] = useForm()
    const onSub = (input) => console.log(input)
    return (
        <div>
          <input 
          type="text" 
          name='urlShort' 
          placeholder='Enter a URL'
          ref={register({
              required: "required",
              pattern: {
                //   value: '',
                  message: 'pleas enter a URL'
              }
          })} 
          />
          { errors.urlShort && errors.urlShort.message}
          <button type="submit">Shorten It</button>

        </div>
    )
}

export default Short