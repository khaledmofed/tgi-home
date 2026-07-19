import { countries } from "../../../data/countries";
import type { ContactFormData } from "./types";
import styles from "./StepOverview.module.css";

interface StepOverviewProps {
  data: ContactFormData;
}

export function StepOverview({ data }: StepOverviewProps) {
  const countryName = countries.find((c) => c.iso2 === data.country)?.name ?? "—";

  const rows: [string, string][] = [
    ["Name", [data.salutation, data.title, data.firstName, data.lastName].filter(Boolean).join(" ") || "—"],
    ["E-Mail", data.email || "—"],
    ["Country", countryName],
    ["Phone", data.phone ? `${data.dialCode} ${data.phone}` : "—"],
    ["Preferred Contact Method", data.contactMethod || "—"],
    ["Reason", data.reason || "—"],
  ];

  return (
    <div>
      <div className={styles.list}>
        {rows.map(([label, value]) => (
          <div className={styles.row} key={label}>
            <span className={styles.rowLabel}>{label}</span>
            <span className={styles.rowValue}>{value}</span>
          </div>
        ))}
      </div>
      <div className={styles.message}>
        <p className={styles.messageLabel}>Message</p>
        <p className="card-desc">{data.message || "—"}</p>
      </div>
    </div>
  );
}