import { ProductEntry } from './ProductEntry';
import { Product } from './ProductTable';

type Props = {
    categoryName: string;
    products: Array<Product>;
    stockOnly: boolean;
    searchPattern: string;
};

export const ProductCategory = (props: Props) => {
    const { categoryName, products, stockOnly, searchPattern } = props;

    const productEntries: Array<JSX.Element> = [];
    for (const product of products) {
        if (stockOnly && searchPattern) {
            const pattern = new RegExp(searchPattern, 'i');
            if (product.stocked && pattern.test(product.name)) {
                productEntries.push(
                    <ProductEntry key={product.name} {...product} />,
                );
            }
        } else if (!stockOnly && searchPattern) {
            const pattern = new RegExp(searchPattern, 'i');
            if (pattern.test(product.name)) {
                productEntries.push(
                    <ProductEntry key={product.name} {...product} />,
                );
            }
        } else if (stockOnly) {
            if (product.stocked) {
                productEntries.push(
                    <ProductEntry key={product.name} {...product} />,
                );
            }
        } else {
            productEntries.push(
                <ProductEntry key={product.name} {...product} />,
            );
        }
    }

    return (
        <>
            <tr>
                <th colSpan={2}>{categoryName}</th>
            </tr>
            {productEntries}
        </>
    );
};
