import { THUMNAIL_SIZES } from '../constants';

export const getThumbs = (url: string) => {
  const regex = /youtu\.?be(\.com)?\/(shorts\/|watch\?v=|embed\/)?([^&?\s]+)/;
  const isMatch = url.match(regex);

  if (!isMatch) return null;

  return THUMNAIL_SIZES.map(
    (x) => `https://i.ytimg.com/vi/${isMatch[3]}/${x}.jpg`
  );
};
