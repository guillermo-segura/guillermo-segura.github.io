'use client';
import ButtonLink from '../ButtonLink/ButtonLink';
import { Children, ReactElement, useLayoutEffect, useMemo, useState } from "react";

const classNames = {
  container: 'relative pt-1/2 mb-6',
  viewport: 'absolute inset-x-0 inset-y-0 flex flex-row overflow-hidden scroll-smooth snap-x snap-proximity',
  slide: 'relative w-full flex-0-100 snap-start outline-0 px-6',
  navigation: 'absolute inset-x-0 -bottom-8 text-center',
  inlineBlock: 'inline-block',
  navButton: 'inline-block w-2 h-2 bg-stone-200 rounded-full text-[0px] mx-1 my-2 cursor-pointer',
  navButtonHighlighted: 'inline-block w-2 h-2 bg-black rounded-full text-[0px] mx-1 my-2 cursor-pointer'
}

export function CarouselItem ({ children, id }: { children: React.ReactNode, id: string }) {
  return (
    <li id={id} tabIndex={0} className={classNames.slide}>
      {children}
    </li>
  );
}

export default function Carousel ({ children }: { children: ReactElement[] }) {
  const [index, setIndex] = useState(0);

  const slideIds: string[] = [];
  
  Children.forEach(children, (child, index) => {
    slideIds.push(child?.props?.id);
  });

  const goTo = (id: string) => window.location.href=`#${id}`;

  const hasNext = slideIds.length - 1 > index;

  const onClickNext = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (hasNext) {
      goTo(slideIds[index + 1]);
      setIndex((i) => i + 1);
    }
  }

  const hasPrev = index > 0;

  const onClickPrev = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (hasPrev) {
      goTo(slideIds[index - 1]);
      setIndex((i) => i - 1);
    }
  }

  const renderNavigation = (id: string, i: number) => {
    const onClick = () => {
      goTo(id);
      setIndex(i);
    }
    return (
      <li key={id} className={classNames.inlineBlock}>
        <a onClick={onClick}
          className={i === index ? classNames.navButtonHighlighted : classNames.navButton}>Go to slide {id}</a>
      </li>
    );
  };

  const isFirst = index === 0;

  return (
    <section className={classNames.container} style={{ perspective: '100px' }} aria-label="Gallery">
      <ol className={classNames.viewport}>
        {children}
      </ol>
      {hasPrev && <div className="absolute bottom-0 left-0"><ButtonLink label="Prev" type="secondary" onClick={onClickPrev}/></div>}
      {hasNext && <div className={isFirst ? 'absolute bottom-0 right-0 animate-bounce' : 'absolute bottom-0 right-0'}><ButtonLink label={index === 0 ? 'Start' : 'Next'} type="secondary" onClick={onClickNext}/></div>}
      <aside className={classNames.navigation}>
        <ol className={classNames.inlineBlock}>
          {slideIds.map(renderNavigation)}
        </ol>
      </aside>
    </section>
  );
}