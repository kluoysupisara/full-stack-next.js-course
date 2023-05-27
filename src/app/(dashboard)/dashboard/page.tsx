import { Metadata } from 'next';
import Link from 'next/link';
 
export const metadata: Metadata = {
  title: 'Dashboard',
};
export default function DIndexPage() {
  return (
    <div>
      <h1>Hello Page Dashboard</h1>
    </div>
  );
}