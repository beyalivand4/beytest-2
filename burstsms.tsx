import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ChipProps } from '@mui/material/Chip/Chip';
import Chip from '@mui/material/Chip';
import Done from '@mui/icons-material/Done';
import DoneAllRounded from '@mui/icons-material/DoneAllRounded';
import PendingActionsOutlined from '@mui/icons-material/PendingActionsOutlined';
import DraftsRounded from '@mui/icons-material/DraftsRounded';
import CircleOutlined from '@mui/icons-material/CircleOutlined';
import Pending from '@mui/icons-material/Pending';
import MailLockOutlined from '@mui/icons-material/MailLockOutlined';
import DraftsTwoTone from '@mui/icons-material/DraftsTwoTone';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
function createData(
  Name: string,
  Type: string,
  From: string,
  To: string,
  Status: ChipProps,
) {
  return { Name, Type, From, To, Status };
}
const rows = [
  createData('UX Conversation','Email cleans', 'Bey', 'Design contact list',
  <Chip label="Sent" color="success" icon={<Done/>} variant="outlined"/>),


  createData('Front-end convo','Credit Card Expiry', 'Chad', 'Frontend & UX list',<Chip label="Completed" color="success" icon={<DoneAllRounded/>}/>),
  createData('MUI convo','Survey', 'Timo', 'Front-end guilt peeps',
  <Chip label="Sending" color="primary" icon={<Pending/>} variant="outlined"/>),
  createData('Scrum convo','Survey', 'John', 'Kando peeps',<Chip label="Draft" color="warning" icon={<DraftsTwoTone/>} variant="outlined"/>),
  createData('PADs','Email cleans', 'Simon.M', 'Product Team',<Chip label="Completed" color="success" icon={<DoneAllRounded/>}/>),
  createData('Dev talk','Survey', 'Simon.K', 'Dev contact list',<Chip label="Active" color="primary" icon={<CircleOutlined/>} variant="outlined"/>),
  createData('Roadmap','Email cleans', 'Tim', 'Conversr contact list',<Chip label="Draft" color="warning" icon={<DraftsTwoTone/>} variant="outlined"/>),
];
          
export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth:650

     }}>
      <CardHeader
        
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Conversations"
        subheader="June 28, 2022"
      />
       <TableContainer component={Paper}>
      <Table sx={{ maxWidth:650}} 
      aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">From</TableCell>
            <TableCell align="left">To</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="left">{row.Type}</TableCell>
              <TableCell align="left">{row.From}</TableCell>
              <TableCell align="left">{row.To}</TableCell>
              <TableCell align="left">{row.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hello Team!
        </Typography>
      </CardContent>   
        
    </Card>
  );

  }



