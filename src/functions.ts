import {IElementScrollPosition} from "./types";

export function scrollPosition(contentRef: HTMLElement): IElementScrollPosition {
    const containerHeight = contentRef.clientHeight;
    const scrollHeight = contentRef.scrollHeight;
    const scrollTop = contentRef.scrollTop;
    const hasScroll = scrollHeight > containerHeight;

    return {
        isTop: hasScroll && scrollTop <= 0,
        isBetween: hasScroll && scrollTop > 0 && containerHeight < scrollHeight - scrollTop,
        isBottom: hasScroll && containerHeight >= scrollHeight - scrollTop,
    };
}