type Photo = {
  url: string;
  width: number;
  height: number;
};

export function getFirstImage(photos: Photo[] = []): string {
  if (photos.length === 0) {
    return "";
  }

  const [firstPhoto] = photos;

  return firstPhoto.url || "";
}

export function getFirstLetter(placeholder: string): string {
  if (!placeholder) {
    return "";
  }

  return placeholder[0];
}

export const shorten = (
  str: string = " ",
  maxLen: number,
  separator: string = " "
): string => {
  if (!str) {
    return "";
  }

  if (str.length <= maxLen) {
    return str;
  }

  return `${str.substr(0, str.lastIndexOf(separator, maxLen))}...`;
};
