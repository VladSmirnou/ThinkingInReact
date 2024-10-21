import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

export type Product = {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
};

type Props = {
    products: Array<Product>;
};

export const SearchableProductTable = (props: Props) => {
    return (
        <div>
            <SearchBar />
            <ProductTable products={props.products} />
        </div>
    );
};
