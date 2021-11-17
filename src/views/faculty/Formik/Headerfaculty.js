import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const cardStudent = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Students Count
      </Typography>
      <Typography variant="h5" component="div">
        Total students
      </Typography>
      <br />
      <Typography variant="body2">
        25
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More student list feature if possible</Button>
    </CardActions>
  </React.Fragment>
);

const cardSubmission = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Students Submission
      </Typography>
      <Typography variant="h5" component="div">
        Students Groups submitted
      </Typography>
      <br />
      <Typography variant="body2">
        5
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More for student list feature if possible</Button>
    </CardActions>
  </React.Fragment>
);


export default function Headerfaculty() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "review",
      headerName: "Review",
      width: 150,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
    },
    //{
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, "firstName") || ""} ${
    //       params.getValue(params.id, "lastName") || ""
    //     }`,
    // },
  ];

  const rows = [
    { id: 1, date: "23/23/2021", review: "Good", age: 35 },
    { id: 2, date: "1/4/2022", review: "Best", age: 42 },
    { id: 3, date: "5/7/2022", review: "Okay", age: 45 },
    { id: 4, date: "10/3/2021", review: "Outstanding", age: 16 },
  ];

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Faculty Portal
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{cardSubmission}</Card>
        <Card variant="outlined">{cardStudent}</Card>
      </Box>

      <Box sx={{ height: 300, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>

      <Box>
        <h4>Send common mail here</h4>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          
        /><br/><br/>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
        /><br/>
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Box>
  );
}
