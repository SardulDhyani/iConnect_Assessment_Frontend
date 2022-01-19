import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';

import { getCompanies } from '../redux/actions/companies.actions';

import PageHeader from './PageHeader/Pageheader.component';
import SearchBox from './searchBox/searchBox.component';
import DataTable from './DataTable/dataTable.component';

const pageHeading = 'IConnect Solutions Assessment (HACK ROUND)';

const IndexPage = () => {
  const dispatch = useDispatch();
  const companiesState = useSelector((state) => state.companies);
  useEffect(() => {
    dispatch(getCompanies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="xl" className="indexPage-container">
      <PageHeader heading={pageHeading} />
      <SearchBox />
      <DataTable companies={companiesState.list} />
    </Container>
  );
};

export default IndexPage;
