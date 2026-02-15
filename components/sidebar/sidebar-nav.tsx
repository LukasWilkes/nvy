import cn from 'classnames'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { sidebarEffects } from './siebar-effect'
import { Button } from '../ui/button'

const SidebarNav = () => {
  const searchParams = useSearchParams()
  return (
    <ol className="flex gap-4 flex-col text-sm">
      {sidebarEffects?.map(({ slug, name }) => {
        const isActive = searchParams?.get('effect') === slug
        return (
          <li className={cn('w-full  lg:px-4')} key={slug}>
            <Link
              className={cn(
                'duration-300 ease-in-out h-full flex items-center w-full gap-3'
              )}
              href={`/?effect=${slug}`}
            >
              <Button
                className="w-full justify-between rounded-none"
                variant={isActive ? 'default' : 'outline'}
              >
                <span>{name}</span>
              </Button>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default SidebarNav
