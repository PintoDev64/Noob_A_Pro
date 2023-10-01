// Globals
export type FunctionalProps = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}
export type ReactFunction = JSX.Element

// Context
export type WebRouterLocalProps = {
    pageNumber: 0 | 1 | 2,
    setWebState?: (values: EspectedValues) => void
}
export interface WebRouterProps {
    pageNumber: 0 | 1 | 2,
    setWebState: (values: EspectedValues) => void
}
export type EspectedValues = {
    action: 'pageNumber' | 'BGmusic',
    value: string | number
}

// YoutubeVideos API
export type Youtube = {
    id: string,
    title: string,
    thumbnail: {
        url: string,
        width: number
        height: number
    }
}

export type YoutubeState = [Youtube] | []