import { useState, useEffect } from "react"
import moment from "moment"
import Link from "next/link"

import {getRecentPosts} from "../services"
import {getSimiliarPosts} from "../services"

export default function PostWidget({categories, slug}) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug){
      getSimiliarPosts(categories,slug)
      .then(result=> setRelatedPosts(result))
    }
    else{
      getRecentPosts()
      .then(result=> setRelatedPosts(result))

    }
  }, [slug])
  console.log(relatedPosts)
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug? "related post " : "resent post"}
      </h3>
      {
        relatedPosts.map((post)=>{
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <img src={post.featuredImage.url} alt={post.title} height="60px" width="60px" className="align-middle rounded-full" />
            </div>

            <div className="flex-grow ml-4">
              <p className="text-gray-500 text-xs">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <Link key={post.title} href={`/post/${post.slug}`} className="text-base">
                {post.title}
              </Link>
            </div>
          </div>
        })
      }
    </div>
  )
}


