import { Nav } from "@/components/nav";
import { Masthead } from "@/components/sections/masthead";
import { Colophon } from "@/components/sections/colophon";
import { Workshop } from "@/components/sections/workshop";
import { FieldNotes } from "@/components/sections/field-notes";
import { Shipped } from "@/components/sections/shipped";
import { Education } from "@/components/sections/education";
import { Correspondence } from "@/components/sections/correspondence";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Masthead />
        <Colophon />
        <Workshop />
        <FieldNotes />
        <Shipped />
        <Education />
        <Correspondence />
      </main>
    </>
  );
}
