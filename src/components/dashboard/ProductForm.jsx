'use client';
import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/navigation'; // COMMENTED OUT: Build environment error
import { Loader2, Upload, X, CheckCircle, AlertTriangle } from 'lucide-react';

// Function to generate a simple mock UUID
const mockUUID = () => 'prod-' + Math.random().toString(36).substring(2, 9);

// Base state structure for a clean form
const getInitialState = (initial) => ({
    itemId: initial?.itemId || mockUUID(),
    productName: initial?.productName || '',
    subTitle: initial?.subTitle || '',
    description: initial?.description || '',
    price: initial?.price || '', 
    // Image state is an array of files/URLs
    images: [
      initial?.imageSource || null,
      initial?.image2Source || null,
      initial?.image3Source || null,
      initial?.image4Source || null
    ],
    loading: false,
    error: null,
});

/**
 * @function uploadImageToCloudinary
 * @description Securely uploads a file using the Next.js API route (/api/upload-image).
 * @param {File | string} file - The file object or an existing image URL string.
 * @returns {Promise<string | null>} The secure public URL or null.
 * * NOTE: This function sends the file to the server, where the CLOUDINARY_API_SECRET
 * is used securely to perform the upload.
 */
const uploadImageToCloudinary = async (file) => {
  // 1. If it's already a string, it's an existing URL, so skip upload
  if (typeof file === 'string') {
    console.log("[UPLOAD]: Image is an existing URL, skipping upload.");
    return file;
  }
  // 2. If null, skip
  if (!file) return null;

  // 3. If it's a File object, send it to the secure API route
  console.log(`[UPLOAD]: Sending file ${file.name} to server API for Cloudinary upload.`);
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData, // FormData handles the Content-Type automatically (multipart/form-data)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Image upload failed on server.');
    }

    const result = await response.json();
    console.log("[UPLOAD]: Image successfully uploaded. URL received.");
    return result.url; // Return the secure URL from the server

  } catch (error) {
    console.error("Secure Upload Failed:", error);
    // Rethrow to be caught by the submit function
    throw new Error(`Failed to upload ${file.name}: ${error.message}`);
  }
};

