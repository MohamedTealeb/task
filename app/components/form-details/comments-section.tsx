import { CommentItem } from "./comment-item";

interface Comment {
  id: string;
  author: string;
  date: string;
  content: string;
  avatarSeed: string;
}

interface CommentsSectionProps {
  title: string;
  comments: Comment[];
  isRTL: boolean;
}

export function CommentsSection({
  title,
  comments,
  isRTL,
}: CommentsSectionProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h3
        className={`mb-4 text-lg font-bold text-[#71144B] ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {title}
      </h3>

      <div>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            author={comment.author}
            date={comment.date}
            content={comment.content}
            avatarSeed={comment.avatarSeed}
            isRTL={isRTL}
          />
        ))}
      </div>
    </div>
  );
}
