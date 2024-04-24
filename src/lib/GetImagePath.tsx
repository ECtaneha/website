export const GetImagePath = (fileName: string) => {
  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    return `/images/${fileName}`;
  } else {
    return `/public/images/${fileName}`;
  }
}