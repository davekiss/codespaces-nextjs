import { Suspense } from 'react'

async function CommentList({ playbackId }) {
  const response = await fetch(
    `https://reactathon-workshop-functions.vercel.app/api/comments/${playbackId}`,
  )
  const data = await response.json()

  return (
    <ul>
      {data.comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.content}</p>
            <p>
              <i>{new Date(comment.updated_at).toLocaleDateString()}</i>
            </p>
          </li>
        )
      })}
    </ul>
  )
}

function Comments({ playbackId }) {
  return (
    <div className="comments">
      <h3>Comments</h3>
      <Suspense fallback={<p>Loading comments...</p>}>
        <CommentList playbackId={playbackId} />
      </Suspense>
    </div>
  )
}

export default Comments
