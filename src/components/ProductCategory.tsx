import { ProductEntry } from './ProductEntry';

type Props = {
    categoryName: string;
    productsData: Array<{
        name: string;
        price: string;
        stocked: boolean;
    }>;
};

export const ProductCategory = (props: Props) => {
    const { categoryName, productsData } = props;
    const productData = productsData[0];
    const productEntries = <ProductEntry {...productData} />;
    return (
        <>
            <tr>
                <th colSpan={2}>{categoryName}</th>
            </tr>
            {productEntries}
        </>
    );
};
