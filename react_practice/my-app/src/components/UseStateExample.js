import React, {useState, useEffect} from 'react'

export function UseStateExample() { // named export, need to use the same name everywhere nad {} when importing/exporting.
  const [resourceType, setResourceType] = useState('posts')
  console.log('render');

  useEffect(() => {console.log('resource type changed')}, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  )
}
