import { ProductCategory } from './ProductCategory';
import { Product } from './SearchableProductTable';

type Props = {
    products: Array<Product>;
};

export const ProductTable = (props: Props) => {
    const data = {
        categoryName: 'Fruits',
        productsData: [
            { price: '$1', stocked: true, name: 'Apple' },
            { price: '$1', stocked: true, name: 'Dragonfruit' },
            { price: '$2', stocked: false, name: 'Passionfruit' },
        ],
    };

    const categories = <ProductCategory {...data} />;
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
