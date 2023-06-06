import { Avatar,AvatarFallback,AvatarImage } from "../ui/avatar";



export default function Avatarr() {
  return (
    <Avatar className="border border-red-500 shadow-md">
      <AvatarImage
      className="object-cover " 
      src="/marcusr.png" 
      alt="marcus"/>
      <AvatarFallback>M</AvatarFallback>
    </Avatar>
  )
}
