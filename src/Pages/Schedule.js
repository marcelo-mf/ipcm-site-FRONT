import { useEffect, useState } from "react";
import axios from "axios";
import { SectionContainer, SectionsContainer } from "../components/CentralComponents/SectionContainers";
import CentralDay from "../components/ScheduleComponents.js/CentralDayComponent";

export default function Schedule() {

    const [schedule, setSchedule] = useState(null);
    const [days, setDays] = useState(null);
    const [showAdd, setShowAdd] = useState(0);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {

        const promise = axios.get('http://localhost:5000/getScheduleToEdit');

        promise.then((response) => {
            setSchedule(response.data.schedule);
            setDays(response.data.days);
        })

        promise.catch((error) => {
            console.log(error)
        })

    }, [refresh])

    while(days === null) return <h1>carregando</h1>
    while(schedule === null) return <h1>carregando</h1>

    return(
        <SectionsContainer>
            <SectionContainer>
                <h1>Programação</h1>
                {days.map(day => (
                    <CentralDay day={day} schedule={schedule} showAdd={showAdd} setShowAdd={setShowAdd} refresh={refresh} setRefresh={setRefresh}/>
                ))}
            </SectionContainer>
        </SectionsContainer>
    )
}