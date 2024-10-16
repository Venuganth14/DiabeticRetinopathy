import * as tf from '@tensorflow/tfjs';

// Define the type for the TensorFlow.js model
type Model = tf.LayersModel;

// Path to your TensorFlow.js model
const MODEL_URL = '/path/to/your/model.json';

// Function to load the TensorFlow.js model
export const loadModel = async (): Promise<Model> => {
  try {
    const model = await tf.loadLayersModel(MODEL_URL);
    console.log('Model loaded successfully');
    return model;
  } catch (error) {
    console.error('Error loading model:', error);
    throw new Error('Failed to load the model');
  }
};

// Function to make predictions using the TensorFlow.js model
export const predict = async (model: Model, file: File): Promise<string> => {
  try {
    // Create an image element to load the file
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    
    // Create a promise that resolves when the image is loaded
    const loadImagePromise = new Promise<HTMLImageElement>((resolve) => {
      img.onload = () => resolve(img);
    });

    const image = await loadImagePromise;
    
    // Preprocess the image as required by your model
    const tensor = tf.browser.fromPixels(image)
      .resizeNearestNeighbor([224, 224]) // Adjust size as needed
      .toFloat()
      .expandDims();

    // Perform the prediction
    const prediction = model.predict(tensor) as tf.Tensor;
    const predictedClass = prediction.argMax(-1).dataSync()[0]; // Adjust based on your model's output
    
    return `Predicted Class: ${predictedClass}`;
  } catch (error) {
    console.error('Error during prediction:', error);
    throw new Error('Failed to make a prediction');
  }
};
