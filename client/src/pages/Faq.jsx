import { Accordion } from '../components/ui/Accordion'
import { ContentContainer } from '../components/ui/ContentContainer'
import { faqs } from '../data/faq'
export function Faq () {
  return (
    <ContentContainer styles={'w-[97%] p-4 m-auto h-full rounded bg-white'}>
      <h1 className='text-3xl font-bold'>Frequently Asked Questions 🤔</h1>
      <p className=' mt-1 '>Some of these are not actually asked frequently, but they are still good to know.</p>
        <div className='accordion-flex'>
          {faqs.map((faq, index) => (
            <Accordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
    </ContentContainer>
  )
}
