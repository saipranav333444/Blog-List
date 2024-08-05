import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list">
      {blogsList.map(each => (
        <BlogItem key={each.id} blogItemList={each} />
      ))}
    </ul>
  )
}

export default BlogList
