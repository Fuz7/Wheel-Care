import { useEffect } from "react"

export default function Testimonial(){
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return(
    <section className="min-h-[900px] min-w-[1440px]
    max-w-[1440px] mt-5 flex flex-col mx-auto">
      <h2 className="font-Roboto font-medium text-[48px]">Testimonial</h2>
    </section>
  )
}