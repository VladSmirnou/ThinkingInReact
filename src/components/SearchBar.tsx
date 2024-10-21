import { ChangeEvent } from 'react';

type Props = {
    stockOnly: boolean;
    searchPattern: string;
    onSetStockOnly: (v: boolean) => void;
    onSetSearchPattern: (v: string) => void;
};

export const SearchBar = (props: Props) => {
    const { stockOnly, searchPattern, onSetStockOnly, onSetSearchPattern } =
        props;

    const handleSetStockOnly = (e: ChangeEvent<HTMLInputElement>) => {
        onSetStockOnly(e.target.checked);
    };

    const handleSetSearchPattern = (e: ChangeEvent<HTMLInputElement>) => {
        onSetSearchPattern(e.target.value);
    };

    const s = {
        display: 'grid',
    };

    return (
        <form style={s}>
            <input
                type="text"
                placeholder="Search..."
                value={searchPattern}
                onChange={handleSetSearchPattern}
            />
            <label>
                <input
                    type="checkbox"
                    checked={stockOnly}
                    onChange={handleSetStockOnly}
                />
                Only show products in stock
            </label>
        </form>
    );
};
