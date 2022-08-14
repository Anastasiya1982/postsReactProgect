import styles from "./styles.module.css";

import { useMemo } from "react";

const Paginator = ({ totalPages, limit, onChange, page }) => {
  const totalCount = Math.ceil(totalPages / limit);

  const pagesArr = useMemo(() => {
    console.log("render in Memo");
    return Array.from({ length: totalCount }, (_, index) => index + 1);
  }, [totalPages, limit]);


  // const pagesArr=useMemo(()=>{   
  //   console.log("render in Memo");
  //   let pagesArray = [];
  //   for (let i = 0; i < totalCount; i++) {
  //     pagesArray.push(i + 1);
  //     console.log("pagesArray", pagesArray);
  //   }
    
  //   return pagesArray
  // },[totalPages, limit])


  console.log("pagesArr",pagesArr)

  return (
    <div className={styles.myPaginator}>
      {pagesArr.map((p) => {
        const isActive = p === page;
        const action = () => {
          if (p !== page) {
            onChange(p);
          }
        };
        return (
          <span
            key={p}
            onClick={action}
            className={isActive ? styles.active : styles.span}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
export default Paginator;
