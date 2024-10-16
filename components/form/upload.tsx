"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { Alegreya_Sans_SC } from 'next/font/google';

const Alegreya = Alegreya_Sans_SC({
  weight: '800',
  subsets: ['latin'],
});

const ImageUploadComponent = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Check if the file is a PNG
      if (file.type === 'image/png') {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = (event) => {
          img.src = event.target?.result as string;

          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(img, 0, 0);

              // Convert canvas to JPEG
              canvas.toBlob((blob) => {
                if (blob) {
                  const jpegFile = new File([blob], file.name.replace('.png', '.jpg'), {
                    type: 'image/jpeg',
                  });
                  setImage(jpegFile); // Set the JPEG file for submission
                }
              }, 'image/jpeg');
            }
          };
        };

        reader.readAsDataURL(file);
      } else {
        // Accept JPEG or any other supported file type
        setImage(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      window.alert("Please select an image file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('file', image);

    setLoading(true);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const result = await res.json();
        const className = result.class.replace(/^\d+\s*/, '');
        const confidenceScore = (result.confidence_score * 100).toFixed(1);
        const formattedMessage = `You have been diagnosed with ${className} Diabetic Retinopathy with an accuracy rate of ${confidenceScore}%`;

        localStorage.setItem('resultMessage', formattedMessage);

        let resultUrl = '';
        switch (className) {
          case 'No DR':
            resultUrl = 'no-diabetic-retinopathy';
            break;
          case 'Mild':
            resultUrl = 'mild-nonproliferative-diabetic-retinopathy';
            break;
          case 'Moderate':
            resultUrl = 'moderate-nonproliferative-diabetic-retinopathy';
            break;
          case 'Severe':
            resultUrl = 'severe-nonproliferative-diabetic-retinopathy';
            break;
          case 'Proliferative DR':
            resultUrl = 'proliferative-diabetic-retinopathy';
            break;
          default:
            resultUrl = 'unknown';
            break;
        }

        window.alert(formattedMessage);
        router.push(`/${resultUrl}`);
      } else {
        const errorMessage = await res.text();
        window.alert(`Error: ${errorMessage}`);
      }
    } catch (err) {
      console.error('Error uploading the image:', err);
      window.alert('Error: Could not upload the image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className={`${Alegreya.className} text-xl lg:text-2xl font-black uppercase text-purple-600`}>
        Predict Diabetic Retinopathy
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button
          type="submit"
          disabled={loading}
          className={`button-71 ${loading ? 'bg-gray-400' : 'bg-[#ad0660]'} text-white hover:text-slate-700 text-lg rounded-md px-4 py-1 font-semibold uppercase`}
        >
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default ImageUploadComponent;
