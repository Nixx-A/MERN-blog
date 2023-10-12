import { ContentContainer } from '../ui/ContentContainer'
import { MainPostsUi } from './MainPostsUi'
import PostCard from './PostCard'
import { PostCardLoading } from './PostLoadingSkeleton'
import PostsNavigation from './PostsNavigation'

export function ListOfPostsCards ({ loading, posts }) {
  return (

    <ContentContainer>
      <div>
        <MainPostsUi>
          <PostsNavigation />

          {loading && posts.map(post => <PostCardLoading key={post._id} />)}
          {posts.map(post => <PostCard post={post} key={post._id} />)}
        </MainPostsUi>
      </div>

    </ContentContainer >
  )
}
