import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import { navMenus } from "@/utils";

type MobileSidebarProps = {
    show: boolean;
    setShow:() => void;
}

const MobileSidebar = ({ show, setShow }:MobileSidebarProps) => {
    const router = useRouter();

    return (
        <div className={`fixed top-0 left-0 h-screen right-0 bottom-0 transition-all ${show ? "z-[1]" : "-z-10 invisible"}`}>
            <div className="absolute bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-0" onClick={setShow}/>
            <div className={`bg-white relative z-10 h-screen overflow-auto max-w-60 transition-transform ${show ? 'translate-x-0' : ' -translate-x-96'}`}>
                <div className="grid gap-4">
                    {
                        navMenus.map(n => <Link href={n.href}
                            className={`px-6 py-2 block hover:bg-primary hover:text-white ${router.pathname == n.href ? "bg-primary text-white" : ""}`}
                            key={n.href}>{n.name}</Link>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MobileSidebar;