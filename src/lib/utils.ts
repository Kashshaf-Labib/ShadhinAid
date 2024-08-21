export const getLoggedInUser = async () => {
  const token = localStorage.getItem("token");
  const res = await (await fetch("/api/user/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })).json();
  console.log(res)
  if (res.error) {
    localStorage.removeItem("token");
    return;
  }
  return res;
}

export const navMenus = [
  {
    name: "হোম",
    href: "/",
  },
  {
    name: "আমাদের সম্পর্কে",
    href: "/about",
  },
  {
    name: "যোগাযোগ",
    href: "/contact",
  },
  {
    name: "জমা দিন",
    href: "/patient-form",
  },
  {
    name: "রোগীর তালিকা",
    href: "/patients",
  },
  {
    name: "দাতা স্বচ্ছতা",
    href: "/donor-transparency",
  },
]

export type Address = {
  location: {lat: number, lng: number};
  name?: string;
}

export function formatDateToDDMMYYYYHHMM(_date: Date): string {
  const date = new Date(_date);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function generate_uuid() {
  return Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
}
