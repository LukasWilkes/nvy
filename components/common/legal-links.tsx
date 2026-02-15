import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const LegalLink = () => {
  return (
    <div className="py-4 md:p-4 border-t mt-auto">
      <ul className="p-4 flex justify-between flex-col gap-2 text-sm border bg-input/30">
        <li>
          <Link
            className="flex justify-between items-center"
            href={'/impressum'}
          >
            Impressum <ArrowRight className="size-4" />
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-between items-center"
            href={'/datenschutz'}
          >
            Datenschutz <ArrowRight className="size-4" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default LegalLink
