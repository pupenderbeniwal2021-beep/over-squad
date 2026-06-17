import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Contant = (props) => {
  return (
    <div className='py-3 px-18 h-[85vh] flex justify-between items-center'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Contant
