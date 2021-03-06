import React from "react";

const Pagination = (props) => {

    const {onLeftClick, onRightClick, page, totalPages} = props
    
    return (
        <section>
            <div>
                <button onClick={onLeftClick}>
                    <h3>volver</h3>
                </button>
                <div>{page} de {totalPages}</div>
                <button onClick={onRightClick}>
                <h3>siguiente</h3>
                </button>
            </div>
        </section>
    )
}

export default Pagination