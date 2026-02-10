interface CommentItemProps {
  author: string;
  date: string;
  content: string;
  avatarSeed: string;
  isRTL: boolean;
}

export function CommentItem({
  author,
  date,
  content,
  avatarSeed,
  isRTL,
}: CommentItemProps) {
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`;

  return (
    <div className="flex gap-4 border-b border-gray-100 py-4 last:border-0">
      <img
        src={avatarUrl}
        alt={author}
        className="h-12 w-12 shrink-0 rounded-full border-2 border-gray-200"
      />

      <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
        <div
          className={`mb-2 flex items-center gap-3 ${
            isRTL ? "flex-row-reverse justify-end" : ""
          }`}
        >
          <span className="font-semibold text-gray-800">{author}</span>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
        <p className="text-sm leading-relaxed text-gray-600">{content}</p>
      </div>
    </div>
  );
}
