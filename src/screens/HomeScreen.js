import gsap from "gsap/gsap-core";
import { useEffect, useRef } from "react";
import { useHistory } from 'react-router-dom';
import poland from "../assets/poland.svg";
import { useStyle } from "../contexts/StyleContext";


const HomeScreen = props => {
    const { curStyle } = useStyle();
    const nameRef = useRef(null);
    const polRef = useRef(null);
    let history = useHistory();

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
        // eslint-disable-next-line
    }, [])

    return (
        <div style={{
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
                <img ref={polRef} onMouseEnter={onHover} onMouseLeave={onLeave} onClick={() => history.push("/map")} src={poland} alt={"Poland"} />
            </div>
        </div>
    )
}

export default HomeScreen;