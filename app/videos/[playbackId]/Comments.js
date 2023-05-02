import { Suspense } from 'react'

async function CommentList({ asset }) {
  const response = await fetch(
    `https://reactathon-workshop-functions.vercel.app/api/comments/${asset}`,
  )
  const data = await response.json()

  return (
    <ul>
      {data.comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.content}</p>
            <p>
              <i>{(new Date(comment.updated_at)).toLocaleDateString()}</i>
            </p>
          </li>
        )
      })}
    </ul>
  )
}

function Comments({ asset }) {
  return (
    <div className="comments">
      <h3>Comments</h3>
      <Suspense fallback={<p>Loading comments...</p>}>
        <CommentList asset={asset} />
      </Suspense>
    </div>
  )
}

export default Comments
