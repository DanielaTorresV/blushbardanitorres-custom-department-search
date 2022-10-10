import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

type Props = {
  departments: [Department]
  handleSetSlug: any
}

type Department = {
  id: number
  name: string
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}`)
  }

  const departmentOptions: any = departments.map((department: Department) => {
    return (
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>
    )
  })

  const CSS_HANDLES = ['container__select']
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <select
      className={handles.container__select}
      onChange={onHandleSetSlug}
      defaultValue="value0"
    >
      <option disabled value="value0">
        Selecciona un Departamento
      </option>
      {departmentOptions}
    </select>
  )
}

export default DepartmentGroup
