export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // const intervals: [number, string][] = [
  //   [60, "detik"],
  //   [60 * 60, "menit"],
  //   [60 * 60 * 24, "jam"],
  //   [60 * 60 * 24 * 7, "hari"],
  //   [60 * 60 * 24 * 30, "minggu"],
  //   [60 * 60 * 24 * 365, "bulan"],
  // ];

  if (seconds < 60) return "baru saja";

  if (seconds < 3600) {
    const mins = Math.floor(seconds / 60);
    return `${mins} menit yang lalu`;
  }

  if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} jam yang lalu`;
  }

  if (seconds < 604800) {
    const days = Math.floor(seconds / 86400);
    return `${days} hari yang lalu`;
  }

  const dateOnly = date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return `pada ${dateOnly}`;
}
