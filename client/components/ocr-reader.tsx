'use client';
import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { Progress } from "@/components/ui/progress";

export default function OCRReader() {
    const [image, setImage] = useState<File | null>(null);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const hanldeImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImage(e.target.files[0]);
        } else {
            setImage(null)
        }
    };
  
    const handleOCR = async () => {
        if (!image) return;

        setLoading(true);
        const imageURL = URL.createObjectURL(image);

        try {
            const result = await Tesseract.recognize(imageURL, "eng", {
                logger: (m) => {
                    if (m.status === "recognizing text") {
                        setProgress(Math.floor(m.progress * 100));
                    }
                },
            });
            setText(result.data.text);
        } catch (err) {
            console.error("OCR error", err);
        } finally {
            setLoading(false);
        }
    };
  
    return (
    <div className="space-y-4">
        <label className="sr-only" htmlFor="file_input">Upload file</label>
        <input 
            className="block w-1/4 border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
            file:bg-gray-50 file:border-0
            file:me-4
            file:py-3 file:px-4
            dark:file:bg-neutral-700 dark:file:text-neutral-400" 
            id = "file_input"
            type="file" accept="image/*" 
            onChange={hanldeImageChange} 
        />
        <button 
            onClick={handleOCR} 
            disabled={!image || loading}
            className="text-white font-bold py-2 px-4 rounded-full 
                    bg-blue-500 hover:bg-blue-700
                    disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                {loading ? "Processing..." : "Extract Text"}
        </button>
        {text && (
            <div>
                <h3>Extracted Text:</h3>
                <pre>{text}</pre>
            </div>
        )}
        {loading && (
            <div>
                <Progress value={progress} />
                <div className="w-full bg-gray-200 rounded">
                    <div className="bg-blue-500 h-2 rounded transition-all" style={{ width: `${progress}%` }} />
                </div>
            </div>
        )}
    </div>
  )
}
