import axios from "axios";

export const getAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/books");
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const createNewBook = async (values) => {
    try {
        const result = await axios.post("http://localhost:8080/books", values);
        console.log(result.data);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const updateBook = async (id, values) => {
    try {
        const result = await axios.put(`http://localhost:8080/books/${id}`, values);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const removeBook = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8080/books/${id}`);
        console.log(result.data);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};