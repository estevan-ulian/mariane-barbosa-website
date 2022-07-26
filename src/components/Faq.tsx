import { FAQS } from "../data/content";
import Accordion from "./Accordion";

export default function Faq() {
    const FAQ = () => FAQS.map(faq => {
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
            {FAQ()}
        </>
    )
}