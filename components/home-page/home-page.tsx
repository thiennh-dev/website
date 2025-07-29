import { Container } from '@/ui/container'
import HelloMarquee from './hello-marquee'

export function Home() {
  return (
    <Container as="div" className="space-y-6 md:space-y-12 lg:pt-12 pt-4">
      <div>
        <HelloMarquee />
      </div>
      <div className="pt-6 xl:grid xl:grid-cols-3">
        <div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
          <div className="text-base leading-7 text-gray-600 md:text-lg md:leading-8 dark:text-gray-400">
            <div className="mt-4 mb-6 md:mb-8">
              <p>
                I started learning to code in 2016 and have been hooked ever
                since.
              </p>
              <p>I landed my first job as a Python coding mentor in 2017.</p>
              <p>I have a passion for JS/TS, web dev, and eCommerce.</p>
              <p>
                I started this blog to document and share my knowledge &
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
