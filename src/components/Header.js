import { gsap } from "gsap";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useStyle } from "../contexts/StyleContext";
import { ROUTES } from "../globals/ROUTES";
import Clock from "./Clock";

const Item = props => {
    const { curStyle } = useStyle();
    const itemRef = useRef(null);

    const onHover = () => {
        gsap.to(itemRef.current, {
            duration: .5,
            textShadow: `3px 3px ${curStyle.colours.pink}`
        })
    }

    const onLeave = () => {
        gsap.to(itemRef.current, {
            duration: .5,
            textShadow: 'none' 
        })
    }

    return (
        <div ref={itemRef} onMouseEnter={onHover} onMouseLeave={onLeave} style={{
            ...curStyle.layout,
            marginLeft: '5%',
            fontWeight: 'bold'
        }}>
            <NavLink
                style={{
                    textDecoration: 'none',
                    fontFamily: curStyle.fonts.family,
                    fontSize: curStyle.fonts.size.xl,
                    color: curStyle.colours.black
                }}
                activeStyle={{
                    textShadow: `3px 3px ${curStyle.colours.pink}`
                }}
                exact to={props.dest}>
                {props.children}
            </NavLink>
        </div>
    );
}

const Header = props => {
    const { curStyle } = useStyle();

    return (
        <div style={{
            ...curStyle.layout,
            height: '10vh',
            maxWidth: '100vw',
            flexFlow: 'row',
            justifyContent: 'center',
            backgroundColor: curStyle.colours.saffron

        }}>
            <div style={{
                ...curStyle.layout,
                height: 'inherit',
                width: '85vw',
                flexFlow: 'row',
                justifyContent: 'left'
            }}>
                <Item dest={ROUTES.MAIN.url}>
                    {props.destFirst}
                </Item>
                <Item dest={ROUTES.PARAMETERS.url}>
                    {props.destSecond}
                </Item>
            </div>
            <div style={{
                ...curStyle.layout,
                width: '15vw',
                justifyContent: 'center'
            }}>
                <Clock 
                style={{ margin: '1% 0' }}
                 />
            </div>
        </div>
    )
}

export default Header