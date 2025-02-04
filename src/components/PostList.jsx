import { Post } from './Post.jsx'
import PropTypes from 'prop-types'
import { Fragment } from 'react'

export function PostList({ posts = [] }) {
  console.log(posts)
  return (
    <div>
      {posts.map((post) => (
        <Fragment key={post._id}>
          <Post {...post} />
          <hr />
        </Fragment>
      ))}
    </div>
  )
}

// PostList.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
// }

const PostPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
})

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostPropTypes).isRequired,
}
