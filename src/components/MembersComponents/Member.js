import { IoClose } from "react-icons/io5";
import axios from "axios";
import DayDiv from "./MemberStyle";

export default function Member({member, setRefresh, refresh}) {

    function removeMember(id) {

        const promise = axios.delete(`http://localhost:5000/removeMember/${id}`);

        promise.then((response) => {
            setRefresh(!refresh)
        })

        promise.catch((error) => {
            console.log(error)
        })
    }

    return(
        <DayDiv member={member} key={member.id}>
                <div>
                    <h2>{member.nome}</h2>
                </div>
                <IoClose className="close" color="#000000" size={25} onClick={() => removeMember(member.id)}/>
        </DayDiv>
    )
}

