import { FAQ } from "../data/faq";
import Accordion from "./Accordion";

export default function Faq() {
    const FAQs = () => FAQ.map(faq => {
        const { id, question, answer } = faq
        return (
            <Accordion
              key={id}
              title={question}
              content={answer}
            />
        )
    }) 
   
    

    return (
        <>
            {FAQs()}
        </>
    )
}