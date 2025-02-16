'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MovieTabs({ id }: { id: string }) {
  const pathname = usePathname()

  const isCurrentTab = (tab: string) => {
    if (tab === '') return pathname === `/movies/${id}`
    return pathname.startsWith(`/movies/${id}/${tab}`)
  }

  return (
    <div className="mb-4 flex justify-center gap-12">
      <Link
        href={`/movies/${id}`}
        className={clsx(
          'text-lg text-gray-400',
          isCurrentTab('') && 'text-primary'
        )}
      >
        Top
      </Link>
      <Link
        href={`/movies/${id}/credit`}
        className={clsx(
          'text-lg text-gray-400',
          isCurrentTab('credit') && 'text-primary'
        )}
      >
        Credit
      </Link>
      <Link
        href={`/movies/${id}/videos`}
        className={clsx(
          'text-lg text-gray-400',
          isCurrentTab('videos') && 'text-primary'
        )}
      >
        Videos
      </Link>
    </div>
  )
}
