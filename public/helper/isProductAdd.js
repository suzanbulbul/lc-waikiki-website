export const isProductAdd = (favList, product) => {
    return favList.some(
      (item) =>
        item.product.color === product.product.color &&
        item.productContent.brandDesc === product.productContent.brandDesc
    );
}