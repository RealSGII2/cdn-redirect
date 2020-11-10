import { useRouter } from 'next/router'

export default function Home() {
  return (
    <p>Redirecting...</p>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: {},
    redirect: {
      destination: `https://cdn.realsgii2.dev/`,
      permanent: false,
    },
  }
}
