import { useEffect, useState } from "react";
import axios from "axios";
import { SectionContainer, SectionsContainer } from "../components/CentralComponents/SectionContainers";
import Message from "../components/MessagesComponensts/Message.js";

export default function Messages() {

    const [messages, setMessages] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {

        const promise = axios.get('http://localhost:5000/getMessages');

        promise.then((response) => {
            setMessages(response.data);
        })

        promise.catch((error) => {
            console.log(error)
        })

    }, [refresh])

    while(messages === null) return <h1>carregando</h1>

    console.log(messages)

    return(
        <SectionsContainer>
            <SectionContainer>
                <h1>Mensagens</h1>
                {messages.map(message => (
                    <Message message={message} setRefresh={setRefresh} refresh={refresh}/>
                ))}
            </SectionContainer>
        </SectionsContainer>
    )
}