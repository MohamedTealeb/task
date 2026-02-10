import { Sidebar } from "~/components/layout/sidebar";
import { Navar } from "~/components/layout/navbar";
import {
  EmployeeTableRow,
  EmployeesFilters,
  Pagination,
  type Employee,
} from "~/components/employees";
import { getLocale, getTranslations } from "~/lib/translation";
import { useSidebar } from "~/lib/sidebar-context";
import type { Route } from "./+types/employees";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Employees - Dashboard" },
    { name: "description", content: "Employees list page" },
  ];
}

const dummyEmployees: Employee[] = [
  {
    id: "1",
    name: "Michael Scott",
    avatar: "michael-scott",
    directManager: "Michael Scott",
    managerAvatar: "michael-scott-mgr",
    position: "مقاول",
    submittedRequests: 3,
    phoneNumber: "01112456536",
    email: "marshall@yahoo.com",
    isActive: true,
  },
  {
    id: "2",
    name: "Dwight Schrute",
    avatar: "dwight-schrute",
    directManager: "Dwight Schrute",
    managerAvatar: "dwight-schrute-mgr",
    position: "مدير عام",
    submittedRequests: 2,
    phoneNumber: "01112456536",
    email: "dwight@yahoo.com",
    isActive: false,
  },
  {
    id: "3",
    name: "Jim Halpert",
    avatar: "jim-halpert",
    directManager: "Jim Halpert",
    managerAvatar: "jim-halpert-mgr",
    position: "محاسب",
    submittedRequests: 3,
    phoneNumber: "01112456536",
    email: "miles@mail.com",
    isActive: true,
  },
  {
    id: "4",
    name: "Pam Beesly",
    avatar: "pam-beesly",
    directManager: "Pam Beesly",
    managerAvatar: "pam-beesly-mgr",
    position: "مهندس",
    submittedRequests: 3,
    phoneNumber: "01112456536",
    email: "barber@gmail.com",
    isActive: false,
  },
  {
    id: "5",
    name: "Stanley Hudson",
    avatar: "stanley-hudson",
    directManager: "Stanley Hudson",
    managerAvatar: "stanley-hudson-mgr",
    position: "مهندس فني",
    submittedRequests: 2,
    phoneNumber: "01112456536",
    email: "gamble@outlook.com",
    isActive: true,
  },
  {
    id: "6",
    name: "Kevin Malone",
    avatar: "kevin-malone",
    directManager: "Kevin Malone",
    managerAvatar: "kevin-malone-mgr",
    position: "مبرمج",
    submittedRequests: 1,
    phoneNumber: "01112456536",
    email: "castaneda@mail.com",
    isActive: true,
  },
  {
    id: "7",
    name: "Angela Martin",
    avatar: "angela-martin",
    directManager: "Angela Martin",
    managerAvatar: "angela-martin-mgr",
    position: "مدير الحسابات",
    submittedRequests: 3,
    phoneNumber: "01112456536",
    email: "ryan@mail.com",
    isActive: false,
  },
  {
    id: "8",
    name: "Phyllis Vance",
    avatar: "phyllis-vance",
    directManager: "Phyllis Vance",
    managerAvatar: "phyllis-vance-mgr",
    position: "مدير المشتريات",
    submittedRequests: 3,
    phoneNumber: "01112456536",
    email: "hendricks@yahoo.com",
    isActive: true,
  },
  {
    id: "9",
    name: "Meredith Palmer",
    avatar: "meredith-palmer",
    directManager: "Meredith Palmer",
    managerAvatar: "meredith-palmer-mgr",
    position: "رئيس قسم",
    submittedRequests: 3,
    phoneNumber: "01112456536",
    email: "kelly@mail.com",
    isActive: false,
  },
];

export default function Employees() {
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
        <div className="mx-auto max-w-7xl">
          <div
            className={`mb-4 flex items-center justify-between ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            {/* ممكن نضيف أزرار إضافية هنا لاحقًا */}
          </div>

          <EmployeesFilters
            searchPlaceholder={t.employees.search}
            statusLabel={t.employees.accountStatus}
            isRTL={isRTL}
          />

          {/* Title */}
          <h1
            className={`mb-3 text-2xl font-bold text-gray-800 ${
              isRTL ? "text-left md:text-right" : "text-right"
            }`}
          >
            {t.employees.pageTitle} ({dummyEmployees.length})
          </h1>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
            <div className="min-w-[720px]">
              <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        className={`px-4 py-4 text-sm font-semibold text-gray-600 ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {t.employees.table.name}
                      </th>
                      <th
                        className={`px-4 py-4 text-sm font-semibold text-gray-600 ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {t.employees.table.directManager}
                      </th>
                      <th
                        className={`px-4 py-4 text-sm font-semibold text-gray-600 ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {t.employees.table.position}
                      </th>
                      <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
                        {t.employees.table.submittedRequests}
                      </th>
                      <th
                        className={`px-4 py-4 text-sm font-semibold text-gray-600 ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {t.employees.table.phoneNumber}
                      </th>
                      <th
                        className={`px-4 py-4 text-sm font-semibold text-gray-600 ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {t.employees.table.email}
                      </th>
                      <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
                        {t.employees.table.operations}
                      </th>
                      <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600">
                        {t.employees.table.accountStatus}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyEmployees.map((employee) => (
                      <EmployeeTableRow
                        key={employee.id}
                        employee={employee}
                        activateLabel={t.employees.activate}
                        deactivateLabel={t.employees.deactivate}
                        isRTL={isRTL}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="border-t border-gray-100 px-4 py-3">
                <Pagination currentPage={1} totalPages={3} />
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}
