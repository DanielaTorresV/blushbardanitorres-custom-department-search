import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import { SearchBar } from 'vtex.store-components'

import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState('')

  return (
    <>
      {!data && loading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <DepartmentGroup
            departments={data?.categories}
            handleSetSlug={setSlug}
          />
          <SearchBar
            customSearchPageUrl={slug}
            placeholder="¿Qué buscas en Blush-Bar?"
            displayMode="search-and-clear-buttons"
          />
        </div>
      )}
    </>
  )
}

export default DepartmentSearch
