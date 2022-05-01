import FileSaver from 'file-saver';
import JSZip from 'jszip';

function loadImageAsync(uri: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const imageSource = new Image();
    imageSource.crossOrigin = 'anonymous';
    imageSource.onload = () => resolve(imageSource);
    imageSource.onerror = () => reject(imageSource);
    imageSource.src = uri;
  });
}

function drawImageScaled(img: HTMLImageElement, ctx: CanvasRenderingContext2D) {
  var canvas = ctx.canvas;
  ctx.drawImage(
    img,
    canvas.width / 2 - img.width / 2,
    canvas.height / 2 - img.height / 2
  );
}

export async function createAppIcon({
  color,
  imageUrl,
  width,
  height,
}: {
  color: string;
  imageUrl?: string;
  width: number;
  height?: number;
}): Promise<string> {
  let canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d')!;

  // draw color
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (imageUrl) {
    const imageSource = await loadImageAsync(imageUrl);
    drawImageScaled(imageSource, ctx);
  }

  // defaults to PNG with no loss
  return canvas.toDataURL();
}

function imageUriToBase64(imageUri: string): string {
  return imageUri.substring(imageUri.indexOf('base64,') + 'base64,'.length);
}

export async function generateImagesAsync({
  image,
  color,
}: {
  emojiId?: string;
  image?: string;
  color: string;
}): Promise<void> {
  const splash = await createAppIcon({
    color,
    imageUrl: image,
    width: 1242,
    height: 2436,
  });

  const splashB64 = imageUriToBase64(splash);

  const content = await zipImagesAsync({
    splash: splashB64,
  });

  const folderName = `expo-splashscreen.zip`;

  FileSaver.saveAs(content, folderName);
}

async function zipImagesAsync({ splash }: { splash: string }) {
  const zip = new JSZip();
  zip.file('splash.png', splash, { base64: true });
  const content = await zip.generateAsync({ type: 'blob' });
  return content;
}
