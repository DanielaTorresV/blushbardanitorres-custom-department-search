import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

type Props = {
  departments: [Category]
  handleSetSlug: any
}

type Category = {
  id: number
  name: string
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  const onHandleSetSlug = (event: any) => {
    handleSetSlug(event.target.value)
  }

  const CSS_HANDLES = ['container__select']
  const handles = useCssHandles(CSS_HANDLES)

  const departmentOptions: any = departments.map((department: Category) => {
    return (
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>
    )
  })

  return (
    <select
      onChange={onHandleSetSlug}
      defaultValue="value0"
      className={handles.container__select}
    >
      <option disabled value="value0">
        Selecciona un Departamento
      </option>
      {departmentOptions}
    </select>
  )
}

export default DepartmentGroup
