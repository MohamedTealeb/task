import { Sidebar } from "~/components/layout/sidebar";
import { Navar } from "~/components/layout/navbar";
import {
  StatCardIcon,
  StatisticsPanel,
  CityItem,
  LineChart,
} from "~/components/dashboard";
import { getLocale, getTranslations } from "~/lib/translation";
import { useSidebar } from "~/lib/sidebar-context";
import { ChevronDown, Search } from "lucide-react";
import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard - V-Hub" },
    { name: "description", content: "Dashboard overview page" },
  ];
}

const citiesData = [
  { city: "giza", awdCount: "205", percentage: 85 },
  { city: "October", awdCount: "365", percentage: 92 },
  { city: "New City", awdCount: "123", percentage: 65 },
  { city: "giza", awdCount: "205", percentage: 85 },
  { city: "October", awdCount: "365", percentage: 92 },
  { city: "New City", awdCount: "123", percentage: 65 },
  { city: "giza", awdCount: "205", percentage: 85 },
  { city: "October", awdCount: "365", percentage: 92 },
];

export default function Dashboard() {
  const locale = getLocale();
  const t = getTranslations(locale);
  const isRTL = locale === "ar";
  const { isOpen } = useSidebar();

  const statisticsData = [
    {
      label: t.dashboard.doneAWD,
      value: "72,593",
      color: "green",
    },
    {
      label: t.dashboard.pendingAWD,
      value: "9,307",
      color: "yellow",
    },
    {
      label: t.dashboard.returnsAWD,
      value: "3,307",
      color: "red",
    },
  ];

  const weekDays = [
    t.dashboard.days.mon,
    t.dashboard.days.tue,
    t.dashboard.days.wed,
    t.dashboard.days.thu,
    t.dashboard.days.fri,
    t.dashboard.days.sat,
    t.dashboard.days.sun,
  ];

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
              className={`mb-6 text-3xl font-bold text-gray-800 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.dashboard.pageTitle}
            </h1>

            <div className="mx-auto mb-6 grid w-full max-w-[920px] grid-cols-1 items-center gap-4 md:grid-cols-[320px_260px_auto]">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder={t.dashboard.searchContacts}
                  className={`w-full rounded-full border border-gray-300 bg-white px-6 py-3 text-sm transition-all focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 ${
                    isRTL ? "pr-12 text-right" : "pl-12 text-left"
                  }`}
                />
                <Search
                  className={`absolute top-1/2 -translate-y-1/2 text-[#B00A70]  ${
                    isRTL ? "right-4" : "left-4"
                  }`}
                  size={18}
                />
              </div>

              <div className="relative w-full md:w-[260px]">
                <select
                  className={`w-full appearance-none rounded-full border border-gray-300 bg-white px-6 py-3 text-sm transition-all focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 ${
                    isRTL ? "pr-12 text-right" : "pl-6 text-left"
                  }`}
                >
                  <option>{t.dashboard.filterByDay}</option>
                </select>
                <ChevronDown
                  className={`pointer-events-non text-[#B00A70] absolute top-1/2 -translate-y-1/2 ${
                    isRTL ? "left-4" : "right-4"
                  }`}
                  size={18}
                />
              </div>

              <button className="w-full md:w-auto rounded-full bg-[#71144B] px-10 py-3 font-bold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110">
                {t.dashboard.search}
              </button>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1">
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <StatCardIcon
                    title={t.dashboard.allClients}
                    value="500"
                    color="orange"
                    icon="clients"
                  />
                  <StatCardIcon
                    title={t.dashboard.onlineDeliverers}
                    value="200"
                  
                    color="purple"
                    icon="deliverers"
                  />
                  <StatCardIcon
                    title={t.dashboard.allAWD}
                    value="500"
                    color="blue"
                    icon="star"
                  />
                  <StatCardIcon
                    title={t.dashboard.doneAWD}
                    value="500"
                    color="green"
                    icon="check"
                  />
                  <StatCardIcon
                    title={t.dashboard.pendingAWD}
                    value="500"
                    color="yellow"
                    icon="clock"
                  />
                  <StatCardIcon
                    title={t.dashboard.returnsAWD}
                    value="500"
                    color="red"
                    icon="return"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <StatisticsPanel
                    title={t.dashboard.statistics}
                    stats={statisticsData}
                    isRTL={isRTL}
                  />

                  <LineChart
                    title={t.dashboard.orders}
                    days={weekDays}
                    isRTL={isRTL}
                  />
                </div>
              </div>

              <div className="w-full space-y-4 lg:w-80">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {citiesData.map((city, index) => (
                    <CityItem
                      key={index}
                      city={city.city}
                      awdCount={city.awdCount}
                      percentage={city.percentage}
                      isRTL={isRTL}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}
