import React from 'react'

import Animation3 from '@/app/[locale]/components/Lotticreator';
import Arrow from "@/public/assets/images/arrow06.svg";             
import EmailModal from '@/app/[locale]/components/EmailModal'



const CallToAct = () => {
  return (
    <div className='flex flex-col items-center justify-center '>


<div className='w-full'>

<Animation3/>

</div>
<div className='w-full h-screen'>



<EmailModal/>    
</div>


    </div>
  )
}

export default CallToAct