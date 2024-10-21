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
    stockOnly: boolean;
    searchPattern: string;
};

export const ProductTable = (props: Props) => {
    const { productsData, stockOnly, searchPattern } = props;
    const rearrangedData = rearragne(productsData);

    const categories: Array<JSX.Element> = [];
    for (const categoryName in rearrangedData) {
        categories.push(
            <ProductCategory
                key={categoryName}
                categoryName={categoryName}
                products={rearrangedData[categoryName]}
                stockOnly={stockOnly}
                searchPattern={searchPattern}
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
