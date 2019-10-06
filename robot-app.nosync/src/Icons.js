import React from 'react';

const roboFill = '#212121';
const roboAccent = '#e8e8e8';

function Robo(props) {
    return (
        <>
        <RoboFace cls="face" colorFill={props.roboFill ? props.roboFill : roboFill} colorAccent={props.roboAccent ? props.roboAccent : roboAccent} />
        <RoboWheel cls="left-wheel" />
        <RoboWheel cls="right-wheel" />
        <RoboBase cls="base" colorFill={props.roboFill ? props.roboFill : roboFill} />
        </>
    );
};

    function RoboWheel(props) {
        return (
            <div className={props.cls ? props.cls : null}>
                <div className='wheel-front'>
                </div>
                <div className='wheel-turned'>
                </div>
            </div>
        );
    };

    function RoboBase(props) {
        return (
            <svg className={props.cls ? props.cls : null} viewBox="0 0 259 286" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M83 241H122V286H83V241Z" fill={props.colorFill}/>
                <path d="M138.772 241H177.772V286H138.772V241Z" fill={props.colorFill}/>
                <path d="M63.7718 113C63.7718 107.477 68.249 103 73.7718 103H187.772C193.295 103 197.772 107.477 197.772 113V244C197.772 249.523 193.295 254 187.772 254H73.7718C68.249 254 63.7718 249.523 63.7718 244V113Z" fill={props.colorFill}/>
                <path d="M187.772 187V148H233.772V187H187.772Z" fill={props.colorFill}/>
                <path d="M243.772 190C231.069 190 220.772 179.703 220.772 167C220.772 154.297 231.069 144 243.772 144C249.395 144 258.272 147 258.544 149.37C259.075 154 233.772 156.5 233.772 167C233.772 177.5 258.544 183 257.572 185.402C256.318 188.5 248.949 190 243.772 190Z" fill={props.colorFill}/>
                <path d="M26.7718 187L26.7718 148H72.7718V187H26.7718Z" fill={props.colorFill}/>
                <path d="M15.5519 190C28.2545 190 38.5519 179.703 38.5519 167C38.5519 154.297 28.2545 144 15.5519 144C9.9283 144 1.0519 147 0.780064 149.37C0.249014 154 25.5519 156.5 25.5519 167C25.5519 177.5 0.780064 183 1.75223 185.402C3.00616 188.5 10.3743 190 15.5519 190Z" fill={props.colorFill}/>
                <path d="M92.7718 51C92.7718 39.9543 101.726 31 112.772 31H143.772C154.818 31 163.772 39.9543 163.772 51V103H92.7718V51Z" fill={props.colorFill}/>
                <path d="M124 12H133V31H124V12Z" fill={props.colorFill}/>
                <path d="M136 7.5C136 11.6421 132.642 15 128.5 15C124.358 15 121 11.6421 121 7.5C121 3.35786 124.358 0 128.5 0C132.642 0 136 3.35786 136 7.5Z" fill={props.colorFill}/>
            </svg>
        );
    };

    function RoboFace(props) {
        return (
        <svg className={props.cls ? props.cls : null} viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7718 8C16.7718 12.4183 13.1901 16 8.77182 16C4.35354 16 0.77182 12.4183 0.77182 8C0.77182 3.58172 4.35354 0 8.77182 0C13.1901 0 16.7718 3.58172 16.7718 8Z" className="eyes" fill={props.colorAccent}/>
            <path d="M49.7718 8C49.7718 12.4183 46.1901 16 41.7718 16C37.3535 16 33.7718 12.4183 33.7718 8C33.7718 3.58172 37.3535 0 41.7718 0C46.1901 0 49.7718 3.58172 49.7718 8Z" className="eyes" fill={props.colorAccent}/>
            <path d="M6.77182 27H42.7718V43H6.77182V27Z" className="mouth" fill={props.colorAccent}/>
            <path d="M9.77182 27H11.7718V43H9.77182V27Z" fill={props.colorFill}/>
            <path d="M16.7718 27H18.7718V43H16.7718V27Z" fill={props.colorFill}/>
            <path d="M23.7718 27H25.7718V43H23.7718V27Z" fill={props.colorFill}/>
            <path d="M37.7718 27H39.7718V43H37.7718V27Z" fill={props.colorFill}/>
            <path d="M30.7718 27H32.7718V43H30.7718V27Z" fill={props.colorFill}/>
        </svg>
        );
    };

export {Robo};