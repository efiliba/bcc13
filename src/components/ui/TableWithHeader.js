import { Typography } from '@mui/material';

import { Table } from './Table';

import './table-with-header.scss';

export const TableWithHeader = ({ heading, description, data }) =>
  <div className="table-with-header">
    <div className="table-with-header__container">
      <Typography className="table-with-header__container-header" variant="h2">{heading}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Table data={data} />
    </div>
  </div>;
