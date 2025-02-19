import Link from "next/link";

export default async function PagePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);

  const postsJsx = posts.map((post) => (
    <Link href={`/posts/${post.id}`} key={post.id}>
      <div
        style={{ backgroundColor: "gray", margin: "20px", padding: "20px" }}
      >
        <h3>Post {post.id}</h3>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    </Link>
  ));

  return (
    <div>
      <div>Posts Page</div>
      <div>{postsJsx}</div>
    </div>
  );
}
