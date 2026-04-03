import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === "zh" ? "en" : "zh";
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-colors w-full"
      title={i18n.language === "zh" ? "Switch to English" : "切换到中文"}
    >
      <Languages className="h-4 w-4 shrink-0" />
      <span className="truncate">{i18n.language === "zh" ? "English" : "中文"}</span>
    </button>
  );
}
