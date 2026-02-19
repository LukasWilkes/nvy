import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'nvy.app | Datenschutz',
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

const PrivacyPage = () => {
  return (
    <section className="text-foreground flex flex-col gap-8 font-mono text-sm max-w-4xl mx-auto w-full">
      <h1>Datenschutzerklärung</h1>

      <div className="content-block">
        <h3>1. Datenschutz auf einen Blick</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>
      </div>

      <div className="content-block">
        <h3>2. Hosting und Datenverarbeitung durch Vercel</h3>
        <p>
          Wir hosten unsere Website bei Vercel. Anbieter ist die Vercel Inc.,
          440 N Barranca Ave #4133, Covina, CA 91723, USA. Vercel erfasst
          technische Log-Files (inkl. Ihrer IP-Adresse), um die Bereitstellung
          der Seite zu gewährleisten. Zudem nutzt diese Website Vercel
          Analytics/Speed Insights in der Standard-Konfiguration zur Erfassung
          technischer Performance-Daten. Hierbei werden Daten anonymisiert
          erhoben, um die Stabilität und Ladegeschwindigkeit der Website zu
          verbessern. Vercel ist unter dem EU-US Data Privacy Framework
          zertifiziert.
        </p>
      </div>

      <div className="content-block">
        <h3>3. Bildverarbeitung (Client-Side Only)</h3>
        <p>
          Alle Bildbearbeitungsoperationen (z.B. Dithering, Kontrastanpassungen)
          finden ausschließlich lokal in Ihrem Webbrowser statt.
        </p>
        <ul>
          <li>
            Die von Ihnen geladenen Bilder werden <strong>nicht</strong> auf
            unsere Server oder Server von Drittanbietern übertragen.
          </li>
          <li>Es erfolgt keine dauerhafte Speicherung Ihrer Bilddaten.</li>
          <li>
            Sobald Sie den Browser-Tab schließen, werden alle verarbeiteten
            Bilddaten aus dem Arbeitsspeicher gelöscht.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h3>4. Cookies und Tracking</h3>
        <p>
          Diese Website verwendet keine Cookies zu Marketingzwecken. Es werden
          lediglich technisch notwendige Daten verarbeitet, die für den Betrieb
          der Web-App (z.B. Session-Handling durch Vercel) erforderlich sind.
        </p>
      </div>

      <div className="content-block">
        <h3>5. Google Fonts</h3>
        <p>
          Wir nutzen Google Fonts lokal über die Next.js Font-Optimierung (
          <code>next/font</code>). Dabei werden die Schriftarten vom eigenen
          Server ausgeliefert. Es findet keine Verbindung zu Servern von Google
          statt, wodurch keine IP-Adressen an Google übertragen werden.
        </p>
      </div>

      <div className="content-block">
        <h3>6. Ihre Rechte</h3>
        <p>
          Sie haben das Recht, jederzeit Auskunft über Herkunft, Empfänger und
          Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie
          haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten.
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
        </p>
      </div>
    </section>
  )
}

export default PrivacyPage
