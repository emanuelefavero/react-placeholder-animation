import { useEffect, useState } from 'react'
import LoadedState from './components/LoadedState'
import LoadingState from './components/LoadingState'

function App() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Fetch data from cross origin API
        fetch('https://shy-lime-scorpion-hose.cyclic.app/', {
            mode: 'cors',
        })
            .then((response) => response.json())
            .then((data) => {
                setPosts(data)

                // Simulate loading delay
                setTimeout(() => {
                    setLoading(false)
                }, 1700)
            })
    }, [])

    return (
        <>
            {loading
                ? posts.map((post, index) => (
                      <div key={index}>
                          {/* If loading == true, show LoadingState: */}
                          <LoadingState />
                      </div>
                  ))
                : posts.map((post, index) => (
                      <div key={index}>
                          {/* If loading == false, show LoadedState: */}
                          <LoadedState post={post} />
                      </div>
                  ))}
        </>
    )
}

export default App
