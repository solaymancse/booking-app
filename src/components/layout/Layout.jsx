import { Outlet } from "react-router-dom"
import { Footer } from "./footer/Footer"
import { Hero } from "../hero/Hero"


export const Layout = () => {
  return (
    <>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}
