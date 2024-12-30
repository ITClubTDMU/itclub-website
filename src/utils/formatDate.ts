export default function formatDate(timestamp?: number) {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "numeric" });
  const year = date.getFullYear();
  return `${day} Th${month} ${year}`;
}
