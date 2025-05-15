import React from 'react'
import MyButtonTest from "./myButtonTest"
import OCRReader from "@/components/ocr-reader"

export default function transactions() {
  return (
    <div>transactions
      <MyButtonTest />
      <main className="p-6">
        <h1 className="text-2xl font-bold">OCR Demo with Tesseract</h1>
        <OCRReader />
      </main>
            <div>
        <input>
          type="file"
          id="enviorment"
          capture="user"
          accept="image/*"
        </input>
      </div>
    </div>
  )
}

