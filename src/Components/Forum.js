import React from 'react'
import LeftNews from './LeftNews'
import CenterForum from './CenterForum'
import RightNews from './RightNews'

export default function Forum() {
  return (
      <div className='container-fluid'>
 <div className='row'>
       <LeftNews/>
       <CenterForum/>
       <RightNews/>
    </div>
      </div>

  )
}
