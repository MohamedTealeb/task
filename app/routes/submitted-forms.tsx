import { Sidebar } from "~/components/layout/sidebar";
import { Navar } from "~/components/layout/navbar";
import { FormCard, FormsFilters, type FormSubmission } from "~/components/submitted-forms";
import { getLocale, getTranslations } from "~/lib/translation";
import { useSidebar } from "~/lib/sidebar-context";
import type { Route } from "./+types/submitted-forms";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Submitted Forms - Dashboard" },
    { name: "description", content: "Submitted forms page" },
  ];
}

// Dummy Data
const dummyForms: FormSubmission[] = [
  {
    id: "1",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "approved",
    statusLabel: "حالة الطلب - موافق",
    department: "مدير إدارة",
  },
  {
    id: "2",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "rejected",
    statusLabel: "حالة الطلب - مرفوض",
    department: "مدير الإدارة",
  },
  {
    id: "3",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "pending",
    statusLabel: "حالة الطلب - مراجعة",
    department: "مدير القسم",
  },
  {
    id: "4",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "approved",
    statusLabel: "حالة الطلب - موافق",
    department: "مدير إدارة",
  },
  {
    id: "5",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "rejected",
    statusLabel: "حالة الطلب - مرفوض",
    department: "مدير مالم",
  },
  {
    id: "6",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "pending",
    statusLabel: "حالة الطلب - مراجعة",
    department: "مدير الإدارة",
  },
  {
    id: "7",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "approved",
    statusLabel: "حالة الطلب - موافق",
    department: "مدير إدارة",
  },
  {
    id: "8",
    date: "05/09/2022",
    title: "طلب صيانة",
    status: "rejected",
    statusLabel: "حالة الطلب - مرفوض",
    department: "مدير مالم",
  },
  {
    id: "9",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "pending",
    statusLabel: "حالة الطلب - مراجعة",
    department: "مدير أعمال",
  },
  {
    id: "10",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "approved",
    statusLabel: "حالة الطلب - موافق",
    department: "مدير إدارة",
  },
  {
    id: "11",
    date: "05/09/2022",
    title: "طلب صيانة",
    status: "rejected",
    statusLabel: "حالة الطلب - مرفوض",
    department: "مدير مالم",
  },
  {
    id: "12",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "approved",
    statusLabel: "حالة الطلب - موافق",
    department: "مدير أعمال",
  },
  {
    id: "13",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "approved",
    statusLabel: "حالة الطلب - موافق",
    department: "مدير إدارة",
  },
  {
    id: "14",
    date: "05/09/2022",
    title: "طلب صيانة",
    status: "rejected",
    statusLabel: "حالة الطلب - مرفوض",
    department: "مدير مالم",
  },
  {
    id: "15",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "pending",
    statusLabel: "حالة الطلب - مراجعة",
    department: "مدير الإدارة",
  },
  {
    id: "16",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "approved",
    statusLabel: "حالة الطلب - موافق",
    department: "مدير إدارة",
  },
  {
    id: "17",
    date: "05/09/2022",
    title: "طلب صيانة",
    status: "rejected",
    statusLabel: "حالة الطلب - مرفوض",
    department: "مدير مالم",
  },
  {
    id: "18",
    date: "05/09/2022",
    title: "طلب شراء",
    status: "pending",
    statusLabel: "حالة الطلب - مراجعة",
    department: "مدير أعمال",
  },
];

export default function SubmittedForms() {
  const locale = getLocale();
  const t = getTranslations(locale);
  const isRTL = locale === "ar";

  const { isOpen } = useSidebar();

  const sidebarOffsetClass = isRTL
    ? isOpen
      ? "md:mr-64"
      : "md:mr-0"
    : isOpen
      ? "md:ml-64"
      : "md:ml-0";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navar />

      <Sidebar />

      <main
        className={`p-6 transition-all duration-300 ${sidebarOffsetClass}`}
      >
          <div className="mx-auto max-w-7xl">
            <h1
              className={`mb-6 text-2xl font-bold text-gray-800 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.submittedForms.pageTitle}
            </h1>

            <FormsFilters
              searchPlaceholder={t.submittedForms.search}
              motorStatusLabel={t.submittedForms.motorStatus}
              isRTL={isRTL}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dummyForms.map((form) => (
                <FormCard key={form.id} form={form} isRTL={isRTL} />
              ))}
            </div>
          </div>
        </main>
    </div>
  );
}
