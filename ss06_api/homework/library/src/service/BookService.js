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
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const removeBook = async (id) => {
    try {
        const result = await axios.delete('http://localhost:8080/books/${id}');
        return result.data;
    } catch (e) {
        console.log(e);
    }
};