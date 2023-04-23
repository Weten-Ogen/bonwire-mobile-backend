import React from 'react'
import Card from './CardLink';
import { BsTrash,BsBookmark,BsExclamationTriangle, BsBell } from 'react-icons/bs';


export default function DropDown() {
  return (
    <div className='relative '>
        <div className='absolute  -left-200 w-[150px]
         text-gray-600 
        
         '>
          <Card>
              <li className='dropdownlist'>
                <BsBookmark/>
                <p>safe post</p>
                <hr/>
              </li>
              <li className='dropdownlist'>
              <BsBell/>
              <p>notice</p>
              <hr/>
              </li>
              <li className='dropdownlist'>
                <BsExclamationTriangle/>
                <p>hide</p>
                <hr/>
              </li>
              <li className='dropdownlist'>
                <BsTrash/>
                <p>delete</p>
                <hr/>
              </li>
          </Card>
        </div>
    </div>
  )
}
