import { Sidebar } from "~/components/layout/sidebar";
import { Navar } from "~/components/layout/navbar";
import { StatCard, DateRangeFilters, StatisticsChart } from "~/components/home";
import { getLocale, getTranslations } from "~/lib/translation";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - Dashboard" },
    { name: "description", content: "Dashboard home page" },
  ];
}

export default function Home() {
  const locale = getLocale();
  const t = getTranslations(locale);
  const isRTL = locale === "ar";

  const chartLegendItems = [
    { label: t.home.chart.purchase, color: "bg-teal-400" },
    { label: t.home.chart.approved, color: "bg-yellow-400" },
    { label: t.home.chart.missingFields, color: "bg-blue-400" },
    { label: t.home.chart.underReview, color: "bg-pink-500" },
    { label: t.home.chart.purchase2, color: "bg-blue-500" },
    { label: t.home.chart.approved2, color: "bg-orange-400" },
    { label: t.home.chart.missingFields2, color: "bg-fuchsia-500" },
    { label: t.home.chart.underReview2, color: "bg-cyan-400" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navar />
      
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        
        <main className="flex-1 p-4 md:p-6">
          {/* Date Filters */}
          <div className={`mb-6 flex flex-col gap-3 md:flex-row ${isRTL ? "md:justify-start" : "md:justify-end"}`}>
            <DateRangeFilters
              fromDateLabel={t.home.fromDate}
              toDateLabel={t.home.toDate}
              isRTL={isRTL}
            />
          </div>

          {/* Stats Cards Grid */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title={t.home.totalSubmittedForms}
              value="123,456"
              period={t.home.monthAbbr}
              color="pink"
            />
            <StatCard
              title={t.home.formsUnderReview}
              value="123,456"
              period={t.home.monthAbbr}
              color="orange"
            />
            <StatCard
              title={t.home.approvedForms}
              value="123,456"
              period={t.home.monthAbbr}
              color="green"
            />
            <StatCard
              title={t.home.rejectedForms}
              value="2,345"
              period={t.home.monthAbbr}
              color="blue"
            />
          </div>

          {/* Statistics Chart */}
          <StatisticsChart
            title={t.home.submittedFormsStatistics}
            legendItems={chartLegendItems}
            isRTL={isRTL}
          />
        </main>
      </div>
    </div>
  );
}

