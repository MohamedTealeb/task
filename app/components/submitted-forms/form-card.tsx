import { Link } from "react-router";

export interface FormSubmission {
  id: string;
  date: string;
  title: string;
  status: "approved" | "rejected" | "pending";
  statusLabel: string;
  department: string;
}

interface FormCardProps {
  form: FormSubmission;
  isRTL: boolean;
}

const statusColors = {
  approved: "bg-green-100 text-green-600",
  rejected: "bg-orange-100 text-orange-600",
  pending: "bg-orange-100 text-orange-600",
};

export function FormCard({ form, isRTL }: FormCardProps) {
  return (
    <Link
      to={`/form/${form.id}`}
      className={`block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-purple-300 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      {/* Date */}
      <div className="mb-4 text-sm font-semibold text-gray-600">
        {form.date}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-lg font-bold text-gray-800">{form.title}</h3>

      {/* Status Badge */}
      <div
        className={`mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold ${
          statusColors[form.status]
        }`}
      >
        {form.statusLabel}
      </div>

      {/* Department */}
      <div className="text-sm text-gray-500">{form.department}</div>
    </Link>
  );
}