export default function ProductForm({ initial = null }) {
  const [form, setForm] = useState(() => getInitialState(initial));
  const [previews, setPreviews] = useState(form.images.map(i => i || null));
  const [successMessage, setSuccessMessage] = useState(null); 

  // Refs for hiding the native file input and triggering it manually
  const fileInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Handles object URL creation and cleanup for file previews
  useEffect(() => {
    setPreviews(form.images.map(i => (typeof i === 'string' ? i : (i ? URL.createObjectURL(i) : null))));
    return () => {
      // Cleanup: Revoke object URLs
      previews.forEach(p => { if (p && p.startsWith('blob:')) URL.revokeObjectURL(p) });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.images]);

  const onFile = (idx, file) => {
    const newImgs = [...form.images];
    newImgs[idx] = file;
    setForm({ ...form, images: newImgs });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRemoveImage = (idx) => {
    const newImgs = [...form.images];
    newImgs[idx] = null;
    setForm({ ...form, images: newImgs });
    // Clear the native file input value so the user can re-upload the same file later
    if (fileInputRefs[idx].current) {
        fileInputRefs[idx].current.value = null;
    }
  };

  const triggerFileInput = (idx) => {
    fileInputRefs[idx].current.click();
  };


  const submit = async (e) => {
    e.preventDefault();
    setForm(prev => ({ ...prev, loading: true, error: null }));
    setSuccessMessage(null); // Clear previous success messages

    try {
        // 1. Upload all non-null images using the secure API route
        const uploadedUrls = await Promise.all(form.images.map(uploadImageToCloudinary));
        
        // 2. Map form data to the Mongoose schema fields
        const payload = {
            itemId: form.itemId,
            productName: form.productName,
            subTitle: form.subTitle,
            description: form.description,
            price: form.price,
            // Use the uploaded URLs
            imageSource: uploadedUrls[0] || 'https://placehold.co/150x150/f9fafb/374151?text=No+Image',
            image2Source: uploadedUrls[1] || null,
            image3Source: uploadedUrls[2] || null,
            image4Source: uploadedUrls[3] || null,
        };
        
        let response;
        if (initial?.itemId) {
            // Use PATCH for update
            response = await fetch(`/api/products/${initial.itemId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
        } else {
            // Use POST for new product
            response = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
        }

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to save product.');
        }

        // --- Success Handling ---
        setSuccessMessage(initial ? "Product updated successfully!" : "Product added successfully!");

        if (!initial) {
            // Reset form to clean state for new product creation
            setForm(getInitialState(null));
        }

        // Clear success message after 4 seconds (Toast behavior)
        setTimeout(() => setSuccessMessage(null), 4000);

        console.log("Product saved successfully.");

    } catch (err) {
        console.error("Submission Error:", err);
        // If image upload failed, the error message from the API will be propagated here
        setForm(prev => ({ ...prev, error: err.message, loading: false }));
    } finally {
        // Ensure loading state is reset
        setForm(prev => ({ ...prev, loading: false })); 
    }
  };

  return (
    <form onSubmit={submit} className="bg-white rounded-xl p-8 shadow-2xl max-w-4xl mx-auto border border-gray-100">
      <h2 className="text-3xl font-extrabold text-green-700 mb-6">
        {initial ? 'Edit Product' : 'Add New Product'}
      </h2>
      
      {/* ERROR MESSAGE DISPLAY */}
      {form.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p className="font-bold flex items-center"><AlertTriangle className='w-4 h-4 mr-2'/> Error saving product:</p>
          <p className="text-sm">{form.error}</p>
        </div>
      )}

      {/* SUCCESS TOAST NOTIFICATION */}
      {successMessage && (
        <div className="fixed bottom-5 right-5 z-50 p-4 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-lg shadow-xl animate-bounce-in">
          <p className="font-semibold flex items-center">
            <CheckCircle className='w-5 h-5 mr-2'/>
            {successMessage}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Item ID - Required for Mongoose */}
        <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Unique Item ID</label>
            <input 
                name="itemId"
                value={form.itemId} 
                onChange={handleChange} 
                className="w-full border p-3 rounded-lg focus:ring-green-500 focus:border-green-500 bg-gray-50" 
                required 
                placeholder="e.g., prod-001"
                readOnly={!!initial} // Prevent editing ID on existing products
            />
            {initial && <p className="text-xs text-gray-500 mt-1">Item ID cannot be changed after creation.</p>}
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input 
            name="productName"
            value={form.productName} 
            onChange={handleChange} 
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-green-500 focus:border-green-500" 
            required 
            placeholder="e.g., Hand Push Seed Spreader"
          />
        </div>

        {/* Sub Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Sub Title</label>
          <input 
            name="subTitle"
            value={form.subTitle} 
            onChange={handleChange} 
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-green-500 focus:border-green-500" 
            placeholder="A short, catchy description"
          />
        </div>
        
        {/* Price (Consolidated) */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Price (e.g., 140.000 xaf)</label>
          <input 
            name="price"
            value={form.price} 
            onChange={handleChange} 
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-green-500 focus:border-green-500" 
            required 
            placeholder="e.g., 300.000 xaf"
          />
        </div>

        {/* Description (Used for internal documentation) */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Detailed Description (Optional)</label>
          <textarea 
            name="description"
            value={form.description} 
            onChange={handleChange} 
            className="w-full border border-gray-300 p-3 rounded-lg h-28 focus:ring-green-500 focus:border-green-500 resize-none" 
            placeholder="Full features and specifications..."
          />
        </div>
        
        {/* Image Upload Area */}
        <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Images (Max 4)</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({length:4}).map((_, idx) => {
                  const hasImage = previews[idx];
                  return (
                    <div key={idx} className="border border-gray-200 p-3 rounded-xl bg-gray-50 flex flex-col items-center">
                        
                        {/* Image Preview Area */}
                        <div className="w-full h-32 flex items-center justify-center border border-dashed border-gray-300 rounded-lg mb-2 overflow-hidden">
                            {hasImage ? (
                                <img 
                                src={previews[idx]} 
                                className="w-full h-full object-contain bg-white" 
                                alt={`preview-${idx}`} 
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/f9fafb/374151?text=Error' }}
                                />
                            ) : (
                                <div className="text-gray-500 text-sm">Image {idx + 1}</div>
                            )}
                        </div>

                        {/* Hidden File Input */}
                        <input 
                            type="file" 
                            ref={fileInputRefs[idx]}
                            accept="image/*" 
                            onChange={e => onFile(idx, e.target.files[0])} 
                            className="hidden" // Hide the default input
                        />
                        
                        {/* Action Buttons */}
                        <div className="flex w-full gap-2 mt-1">
                            {!hasImage ? (
                                <button
                                    type="button"
                                    onClick={() => triggerFileInput(idx)}
                                    className="flex-1 flex items-center justify-center p-2 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-800 transition shadow-md"
                                >
                                    <Upload className="w-4 h-4 mr-1" /> Add Image
                                </button>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => triggerFileInput(idx)}
                                        className="flex-1 flex items-center justify-center p-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition shadow-md"
                                    >
                                        <Upload className="w-4 h-4 mr-1" /> Change
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(idx)}
                                        className="w-1/3 flex items-center justify-center p-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition shadow-md"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </>
                            )}
                        </div>

                        {idx === 0 && <p className="text-xs text-green-600 mt-2 font-medium">Main Image</p>}
                    </div>
                  );
              })}
            </div>
        </div>
      </div>

      <div className="mt-8 text-right">
        <button 
          type="submit" 
          disabled={form.loading}
          className={`px-8 py-3 font-bold text-white rounded-xl transition-all duration-300 ease-in-out shadow-lg 
            ${form.loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800 hover:shadow-xl'}
          `}
        >
          {form.loading ? (
            <>
              <Loader2 className="w-5 h-5 text-white inline animate-spin mr-2" />
              Saving...
            </>
          ) : (
            'Save Product'
          )}
        </button>
      </div>
    </form>
  );
}