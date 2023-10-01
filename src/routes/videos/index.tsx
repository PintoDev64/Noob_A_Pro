import { Suspense } from "react";
import { ReactFunction } from "../../types";
import { Loading } from "../../components/utils";
import { YoutubeAPI } from "../../services";

// Style
import './style.css'

export default function Videos(): ReactFunction {

    const ZnoruxVideos = YoutubeAPI();
    return (
        <Suspense fallback={<Loading />}>
            {ZnoruxVideos.map(({ id, thumbnail, title }) =>
            (
                <div key={id} className="video">
                    <img src={thumbnail.url} alt={title} width={220} height={124} />
                    <h5 style={{
                        color: '#ffffff',
                        margin: 0
                    }}>{title}</h5>
                </div>
            )
            )}
        </Suspense>
    )
}