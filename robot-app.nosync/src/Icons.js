import React from 'react';

const roboFill = 'black';
const roboAccent = 'white';

function Robo() {
    return (
        <>
        <RoboFace cls="face" colorFill={roboFill} colorAccent={roboAccent} />
        <RoboWheel cls="wheels left" colorFill={roboFill} />
        <RoboWheel cls="wheels right" colorFill={roboFill} />
        <RoboBase cls="base" colorFill={roboFill} />
        </>
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
            <path d="M16.7718 8C16.7718 12.4183 13.1901 16 8.77182 16C4.35354 16 0.77182 12.4183 0.77182 8C0.77182 3.58172 4.35354 0 8.77182 0C13.1901 0 16.7718 3.58172 16.7718 8Z" fill={props.colorAccent}/>
            <path d="M49.7718 8C49.7718 12.4183 46.1901 16 41.7718 16C37.3535 16 33.7718 12.4183 33.7718 8C33.7718 3.58172 37.3535 0 41.7718 0C46.1901 0 49.7718 3.58172 49.7718 8Z" fill={props.colorAccent}/>
            <path d="M6.77182 27H42.7718V43H6.77182V27Z" fill={props.colorAccent}/>
            <path d="M9.77182 27H11.7718V43H9.77182V27Z" fill={props.colorFill}/>
            <path d="M16.7718 27H18.7718V43H16.7718V27Z" fill={props.colorFill}/>
            <path d="M23.7718 27H25.7718V43H23.7718V27Z" fill={props.colorFill}/>
            <path d="M37.7718 27H39.7718V43H37.7718V27Z" fill={props.colorFill}/>
            <path d="M30.7718 27H32.7718V43H30.7718V27Z" fill={props.colorFill}/>
        </svg>
        );
    };

    function RoboWheel(props) {
        return (
            props.vertical ?
            <VerticalWheel cls={props.cls} colorFill={props.colorFill} colorAccent={props.roboAccent} /> :
            <HorizontalWheel cls={props.cls} colorFill={props.colorFill} />
        );
    };

        function HorizontalWheel(props) {
            return (
                <svg className={props.cls ? props.cls : null} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM27 40.2353C34.3097 40.2353 40.2353 34.3097 40.2353 27C40.2353 19.6903 34.3097 13.7647 27 13.7647C19.6903 13.7647 13.7647 19.6903 13.7647 27C13.7647 34.3097 19.6903 40.2353 27 40.2353Z" fill={props.colorFill}/>
                    <path d="M25 13H29V29H25V13Z" fill={props.colorFill}/>
                    <path d="M39.8564 18L41.8564 21.4641L28 29.4641L26 26L39.8564 18Z" fill={props.colorFill}/>
                    <path d="M14 18L12 21.4641L25.8564 29.4641L27.8564 26L14 18Z" fill={props.colorFill}/>
                    <path d="M37.0893 42.9403L40.1938 40.418L30.1045 28L27 30.5223L37.0893 42.9403Z" fill={props.colorFill}/>
                    <path d="M18.2339 43.2896L15 40.9355L24.4167 28L27.6505 30.3542L18.2339 43.2896Z" fill={props.colorFill}/>
                    <path d="M31 28C31 30.2091 29.2091 32 27 32C24.7909 32 23 30.2091 23 28C23 25.7909 24.7909 24 27 24C29.2091 24 31 25.7909 31 28Z" fill={props.colorFill}/>
                </svg>
            );
        };

        function VerticalWheel(props) {
            return (
                <svg className={props.cls ? props.cls : null} viewBox="0 0 20 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H20V19C20 24.5228 15.5228 29 10 29V29C4.47715 29 0 24.5228 0 19V0Z" fill={props.colorFill}/>
                    <Tread cls="tread" colorAccent={props.colorAccent} />
                </svg>
            );
        };

            function Tread(props) {
                return (
                    <svg className={props.cls ? props.cls : null} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9H20V12H0V9Z" fill={props.colorAccent} />
                        <path d="M0 0H20V3H0V0Z" fill={props.colorAccent}/>
                        <path d="M0 18H20V21H0V18Z" fill={props.colorAccent}/>
                    </svg>
                );
            };

export {Robo};