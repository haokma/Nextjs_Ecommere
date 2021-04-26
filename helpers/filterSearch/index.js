const filterSearch = ({ router, page, minPrice, sort, maxPrice }) => {
  const path = router.pathname;
  const query = router.query;
  if (minPrice) query.minPrice = minPrice;
  if (page) query.page = page;
  if (maxPrice) query.maxPrice = maxPrice;
  if (sort) query.sort = sort;
  console.log(page);
  router.push({
    pathname: path,
    query: query
  })
}

export default filterSearch