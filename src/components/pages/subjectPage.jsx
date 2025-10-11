import React from 'react'
import Subjects from '../common/subjects' 
import {Link} from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const subjectPage = () => {
  return (
    <div>
      <div className=''>
                                   
        
          <button><h2 >  <Link to="/student-dashboard"> <ArrowLeft/></Link> </h2></button>
      </div>
    <Subjects />
    </div>

  )
}

export default subjectPage