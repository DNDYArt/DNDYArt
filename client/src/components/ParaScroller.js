import React from "react";
import '../../src/main.css'
import { useState, useEffect, useContext } from "react";
import {
    Parallax,
    useParallax,
    useParallaxController,
} from "react-scroll-parallax";
import {
    Container,
    Box,
    Image,
    Button,
    Heading,
    SlideFade,
    useDisclosure,
} from "@chakra-ui/react";

import Pink from "../components/images/pink.jpg";
import Berry from "../components/images/strawberry.jpg";
import Evening from "../components/images/evening-mountain.jpg";
import Abstract from "../components/images/abstract-1.jpg";

function ParaScroller() {
    return (
        <Container
styleConfig="margin-right: 0px;margin-left: 0px;"
scrollaxis="vertical"
>
<div className="par-box">
    <article>
        <Parallax className="home-img" speed={30}>
            <Image src={Pink} className="pink" />
        </Parallax>
        <Parallax
            className="right-text"
            easing="easeOutQuad"
            translateX={["2px", "-200px"]}
            opacity={[0, 1.5]}
        >
            <Heading className="text-1">
                Art,<br></br>Curated.
            </Heading>
        </Parallax>
    </article>
    <article>
        <Parallax
            className="home-img"
            easing="easeOutQuad"
            speed={10}
        >
            <Image src={Berry} className="berry" />
        </Parallax>
    </article>
    <article>
        <Parallax
            className="home-img mountain"
            speed={100}
        >
            <Parallax
                className="right-text"
                easing="easeOutQuad"
                translateY={["500px", "-200px"]}
                opacity={[1, -2]}
            >
                <Heading className="text-2">
                    Design,<br></br>Elevated.
                </Heading>
            </Parallax>
            <Image src={Evening} />
        </Parallax>
    </article>
    <article className="caboose">
        <Parallax
            className="home-img abstract"
            speed={25}
        >
            <Image src={Abstract} />
            <Parallax
                easing="easeOutQuad"
                opacity={[2, 0]}
            >
                <Heading className="text-3">
                    Color,<br></br>Invigorated.
                </Heading>
            </Parallax>
        </Parallax>
    </article>
</div>
</Container>
    )
}

export default ParaScroller;