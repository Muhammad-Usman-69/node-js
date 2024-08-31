import Card from './Card'
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        setPosts(await res.json());
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className='flex flex-wrap gap-8 m-4 justify-center'>
        {posts && posts.map(post => {
          return <Card title={post.title} desc={post.body} />;
        })}
      </div>
    </>
  )
}

export default App
