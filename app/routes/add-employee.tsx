import { Sidebar } from "~/components/layout/sidebar";
import { Navar } from "~/components/layout/navbar";
import {
  ImageUploader,
  FormInput,
  FormSelect,
  FormCheckbox,
} from "~/components/add-employee";
import { getLocale, getTranslations } from "~/lib/translation";
import { useSidebar } from "~/lib/sidebar-context";
import type { Route } from "./+types/add-employee";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Add Employee - Dashboard" },
    { name: "description", content: "Add new employee page" },
  ];
}

export default function AddEmployee() {
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
          <div className="mx-auto max-w-5xl">
            <h1
              className={`mb-8 text-2xl font-bold text-gray-800 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.addEmployee.pageTitle}
            </h1>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div
                className={`flex gap-8 ${
                  isRTL ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="shrink-0">
                  <ImageUploader label={t.addEmployee.addPhoto} />
                </div>

                <div className="flex-1">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormInput
                      label={t.addEmployee.employeeName}
                      isRTL={isRTL}
                    />
                    <FormInput label={t.addEmployee.civilId} isRTL={isRTL} />

                    <FormSelect
                      label={t.addEmployee.position}
                      isRTL={isRTL}
                    />
                    <FormSelect
                      label={t.addEmployee.serialNumber}
                      isRTL={isRTL}
                    />

                    <FormInput
                      label={t.addEmployee.phoneNumber}
                      type="tel"
                      isRTL={isRTL}
                    />
                    <FormInput
                      label={t.addEmployee.nationality}
                      isRTL={isRTL}
                    />

                    <FormInput label={t.addEmployee.address} isRTL={isRTL} />
                    <FormInput
                      label={t.addEmployee.email}
                      type="email"
                      isRTL={isRTL}
                    />

                    <FormInput
                      label={t.addEmployee.motorStatus}
                      isRTL={isRTL}
                    />
                    <FormInput
                      label={t.addEmployee.motorServiceDate}
                      type=""
                      isRTL={isRTL}
                    />
                  </div>

                  <div
                    className={`mt-6 `}
                  >
                    <FormCheckbox
                      label={t.addEmployee.allowAppAccess}
                     
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-full bg-[#AE0A6F] px-20 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                >
                  {t.addEmployee.save}
                </button>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}
