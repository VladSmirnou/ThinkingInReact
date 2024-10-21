import { ProductCategory } from './ProductCategory';
import { ProductData } from './SearchableProductTable';

type ProductsData = Array<ProductData>;

export type Product = Omit<ProductData, 'category'>;

type CategoriesData = {
    [key: string]: Array<Product>;
};

const rearragne = (productsData: ProductsData): CategoriesData => {
    return productsData.reduce((acc: CategoriesData, productData) => {
        const { category, ...rest } = productData;
        const products = acc[category];
        acc[category] = products ? (products.push(rest), products) : [rest];
        return acc;
    }, {});
};

type Props = {
    productsData: ProductsData;
};

export const ProductTable = (props: Props) => {
    const rearrangedData = rearragne(props.productsData);

    const categories: Array<JSX.Element> = [];
    for (const key in rearrangedData) {
        categories.push(
            <ProductCategory
                key={key}
                categoryName={key}
                products={rearrangedData[key]}
            />,
        );
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{categories}</tbody>
        </table>
    );
};
