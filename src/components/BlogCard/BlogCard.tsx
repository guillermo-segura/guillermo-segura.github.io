import { joinStringArrays } from '@/utils';
import { memo } from 'react';
import { Text } from '../Text/Text';
import { ButtonLink } from '../ButtonLink/ButtonLink';

const style = {
  container: [
    'flex',
    'flex-col',
    'items-center',
    'space-y-6',
    'p-4',
    'w-full', 
    'rounded-lg',
    'border',
    'border-dashed',
    'border-stone-300',
    'hover:bg-white',
    'hover:border-dark-500',
    'transition-all',
    'duration-300',
  ],
  title: [
    'border-b-2',
    'border-stone-100',
    'py-2',
    'mb-4',
  ]
};

const BlogCardRaw = () => {
  return (
    <article className={joinStringArrays(style.container)}>
      <div>
        <div className={joinStringArrays(style.title)}>
          <Text>
            Article name ✍🏼
          </Text>
        </div>
        <div>
          <Text variant="subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis suscipit ultricies. Duis et ex vitae justo vestibulum aliquet quis dignissim metus.
          </Text>
        </div>
      </div>
      <ButtonLink blank href="https://medium.com/@viltran.co" variant="secondary">
        Read more
      </ButtonLink>
    </article>
  );
}

export const BlogCard = memo(BlogCardRaw);
