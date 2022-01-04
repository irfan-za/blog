import {useContext} from "react"
import Link from 'next/link'
const categories=[
  {name:"react", slug:"react"},
  {name:"book", slug:"book"},
]

function Header() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8 md:flex justify-between">
        <div className="">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Penasaran
            </span>
          </Link>
        </div>
        <div className="hidden md:inline">
          {
            categories.map((category)=>(
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Header
