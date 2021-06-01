import gsap from "gsap/gsap-core";
import { useEffect, useRef } from "react";
import { useStyle } from "../contexts/StyleContext";
import poland from "../assets/poland.svg"


const HomeScreen = props => {
    const { curStyle } = useStyle();
    const nameRef = useRef(null);
    const polRef = useRef(null);

    const onHover = () => {
        gsap.to(polRef.current, {
            duration: .5,
            filter: `drop-shadow(0 0 5vh ${curStyle.colours.green})`
        })
    }

    const onLeave = () => {
        gsap.to(polRef.current, {
            duration: .5,
            filter: `drop-shadow(0 0 0.5vh ${curStyle.colours.green})`
        })
    }

    useEffect(() => {
        gsap.to(nameRef.current, {
            duration: 1,
            filter: `drop-shadow(0 0 0.5vh ${curStyle.colours.green})`,
        })
        gsap.to(polRef.current, {
            duration: 1,
            filter: `drop-shadow(0 0 0.5vh ${curStyle.colours.green})`,
        })
    }, [])

    return (        
            <div style ={{
                ...curStyle.layout,
                height: '90vh',
                width: '100vw',
                alignSelf: 'right',
                backgroundColor: curStyle.colours.black,
                fontFamily: curStyle.fonts.family
            }}>
                <div ref={nameRef} style={{
                    ...curStyle.layout,
                    height: '100%',
                    width: '50%',
                    justifyContent: 'center',
                    fontSize: curStyle.fonts.size.title,
                    color: curStyle.colours.black,
                    cursor: 'default'
                }}>
                    Mikołaj Siebielec
                </div>
                <div style={{
                    ...curStyle.layout,
                    height: '100%',
                    width: '50%',
                    justifyContent: 'center',
                    fontSize: curStyle.fonts.size.title,
                    color: curStyle.colours.black,
                    cursor: 'pointer'
                }}>
                    <img ref={polRef} onMouseEnter={onHover} onMouseLeave={onLeave} src={poland}/>
                </div>
            </div>
    )
}

export default HomeScreen;