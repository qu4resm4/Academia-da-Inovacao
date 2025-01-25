'use client'

export interface CardInterface {
    name: string;
    course: string;
    yearOfEntry: number;
    currentSemester: number;
    academicStatus: string;
    educationMode: string;
  }
  
  export default function Card(props: CardInterface) {
    return (
      <div className="w-full bg-white border border-gray-300 rounded-lg p-4 m-4">
        <h3 className="text-xl font-semibold mb-2">{props.name}</h3>
        <div>
          <div className="flex justify-between">
            <span>Curso:</span>
            <span>{props.course}</span>
          </div>
          <div className="flex justify-between">
            <span>Ano de Ingresso:</span>
            <span>{props.yearOfEntry}</span>
          </div>
          <div className="flex justify-between">
            <span>Semestre Atual:</span>
            <span>{props.currentSemester}</span>
          </div>
          <div className="flex justify-between">
            <span>Status Acadêmico:</span>
            <span>{props.academicStatus}</span>
          </div>
          <div className="flex justify-between">
            <span>Modo de Educação:</span>
            <span>{props.educationMode}</span>
          </div>
        </div>
      </div>
    );
  }  