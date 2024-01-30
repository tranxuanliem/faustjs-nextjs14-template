import { gql } from '@apollo/client'
import { getClient } from '@faustwp/experimental-app-router'
import Link from 'next/link'
import '@/faust.config.js'
import { FaustProvider } from '@faustwp/experimental-app-router/ssr'
import Header from '@/components/header'

export default async function RootLayout({ children }) {
  const client = await getClient()

  const { data } = await client.query({
    query: gql`
      query GetLayout {
        generalSettings {
          title
          description
        }
        primaryMenuItems: menuItems(where: { location: PRIMARY }, first: 20) {
          nodes {
            id
            label
            uri
          }
        }
        footerMenuItems: menuItems(where: { location: FOOTER }, first: 20) {
          nodes {
            id
            label
            uri
          }
        }
      }
    `
  })

  return (
    <html lang='en'>
      <body>
        <FaustProvider>
          {/* <Header /> */}
          <header>
            <div>
              <h1>
                <Link href='/'>{data.generalSettings.title}</Link>
              </h1>

              <h5>{data.generalSettings.description}</h5>
            </div>
            <ul>
              {data.primaryMenuItems.nodes.map(node => (
                <li key={node.id}>
                  {node.uri ? <Link href={node.uri}>{node.label}</Link> : <span>{node.label}</span>}
                </li>
              ))}
            </ul>
          </header>
          {children}
        </FaustProvider>
      </body>
    </html>
  )
}
