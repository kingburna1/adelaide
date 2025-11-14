import { cloudinary } from '@/lib/cloudinary';
import { NextResponse } from 'next/server';

/**
 * @method POST
 * @description Handles secure image upload to Cloudinary from client-side file data.
 */
export async function POST(req) {
    try {
        // 1. Get the raw form data, which includes the image file
        const formData = await req.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        // 2. Convert the file to a Buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // 3. Convert the buffer to a base64 string (Data URI format)
        // Cloudinary requires a file path or a Data URI for upload
        const mimeType = file.type;
        const dataUri = `data:${mimeType};base64,${buffer.toString('base64')}`;

        // 4. Upload to Cloudinary using the secure server-side SDK
        const uploadResult = await cloudinary.uploader.upload(dataUri, {
            folder: 'agri-products', // Specify a folder for organization
        });
        
        // 5. Return the secure public URL
        return NextResponse.json({ url: uploadResult.secure_url }, { status: 200 });

    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        return NextResponse.json({ error: error.message || 'Image upload failed on the server.' }, { status: 500 });
    }
}
