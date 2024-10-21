import { ProductEntry } from './ProductEntry';
import { Product } from './ProductTable';

type Props = {
    categoryName: string;
    products: Array<Product>;
};

export const ProductCategory = (props: Props) => {
    const { categoryName, products } = props;

    const productEntries = products.map((product) => (
        <ProductEntry key={product.name} {...product} />
    ));

    return (
        <>
            <tr>
                <th colSpan={2}>{categoryName}</th>
            </tr>
            {productEntries}
        </>
    );
};
