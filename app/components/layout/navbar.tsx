
import { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Languages } from "lucide-react";
import { getLocale, getTranslations, type Locale } from "~/lib/translation";
import { useLocale } from "~/lib/use-locale";
import { useSidebar } from "~/lib/sidebar-context";

export function Navar() {
  const [locale, setLocale] = useState<Locale>("en");
  const { toggleLocale } = useLocale();
  const { toggle: toggleSidebar } = useSidebar();

  useEffect(() => {
    setLocale(getLocale());
  }, []);

  const t = getTranslations(locale);
  const isRTL = locale === "ar";

  return (
    <nav id="header" className="w-full bg-main-color text-white shadow-lg">
      <div className="mx-auto flex items-center justify-between px-6 py-3">
        <div
          className={`flex items-center gap-4 ${
            isRTL ? "order-1" : "order-1"
          }`}
        >
          {isRTL ? (
            <button
              onClick={toggleSidebar}
              className="flex flex-row-reverse items-center gap-2 text-base font-semibold transition-all hover:opacity-80"
            >
              <span>{t.navbar.menu}</span>
              <RiMenu3Fill />
            </button>
          ) : (
            <button
              onClick={toggleSidebar}
              className="flex items-center gap-2 text-base font-semibold transition-all hover:opacity-80"
            >
              <span>{t.navbar.menu}</span>
              <RiMenu3Fill />
            </button>
          )}
        </div>

        <div
          className={`flex items-center gap-4 ${
            isRTL ? "order-2 flex-row-reverse" : "order-2"
          }`}
        >
          {isRTL ? (
            <>
              <button
                onClick={toggleLocale}
                className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold transition-all hover:bg-white/20"
                title="Switch to English"
              >
                <Languages size={18} />
                <span>EN</span>
              </button>
              <div className="text-lg font-semibold">{t.navbar.logo}</div>
              <button className="flex items-center gap-2 text-base font-semibold">
                <span>{t.navbar.admin}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.25 7.5l4.75 5 4.75-5H5.25z" />
                </svg>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={toggleLocale}
                className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold transition-all hover:bg-white/20"
                title="التبديل إلى العربية"
              >
                <Languages size={18} />
                <span>ع</span>
              </button>
              <div className="text-lg font-semibold">{t.navbar.logo}</div>
              <button className="flex items-center gap-2 text-base font-semibold">
                <span>{t.navbar.admin}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.25 7.5l4.75 5 4.75-5H5.25z" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}