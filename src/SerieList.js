import React from 'react'
import Serie from './Serie'
import './SerieList.css'

export default function SerieList(props) {
    const elements = props.series.map(serie => <Serie key={serie.id} serie={serie} />)

    return (
        <div classNames="container">
        {elements}</div>
    )
}