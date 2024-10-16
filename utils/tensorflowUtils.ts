import * as tf from '@tensorflow/tfjs';

// Load and return the model
export const loadModel = async () => {
  const model = await tf.loadLayersModel('/tfjs_model/model.json');
  return model;
};

// Predict with the model
export const predict = async (model: tf.LayersModel, image: File) => {
  const img = await loadImage(image);
  const tensor = preprocessImage(img);
  const prediction = model.predict(tensor) as tf.Tensor;
  return await prediction.array();
};

// Function to load an image from a File object
const loadImage = (file: File): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.onload = () => resolve(img);
      img.src = reader.result as string;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// Function to preprocess the image and convert to tensor
const preprocessImage = (img: HTMLImageElement) => {
  let tensor = tf.browser.fromPixels(img).toFloat();
  tensor = tensor.expandDims(0);
  return tensor;
};
