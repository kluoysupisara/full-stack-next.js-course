import { findAllNewsType } from "@/services/newstype.service"

export default async function NewsTypePage() {
    const data = await findAllNewsType();
  return (
    <div>{ JSON.stringify( data )}</div>
  )
}
