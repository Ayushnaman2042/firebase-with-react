import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import { Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/Firebase';

function MyState(props) {
    const [products, setProducts] = useState({
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
    });

    const [allProducts, setAllProducts] = useState([]);

    //* Add Product Function
    const addProduct = async () => {
        if (products.title === "" || products.price === "" || products.imageUrl === "" || products.category === "") {
            return alert('All fields are required');
        }
        const productRef = collection(fireDB, "products");
        try {
            await addDoc(productRef, products);
            getProducts();
            alert("Product added successfully");
            setTimeout(() => {
                window.location.href = '/';
            }, 800);
            resetProductState();
        } catch (error) {
            console.log(error);
        }
    }

    // * Get Products Function
    const getProducts = async () => {
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy("time"),
            );
            onSnapshot(q, (QuerySnapshot) => {
                let productsArray = [];
                QuerySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id });
                });
                setAllProducts(productsArray);
            });
        } catch (error) {
            console.log(error);
        }
    }

    //* Edit handle Function 
    const editProductHandle = (item) => {
        setProducts(item);
    }

    // * Edit Products Function
    const editProducts = async () => {
        if (!products.id) {
            return console.error("No product ID found!");
        }
        try {
            await setDoc(doc(fireDB, "products", products.id), products);
            getProducts();
            alert("Product updated successfully");
            setTimeout(() => {
                window.location.href = '/';
            }, 800);
            resetProductState();
        } catch (error) {
            console.log(error);
        }
    }

    // * Delete handle Function
    const deleteProduct = async (item) => {
        try {
            await deleteDoc(doc(fireDB, "products", item.id));
            getProducts();
            alert('Product deleted successfully');
        } catch (error) {
            console.log(error);
        }
    }

    // Helper to reset the product state after adding/editing
    const resetProductState = () => {
        setProducts({
            title: "",
            price: "",
            imageUrl: "",
            category: "",
            description: "",
            time: Timestamp.now(),
            date: new Date().toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
            })
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <MyContext.Provider value={{ products, setProducts, addProduct, allProducts, editProductHandle, editProducts, deleteProduct }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;
