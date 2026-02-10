import { useState } from "react";

interface StatusToggleProps {
  initialStatus: boolean;
  onToggle?: (status: boolean) => void;
}

export function StatusToggle({ initialStatus, onToggle }: StatusToggleProps) {
  const [isActive, setIsActive] = useState(initialStatus);

  const handleToggle = () => {
    const newStatus = !isActive;
    setIsActive(newStatus);
    onToggle?.(newStatus);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative h-7 w-14 rounded-full transition-all ${
        isActive ? "bg-green-500" : "bg-gray-300"
      }`}
      aria-label="Toggle status"
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-all ${
          isActive ? "left-8" : "left-1"
        }`}
      />
    </button>
  );
}
