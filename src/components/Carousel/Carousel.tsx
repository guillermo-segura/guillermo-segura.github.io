import { Children, ReactElement } from "react";

const classNames = {
  container: 'relative pt-1/2 mb-6',
  viewport: 'absolute inset-x-0 inset-y-0 flex overflow-scroll scroll-smooth snap-x',
  slide: 'relative w-full border boder-black flex-0-100 snap-center',
  navigation: 'absolute inset-x-0 -bottom-8 text-center',
  inlineBlock: 'inline-block',
  navButton: 'inline-block w-4 h-4 bg-stone-300 rounded-full text-[0px] mx-1 my-2',
  navButtonHighlighted: 'inline-block w-4 h-4 bg-stone-500 rounded-full text-[0px] mx-1 my-2'
}

export function CarouselItem ({ children, id }: { children: React.ReactNode, id: string }) {
  return (
    <li id={id} tabIndex={0} className={classNames.slide}>
      {children}
    </li>
  );
}

export default function Carousel ({ children }: { children: ReactElement[] }) {
  console.log(children);
  const slideIds: string[] = [];
  Children.forEach(children, (child, index) => {
    slideIds.push(child?.props?.id);
  });

  const renderNavigation = (id: string) => (
    <li key={id} className={classNames.inlineBlock}>
      <a href={`#${id}`}
        className={classNames.navButton}>Go to slide {id}</a>
    </li>
  );

  return (
    <section className={classNames.container} style={{ perspective: '100px' }} aria-label="Gallery">
      <ol className={classNames.viewport}>
        {children}
      </ol>
      <aside className={classNames.navigation}>
        <ol className={classNames.inlineBlock}>
          {slideIds.map(renderNavigation)}
        </ol>
      </aside>
    </section>
  );
}