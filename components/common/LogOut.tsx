import { Button } from "../ui/button";

export default function LogOut() {
    return (
      <div className="my-2">
          <Button
          className="text-red-600 border border-red-600 capitalize font-bold focus:bg-white hover:opacity-70 hover:text-red-600 text-xl px-10 py-4"
          variant='outline' 
          type="submit">
              log in
          </Button>
      </div>
    )
  }
  