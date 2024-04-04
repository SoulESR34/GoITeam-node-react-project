import React, { useState } from "react";
import css from "./DiaryProductsList.module.css";
import products from "../../../products.json";

export const DiaryProductsList = () => {
  const [productList, setProductList] = useState([]);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const { name, weight } = event.target.elements;

    const productData = products.find((product) => product.title === name.value);

    if (productData) {
      const totalCalories = productData.calories * weight.value;
      const newProduct = {
        title: name.value,
        weight: weight.value,
        calories: totalCalories,
      };
      setProductList([...productList, newProduct]);
    }
    event.target.reset();
  };

  const handleDelete = (index) => {
    const updatedList = [...productList];
    updatedList.splice(index, 1);
    setProductList(updatedList);
  };

  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del Producto"
          required
        />
        <input type="number" name="weight" placeholder="Gramos" required />
        <button type="submit">Agregar</button>
      </form>
      <div className={css.container}>
        <table className={css.table}>
          <thead>
            <tr>
              <th className={css.tableHeader}>Nombre del Producto</th>
              <th className={css.tableHeader}>Gramos</th>
              <th className={css.tableHeader}>Kcal</th>
              <th className={css.tableHeader}></th>{" "}
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => (
              <tr key={index} className={css.row}>
                <td className={css.cell}>{product.title}</td>
                <td className={css.cell}>{product.weight} g.</td>
                <td className={css.cell}>{product.calories} kcal</td>
                <td className={css.cell}>
                  <button
                    className={css.deleteButton}
                    onClick={() => handleDelete(index)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


// import React, { useState } from "react";
// import products from "../../../products.json";
// import css from "./DiaryProductsList.module.css";

// export const DiaryProductsList = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [productList, setProductList] = useState(products);

//   const toggleShowAll = () => {
//     setShowAll(!showAll);
//   };

//   const handleDelete = (id) => {
//     const updatedList = productList.filter(
//       (product) => product._id.$oid !== id
//     );
//     setProductList(updatedList);
//   };

//   return (
//     <div>
//       <div className={css.container}>
//         <table className={css.table}>
//           <thead>
//             <tr>
//               <th className={css.tableHeader}>Nombre del Producto</th>
//               <th className={css.tableHeader}>Gramos</th>
//               <th className={css.tableHeader}>Kcal</th>
//               <th className={css.tableHeader}></th>{" "}
//             </tr>
//           </thead>
//           <tbody>
//             {products
//               .slice(0, showAll ? productList.length : 5)
//               .map((producto) => (
//                 <tr key={producto._id.$oid} className={css.row}>
//                   <td className={css.cell}>{producto.title}</td>
//                   <td className={css.cell}>{producto.weight} g.</td>
//                   <td className={css.cell}>{producto.calories} kcal</td>
//                   <td className={css.cell}>
//                     <button
//                       className={css.deleteButton}
//                       onClick={() => handleDelete(producto._id.$oid)}
//                     >
//                       X
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//         {!showAll && (
//           <div className={css.scrollbar} onClick={toggleShowAll}>
//             Ver más productos
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
  