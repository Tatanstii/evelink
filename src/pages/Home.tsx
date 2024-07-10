import HomePageTitle from '../components/HomePageTitle'
import LinkFeed from '../components/LinkFeed'
import HomeLayout from '../layouts/HomeLayout'

export default function HomePage() {
  return (
    <HomeLayout>
      <main>
        <HomePageTitle />
        <section>
          <LinkFeed />
        </section>
      </main>
    </HomeLayout>
  )
}
