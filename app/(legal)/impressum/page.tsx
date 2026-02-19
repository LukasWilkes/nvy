import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'nvy.app | Impressum',
  description:
    'Convert sketches into high-contrast, printable tattoo stencils using advanced dithering and threshold algorithms.',
  authors: [{ name: 'Lukas Wilkes' }],
  keywords: [
    'Tattoo',
    'Stencil',
    'Dithering',
    'Image Processing',
    'Next.js',
    'P5.js',
  ],
}

const ImpressumPage = () => {
  return (
    <section className="text-foreground flex flex-col gap-8 font-mono text-sm max-w-4xl mx-auto w-full">
      <div className="content-block">
        <h1>Impressum</h1>
        <h3>Angaben gemäß § 5 TMG</h3>
        <p>
          Lukas Wilkes
          <br />
          Loherstraße 22b
          <br />
          58332 Schwelm
        </p>
      </div>

      <div className="content-block">
        <h3>Kontakt</h3>
        <p>E-Mail: lukas.wilkes@gmx.de</p>
      </div>

      <div className="content-block">
        <h3>Redaktionell verantwortlich</h3>
        <p>
          Lukas Wilkes
          <br />
          Loherstraße 22b
          <br />
          58332 Schwelm
        </p>
      </div>

      <div className="content-block">
        <h3>EU-Streitschlichtung</h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </div>

      <div className="content-block">
        <h3>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h3>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </section>
  )
}

export default ImpressumPage
