import { useEffect, useState } from "react"
import { YoutubeState } from "../types"


function YoutubeAPI() {
    const [YoutubeVideos, setYoutubeVideos] = useState<YoutubeState>([])

    useEffect(() => {
        fetch('https://znoruxserver-zqbe-dev.fl0.io/uno')
            .then(res => res.json())
            .then(data => {
                setYoutubeVideos(data.videos)
            })
            .catch(err => [{
                error: err
            }]);
    }, [])

    return YoutubeVideos
}

export {
    YoutubeAPI
}