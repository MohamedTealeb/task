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
          <div className="mx-auto max-w-4xl">
            {/* Page Title */}
            <h1
              className={`mb-6 text-2xl font-bold text-gray-800 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.formDetails.pageTitle}
            </h1>

            {/* Form Header Card */}
            <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
              <div
                className={`flex items-start gap-6 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                {/* Left side - Applicant info */}
                <div className="flex-1">
                  <div
                    className={`mb-4 flex items-center gap-3 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <img
                      src={applicantAvatar}
                      alt="Mohammed Yosry"
                      className="h-16 w-16 rounded-full border-2 border-gray-200"
                    />
                    <div className={isRTL ? "text-right" : "text-left"}>
                      <h2 className="text-lg font-bold text-gray-800">
                        Mohammed Yosry
                      </h2>
                      <p className="text-sm text-gray-500">مدير عام</p>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">05/09/2022</div>
                </div>

                {/* Right side - Form info */}
                <div
                  className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}
                >
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    طلب شراء
                  </h3>
                  <div className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-600">
                    حالة الطلب - مراجعة
                  </div>
                </div>
              </div>
            </div>

            {/* Form Details */}
            <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <DetailItem
                  label={t.formDetails.applicantName}
                  value="Mohammed"
                  icon="check"
                  isRTL={isRTL}
                />
                <DetailItem
                  label={t.formDetails.position}
                  value={t.formDetails.employee}
                  icon="cross"
                  isRTL={isRTL}
                />
                <DetailItem
                  label={t.formDetails.requestNumber}
                  value="54604"
                  icon="pending"
                  isRTL={isRTL}
                />
                <DetailItem
                  label={t.formDetails.storeName}
                  value={t.formDetails.warehouse}
                  isRTL={isRTL}
                />
                <DetailItem
                  label={t.formDetails.winnerName}
                  value={t.formDetails.storageDuration}
                  isRTL={isRTL}
                />
                <DetailItem
                  label={t.formDetails.requestDuration}
                  value={t.formDetails.departmentManager}
                  isRTL={isRTL}
                />
              </div>
            </div>

            {/* Attachments */}
            <div className="mb-6">
              <AttachmentsSection
                title={t.formDetails.attachments}
                isRTL={isRTL}
              />
            </div>

            {/* Comments */}
            <div className="mb-6">
              <CommentsSection
                title={t.formDetails.comments}
                comments={dummyComments}
                isRTL={isRTL}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button className="w-full max-w-md rounded-full bg-linear-to-r from-pink-600 to-purple-600 px-12 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110">
                {t.formDetails.addRequest}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
