import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Card from './Card';
import './styles/carousel.css';

/* ---- Tweak the look here ---- */
const CARD_H = 550;          // must match the Card's h-[550px]
const SIDE_ROTATE = 38;      // degrees the side cards turn toward the middle
const SIDE_SCALE = 0.86;     // side card size relative to the centre card
const SIDE_DEPTH = -100;     // px the side cards sit behind the centre card
const MAX_SPACING = 290;     // px between card centres on wide screens
const SWIPE_THRESHOLD = 50;  // px of horizontal drag that counts as a swipe

// Shortest signed distance from the current card to card i, wrapping around the ends.
const circularOffset = (i, current, n) => {
    let d = (i - current) % n;
    if (d < 0) d += n;
    if (d > n / 2) d -= n;
    return d;
};

const getSlideStyle = (offset, spacing, baseScale) => {
    const abs = Math.abs(offset);
    const hidden = abs > 1;
    const side = Math.sign(offset);

    // Cards further than 1 away park (invisible) behind the side cards,
    // so they can slide out / glide in as the carousel turns.
    const x = hidden ? side * spacing : offset * spacing;
    const z = abs === 0 ? 0 : hidden ? SIDE_DEPTH * 1.5 : SIDE_DEPTH;
    const rotate = abs === 0 ? 0 : -side * SIDE_ROTATE;
    const scale = (abs === 0 ? 1 : SIDE_SCALE) * baseScale;

    return {
        transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotate}deg) scale(${scale})`,
        opacity: hidden ? 0 : abs === 0 ? 1 : 0.8,
        zIndex: hidden ? 0 : abs === 0 ? 3 : 2,
        pointerEvents: hidden ? 'none' : 'auto',
    };
};

const CardCarousel = ({ cardsInfo = [] }) => {
    const n = cardsInfo.length;
    const [current, setCurrent] = useState(0);
    const [width, setWidth] = useState(1000);
    const stageRef = useRef(null);
    const slidesRef = useRef([]);
    const pointer = useRef({ swiped: false });

    const active = n ? current % n : 0;

    // Track the container width so spacing and size adapt to any screen.
    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;
        setWidth(stage.clientWidth);
        const observer = new ResizeObserver((entries) => setWidth(entries[0].contentRect.width));
        observer.observe(stage);
        return () => observer.disconnect();
    }, []);

    // Keep links in the invisible parked cards out of the tab order.
    useEffect(() => {
        slidesRef.current.forEach((el, i) => {
            if (!el) return;
            if (Math.abs(circularOffset(i, active, n)) > 1) el.setAttribute('inert', '');
            else el.removeAttribute('inert');
        });
    }, [active, n]);

    const go = useCallback((dir) => setCurrent((c) => (c + dir + n) % n), [n]);
    const goTo = (i) => setCurrent(((i % n) + n) % n);

    const onKeyDown = (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    };

    // Swipe / drag with mouse, touch or pen.
    const onPointerDown = (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        const startX = e.clientX;
        pointer.current.swiped = false;

        const cleanup = () => {
            window.removeEventListener('pointerup', onUp);
            window.removeEventListener('pointercancel', cleanup);
        };
        const onUp = (ev) => {
            cleanup();
            const dx = ev.clientX - startX;
            if (Math.abs(dx) > SWIPE_THRESHOLD) {
                pointer.current.swiped = true;
                go(dx < 0 ? 1 : -1);
            }
        };
        window.addEventListener('pointerup', onUp);
        window.addEventListener('pointercancel', cleanup);
    };

    if (!n) return null;

    const baseScale = Math.min(1, width / 340);
    const spacing = Math.min(MAX_SPACING, width * 0.3);

    return (
        <section className="carousel-root" aria-roledescription="carousel" aria-label="Projects">
            <div
                ref={stageRef}
                className="carousel-stage"
                style={{ height: CARD_H * baseScale + 80 }}
                tabIndex={0}
                onKeyDown={onKeyDown}
                onPointerDown={onPointerDown}
            >
                {cardsInfo.map((cardInfo, i) => {
                    const offset = circularOffset(i, active, n);
                    const hidden = Math.abs(offset) > 1;
                    return (
                        <div
                            key={cardInfo.readMoreUrl || cardInfo.cardTitle || i}
                            ref={(el) => (slidesRef.current[i] = el)}
                            className={'carousel-slide' + (offset === 0 ? ' is-center' : '')}
                            style={getSlideStyle(offset, spacing, baseScale)}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${i + 1} of ${n}`}
                            aria-hidden={hidden}
                            onClickCapture={(e) => {
                                // A swipe shouldn't open a link; clicking a side card brings it to the middle.
                                if (pointer.current.swiped) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    pointer.current.swiped = false;
                                } else if (offset !== 0) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    goTo(i);
                                }
                            }}
                        >
                            <Card {...cardInfo} />
                        </div>
                    );
                })}

                {n > 1 && (
                    <>
                        <button
                            type="button"
                            className="carousel-btn carousel-btn-prev bg-dawn text-midnight border-1 border-midnight"
                            onClick={() => go(-1)}
                            aria-label="Previous card"
                        >
                            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            className="carousel-btn carousel-btn-next bg-dawn text-midnight border-1 border-midnight"
                            onClick={() => go(1)}
                            aria-label="Next card"
                        >
                            <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </>
                )}
            </div>

            {n > 1 && (
                <div className="carousel-dots" role="tablist" aria-label="Choose card">
                    {cardsInfo.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            role="tab"
                            aria-selected={i === active}
                            aria-label={`Go to card ${i + 1}`}
                            className={'carousel-dot bg-midnight' + (i === active ? ' is-active' : '')}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default CardCarousel;