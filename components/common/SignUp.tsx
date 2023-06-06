import { Button } from "../ui/button";

import React from 'react'

export default function SignUp() {
  return (
    <div className="my-2">
        <Button
        className="text-xl hover:opacity-70 font-bold px-8 py-4 capitalize"
        variant='destructive' 
        type="submit">
            sign up
        </Button>
    </div>
  )
}
