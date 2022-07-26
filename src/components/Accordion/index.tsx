import { useState } from "react";
import ButtonAccordion from "./Button";
import Container from "./Container";
import Content from "./Content";
import Title from "./Title";

interface AccordionProps {
    title: string
    content: any
}

export default function Accordion({title, content}: AccordionProps) {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <Container>
        <ButtonAccordion onClick={toggle}>
            <Title $isShowing={isShowing}>{title}</Title>          
        </ButtonAccordion>
        <Content $isShowing={isShowing} content={content}/>
    </Container>
  );
}