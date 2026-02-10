import { Link, useLocation } from "react-router";
import { FileText, Files, Home, LayoutDashboard, UserPlus, Users, X } from "lucide-react";
import { getLocale, getTranslations } from "~/lib/translation";
import { useSidebar } from "~/lib/sidebar-context";

export function Sidebar() {
  const { pathname } = useLocation();
  const locale = getLocale();
  const t = getTranslations(locale);
  const isRTL = locale === "ar";
  const { isOpen, close } = useSidebar();

  const items = [
    { key: "home", label: t.sidebar.home, icon: Home, href: "/" },
    { key: "dashboard", label: t.sidebar.dashboard, icon: LayoutDashboard, href: "/dashboard" },
    { key: "add-employee", label: t.sidebar.addEmployee, icon: UserPlus, href: "/add-employee" },
    { key: "employees", label: t.sidebar.employees, icon: Users, href: "/employees" },
    { key: "all-forms", label: t.sidebar.allForms, icon: Files, href: "/forms" },
    { key: "submitted-forms", label: t.sidebar.submittedForms, icon: FileText, href: "/submitted-forms" },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={close}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 z-50 h-[calc(100vh-4rem)] w-full max-w-[16rem] bg-white py-4 shadow-xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : isRTL ? "translate-x-full" : "-translate-x-full"}
          ${isRTL ? "right-0" : "left-0"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={close}
          className={`mb-4 flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 ${
            isRTL ? "mr-auto ml-3" : "ml-auto mr-3"
          }`}
        >
          <X size={24} />
        </button>

        <nav className="flex flex-col gap-2 px-3 text-sm font-semibold text-gray-600">
          {items.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.key}
                to={item.href}
                className={[
                  "flex w-full items-center gap-3 rounded-xl px-4 py-3",
                  isRTL ? "flex-row-reverse text-right" : "text-left",
                  "transition-colors",
                  isActive
                    ? "bg-[#f3f0ff] text-[#7764E4]"
                    : "text-gray-600 hover:bg-gray-50",
                ].join(" ")}
              >
                <Icon
                  className={isActive ? "text-[#7764E4]" : "text-gray-400"}
                  size={18}
                />
                <span className="flex-1">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

