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
  requestStatusLabel: string;
  generalManagerLabel: string;
  departmentManagerLabel: string;
}

const statusTextColors: Record<FormSubmission["status"], string> = {
  approved: "text-emerald-500",
  rejected: "text-rose-500",
  pending: "text-amber-500",
};

export function FormCard({
  form,
  isRTL,
  requestStatusLabel,
  generalManagerLabel,
  departmentManagerLabel,
}: FormCardProps) {
  return (
    <Link
      to={`/form/${form.id}`}
      className={`block rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all hover:shadow-lg hover:border-purple-300 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`mb-2 flex items-start justify-between ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        <div className="text-xs font-semibold text-gray-500">{form.date}</div>
        <h3 className="text-sm font-bold text-gray-800">{form.title}</h3>
      </div>

      <div className="mb-1 text-[11px]">
        <span className="text-gray-600">{requestStatusLabel} </span>
        <span className={statusTextColors[form.status]}>
          {form.statusLabel} :
        </span>
      </div>

      <div
        className={`mt-2 flex items-center gap-4 text-[11px] text-gray-500 ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        <span>{generalManagerLabel}</span>
        <span>{departmentManagerLabel}</span>
        <span className="font-semibold text-emerald-500">
          {form.department}
        </span>
      </div>
    </Link>
  );
}
