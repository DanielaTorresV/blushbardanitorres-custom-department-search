import React, { useState } from "react";
import { useQuery } from "react-apollo";
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql";
import { SearchBar } from "vtex.store-components";
import DepartmentGroup from "./DepartmentGroup";
import { useCssHandles } from "vtex.css-handles";
import "./styles.css"

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")

  const CSS_HANDLES = [
    "lds-heart"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return(
    <>
      {loading ?
        <div className={handles["lds-heart"]}><div></div></div>
         :
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
      }
    </>
  )
}

export default DepartmentSearch