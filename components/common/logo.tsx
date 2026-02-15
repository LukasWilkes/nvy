import Link from 'next/link'
import cn from 'classnames'

type TLogo = {
  className?: string
}

const Logo = ({ className }: TLogo) => {
  return (
    <Link className={cn('', className)} href={'/'}>
      <svg
        className="fill-foreground size-9"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.4226 25.6818L15.1094 29.992L18.5962 23.7062L0 22.0899L18.5962 20.4736L15.1094 14.547L20.5887 18.498L22.2491 0L23.5774 18.498L29.0566 14.547L25.7358 20.4736L44 22.0899L25.2377 23.7062L29.3887 29.992L23.0792 25.6818L21.917 44.0002L20.4226 25.6818Z" />
      </svg>
    </Link>
  )
}

export default Logo
