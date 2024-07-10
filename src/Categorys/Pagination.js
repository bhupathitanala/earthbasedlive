import React, { useEffect } from 'react'

const Pagination = ({ totalItems, itemsPerPage, setCurrentPage, currentPage }) => {
    const posts = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        posts.push(i)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage])
    return (
        <div className='d-flex gap-2 align-items-center justify-content-center flex-wrap'>
            {
                currentPage > 1 && <button className={`btn btn-success`} onClick={() => { setCurrentPage(currentPage - 1) }}>{"Previous"}</button>
            }
            {
                posts.map((page, index) => {
                    return (
                        <button key={index} className={`btn ${index == currentPage - 1 && "border border-2"}`} onClick={() => setCurrentPage(page)}>{page}</button>
                    )
                })
            }
            {
                currentPage < posts?.length - 1 && <button className={`btn btn-success`} onClick={() => { setCurrentPage(currentPage + 1) }}>{"Next"}</button>
            }
        </div>
    )
}

export default Pagination