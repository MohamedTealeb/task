import { Sidebar } from "~/components/layout/sidebar";
import { Navar } from "~/components/layout/navbar";
import {
  StatCardIcon,
  StatisticsPanel,
  CityItem,
  LineChart,
} from "~/components/dashboard";
import { getLocale, getTranslations } from "~/lib/translation";
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            {/* Page Title */}
            <h1
              className={`mb-6 text-3xl font-bold text-gray-800 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.dashboard.pageTitle}
            </h1>

            {/* Filters */}
            <div
              className={`mb-6 flex items-center gap-4 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              {/* Search Input */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder={t.dashboard.searchContacts}
                  className={`w-full rounded-full border border-gray-300 bg-white px-6 py-3 text-sm transition-all focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 ${
                    isRTL ? "pr-12 text-right" : "pl-12 text-left"
                  }`}
                />
                <Search
                  className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${
                    isRTL ? "right-4" : "left-4"
                  }`}
                  size={18}
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative min-w-[200px]">
                <select
                  className={`w-full appearance-none rounded-full border border-gray-300 bg-white px-6 py-3 text-sm transition-all focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 ${
                    isRTL ? "pr-12 text-right" : "pl-6 text-left"
                  }`}
                >
                  <option>{t.dashboard.filterByDay}</option>
                </select>
                <ChevronDown
                  className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400 ${
                    isRTL ? "left-4" : "right-4"
                  }`}
                  size={18}
                />
              </div>

              {/* Search Button */}
              <button className="shrink-0 rounded-full bg-linear-to-r from-pink-600 to-purple-600 px-12 py-3 font-bold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110">
                {t.dashboard.search}
              </button>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row">
              {/* Main Content */}
              <div className="flex-1">
                {/* Stats Cards Grid */}
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
                    subtitle={`${t.dashboard.allDeliverers} 500`}
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

                {/* Bottom Section */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* Statistics Panel */}
                  <StatisticsPanel
                    title={t.dashboard.statistics}
                    stats={statisticsData}
                    isRTL={isRTL}
                  />

                  {/* Line Chart */}
                  <LineChart
                    title={t.dashboard.orders}
                    days={weekDays}
                    isRTL={isRTL}
                  />
                </div>
              </div>

              {/* Right Sidebar - Cities */}
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
    </div>
  );
}
