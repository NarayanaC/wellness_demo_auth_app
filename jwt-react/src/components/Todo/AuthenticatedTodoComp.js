import React, { useContext,useEffect, useState } from 'react';
import { UserContext } from '../../contexts/userContext.js'

import DataTable from 'react-data-table-component';
import { list_todo, add_todo } from '../../api/rest.js'

const columns = [
  {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
  },
  {
      name: 'Details',
      selector: row => row.details,
      sortable: true,
  },
  {
    name: 'Date',
    selector: row => row.date,
    sortable: true,
  },

];

function AuthenticatedTodoComp() {
  const [pingResult, setPingResult] = useState();
  const {user, setUser, isUserLoggedIn} = useContext(UserContext)

  const [data, setData] = useState('');
    useEffect(() => {
      list_todo()
      .then((data)=>{
          console.log(data,'response success')
          setData(data);
        })
      .catch((error)=> {
          console.log(error, 'error in fetching todo list');
        })
    });

  console.log(data,'data from the api')

  return (<div>
      <React.Fragment>
        <h1> Create and List Todo data</h1>
        <DataTable
            columns={columns}
            data={data}
        />
      </React.Fragment>
    </div>
  )
}

export default AuthenticatedTodoComp;
