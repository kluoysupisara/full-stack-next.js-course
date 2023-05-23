import { Metadata } from 'next';
import Link from 'next/link';
 
export const metadata: Metadata = {
  title: 'Dashboard',
};
export default function DashboardtPage() {
  return (
    <div>
      <h1>Hello Page Dashboard</h1>
      <div>
        <Link href="../">กลับไปที่หน้าหลัก</Link>
        </div>
    </div>
  );
}