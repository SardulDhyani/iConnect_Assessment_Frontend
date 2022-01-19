import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

const columns = [
  { field: 'id', headerName: 'ID' },
  {
    field: 'companyName',
    headerName: 'Company Name',
    width: 250,
    editable: false,
  },
  {
    field: 'companyDescription',
    headerName: 'Description',
    width: 300,
    editable: false,
  },
  {
    field: 'contactEmail',
    headerName: 'E-Mail',
    width: 200,
    editable: false,
  },
  {
    field: 'contactNumber',
    headerName: 'Contact Number',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'state',
    headerName: 'State',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
  },
  {
    field: 'city',
    headerName: 'City',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
  },
  {
    field: 'edit',
    headerName: 'Edit',
    description: 'This column has a value getter and is not sortable.',
    renderCell: (params) => {
      return (
        <Link
          to={`/edit/${params.row.company_id}`}
          className="undecorated-link"
        >
          <ModeEditOutlineRoundedIcon color="primary" />
        </Link>
      );
    },
    sortable: false,
    width: 160,
  },
];

const DataTable = (props) => {
  const { companies } = props;
  const companiesArray = Array.from(companies);
  const companyRows = [];
  if (companiesArray.length > 0) {
    companiesArray.forEach((element, i) => {
      var rowObj = {
        id: i + 1,
        companyName: element.companyName,
        companyDescription: element.companyDescription,
        contactEmail: element.contactEmail,
        contactNumber: element.contactNumber,
        state: element.state,
        city: element.city,
        company_id: element._id,
      };
      companyRows.push(rowObj);
    });
  }

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={companyRows}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
        />
      </div>
    </>
  );
};

export default DataTable;
