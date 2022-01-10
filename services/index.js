import {gql, request} from "graphql-request"

const graphqlApi= process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts= async()=>{
  const query=gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
              createdAt
            }
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    } 
  `

  const result= await request(graphqlApi,query)
  return result.postsConnection.edges
}

export const getPostDetails= async(slug)=>{
  const query=gql`
    query getPostDetails($slug: String!) {
      post(where: {slug: $slug}){
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
              createdAt
            }
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            content{
              raw
            }
          }
        }
      }
    } 
  `

  const result= await request(graphqlApi,query, {slug})
  return result.post
}

export const getRecentPosts= async()=>{
  const query = gql`
  query GetPostDetails(){
    posts(
      orderBy: createdAt_ASC
      last: 3
    ){
      title
      featuredImage{
        url
      }
      createdAt
      slug
    }
  }
  `

  const result= await request(graphqlApi,query)
  return result.posts;
}


export const getSimiliarPosts= async()=>{
  const query = gql`
  query getPostDetails($slug: String!, $categories:[String!]){
    posts(
      where : {slug_not: $slug, AND : {categories_some: {slug_in : $categories}}}
      last :3
    ) {
      title
      featuredImage{
        url
      }
      createdAt
      slug
    }
  }
  `
  const result= await request(graphqlApi,query, {categories, slug})
  return result.posts;
}

export const getCategories= async()=>{
  const query = gql`
  query getCategories{
    categories{
      name
      slug
    }
  }
  `
  const result= await request(graphqlApi,query)
  return result.categories;
}


export const submitComment= async(obj)=>{
  const result= await fetch("/api/comment",{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
  })
  return result.json()
}

export const getComments= async()=>{
  const query = gql`
  query getComments($slug: String!){
    comments(where: {post: { slug: $slug } }){
      name
      createdAt
      comment
    }
  }
  `
  const result= await request(graphqlApi,query, {slug})
  return result.comments;
}