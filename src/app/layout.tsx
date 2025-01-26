import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";
import { StartDsfr } from "./StartDsfr";
import { defaultColorScheme } from "./defaultColorScheme";
import Link from "next/link";
import { JSX } from "react";
import { Header } from "@codegouvfr/react-dsfr/Header";

export default function RootLayout({ children }: { children: JSX.Element; }) {
  const lang = "fr";
  return (
    <html {...getHtmlAttributes({ defaultColorScheme, lang })} >
      <head>
        <StartDsfr />
        <DsfrHead Link={Link} />
      </head>
      <body>
        <DsfrProvider lang={lang}>
          <Header
            // This line isn't showing when using Turbopack
            brandTop={<>NEXT<br />TURBO<br />REACT<br />DSFR</>}
            homeLinkProps={{
              href: '/',
              title: 'Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)'
            }}
            id="fr-header-simple-header"
            navigation={[
              {
                linkProps: {
                  href: '/', // '#' is causing a 'React is not defined' error
                  target: '_self'
                },
                text: 'accès direct'
              },
              {
                isActive: true,
                linkProps: {
                  href: '/',
                  target: '_self'
                },
                text: 'accès direct'
              }
            ]}
          />
          {children}
        </DsfrProvider>
      </body>
    </html>
  );
}