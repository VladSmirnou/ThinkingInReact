type Props = {
    stockOnly: boolean;
    searchPattern: string;
};

export const SearchBar = (props: Props) => {
    const { stockOnly, searchPattern } = props;

    const s = {
        display: 'grid',
    };

    return (
        <form style={s}>
            <input type="text" placeholder="Search..." value={searchPattern} />
            <label>
                <input type="checkbox" checked={stockOnly} />
                Only show products in stock
            </label>
        </form>
    );
};
