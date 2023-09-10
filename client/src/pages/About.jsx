/* eslint-disable react/no-unescaped-entities */
import { ContentContainer } from '../components/ui/ContentContainer'

export function About () {
  return (
    <ContentContainer>

      <div className="bg-gray-100 min-h-screen">

        <main className="container mx-auto py-8">
          <article className="bg-white p-6 rounded-lg shadow-lg">

            <h2 className='text-3xl font-bold mb-6'>About Nixx</h2>

            <p className="mb-6">
              Welcome to our blog! We are a passionate team of writers and enthusiasts who love to share our knowledge and experiences with the world. Our mission is to provide you with valuable and inspiring content on a wide range of topics, from tech and travel to lifestyle and more.
            </p>

            <p className="mb-6">
              We believe in the power of storytelling and the impact it can have on people's lives. Whether it's a how-to guide, a personal journey, or the latest trends, we're here to inform, entertain, and inspire you.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
            <p className="mb-4">
              Meet the dedicated individuals behind our blog who work tirelessly to bring you quality content:
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li><strong>John Doe:</strong> Founder and tech enthusiast. John loves exploring the latest tech trends and sharing his insights.</li>
              <li><strong>Jane Smith:</strong> Travel guru and adventurer. Jane's travel stories will inspire you to explore new destinations.</li>
              <li><strong>Alice Johnson:</strong> Lifestyle expert and wellness advocate. Alice is here to help you live your best life.</li>
            </ul>

            <p>
              Thank you for being a part of our journey. We look forward to sharing more exciting content with you in the future!
            </p>

            {/* Main Content */}
            <div className="mt-6 prose">
              <blockquote>
                <p>The only way to do great work is to love what you do.</p>
                <small>Steve Jobs</small>
              </blockquote>
            </div>
          </article>
        </main>

        {/* Footer */}
        <footer className="bg-gray-600 py-4  bottom-0  w-full  text-white text-center">
          <p>&copy; 2023 Nixx</p>
        </footer>
      </div>
    </ContentContainer>
  )
}
