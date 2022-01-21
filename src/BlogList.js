import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {

  return (
    <div className="row">
      {blogs.map(blog => (
        <div className='col-md-4' key={blog.id} >
          <div className="blog-preview"  >
            <Link to={`/blogs/${blog.id}`}>
                <img className="post-img" src={`${blog.image}`}/>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
