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
        className={`px-3 py-4 md:p-6 transition-all duration-300 ${sidebarOffsetClass}`}
      >
          <div className="mx-auto max-w-5xl">
            <h1
              className={`mb-6 text-xl font-bold text-gray-800 md:mb-8 md:text-2xl ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.addEmployee.pageTitle}
            </h1>

            <div className="rounded-3xl bg-white p-4 shadow-sm md:p-8">
              <div
                className={`flex flex-col gap-8 md:flex-row ${
                  isRTL ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="shrink-0 self-center md:self-start">
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
                      type="password"
                      isRTL={isRTL}
                    />
                    <FormInput
                      label={t.addEmployee.motorServiceDate}
                      type="password"
                      isRTL={isRTL}
                    />
                  </div>

                  <div className="mt-6">
                    <FormCheckbox
                      label={t.addEmployee.allowAppAccess}
                    
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-full bg-[#AE0A6F] px-10 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110 md:px-20"
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
