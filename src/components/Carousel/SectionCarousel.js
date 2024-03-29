import React from "react";
import {
    Card,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption
} from "reactstrap";

const items = [
    {
        src: require("assets/img/galery/001.jpg"),
        altText: "Bitva",
        caption: ""
    },
    {
        src: require("assets/img/galery/002.jpg"),
        altText: "Bitva",
        caption: ""
    },
    {
        src: require("assets/img/galery/003.jpg"),
        altText: "Bitva",
        caption: ""
    },
    {
        src: require("assets/img/galery/004.jpg"),
        altText: "Bitva",
        caption: ""
    },
    {
        src: require("assets/img/galery/005.jpg"),
        altText: "Bitva",
        caption: ""
    },
    {
        src: require("assets/img/galery/006.jpg"),
        altText: "Bitva",
        caption: ""
    },
    {
        src: require("assets/img/galery/007.jpg"),
        altText: "Bitva",
        caption: ""
    }
];

function SectionCarousel() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    return (
        <>
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <Card className="page-carousel">
                            <Carousel
                                activeIndex={activeIndex}
                                next={next}
                                previous={previous}
                            >
                                <CarouselIndicators
                                    items={items}
                                    activeIndex={activeIndex}
                                    onClickHandler={goToIndex}
                                />
                                {items.map(item => {
                                    return (
                                        <CarouselItem
                                            onExiting={onExiting}
                                            onExited={onExited}
                                            key={item.src}
                                        >
                                            <img src={item.src} alt={item.altText}/>
                                            <CarouselCaption
                                                captionText={item.caption}
                                                captionHeader=""
                                            />
                                        </CarouselItem>
                                    );
                                })}
                                <a
                                    className="left carousel-control carousel-control-prev"
                                    data-slide="prev"
                                    href="#pablo"
                                    onClick={e => {
                                        e.preventDefault();
                                        previous();
                                    }}
                                    role="button"
                                >
                                    <span className="fa fa-angle-left"/>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="right carousel-control carousel-control-next"
                                    data-slide="next"
                                    href="#pablo"
                                    onClick={e => {
                                        e.preventDefault();
                                        next();
                                    }}
                                    role="button"
                                >
                                    <span className="fa fa-angle-right"/>
                                    <span className="sr-only">Next</span>
                                </a>
                            </Carousel>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SectionCarousel;
