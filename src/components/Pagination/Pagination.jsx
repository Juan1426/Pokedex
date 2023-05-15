import React from "react";

const Pagination = (props) => {
const {onLeftClick, onRightClick, page, totalPages} = props
   
    return (
        <section>
            <div>
                <button onClick={onLeftClick}>
                    volver                    
                </button>
                <button onClick={onRightClick}>
                    siguiente
                </button>
                <div>pagina {page} de {totalPages}</div>               
            </div>
        </section>
    )
}

export default Pagination