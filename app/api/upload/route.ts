import sharp from 'sharp'; // Import sharp for image conversion
import { NextResponse } from "next/server";
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

type DataItem = {
  url: string;
  id: string;
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No image file or invalid file format provided" }, { status: 400 });
    }

    let buffer = await file.arrayBuffer(); // Convert file to buffer

    // Check if the file is PNG and convert it to JPEG
    if (file.type === 'image/png') {
      buffer = await sharp(Buffer.from(buffer))
        .jpeg()
        .toBuffer(); // Convert PNG to JPEG
    }

    // Create a Blob to append to FormData
    const jpegFile = new Blob([buffer], { type: 'image/jpeg' });

    const forwardFormData = new FormData();
    forwardFormData.append("image", jpegFile, file.name.replace('.png', '.jpg')); // Append the converted JPEG

    let url: string | undefined;
    const querySnapshot = await getDocs(collection(db, "config"));

    const newData: DataItem[] = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      url: doc.data().url || ""
    }));

    url = newData[0]?.url;

    if (!url) {
      return NextResponse.json({ error: "Failed to retrieve API URL" }, { status: 500 });
    }

    // Forward the request to the external API
    const apiResponse = await fetch(url, {
      method: "POST",
      body: forwardFormData,
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      return NextResponse.json(errorData, { status: apiResponse.status });
    }

    const data = await apiResponse.json();
    return NextResponse.json(data, { status: apiResponse.status });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to proxy request" },
      { status: 500 }
    );
  }
}
