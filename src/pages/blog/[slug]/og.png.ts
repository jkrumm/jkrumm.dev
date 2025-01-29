import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';
 
interface Props {
  params: { slug: string };
  props: { post: CollectionEntry<'blog'> };
}
 
export async function GET({ props }: Props) {
  const { post } = props;
 
  // using custom font files
  // const Inter = fs.readFileSync(path.resolve('./fonts/DMSans-Bold.ttf'));
  // const DmSansReqular = fs.readFileSync(
  //   path.resolve('./fonts/DMSans-Regular.ttf'),
  // );
 
  // post cover with Image is pretty tricky for dev and build phase
  const postCover = fs.readFileSync(
    process.env.NODE_ENV === 'development'
      ? path.resolve(
          'src/content/blog/images/' + path.basename(post.data.cover.src.split('?')[0]))
      : path.resolve('dist/content/blog/images/' + path.basename(post.data.cover.src.split('?')[0]))
  );

  async function loadGoogleFont (font: string, text: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`
    const css = await (await fetch(url)).text()
    const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)
   
    if (resource) {
      const response = await fetch(resource[1])
      if (response.status == 200) {
        return await response.arrayBuffer()
      }
    }
   
    throw new Error('failed to load font data')
  }
 
  // Astro doesn't support tsx endpoints so usign React-element objects
  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props: {
            // using tailwind
            tw: 'w-[200px] h-[200px] flex rounded-3xl overflow-hidden',
            children: [
              {
                type: 'img',
                props: {
                  src: postCover.buffer,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            tw: 'pl-10 shrink flex',
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '48px',
                    fontFamily: 'Inter',
                  },
                  children: post.data.title,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            tw: 'absolute right-[40px] bottom-[40px] flex items-center',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'text-blue-700 text-3xl',
                  style: {
                    fontFamily: 'Inter',
                  },
                  children: 'jkrumm.dev',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'px-2 text-3xl',
                  style: {
                    fontSize: '30px',
                  },
                  children: '|',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'text-3xl',
                  children: 'Blog',
                },
              },
            ],
          },
        },
      ],
      tw: 'w-full h-full flex items-center justify-center relative px-22 bg-stone-200 text-black/85',
      style: {
        fontFamily: 'Inter',
      },
    },
  };
 
  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: 'Geist',
        data: await loadGoogleFont('Geist', post.data.title),
        style: 'normal',
      },
    ],
  });
}
 
// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
  const blogPosts = await getCollection('blog');
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}