import { useState, useEffect, Suspense } from 'react'
import Layout from "./layout";
import { ReactFunction } from "./types";

export default function App(): ReactFunction {

  type Data = {
    id: string,
    title: string,
    thumbnail: {
      url: string,
      width: number
      height: number
    }
  }

  const [first, setfirst] = useState<[Data] | []>([])

  useEffect(() => {
    fetch('https://znoruxserver-zqbe-dev.fl0.io/uno')
      .then(res => res.json())
      .then(res => {
        setfirst(res.videos)
      })

  }, [])

  function Loading() {
    return (
      <h1>Cargando.....</h1>
    )
  }

  return (
    <Layout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
      }}>
        <Suspense fallback={<Loading />}>
          {first.map(({ id, thumbnail, title }) =>
          (
            <div key={id} className="video" style={{
              width: 400,
              background: '#000000',
              display: 'flex',
              alignItems: 'center'
            }}>
              <img src={thumbnail.url} alt={title} width={220} height={124} />
              <h5 style={{
                color: '#ffffff',
                margin: 0
              }}>{title}</h5>
            </div>
          )
          )}
        </Suspense>
      </div>
    </Layout>
  )
}
