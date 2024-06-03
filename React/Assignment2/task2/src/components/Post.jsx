function Post({ title, body }) {
  console.log(title,body,'got it data')
  return (
    <div>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
