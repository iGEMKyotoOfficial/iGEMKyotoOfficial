import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

export default function Home() {
  return (
    <Container large>
      <Meta />
        <Hero
          title="iGEM Kyoto"
          subtitle="iGEM × Kyoto = ∞"
        />
        <p>
          コンヌツKyotoでおま
        </p>
    </Container>
  )
}