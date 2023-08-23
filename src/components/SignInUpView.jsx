import React from 'react';

function SignInUpView({image, form}) { // image
  
  return (
    <div className="flex flex-col md:flex-row" style={{height:"calc(100vh - 56px)"}}>
    <div  className="md:w-1/2 h-1/3 md:h-auto bg-cover bg-center"
    style={{ backgroundImage: `url(${image})` }}
    >    
    </div>
    <div className="md:w-3/5 p-10 md:p-20">
      {form()} {/* use function in order to avoid a React child error */}
    </div>
  </div>
  )
}

export default SignInUpView;
