import { Container, Grid } from "@material-ui/core";
import React from "react";
import { blogData } from "../blogData";
import styles from "./BlogSection.module.scss";
import BlogCard from "../BlogCard";

const BlogSection = () => {
  return (
    <Container>
      <Grid container>
        <Grid
          container
          item
          md={8}
          lg={8}
          sm={6}
          xs={12}
          style={{ margin: "80px 0" }}
          spacing={4}
        >
          {blogData?.map((data) => (
            <Grid item md={12} sm={12} xs={12} lg={12} key={data.id}>
              <BlogCard data={data} />
            </Grid>
          ))}
        </Grid>
        <Grid item md={4} lg={4} sm={6} xs={12}></Grid>
      </Grid>
    </Container>
  );
};

export default BlogSection;
