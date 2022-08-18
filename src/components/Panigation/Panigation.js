import React, { Fragment, useState } from 'react'

export default function Panigation(props) {
  const { listItem } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const pageNumbers = Math.ceil(listItem.length / pageSize);
  const render = () => {
    for (let index = 1; index <= pageNumbers; index++) {
      return <li className="page-item ">
        <a className="page-link" href="#" tabIndex={-1}>{index}</a>
      </li>

    }
  }
  console.log("page", pageNumbers)

  return (
    <Fragment>
      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          {
            render()
          }
          {/* <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1}>1</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li> */}
        </ul>
      </nav>
    </Fragment>
  )
}
