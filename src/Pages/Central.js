import { useState } from "react";
import CentralHeader from "../components/CentralComponents/Header";
import Members from "./Members";
import Messages from "./Messages";
import Schedule from "./Schedule";

export default function Central() {
    const [section, setSection] = useState('Programação')

    return(
        <>
            <CentralHeader section={section} setSection={setSection} />
            {section === 'Programação' && <Schedule />}
            {section === 'Mensagens' && <Messages />}
            {section === 'Membros' && <Members />}
        </>
    )
}