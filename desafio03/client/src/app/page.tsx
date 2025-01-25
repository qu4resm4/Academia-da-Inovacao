'use client'
import Card from "./components/templates/card";
import Pagina from "./components/templates/pagina";
import useUsers from "./hooks/useUsers";
import { useEffect, useState } from "react";

interface UserPublic {
  userIdentification: {
    name: string,
  };
  userAcademic: {
    course: string,
    yearOfEntry: number,
    currentSemester: number,
    academicStatus: string,
    educationMode: string
  }
}

export default function Home() {
  const { fetchUsers } = useUsers()

  const [data, setData] = useState([]);

      /* LENDO DADOS PUBLICO DE USUÁRIOS */
      useEffect(() => {
        const fetchData = async () => {
          try {
              const publicData = await fetchUsers();
              console.log("Dados publicos", publicData)
              setData(publicData.data)
          } catch (err) {
              console.error("Error fetching users:", err);
          }
      };

      fetchData();
      }, []);

  return (
    <Pagina>
        <div className="flex justify-center">
          {data.map((user: UserPublic) => (
            <Card
              name={user.userIdentification.name} academicStatus={user.userAcademic.academicStatus}
              course={user.userAcademic.course}
              currentSemester={user.userAcademic.currentSemester}
              educationMode={user.userAcademic.educationMode}
              yearOfEntry={user.userAcademic.yearOfEntry}
            />
          ))}
        </div>
    </Pagina>
  );
}
