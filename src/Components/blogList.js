import BlogListCard from "./blogListCard";

const BlogList = (props) => {
  const { blogs } = props;
  return (
    <div className="the-list">
      <hr/>
      {blogs.map((blog) => {
        return <BlogListCard blog={blog} key={blog.id} />
      })}
    </div>
  )
}

export default BlogList;