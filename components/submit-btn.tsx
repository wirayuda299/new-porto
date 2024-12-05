'use client'

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"


export default function SubmitButton() {
  const status = useFormStatus()

  return (
    <div className='flex justify-end'>
      <Button
        type='submit'
        className='rounded-full px-12 hover:bg-blue-600 bg-primary-dark text-white  capitalize'
      >
        {status.pending ? "Sending..." : 'submit'}
      </Button>
    </div>

  )
}
