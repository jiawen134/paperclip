import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import enAgents from "./locales/en/agents.json";
import enIssues from "./locales/en/issues.json";
import enProjects from "./locales/en/projects.json";
import enSettings from "./locales/en/settings.json";
import enDashboard from "./locales/en/dashboard.json";

import zhCommon from "./locales/zh/common.json";
import zhAgents from "./locales/zh/agents.json";
import zhIssues from "./locales/zh/issues.json";
import zhProjects from "./locales/zh/projects.json";
import zhSettings from "./locales/zh/settings.json";
import zhDashboard from "./locales/zh/dashboard.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        agents: enAgents,
        issues: enIssues,
        projects: enProjects,
        settings: enSettings,
        dashboard: enDashboard,
      },
      zh: {
        common: zhCommon,
        agents: zhAgents,
        issues: zhIssues,
        projects: zhProjects,
        settings: zhSettings,
        dashboard: zhDashboard,
      },
    },
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common", "agents", "issues", "projects", "settings", "dashboard"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
