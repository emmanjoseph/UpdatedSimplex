'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const TopNav = () => {
    const pathname = usePathname() // Get current pathname

    const Links = [
        {
            title: "Internet",
            href: "/services"
        },
        {
            title: "Security",
            href: "/services/security"
        },
        {
            title: "Electrical",
            href: "/services/electrical"
        },
    ]

    return (
        <div className='max-container padding-container'>
            <div className='flex gap-3'>
                {Links.map((link) => {
                    const isActive = pathname === link.href // Check if the current pathname matches the link's href
                    return (
                        <Link
                            className={`text-[15px] font-medium leading-[18px] ${isActive ? 'font-bold underline' : 'dark:text-white text-neutral-900'}`}
                            href={link.href}
                            key={link.title}
                        >
                            {link.title}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default TopNav
