import { FaHome } from "react-icons/fa"

import AppHeader from "@/client-components/AppHeader"
import style from './page.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link href="/about">ไปที่หน้า About</Link>
      </div>
      <p className="header">Heelloo Next.js</p>
      <p>{ process.env.DB_PASSWORD }</p>
      <p>{ process.env.DB_USER }</p>
      <FaHome size={25}/>
      <AppHeader/>
      <p className={style.title}>Hello Next.js 13</p>
    </main>
  )
}
