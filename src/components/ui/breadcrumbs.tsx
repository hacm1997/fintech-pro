import Link from 'next/link'
import React from 'react'

interface Props {
    redirect_url: string;
    title?: string
}

// dinamic breadcrumbs navigation
export const Breadcrumbs = ({ redirect_url, title }: Props) => {
    return (
        <div>
            <Link href={redirect_url} title={title} className='text-[16px] hover:text-[#2563eb]'>
                {"<"} {title}
            </Link>
        </div>
    )
}
