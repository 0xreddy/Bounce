import { useEffect, useRef } from 'react'
import useGame from './stores/useGame.jsx'

export default function Interface()
{
    const startButton = useRef()
    const [ status, start, setIsTouch ] = useGame(state => [ state.status, state.start, state.setIsTouch ])
    
    const onStartClick = (event, data) =>
    {
        start()
        startButton.current.blur()
    }
    
    const onTouchStart = () =>
    {
        setIsTouch(true)
    }

    // // Skip
    // useEffect(() =>
    // {
    //     start('started')
    // }, [])

    return <div className="interface">
    
        {/* Intro / outro */}
        <div className={ `screen intro ${ status === 'intro' || status === 'outro' ? 'is-visible' : '' }` }>
            <h1 className="title">Bounce </h1>
            <button ref={ startButton } className="start-button" onTouchStart={ onTouchStart } onClick={ onStartClick }>
                <div className="video">
                    <video src="./videos/button-preview.mp4" muted autoPlay loop />
                </div>
                { status === 'intro' && (
                    <div className="label"><span className="letter neg-2">s</span><span className="letter neg-1">t</span>a<span className="letter pos-1">r</span><span className="letter pos-2">t</span></div>
                ) }
                { status === 'outro' && (
                    <div className="label"><span className="letter neg-3">r</span><span className="letter neg-2">e</span><span className="letter neg-1">s</span><span className="letter">t</span><span className="letter pos-1">a</span><span className="letter pos-2">r</span><span className="letter pos-3">t</span></div>
                ) }
                
            </button>
        </div>

    </div>
}