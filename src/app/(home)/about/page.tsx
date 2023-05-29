import { Metadata } from 'next';
import AboutContent from '../ui/AboutContent';
import { error } from 'console';
import { notFound } from 'next/navigation';

 
export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา',
};

async function getData() {
  const res = await fetch("https://api.codingthailand.com/api/version")
  // const res = await fetch("https://api.codingthailand.com/api/version", 
  // { next: { revalidate : 10}}) // 10 sec refreshing
  // const res = await fetch("https://api.codingthailand.com/api/version",
  // { cache: 'no-store'}) //auto update

  if(!res.ok) {
    throw new Error("ไม่สามารถดึงข้อมูลได้")
  }
  return res.json();
  // if( res.status == 404) {
  //   notFound();
  // }
}
export default async function AboutPage() {
  const data = await getData();
  return (
    <div>
      <AboutContent data={ data }/>
    </div>
  );
}