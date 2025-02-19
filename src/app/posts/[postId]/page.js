
export default async function PostPageId({ params }) {
    const { postId } = await params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();
    console.log(post)
  return (
    <div style={{backgroundColor: "gray", margin:"20px" , padding:"20px"} }>
        <h1>Post {postId}</h1>
        <p>{post.title}</p>
        <p>{post.body}</p>
    </div>
  )
}
