export function Search({ search, setSearch }) {
    return (
        <div className="search">
            <h3>Pesquisar:</h3>

            <input 
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Digite sua busca..." 
            />
        </div>
    )
}