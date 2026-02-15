import Canvas from '@/components/canvas'
import ArtboardPage from '@/features/artboard/pages/artboard-page'
import LandingPage from '@/features/artboard/pages/landing-page'
import ViewPortOptions from '@/features/view-port-settings/components'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ effect?: string }>
}) {
  const sParams = await searchParams

  if (!sParams?.effect) {
    return <LandingPage />
  }

  return <ArtboardPage />
}
