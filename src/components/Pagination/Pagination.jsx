import React from "react";
import "./Pagination.scss"

const Pagination = (props) => {
const {onLeftClick, onRightClick, page, totalPages} = props
   
    return (
        <section>
            <div>
                <button onClick={onLeftClick}>
                    <h3>volver</h3>
                </button>
                <button onClick={onRightClick}>
                    <h3>siguiente</h3>
                </button>
                <div>pagina {page} de {totalPages}</div>               
            </div>
        </section>
    )
}

export default Pagination