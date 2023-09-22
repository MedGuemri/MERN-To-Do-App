import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getTasks = createAsyncThunk("Tasks/getTasks", async () => {
    try {
        const { data } = await axios.get("http://localhost:5000/api/tasks/tasks")

        return data
    } catch (error) {
        console.log(error)

    }
})
export const pendingTasks = createAsyncThunk("Tasks/pendingTasks", async (data, thunkAPI) => {
    try {
        const { data } = await axios.get("http://localhost:5000/api/tasks/pendingTasks")
        return data


    } catch (error) {
        return thunkAPI.rejectWithValue(error.data)

    }
})
export const finishedTasks = createAsyncThunk("Tasks/finishedTasks", async (data, thunkAPI) => {
    try {
        const { data } = await axios.get("http://localhost:5000/api/tasks/finishedTasks")
        return data


    } catch (error) {
        return thunkAPI.rejectWithValue(error.data)

    }
})
export const AddTask = createAsyncThunk("Tasks/AddTask", async (task, thunkAPI) => {
    try {
        const { data } = await axios.post("http://localhost:5000/api/tasks/AddTask", task)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);

    }
})



export const deleteTask = createAsyncThunk("Tasks/deleteTask", async (task, thunkAPI) => {
    try {
        const { data } = await axios.delete("http://localhost:5000/api/tasks/deleteTask/" + task._id)

        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);

    }
})
export const updatedTask = createAsyncThunk("Tasks/updateTask", async (task, thunkAPI) => {
    try {
        const { data } = await axios.post("http://localhost:5000/api/tasks/updateTask/" + task._id, task)

        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);

    }
})
export const isDoneTask = createAsyncThunk("Tasks/isDoneTask", async (task, thunkAPI) => {
    try {
        const { data } = await axios.post("http://localhost:5000/api/tasks/isDoneTask/" + task._id, task)

        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);

    }
})


const initialState = {
    tasksList: [],
    loading: false,
    success: false,
    error: null,
    message: "",
    updated: false

}

const taskSlice = createSlice({
    name: "Task",
    initialState: initialState,
    reducers: {
        reset: (state) => {

            state.loading = false;
            state.success = false;
            state.error = null;
            state.message = "";
            state.updated = false

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.fulfilled, (state, action) => {
                state.success = true;
                state.tasksList = action.payload
            })
            .addCase(AddTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasksList = [...state.tasksList, action.payload]
                state.success = true;
                state.updated = true;
                state.message = "task added successfuly";

            })
            .addCase(AddTask.pending, (state, action) => {
                state.loading = true;
                state.success = false;


            })
            .addCase(AddTask.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
                state.success = false;
                state.message = "add failed"
            }).addCase(pendingTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasksList = action.payload
                state.success = true;
                state.updated = true;
                state.message = "pendidng tasks";
            })
            .addCase(pendingTasks.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.updated = false;
                state.error = action.payload;
                state.message = "failed to filter";
            })
            .addCase(finishedTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasksList = action.payload
                state.success = true;
                state.updated = true;
                state.message = "pendidng tasks";
            })
            .addCase(finishedTasks.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.updated = false;
                state.error = action.payload;
                state.message = "failed to filter";
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasksList = state.tasksList.filter((task) => task._id !== action.payload._id)
                state.success = true;
                state.updated = true;
                state.message = action.payload;
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
                state.success = false;
                state.message = "delte failed"
            })
            .addCase(updatedTask.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.updated = true;
                state.message = "task updated successfully";
            })
            .addCase(updatedTask.pending, (state, action) => {
                state.loading = true;
                state.success = false;


            })
            .addCase(updatedTask.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
                state.success = false;
                state.message = "update failed"
            })
            .addCase(isDoneTask.fulfilled, (state, action) => {
                state.tasksList = state.tasksList.filter((task) => task._id !== action.payload._id);
                state.loading = false;
                state.success = true;
                state.updated = true;
                state.message = "task updated successfully";
            })
            .addCase(isDoneTask.pending, (state, action) => {
                state.loading = true;
                state.success = false;


            })
            .addCase(isDoneTask.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
                state.success = false;
                state.message = "update failed"
            })
    }
})
export const { reset } = taskSlice.actions
export default taskSlice.reducer