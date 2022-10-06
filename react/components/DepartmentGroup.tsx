import React from "react";

type Props = {
  departments: [Department]
}

type Department = {
  id: number
  name: string
  slug: string
}

const DepartmentGroup = ({departments}: Props) => {
  console.log("Mis departamentos son:", departments);
   const departmentOptions:any = departments.map((department: Department) => {
      return (
        <option
        value={department.slug}
        key={department.id}
        >
          {department.name}
        </option>
      )
   })

  return(
    <select
    defaultValue="value0">
      <option disabled value="value0">Seleccione una Opción</option>
      {departmentOptions}
    </select>
  )
}

export default DepartmentGroup
