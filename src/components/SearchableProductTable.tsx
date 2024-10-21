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

    const setStockOnlyValue = (v: boolean) => {
        setStockOnly(v);
    };

    const setSearchPatternValue = (v: string) => {
        setSearchPattern(v);
    };

    return (
        <div>
            <SearchBar
                stockOnly={stockOnly}
                searchPattern={searchPattern}
                onSetStockOnly={setStockOnlyValue}
                onSetSearchPattern={setSearchPatternValue}
            />
            <ProductTable
                productsData={props.products}
                stockOnly={stockOnly}
                searchPattern={searchPattern}
            />
        </div>
    );
};
