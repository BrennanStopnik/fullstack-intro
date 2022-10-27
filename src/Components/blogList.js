import BlogListCard from "./blogListCard";

const BlogList = (props) => {
  const { blogs } = props;
  return (
    <div>
      {blogs.map((blog, index) => {
        return <BlogListCard blog={blog} key={index} />
      })}
    </div>
  )
}

export default BlogList;