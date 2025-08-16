"use client";

import { NavRoutes } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavMenuProps {
    isMobile?: boolean;
}
export const NavMenu = ({ isMobile }: NavMenuProps) => {

    const {isSignedIn} = useAuth();
    const pathname = usePathname();

    //only incluse public routes or protected ones if the user is signed in

    const filterredRoutes = NavRoutes.filter(
        (route) => !route.protected || isSignedIn
    );


  return <nav className={cn("flex gap-8", isMobile && "flex-col items-start gap-12")} >
    {filterredRoutes.map((route) =>{
        // fix : use eaxct match for home route to prevent highlighting on all routes
        // const isActive = pathname.startsWith(route.Link)

        const isActive = 
            route.link === "/"
               ? pathname === "/"
               : pathname.startsWith(route.link);

        return(
            <Link key={route.link} href={route.link} className={cn("text-white/70 hover:text-white transition", isActive && "text-white")}>
                {route.label}
            </Link>
        )
    })}
  </nav>
}
