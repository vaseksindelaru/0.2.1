import Modal from "@/layouts/Modal"
import LoginLayout from "@/layouts/loginLayout"


import React from 'react'

const Index = () => {
  return (
    <div>
    </div>
  )
}

export default Index

Index.getLayout = function getLayout() {
  return (
    
    <div>
      index
     <LoginLayout>
       
   
    </LoginLayout>
      
    
      
      </div>)
    }

/*export async function getServerSideProps(){
  try{
await conectardb()
  }catch(error) {
    console.log(error)
  }
}*/
