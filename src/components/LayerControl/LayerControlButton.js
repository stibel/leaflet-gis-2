import gsap from 'gsap/gsap-core'
import { useRef } from 'react'
import { useStyle } from '../../contexts/StyleContext'

const LayerControlButton = ({ label, onClick }) => {

    const buttonRef = useRef(null)

    const { curStyle } = useStyle()

    const onEnter = () =>
        gsap.to(buttonRef.current, {
            duration: .5,
            backgroundColor: curStyle.colours.black,
            border: `solid 2px ${curStyle.colours.saffron}`,
            color: curStyle.colours.saffron
        })

    const onLeave = () => 
    gsap.to(buttonRef.current, {
        duration: .5,
        backgroundColor: curStyle.colours.saffron,
        border: `solid 2px ${curStyle.colours.black}`,
        color: curStyle.colours.black
    })

    return (
        <div
            style={{
                padding: 0,
                width: 'calc(100% - 2px)',
                height: '10%',
                border: `solid 2px ${curStyle.colours.black}`,
                backgroundColor: curStyle.colours.saffron,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: curStyle.fonts.family
            }}
            onClick={onClick}
            ref={buttonRef}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            {label}
        </div>
    )
}

export default LayerControlButton