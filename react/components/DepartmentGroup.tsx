import React from "react";
import { useCssHandles } from "vtex.css-handles";
import "./styles.css"

type Props = {
  departments: [Department],
  handleSetSlug: any
}

type Department = {
  id: number
  name: string
  slug: any
}

const DepartmentGroup = ({departments, handleSetSlug}: Props) => {
  const CSS_HANDLES = [
    "container__select"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}?initialMap=c&initialQuery=$\{term\}&map=category-1,category-2`)
  }

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
    className={handles["container__select"]}
    onChange={onHandleSetSlug}
    defaultValue="value0"
    >
      <option disabled value="value0">Selecciona una Opción</option>
      {departmentOptions}
    </select>
  )
}

export default DepartmentGroup
