import { FileText } from "lucide-react";

interface AttachmentsSectionProps {
  title: string;
  count?: number;
  isRTL: boolean;
}

export function AttachmentsSection({
  title,
  count = 8,
  isRTL,
}: AttachmentsSectionProps) {
  const attachments = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h3
        className={`mb-4 text-lg font-bold text-purple-600 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {title}
      </h3>

      <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
        {attachments.map((num) => (
          <div
            key={num}
            className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-all hover:border-purple-400 hover:bg-purple-50"
          >
            <FileText className="text-gray-400" size={24} />
          </div>
        ))}
      </div>
    </div>
  );
}
