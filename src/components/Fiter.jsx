export function Filter({ filter, setFilter, setSort }) {
    return (
        <div className="filter">
            <h3>Filtrar:</h3>

            <div className="filter_options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                        <option value="all">Todos</option>
                        <option value="completed">Completas</option>
                        <option value="incomplete">Incompletas</option>
                    </select>
                </div>

                <div>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setSort('Asc')}>Asc</button>
                    <button onClick={() => setSort('Desc')}>Desc</button>
                </div>
            </div>
        </div>
    )
}