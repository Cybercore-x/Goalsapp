function Main ({children}) {
    return (
        <div>
            <sidenav>
              <a href="/list">List</a>  
              <a href="/create">Create</a>
            </sidenav>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Main;