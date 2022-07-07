import Nav from "../components/Nav";
import Section from "../components/Section";

export default function Home() {
  return (
    <div className="flex flex-col bg-accentColor-700">
          <Nav />
        <Section>
          <p>
            Olá
          </p>
        </Section>

        <footer className="flex justify-center py-2">
          <p className="text-sm">Rodapé</p>
        </footer>
    </div>
  )
}
