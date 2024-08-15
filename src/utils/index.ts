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
      name: "Patients",
      href: "/patients",
    },
    {
      name: "Fund Raising",
      href: "/fund-raising",
    },
  ]