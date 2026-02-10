interface EmployeeAvatarProps {
  name: string;
  imageSeed: string;
}

export function EmployeeAvatar({ name, imageSeed }: EmployeeAvatarProps) {
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${imageSeed}`;

  return (
    <div className="flex items-center gap-3">
      <img
        src={avatarUrl}
        alt={name}
        className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover"
      />
      <span className="text-sm text-gray-700">{name}</span>
    </div>
  );
}
