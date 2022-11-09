function Pagination({numOfPages, currentPage, setCurrentPage}) {
  const pageNumbers = Array(numOfPages).fill().map(
    (elem, index) => index + 1
  );

  function goToPrevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function goToNextPage() {
    if (currentPage !== numOfPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link"
            href='/#'
            onClick={goToPrevPage}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map(pageNum => (
          <li 
            key={pageNum}
            className={`page-item ${currentPage === pageNum ? 'active' : ''}`}
          > 
            <a 
              className="page-link"
              href='/#'
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link"
            href='/#'
            onClick={goToNextPage}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>

  );
}

export default Pagination;