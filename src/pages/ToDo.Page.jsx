import { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Paper,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import { TabList, TabPanel } from "@mui/lab";
import Buttons from "../components/Buttons";
import RowView from "../components/RowView";
import { useDispatch, useSelector } from "react-redux";
import { addTaskList } from "../Store/Main/action";

const ToDoPage = () => {
  const [tabValue, setTabValue] = useState("1");
  const [edited, setEdited] = useState(false);
  const [editableIndex, setEditableIndex] = useState(null);
  const [textBoxValue, setTextBoxValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [historyTaskList, setHistoryTaskList] = useState();
  const reduxTaskList = useSelector(({ main }) => main?.taskList)
  const dispatch = useDispatch();

  const handleTask = () => {
    if (textBoxValue.trim() !== "") {
      if (edited) {
        const newList = [...taskList];
        newList[editableIndex].task = textBoxValue;
        setTaskList(newList);
        setEdited(false);
        setTextBoxValue("");
      } else {
        const newTask = { task: textBoxValue, done: false };
        setTaskList((prevTasks) => [...prevTasks, newTask]);
        setTextBoxValue("");
      }
    }
  };

  const taskDone = (index) => {
    const newList = [...taskList];
    newList[index].done = true;
    setTaskList(newList);
  };

  const taskEdit = (index) => {
    setEditableIndex(index);
    setTextBoxValue(taskList[index]?.task);
    setEdited(true);
  };

  const taskDelete = (indexToRemove) => {
    setTaskList((prevTasks) => prevTasks.filter((_, index) => index !== indexToRemove));
  }

  useEffect(() => {
    if(reduxTaskList){
      setTaskList(reduxTaskList)
    }
  }, [])

  useEffect(() => {
    dispatch(addTaskList(taskList))
    
  }, [taskList])
  
  

  console.log(taskList);

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#9b76d7",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 0,
          // justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: "50vw",
            height: 520,
            padding: 2,
            marginTop: 12,
            
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={10}>
              <TextField
                id="outlined-basic"
                label="Enter Your Task"
                variant="outlined"
                sx={{ width: "100%" }}
                value={textBoxValue}
                onChange={(e) => {
                  setTextBoxValue(e.target.value);
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Buttons
                ButtonName={edited ? "Edit Task" : "Add Task"}
                ButtonColor={edited ? "#50C878" : "#0096FF"}
                ButtonFunction={handleTask}
              />
            </Grid>
          </Grid>
          <Divider sx={{ margin: "15px 0px 15px 0px" }} variant="middle" />
          <Box sx={{ width: "100%", height:420, typography: "body1",overflowY: "auto" }}>
            <RowView
              RowData={taskList}
              CheckboxFunction={taskDone}
              EditButtonFunction={taskEdit}
              DeleteButtonFunction={taskDelete}
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default ToDoPage;
