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

Index.getLayout = function getLayout(page) {
  return (
    
    <div>
      index
     <LoginLayout>
       
    {page}
    </LoginLayout>
      
    index 
      
      </div>)
    }

/*export async function getServerSideProps(){
  try{
await conectardb()
  }catch(error) {
    console.log(error)
  }
}*/
