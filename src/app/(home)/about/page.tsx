import { Metadata } from 'next';
import Link from 'next/link';
 
export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา',
};
export default function AboutPage() {
  return (
    <div>
      <h1>Hello Page About</h1>
      <div>
        <Link href="../">กลับไปที่หน้าหลัก</Link>
        </div>
    </div>
  );
}