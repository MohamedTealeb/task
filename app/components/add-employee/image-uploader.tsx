import { ImagePlus } from "lucide-react";
import { useState } from "react";

interface ImageUploaderProps {
  label: string;
}

export function ImageUploader({ label }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <label
        htmlFor="photo-upload"
        className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-pink-300 bg-pink-50 transition-all hover:border-pink-400 hover:bg-pink-100"
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full rounded-2xl object-cover"
          />
        ) : (
          <ImagePlus className="text-pink-400" size={48} />
        )}
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <span className="text-sm font-semibold text-pink-600">{label}</span>
    </div>
  );
}
