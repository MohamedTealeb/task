import { Sidebar } from "~/components/layout/sidebar";
import { Navar } from "~/components/layout/navbar";
import {
  ImageUploader,
  FormInput,
  FormSelect,
  FormCheckbox,
} from "~/components/add-employee";
import { getLocale, getTranslations } from "~/lib/translation";
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="mx-auto max-w-5xl">
            {/* Page Title */}
            <h1
              className={`mb-8 text-2xl font-bold text-gray-800 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.addEmployee.pageTitle}
            </h1>

            {/* Form Container */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div
                className={`flex gap-8 ${
                  isRTL ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Image Uploader - Left Side */}
                <div className="shrink-0">
                  <ImageUploader label={t.addEmployee.addPhoto} />
                </div>

                {/* Form Fields - Right Side */}
                <div className="flex-1">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Row 1 */}
                    <FormInput
                      label={t.addEmployee.employeeName}
                      isRTL={isRTL}
                    />
                    <FormInput label={t.addEmployee.civilId} isRTL={isRTL} />

                    {/* Row 2 */}
                    <FormSelect
                      label={t.addEmployee.position}
                      isRTL={isRTL}
                    />
                    <FormSelect
                      label={t.addEmployee.serialNumber}
                      isRTL={isRTL}
                    />

                    {/* Row 3 */}
                    <FormInput
                      label={t.addEmployee.phoneNumber}
                      type="tel"
                      isRTL={isRTL}
                    />
                    <FormInput
                      label={t.addEmployee.nationality}
                      isRTL={isRTL}
                    />

                    {/* Row 4 */}
                    <FormInput label={t.addEmployee.address} isRTL={isRTL} />
                    <FormInput
                      label={t.addEmployee.email}
                      type="email"
                      isRTL={isRTL}
                    />

                    {/* Row 5 */}
                    <FormInput
                      label={t.addEmployee.motorStatus}
                      isRTL={isRTL}
                    />
                    <FormInput
                      label={t.addEmployee.motorServiceDate}
                      type="date"
                      isRTL={isRTL}
                    />
                  </div>

                  {/* Checkbox */}
                  <div
                    className={`mt-6 ${isRTL ? "text-right" : "text-left"}`}
                  >
                    <FormCheckbox
                      label={t.addEmployee.allowAppAccess}
                      isRTL={isRTL}
                    />
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-full bg-linear-to-r from-pink-600 to-purple-600 px-20 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                >
                  {t.addEmployee.save}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
