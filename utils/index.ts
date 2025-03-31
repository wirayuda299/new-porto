import { encode } from "blurhash";

// Shimmer SVG placeholder with customizable dimensions
export const shimmer = (w: number = 400, h: number = 400) => `
<svg style="min-width:${w}px;" width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>`;

// Convert a string to Base64
export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

// Load an image and return a promise that resolves with the HTMLImageElement
export const loadImage = async <T>(src: T) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (...args) => reject(args);
    img.src = src as string;
  });

// Get image data from an HTMLImageElement
export const getImageData = (image: HTMLImageElement) => {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext("2d");
  context?.drawImage(image, 0, 0);
  return context?.getImageData(0, 0, image.width, image.height);
};

// Encode an image to a blurhash string
export const encodeImageToBlurhash = async <T>(imageUrl: T) => {
  const image = (await loadImage(imageUrl)) as HTMLImageElement;
  const imageData = getImageData(image);
  if (!imageData) return;
  return encode(imageData.data, imageData.width, imageData.height, 4, 4);
};
