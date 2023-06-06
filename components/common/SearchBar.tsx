import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Search } from "lucide-react";



export default function SearchBar() {
  return (
    <div className="flex items-center border rounded-full focus:ring max-w-lg focus:ring-red-600  ">
      <Input
      className="border-none focus:ring-offset-0  focus:rounded-l-full focus:ring-blue-600 focus:border-none px-1" 
      type="text" placeholder="Search" />
      <div className="text-3xl active:outline-none text-white px-4 py-2   bg-gray-800  rounded-r-full inline-block ">
      <Search 
      className=""/>
      </div>
    </div>
  )
}
