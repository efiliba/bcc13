import styled from '@emotion/styled';
import { TableContainer, Table as MuiTable, TableHead, TableBody, TableRow, Paper, Typography } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#7159a6', // theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const Table = ({ data: { headingGroups = [], headings, rows, captions } }) =>
  <TableContainer className="table" component={Paper}>
    <MuiTable>
      {captions &&
        <caption>{captions.map(({text}, index) => <div key={index}>{text}</div>)}</caption>
      }
      <TableHead>
        <StyledTableRow>
          {headingGroups.map(({text, align, span}, index) =>
            <StyledTableCell key={index} align={align} colSpan={span} size="small">
              <Typography variant="h4">{text}</Typography>
            </StyledTableCell>)
          }
        </StyledTableRow>
        <StyledTableRow>
          {headings.map(({text, align, width}, index) =>
            <StyledTableCell key={index} align={align} size={headingGroups.length > 0 ? 'small' : 'medium'} width={width}>
              <Typography variant={headingGroups.length > 0 ? 'h5' : 'h4'}>{text}</Typography>
            </StyledTableCell>)
          }
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, rowIndex) =>
          <StyledTableRow key={rowIndex}>
            {row.map(({text, align}, index) =>
              <StyledTableCell key={index} align={align}>{text}</StyledTableCell>
            )}
          </StyledTableRow>
        )}
      </TableBody>
    </MuiTable>
  </TableContainer>;
