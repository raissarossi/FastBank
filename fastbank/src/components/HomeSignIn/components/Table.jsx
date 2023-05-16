import ItemTable from "./ItemTable";

const Table = () => {
    return (
        <div className="w-full">
            <table className="min-w-full divide-y divide-light-blue4 dark:divide-white w-5/6">
                <thead className="bg-ligh dark:bg-dark-blue6">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-light-blue4 dark:text-white uppercase ">Nome</th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-black dark:text-white uppercase ">EDV</th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-black dark:text-white uppercase ">Email</th>

                    </tr>
                </thead>
                <tbody className="divide-y divide-light-grey1 dark:divide-dark-blue_grey1">
                    <ItemTable />
                    <ItemTable />
                    <ItemTable />
                </tbody>
            </table>
        </div>
    );
}

export default Table;