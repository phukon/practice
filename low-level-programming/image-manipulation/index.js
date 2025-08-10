// Load an image (in a browser environment)
const image = new Image();
image.onload = function () {
  // Create a canvas to draw the image
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

  // Get the image data from the canvas
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Manipulate the pixel data (convert to grayscale)
  const { data } = imageData;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // Red
    data[i + 1] = avg; // Green
    data[i + 2] = avg; // Blue
  }

  // Put the modified image data back on the canvas
  ctx.putImageData(imageData, 0, 0);

  // Display the modified image on the page
  document.body.appendChild(canvas);
};

// Set the image source
image.src = 'path/to/your/image.jpg';
