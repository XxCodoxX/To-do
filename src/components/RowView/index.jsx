import { Box, Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import Buttons from "../Buttons";

const RowView = ({
  RowData,
  CheckboxFunction,
  EditButtonFunction,
  DeleteButtonFunction,
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Box sx={{ height: "100%" }}>
        <>
          <Grid container spacing={2}>
            {RowData?.length != 0 ? (
              RowData?.map((data, index) => (
                <Grid key={index} item xs={12} display={"flex"}>
                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Checkbox
                      {...label}
                      checked={data.done}
                      disabled={data.done}
                      onChange={() => CheckboxFunction(index)}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      overflow: "auto",
                    }}
                  >
                    {data?.task}
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Buttons
                      ButtonName={"Edit"}
                      ButtonColor={"#50C878"}
                      ButtonDisabled={data.done}
                      ButtonFunction={EditButtonFunction}
                      indexForFunction={index}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Buttons
                      ButtonName={"Delete"}
                      ButtonColor={"#D70040"}
                      ButtonFunction={DeleteButtonFunction}
                      indexForFunction={index}
                    />
                  </Grid>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography>No Task</Typography>
              </Grid>
            )}
          </Grid>
        </>
      </Box>
    </>
  );
};

RowView.defaultProps = {
  RowData: [],
  CheckboxFunction: () => {},
  EditButtonFunction: () => {},
  DeleteButtonFunction: () => {},
};

export default RowView;
