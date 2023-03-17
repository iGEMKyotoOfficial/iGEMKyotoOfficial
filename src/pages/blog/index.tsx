import Container from 'components/container'
import Hero from 'components/hero'

export default function Blog() {
  return (
    <Container large={false}>
        <Hero
          title="iGEM Kyoto"
          subtitle="iGEM × Kyoto = ∞"
          imageOn
        />
    </Container>
  )
}