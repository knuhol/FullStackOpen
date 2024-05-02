import { useEffect, useState } from 'react'

import { Message } from './Message.jsx'
import { UserSection } from './UserSection.jsx'
import { CreateBlog } from './CreateBlog.jsx'
import { BlogList } from './BlogList.jsx'
import blogService from '../services/blogs.js'
import { useUser } from '../contexts/UserContext.jsx'
import { useMessage } from '../contexts/MessageContext.jsx'

export const MainLayout = () => {
  const [blogs, setBlogs] = useState([])
  const { user } = useUser()
  const { message } = useMessage()

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])

  return (
    <div className="pure-g">
      <div className="pure-u-1">
        {message !== null && <Message message={message.messageText} isError={message.isErrorMessage} />}
      </div>
      <div className="pure-u-1">
        <UserSection />
      </div>
      {user !== null && (
        <>
          <div className="pure-u-1">
            <hr style={{ border: '0.5px solid #cce4fa' }} />
          </div>
          <div className="pure-u-1">
            <h2>Blogs</h2>
            <div className="pure-u-1">
              <CreateBlog blogs={blogs} setBlogs={setBlogs} />
            </div>
            <div className="pure-u-1">
              <BlogList blogs={blogs} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}