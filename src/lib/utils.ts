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
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Submit Patient Details",
    href: "/patientform",
  },
  {
    name: "View Patients",
    href: "/patientdetails",
  },
  {
    name: "Fund Raising",
    href: "/fund-raising",
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