import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WorkIcon from "@material-ui/icons/Work";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function JobLists({ data }) {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      {data?.map((el) => (
        <ListItem button key={el.id}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary={el.name} />
        </ListItem>
      ))}
    </List>
  );
}
