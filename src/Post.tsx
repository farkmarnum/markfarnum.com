/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { useRouteMatch, useHistory } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import titles from './helpers/titles'
import './Post.css'

const Post = ({
  setTitle,
}: {
  setTitle: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element => {
  const history = useHistory()
  const match = useRouteMatch<{ slug: string }>()
  const { slug } = match.params

  const [postData, setPostData] = useState<{
    postContent?: string
    postTitle?: string
  }>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const resp = await fetch(`https://markfarnum.com/posts/${slug}.json`)
        const data = await resp.json()

        setPostData(data)
        setTitle(data.postTitle || 'mark farnum')
        setIsLoading(false)
      } catch (err) {
        // Probably an invalid slug, redirect to /
        history.push('/')
      }
    })()
  }, [slug])

  const { postContent = '', postTitle = '' } = postData

  if (isLoading) {
    return (
      <div className="main container">
        <div style={{ textAlign: 'center', color: 'grey' }}>Loading...</div>
      </div>
    )
  }
  return (
    <div className="main container">
      <h1 className="text-center title">
        <code>
          <ReactTypingEffect
            text={titles(postTitle)}
            speed={80}
            eraseSpeed={60}
            eraseDelay={3000}
            typingDelay={250}
          />
        </code>
      </h1>
      <div className="row content post-content">
        <ReactMarkdown plugins={[gfm]}>{postContent}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Post
