import { useState } from 'react';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

export type ProductData = {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
};

type Props = {
    products: Array<ProductData>;
};

export const SearchableProductTable = (props: Props) => {
    const [stockOnly, setStockOnly] = useState<boolean>(false);
    const [searchPattern, setSearchPattern] = useState('');

    return (
        <div>
            <SearchBar stockOnly={stockOnly} searchPattern={searchPattern} />
            <ProductTable productsData={props.products} />
        </div>
    );
};
