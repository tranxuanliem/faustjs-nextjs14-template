import { gql } from '@apollo/client'
import Link from 'next/link'
import '@/faust.config.js'
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
    }
  `
})

export default function Header() {
  return (
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
  )
}
