import { Sidebar } from "~/components/layout/sidebar";
import { Navar } from "~/components/layout/navbar";
import {
  DetailItem,
  AttachmentsSection,
  CommentsSection,
} from "~/components/form-details";
import { getLocale, getTranslations } from "~/lib/translation";
import type { Route } from "./+types/form-details";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Form Details - Dashboard" },
    { name: "description", content: "Form details page" },
  ];
}

const dummyComments = [
  {
    id: "1",
    author: "Mohammed Ahmad",
    date: "5/5/2021",
    content:
      "Cras gravida bibendum dolor eu varius. Morbi fermentum velit vel ante vehicula sodales eget nec turpis interdum.",
    avatarSeed: "mohammed-ahmad",
  },
  {
    id: "2",
    author: "Mohammed Ali",
    date: "5/5/2021",
    content:
      "Cras gravida bibendum dolor eu varius. Morbi fermentum velit vel ante vehicula sodales eget nec turpis interdum.",
    avatarSeed: "mohammed-ali",
  },
];

export default function FormDetails() {
  const locale = getLocale();
  const t = getTranslations(locale);
  const isRTL = locale === "ar";

  const applicantAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=mohammed-yosry`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="mx-auto max-w-6xl">
            <div
              className={`mb-8 grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(260px,1fr)] ${
                isRTL ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div
                  className={`mb-4 flex items-start justify-between ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="text-sm font-semibold text-gray-600">
                    05/09/2022
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <h2 className="mb-1 text-lg font-bold text-gray-900">
                      {t.formDetails.purchaseRequest}
                    </h2>
                    <div className="text-xs">
                      <span className="text-gray-700">{t.formDetails.requestStatus} </span>
                      <span className="text-amber-500">: {t.formDetails.underReview}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 grid grid-cols-1 gap-4 text-[12px] text-gray-700 md:grid-cols-4">
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="mb-1 text-gray-500">{t.formDetails.departmentName} :</div>
                    <div className="font-semibold text-emerald-500">
                      {t.formDetails.managers.department}
                    </div>
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="mb-1 text-gray-500">{t.formDetails.purchases} :</div>
                    <div className="font-semibold text-rose-500">54684</div>
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="mb-1 text-gray-500">{t.formDetails.projectName} :</div>
                    <div className="font-semibold">{t.formDetails.managers.department}</div>
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="mb-1 text-gray-500">{t.formDetails.materialType} :</div>
                    <div className="font-semibold text-amber-500">
                      {t.formDetails.officeSupplies}
                    </div>
                  </div>
                </div>

                <div
                  className={`mb-4 flex items-center gap-6 text-[12px] text-gray-600 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <span>{t.formDetails.managers.department}</span>
                  <span>{t.formDetails.managers.administration}</span>
                  <span>{t.formDetails.managers.general}</span>
                </div>

                <div className="mt-2 border-t border-gray-200 pt-3 text-[12px] text-gray-600">
                  <span className="font-semibold text-rose-500">
                    {t.formDetails.rejectionReason}:
                  </span>{" "}
                  <span>
                    {t.formDetails.rejectionMessage}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-lg font-bold text-[#00215B]">
                    {t.formDetails.formReview}
                  </h2>
                  <div
                    className={`rounded-2xl border border-gray-200 bg-white p-4 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="mb-3 text-base font-bold text-gray-800">
                      Mohammed Yosry
                    </div>
                    <div className="space-y-1 text-xs text-gray-700">
                      <div
                        className={`flex justify-between ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <span>{t.formDetails.formApplicant}</span>
                        <span>Mohammed Yosry</span>
                      </div>
                      <div
                        className={`flex justify-between ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <span>{t.formDetails.employeeCode}</span>
                        <span>1345</span>
                      </div>
                      <div
                        className={`flex justify-between ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <span>{t.formDetails.position}</span>
                        <span>{t.formDetails.departmentHead}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <AttachmentsSection
                  title={t.formDetails.attachments}
                  isRTL={isRTL}
                />
              </div>
            </div>

            <div className="mb-6">
              <CommentsSection
                title={t.formDetails.comments}
                comments={dummyComments}
                isRTL={isRTL}
              />
            </div>

            <div className="flex justify-center">
              <button className="w-full max-w-xs rounded-full border border-pink-600 px-10 py-3 text-sm font-bold text-pink-600 transition-all hover:bg-pink-50">
                {t.formDetails.stopRequest}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
