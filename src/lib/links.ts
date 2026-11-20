const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const featuredGuide = 'thematic-analysis-braun-clarke-worked-example';
export const homeHref = `${base}/`;

export function postHref(slug: string) {
  return `${base}/posts/${slug}.html`;
}

export function assetHref(filename: string) {
  return `${base}/assets/${filename}`;
}
